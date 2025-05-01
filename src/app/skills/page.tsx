import React from "react";
import SkillAccordion from "./skillAccordion";
import { skills_FE, skills_BE, skills_OTHERS } from "../../data";

const SkillPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mx-4 md:m-10">
        <article className="w-full md:w-3/4">
          <h1 className="text-2xl md:text-3xl font-bold my-3 md:my-5 items-center">
            Skills & Tools
          </h1>

          <h2 className="text-xl md:text-2xl font-bold my-6 md:my-10">
            Front-End
          </h2>
          <SkillAccordion data={skills_FE} />

          <h2 className="text-xl md:text-2xl font-bold my-6 md:my-10">
            Back-End
          </h2>
          <SkillAccordion data={skills_BE} />

          <h2 className="text-xl md:text-2xl font-bold my-6 md:my-10">
            Dev Tools
          </h2>
          <SkillAccordion data={skills_OTHERS} />
        </article>
      </div>

      <div className="flex site-footer justify-center items-center my-10 md:my-20"></div>
    </div>
  );
};
export default SkillPage;
