"use client";

import React, { use } from "react";
import FieldAnimation from "@/components/FieldAnimation";

const Interests = () => {
  return (
    <>
      <FieldAnimation />
      <div className="flex justify-center items-center">
        <article className="w-full max-w-md text-white font-['Quicksand','Helvetica_Neue',sans-serif]">
          <h1 className="text-3xl font-bold my-5 items-center">Interests</h1>

          <p className="text-lg justify-normal my-10">
            In my free time, I enjoy exploring different programming languages
            and frameworks. For instance, I love experimenting with React for
            front-end development and diving deep into Node.js for back-end
            solutions. I also enjoy working on open-source projects, as they
            provide a great opportunity to collaborate with other developers and
            enhance my coding skills.
          </p>
          <p className="text-lg justify-normal my-10">
            Apart from coding, I have a keen interest in UI/UX design. I often
            read articles and follow design trends to understand how I can
            create more user-friendly interfaces. Additionally, I enjoy
            attending tech meetups and conferences where I can network and learn
            from industry experts.
          </p>
        </article>
      </div>
    </>
  );
};

export default Interests;
