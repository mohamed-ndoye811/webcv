import { React, useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";

import ruby_icon from "../img/ruby-icon.svg";
import c_sharp_icon from "../img/c-sharp-icon.svg";
import c_plus_icon from "../img/c++-icon.svg";
import html5_icon from "../img/html5-icon.svg";
import css3_icon from "../img/css3-icon.svg";

export default function ExperienceListItem({
  job_name,
  company_name,
  date,
  duration,
  tasks,
  languages_used,
}) {
  const rubyIcon = <img src={ruby_icon} alt="ruby language icon" />;
  const cSharpIcon = <img src={c_sharp_icon} alt="C# language icon" />;
  const cPlusIcon = <img src={c_plus_icon} alt="C++ language icon" />;
  const HTMLIcon = <img src={html5_icon} alt="HTML5 language icon" />;
  const CSSIcon = <img src={css3_icon} alt="CSS3 language icon" />;

  let item = useRef(null);
  let title = useRef(null);
  let subtitle = useRef(null);
  let details = useRef(null);

  useEffect(() => {
    gsap.from([title, subtitle, details], {
      duration: 1,
      y: 100,
      delay: 1.2,
      ease: Expo.easeOut,
      stagger: 0.1,
    });
  }, [item]);

  return (
    <>
      <div ref={(el) => (item = el)} className="exp-item-container">
        <div className="title-line-container">
          <div ref={(el) => (title = el)} className="exp-item-title">
            {job_name} - {company_name}
          </div>
          <div className="languages-used">
            {languages_used.includes("ruby") ? rubyIcon : null}
            {languages_used.includes("c#") ? cSharpIcon : null}
            {languages_used.includes("c++") ? cPlusIcon : null}
            {languages_used.includes("html") ? HTMLIcon : null}
            {languages_used.includes("css") ? CSSIcon : null}
          </div>
        </div>
        <div className="subtitle-line-container">
          <div ref={(el) => (subtitle = el)} className="item-subtitle">
            {date} - {duration}
          </div>
        </div>
        <div className="tasks-container">
          <div ref={(el) => (details = el)} className="item-details">
            {tasks}
          </div>
        </div>
      </div>
    </>
  );
}
