import Link from "next/link";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <article className="w-full max-w-md ">
          <h1 className="text-3xl font-bold my-5 items-center">About</h1>

          <p className="text-lg justify-normal my-10">
            I&apos;m Mark Lester De Guzman. I am a full stack developer with a
            passion for web technologies, keeping myself up to date with
            everything that is learnable over the internet and I love to try out
            new things and add value to my current projects.
          </p>
          <p className="text-lg justify-normal my-10">
            I have a strong background in computer science and have worked in
            various roles including software development, testing, and project
            management.
          </p>
          <p className="text-lg justify-normal my-10">
            please don&apos;t hesitate to contact me at marklester0218@gmail.com
          </p>

          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-2 ring-gray-100 dark:ring-gray-800 drop-shadow-2xl">
              <Image
                src="/images/projects/profile.jpg"
                alt="Mark Lester De Guzman"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </article>
      </div>

      <div className="flex site-footer justify-center items-center my-20">
        <Link href="/">&copy; MARK LESTER DE GUZMAN</Link>
      </div>
    </>
  );
};

export default About;
