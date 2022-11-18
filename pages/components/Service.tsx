import React from "react";

import { HiChatBubbleBottomCenterText, HiShieldCheck } from "react-icons/hi2";
import { MdFamilyRestroom } from "react-icons/md";
import { ImMagicWand } from "react-icons/im";

const services = [
  {
    icon: <HiChatBubbleBottomCenterText />,
    title: "Communication",
    description:
      "Single point of contact,in sync with the tools you use. We speak your language.",
  },
  {
    icon: <HiShieldCheck />,
    title: "Reliability",
    description:
      "We keep our promises, provide upfront timelines and bring predictability.",
  },
  {
    icon: <ImMagicWand />,
    title: "Quality First",
    description:
      "Quality first. All projects are backed our fanatic support & 100% satisfaction guarentee.",
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Families",
    description:
      "Single point of contact,in sync with the tools you use. We speak your language",
  },
];

type Props = {};

const Service = (props: Props) => {
  return (
    <div>
      <h2>Featured Service we Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services &&
          services.map((item) => (
            <>
              <div>
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Service;
