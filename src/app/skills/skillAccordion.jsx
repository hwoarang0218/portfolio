"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useTheme } from "next-themes";

const SkillAccordion = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((panel) => (
        <Accordion key={panel.skill} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger style={{ cursor: "pointer" }}>
              <div className="flex items-center space-x-3">
                <Image
                  width={150}
                  height={150}
                  src={panel.img}
                  alt={panel.skill}
                  title={panel.skill}
                  className="h-8 w-8 rounded-md"
                />
                <h3 className="text-lg font-medium dark:text-white">
                  {panel.skill}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="w-full   dark:text-gray-300 transition-transform duration-200">
              <dl className="w-full">
                {panel.content.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center"
                  >
                    <dt className="text-sm font-medium  dark:text-gray-400">
                      {item.label}
                    </dt>
                    <dd className="text-sm   dark:text-gray-200">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default SkillAccordion;
