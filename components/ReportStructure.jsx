"use client"
import { useState } from "react";
const ReportStructure = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
        <h2 className="heading text-center">How to Structure a Report</h2>
        <div className="my-10">
          <p className="content">
            Knowing how to write a good report might make you a helpful employee
            at your present company or a desirable prospect for a new one. When
            writing a report, the following steps should be taken:
          </p>
          <ol>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Decide on terms of reference
                </li>
            </h3>
            <p className="content">A section detailing the document's "terms of reference" is seen in many official reports. These are some of the terms:</p>
            <ul className="list-disc ms-6">
                <li>
                What is the purpose of the report, and why is it necessary?
                </li>
                <li>
                When was it written?
                </li>
                <li>
                What is the goal of it?
                </li>
            </ul>
            <p className="content">Setting these words clarifies why the report is necessary and aims to achieve for both the writer and the reader. The terms of reference are frequently explained in the first paragraph so that the reader can decide whether or not the text is relevant without reading the entire page. Setting concrete words early on will aid in the creation of the report's outline and the organization of your conversations throughout the writing process. </p>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Conduct your research
                </li>
            </h3>
            <p className="content">The majority of reports will require you to gather data that is directly related to your topic. If you're a doctor with copies of a patient's medical records, you may already have access to this information. However, if you're responsible for assessing a problem or investigating an incident, you'll almost certainly need to spend some time seeking, gathering, and collecting data. Writing a report requires you to interpret data and present it in a way that your audience will comprehend. For example, you may need to develop charts, graphs, or timelines to help you understand your raw data. To present your data professionally, you will need to carefully reference your sources and keep track of where and how you obtained it. </p>
            {showMore ? (
              <>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Write an outline
                </li>
            </h3>
            <p className="content">The next step is to create an outline for your report. This usually takes the form of a bulleted or numbered list of the document's many sections. The following is an example of a report outline: </p>
            <ul className="list-disc ms-6">
                <li>Title page </li>
                <li>Table of contents</li>
                <li>Introduction</li>
                <li>Terms of reference</li>
                <li>Summary of procedure</li>
                <li>Findings</li>
                <li>Analysis</li>
                <li>Conclusion</li>
                <li>References or bibliography</li>
            </ul>
            <p className="content">The sequence of these components and whether or not you include them all will be determined by the type of report, length, and formality required. When developing your outline, the most important thing to remember is to include all relevant sections and leave out anything that does not directly contribute to the report's aim.</p>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Write the first draft
                </li>
            </h3>
            <p className="content">One of the most crucial aspects of creating a great report is writing the first draft. The goal of the first draught is to get all of essential aspects of your material out of your head and onto the page rather than to write a perfect report. Your primary goal is to organize your data and analysis into a rough draught that eventually becomes a completed output. You will have the opportunity to add to and edit your first attempt later on. You will almost certainly discover gaps in your data or errors in your analysis when writing your first draught. Please make a list of them, but don't try to address each one as you write. Finish the draught instead, and keep the problem-solving for when you start editing </p>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Analyze data and record findings
                </li>
            </h3>
            <p className="content">The essential element is the "findings" section of any report or the area where you offer your interpretation of the facts. For example, the findings for an accountant could include an explanation for why a company's stock fell during the previous quarter. On the other hand, it could consist of a summary of a biodegradable plastics experiment and how the results might alter waste management strategies for an environmental scientist. Even if the outcomes are less than ideal, the findings part of your report should always provide relevant information about the topic or issue you are addressing. For example, if you conclude that the data was insufficient or that the study method was defective, you must explain why professionally and accurately. </p>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Recommend a course of action
                </li>
            </h3>
            <p className="content">Your recommendation is the last section of your report's body. You are qualified to provide a concept for what actions should be performed in response to your findings after reviewing the data and analyzing any results. For example, a project manager may request that an additional employee be added to the team after assessing the number of overtime hours that their team has worked. After noticing an increase in preventable infections in the previous six months, a surgeon can request that the hospital use new sterilizing measures in the operating room. Your reader is more inclined to believe your conclusion if you have presented your data well and demonstrated your knowledge.</p>
            <h3 className="content-heading mx-4">
                <li className="list-decimal">
                Edit and distribute
                </li>
            </h3>
          
            <p className="content">The final step in preparing a report is to revise it before delivering it to your intended audience thoroughly. You'll need to proofread for grammar faults, misspellings, and typos. You should also double-check your statistics, double-check your citations, and read over the entire paper to ensure that it provides a coherent narrative. If many people view the report, you may want to have someone else edit it or give you feedback on the readability of the content. Depending on your profession, you can distribute the report in a variety of ways. You may send it to your boss through email, deliver it at a company meeting, or publish it in a professional publication. Your objective should always be to generate a clear, informative, and compelling text that will enhance your company's productivity, regardless of how or where it is read. </p>
            </>):(
              <button
                className="bg-primary text-white p-2 font-semibold rounded-lg"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
            )}
          </ol>
          {showMore ? (
            <div>
          <h3 className="content-heading">Tips for report writing
          </h3>
          <h4 className="ms-2 font-semibold">Here are some tips to consider when creating reports:</h4>
          <p className="content">Know your audience. Before you start writing, make sure you know who the report is for, why they need the information, and what you want them to do with it once they've finished reading it. Knowing who you is talking to can help you determine your tone and guarantee that you get your message through as effectively as possible.</p>
          <p className="content">Carefully proofread your work. A typo can completely derail an otherwise excellent report. So make sure to proofread your report thoroughly before submitting or presenting it.</p>
          <p className="content">Be open to suggestions. You may receive criticism or feedback on your reports, depending on your work title. Try to keep an open mind and be receptive to criticism. Your writing will almost certainly improve if you accept comments and put your superiors' suggestions into practice.</p>
          <p className="content">Make much use of your time. A quality report might take anywhere from a few hours to several weeks to complete. So make sure you manage your time and stick to a regular writing routine before you start. You may need to create hourly or daily targets to keep your work on track.</p>
          </div>
          ):<></>}
        </div>
        {showMore ? (
              <button
                className="bg-primary text-white p-2 rounded-lg font-semibold "
                onClick={() => setShowMore(false)}
              >
                Read Less
              </button>
            ):<></>}
      </div>
    </div>
  );
};

export default ReportStructure;
