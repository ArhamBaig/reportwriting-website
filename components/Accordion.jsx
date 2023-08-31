"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { accordionData } from "@/constants/accordionData";
import { plus, minus } from "@/public/assets";
import Image from "next/image";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
        <h2 className="heading text-center">Frequently Asked Questions</h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2  gap-10">
          {accordionData.map((data, index) => (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => {
                toggle(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className=" border-b-2 border-primary flex flex-col">
      <div
        className=" py-1 px-1 sm:py-2 sm:px-2  flex items-center cursor-pointer"
        onClick={toggle}
      >
        {open ? (
          <>
            <Image
              className="hidden sm:block"
              src={minus}
              width={35}
              height={35}
            />
          </>
        ) : (
          <>
            <Image
              className="hidden sm:block"
              src={plus}
              width={35}
              height={35}
            />
          </>
        )}
        <h4 className=" sm:text-lg font-semibold text-sm">
          {title}
        </h4>
      </div>
      <Collapse
        isOpened={open}
        theme={{
          collapse: "ReactCollapse--collapse",
          content: "ReactCollapse--content",
        }}
      >
        <div className="bg-white px-5 pb-5 text-xs sm:text-sm md:text-md">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
