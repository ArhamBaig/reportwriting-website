import React from "react";
import Image from "next/image";
import { problemsolving, onlinereport } from "@/public/assets";

const PhdExperts = () => {
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col">
      <div className="justify-between items-center">
        <h2 className="heading  text-center">
          Report Writing Help with Our PhD Experts
        </h2>

        <div className="my-10 flex lg:flex-row flex-col justify-center items-center">
          <Image src={onlinereport} width={350} height={350} alt="" />
          <div>
            <p className="content">
              When students are given the task of writing a report, it may
              appear to them to be one of the simplest academic tasks ever.
              However, until they sit down to work on it, they understand how
              difficult it is because it is a factual document that requires
              extensive research. For example, assume you have a one-week
              deadline to meet. You need to read and analyze many study
              materials to get all of the information you need, but you don’t
              know where to begin.
            </p>
            <p className="content">
              You put off doing this task till the last minute because you have
              a horrible misconception about it! But there’s no need to be
              discouraged! We have the solution – our UK-based report writing
              help service! So whether you require Ivory research based on rare
              sources or something simpler, we have the solution!
            </p>

            <p className="content">
              ReportWritingHelp can help students at every academic level, from
              high school to college, and why not use our writing service?
            </p>
            <p className="content">
              Our Report Writing Help will help you write a brief and insightful
              academic report that will obtain you the grades you desire. The
              best writers prepare our reports in the field, and our in-house
              experts will assist you at every step of the way to ensure you
              receive the most value from your report!
            </p>
          </div>
        </div>
        <div className="my-4 flex lg:flex-row flex-col justify-center items-center">
          <Image src={problemsolving} width={350} height={350} alt="" />
          <div>
            <h2 className="sub-heading">
              Why choose our report writing help service?
            </h2>
            <p className="content">
              When students are given the task of writing a report, it may
              appear to them to be one of the simplest academic tasks ever.
              However, until they sit down to work on it, they understand how
              difficult it is because it is a factual document that requires
              extensive research. For example, assume you have a one-week
              deadline to meet. You need to read and analyze many study
              materials to get all of the information you need, but you don’t
              know where to begin.
            </p>
            <p className="content">
              You put off doing this task till the last minute because you have
              a horrible misconception about it! But there’s no need to be
              discouraged! We have the solution – our UK-based report writing
              help service! So whether you require Ivory research based on rare
              sources or something simpler, we have the solution!
            </p>

            <p className="content">
              ReportWritingHelp can help students at every academic level, from
              high school to college, and why not use our writing service?
            </p>
            <p className="content">
              Our Report Writing Help will help you write a brief and insightful
              academic report that will obtain you the grades you desire. The
              best writers prepare our reports in the field, and our in-house
              experts will assist you at every step of the way to ensure you
              receive the most value from your report!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdExperts;
