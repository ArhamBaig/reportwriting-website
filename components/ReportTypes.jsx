"use client";
import { useState } from "react";

const ReportTypes = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
        <h2 className="heading text-center">Types of Report Writing</h2>
        <div className="my-10">
          <h3 className="content-heading">Long Report and Short Reports:</h3>
          <p className="content">
            As the name implies, these reports are pretty clear. For example, a
            two-page report, also known as a memorandum, is short, whereas a
            thirty-page report is exceptionally long. But what distinguishes
            short reports from long reports? More extended reports, on the other
            hand, are typically written in a formal tone.
          </p>
          <h3 className="content-heading">Internal and External Reports:</h3>
          <p className="content">
            As the name implies, an internal report is restricted to a specific
            organization or group of people. Internal reports are used within an
            organization in the case of an office setting. We prepare external
            reports for distribution outside the organization, such as a
            newspaper news report about an incident or a company's annual
            report. These are referred to as public reports.{" "}
          </p>
          <h3 className="content-heading">Vertical and Lateral Reports:</h3>
          <p className="content">
            This is the ultimate target of the report's hierarchy. A vertical
            report is written for your management or mentees. A vertical report
            moves in either an upward or downward direction. Lateral reports, on
            the other hand, aid in organisational coordination. A lateral report
            travels between units at the same organizational level (for
            instance, one that travels between the administration and finance
            departments).
            
          </p>
          {showMore ? (
            <>
          <h3 className="content-heading">Periodic Reports:</h3>
          <p className="content">
            Periodic reports are distributed on predetermined schedules. In most
            cases, they are oriented upward and serve as a form of management
            control. Some, such as annual reports, are not vertical but are
            required by the government to be produced regularly. That is why we
            have annual, quarterly, and semi-annual reports. If they are this
            frequent, it only makes sense to pre-structure these reports and
            fill in each period's data. That is also true in the majority of
            cases.
          </p>
          <h3 className="content-heading">Formal and Informal Reports:</h3>
          <p className="content">
            Formal reports are meticulously arranged out. They emphasize
            objectivity and organization, contain more detail, and must be
            written in a style that avoids factors such as personal pronouns.
          </p>
          <p className="content">
            Informal reports are typically brief messages with free-flowing,
            informal language. The internal report/memorandum is generally
            referred to as an Informal Report. For instance, A report among your
            peers, a report for your small group or team, etc.
          </p>
          <h3 className="content-heading">
            Informational and Analytical Reports:
          </h3>
          <p className="content">
            Informational reports (attendance reports, annual budget reports,
            monthly financial reports) transport objective data from one part of
            an organization to a more extensive system.
          </p>
          <p className="content">
            Analytical reports (scientific research, feasibility reports, and
            employee evaluations) demonstrate attempts to solve real-world
            problems. At the end of these analytical reports, suggestions are
            usually required.
          </p>
          <h3 className="content-heading">Proposal Reports:</h3>
          <p className="content">
            These reports serve as an extension of the
            analytical/problem-solving reports. For example, a proposal is a
            document that describes how one organisation can provide a solution
            to a problem that they are experiencing.
          </p>
          <p className="content">
            In a business setting, there is almost always a need to prepare a
            report. Typically, the end goal is very solution-oriented. Such
            reports are known as proposal reports.
          </p>
          <h3 className="content-heading">Functional Reports:</h3>
          <p className="content">
            Marketing reports, financial reports, accounting reports, and
            various other reports that serve a specific purpose are examples of
            this type of report. Almost all reports can be included in most of
            these categories. In addition, we can consist of a single report to
            multiple kinds of reports.{" "}
          </p>
          </>):(
              <button
                className="bg-primary text-white p-2 font-semibold rounded-lg"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
            )}
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
    </div>
  );
};

export default ReportTypes;
