import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillRead } from "react-icons/ai"; //requirements
import { FaMoneyBillWaveAlt } from "react-icons/fa"; //costing
import { TbTransferIn } from "react-icons/tb"; //money transfer or advance payment
import { FaHourglassStart } from "react-icons/fa"; //project start
import { RiChatNewFill } from "react-icons/ri"; //project update
import { GiFinishLine } from "react-icons/gi"; //project end
import { MdReviews } from "react-icons/md"; //project end

const ProjectTimeline = () => {
  const projectTimelineEvents = [
    {
      section: "Requirements",
      heading: "Food Delivery Service App",
      type: "Full stack app development",
      description:
        "Development should be done using the MERN stack. Should fully build the user facing section",
      time: "3 months",
      budget: "$4000",
      date: "19th October 2022",
    },
    {
      section: "Pricing",
      description:
        "This is the total cost estimate for the stipulated period of time",
      advancePayment: "$1600",
      secondPayment: "$2400",
      total: "$4000",
      date: "25th October 2022",
    },
    {
      section: "Advance Payment",
      description: "40% of the total amount required.",
      advancePayment: "$1600",
      date: "30th October 2022",
    },
    {
      section: "Project Start",
      description:
        "This project has been accepted by professional and has started.",
      date: "5th November 2022",
    },
    {
      section: "Project Updates",
      description: "You will receive updates from professional here",
      update: "Work started!",
      date: "15th November 2022",
    },
    {
      section: "Project End",
      description: "Project complete. Please proceed to make the final payment",
      secondPayment: "$2400",
      date: "30th November 2022",
    },
    {
      section: "Review",
      description:
        "Your Project is complete. Please take time to rate the professional you worked with",
      date: "1st December 2022",
    },
  ];
  return (
    <>
      <div className="rounded-md">
        <div className="font-bold text-primary text-xl ml-6">
          Project Timeline
        </div>
        {/* timeline */}
        <VerticalTimeline>
          {/*  REQUIREMENTS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[0].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<AiFillRead />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[0].section}
            </p>

            <div className="flex gap-2">
              <p className="font-bold text-base">Project Title:</p>
              <p>{projectTimelineEvents[0].heading}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-bold text-base">Type:</p>
              <p>{projectTimelineEvents[0].type}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[0].description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Duration:</p>
              <p>{projectTimelineEvents[0].time}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Budget:</p>
              <p>{projectTimelineEvents[0].budget}</p>
            </div>
          </VerticalTimelineElement>
          {/*  PRICING */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[1].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<FaMoneyBillWaveAlt />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[1].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[1].description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Advance Payment:</p>
              <p>{projectTimelineEvents[1].advancePayment}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Second Payment:</p>
              <p>{projectTimelineEvents[1].secondPayment}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Total Payment:</p>
              <p>{projectTimelineEvents[1].total}</p>
            </div>
          </VerticalTimelineElement>
          {/*  ADVANCE PAYMENT */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[2].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<TbTransferIn />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[2].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[2].description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Advance Payment:</p>
              <p>{projectTimelineEvents[2].advancePayment}</p>
            </div>
            {/* payment route needed here */}
            <div className="flex justify-center my-2 text-sm">
              <button className="bg-secondary text-white px-2 py-1.5 rounded-md">
                Proceed to Payment
              </button>
            </div>
          </VerticalTimelineElement>
          {/*  PROJECT START */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[3].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<FaHourglassStart />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[3].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[3].description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Advance Payment:</p>
              <p>{projectTimelineEvents[2].advancePayment}</p>
            </div>
            {/* payment route needed here */}
            <div className="flex justify-evenly my-2 text-sm">
              <button className="bg-warning text-white px-2 py-1.5 rounded-md">
                Register Complaint
              </button>
              <button className="bg-error text-white px-2 py-1.5 rounded-md">
                Stop Project
              </button>
            </div>
          </VerticalTimelineElement>
          {/*  PROJECT UPDATES */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[4].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<RiChatNewFill />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[4].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[4].description}</p>
            </div>
            <p className="font-bold text-primary text-base flex justify-center ">
              Updates
            </p>
            {/* Updates */}
            <div>
              <p className="mt-2">{projectTimelineEvents[4].update}</p>
            </div>
          </VerticalTimelineElement>
          {/*  PROJECT END */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[5].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<GiFinishLine />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[5].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[5].description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-base">Final Payment:</p>
              <p>{projectTimelineEvents[5].secondPayment}</p>
            </div>
            {/* payment route needed here */}
            <div className="flex justify-evenly my-2 text-sm">
              <button className="bg-secondary text-white px-2 py-1.5 rounded-md">
                Complete payment
              </button>
              <button className="bg-warning text-white px-2 py-1.5 rounded-md">
                Register Complaint
              </button>
            </div>
          </VerticalTimelineElement>
          {/*  PROJECT REVIEW */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff",
              color: "#2B2B34",
              "font-size": "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={projectTimelineEvents[6].date}
            iconStyle={{ background: "#45BDE6", color: "#fff" }}
            icon={<MdReviews />}
          >
            <p className="font-extrabold text-secondary">
              {projectTimelineEvents[6].section}
            </p>
            <div className="flex gap-2">
              <p className="font-bold text-base">Description:</p>
              <p>{projectTimelineEvents[6].description}</p>
            </div>           
            {/* payment route needed here */}
            <div className="flex justify-evenly my-2 mt-2 text-sm">
              <button className="bg-secondary text-white px-2 py-1.5 rounded-md">
                Review
              </button>
             
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default ProjectTimeline;
