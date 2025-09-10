"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Bone, Euler } from "three";
import * as THREE from "three";
import LandingPage from "./landing";

function Avatar() {
  const { scene, animations } = useGLTF("/models/mac_vest.glb");

  const { actions } = useAnimations(animations, scene);

  // --- Find the head bone ---
  // IMPORTANT: You must replace 'Head' with the actual name of your model's head bone.
  // Common names are 'Head', 'head', 'Neck', or 'mixamorigHead'.
  // I've added a helper below to log all bone names to the console to help you find it.
  const headBone = useMemo(() => scene.getObjectByName("Head"), [scene]);

  // Refs for tracking mouse movement and state
  const lastPointer = useRef(new THREE.Vector2());
  const movementTimeout = useRef<NodeJS.Timeout | null>(null);
  const isFollowingCursor = useRef(false);
  const idleHeadRotation = useRef(new Euler());

  // --- Helper to find bone names ---
  useEffect(() => {
    // This runs once when the scene is loaded.
    if (scene && !headBone) {
      console.warn(
        "Head bone not found. Logging all bone names to help you find the correct one:"
      );
      scene.traverse((object) => {
        if (object instanceof THREE.Bone) {
          console.log(object.name);
        }
      });
    }
  }, [scene, headBone]);

  useEffect(() => {
    // Enable shadows for all meshes in the model
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    // Play the idle animation by default
    actions["idle"]?.play();
  }, [actions]);

  // This hook runs on every frame and allows us to update the scene
  useFrame((state) => {
    const { pointer } = state;
    const idleAction = actions["idle"];

    // Check if the mouse has moved
    if (pointer.distanceTo(lastPointer.current) > 0.001) {
      // --- Mouse is moving ---

      if (!isFollowingCursor.current) {
        // Start following: save the current head rotation from the animation
        isFollowingCursor.current = true;
        if (headBone) {
          // Save the head's current animated rotation (x and y)
          idleHeadRotation.current.copy((headBone as Bone).rotation);
        }
        // Pause the animation so it doesn't conflict with manual rotation
        if (idleAction) {
          idleAction.paused = true;
        }
      }

      // Clear any existing timeout to reset the "stopped" timer
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }

      // Set a new timeout to detect when the mouse stops
      movementTimeout.current = setTimeout(() => {
        isFollowingCursor.current = false;
      }, 1000); // 150ms delay before considering the mouse "stopped"

      // Update the last pointer position
      lastPointer.current.copy(pointer);
    }

    if (headBone) {
      if (isFollowingCursor.current) {
        // --- State: Following Cursor ---
        // Smoothly interpolate the bone's rotation to follow the mouse.
        (headBone as Bone).rotation.y = THREE.MathUtils.lerp(
          (headBone as Bone).rotation.y,
          pointer.x * (Math.PI / 4), // Follow cursor on Y-axis
          0.07
        );
        (headBone as Bone).rotation.x = THREE.MathUtils.lerp(
          (headBone as Bone).rotation.x,
          -pointer.y * (Math.PI / 8), // Follow cursor on X-axis
          0.07
        );
      } else {
        // --- State: Returning to Idle ---
        // Smoothly interpolate back to the saved idle rotation (x and y)
        (headBone as Bone).rotation.y = THREE.MathUtils.lerp(
          (headBone as Bone).rotation.y,
          idleHeadRotation.current.y,
          0.07
        );
        (headBone as Bone).rotation.x = THREE.MathUtils.lerp(
          (headBone as Bone).rotation.x,
          idleHeadRotation.current.x,
          0.07
        );

        // Check if the head is close enough to the idle position to resume animation
        const isClose =
          Math.abs((headBone as Bone).rotation.x - idleHeadRotation.current.x) <
            0.01 &&
          Math.abs((headBone as Bone).rotation.y - idleHeadRotation.current.y) <
            0.01;

        if (isClose && idleAction && idleAction.paused) {
          idleAction.paused = false;
        }
      }
    }
  });

  // The group is still useful for global positioning and scaling.
  return (
    <group position={[0.2, -1.3, 0]} scale={1.2}>
      <primitive object={scene} /> {/* The 3D model */}
    </group>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-4rem)] bg-gray-800 cursor-pointer overflow-hidden">
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-start">
        <LandingPage />
      </div>
      {/* This div positions the canvas on the bottom right */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <Canvas shadows camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 5]} intensity={1.5} castShadow />
          <pointLight position={[-3, 2, -2]} intensity={0.8} />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Avatar />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
}
