import { React, useEffect } from "react";
import "../scss/pages/_home.scss";
import anime from "animejs";

export default function Home(props) {
  // Enter animation
  function loadEnterAnimation(duration) {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: duration,
    });

    let ppDottedAnim = anime.timeline({
      loop: true,
    });

    //Text animation
    tl.add({
      targets: ".title, .text .textWrapper span",
      opacity: [0, 1],
      translateY: ["150%", 0],
      delay: anime.stagger(125),
    });

    // Profile Pic animation
    tl.add(
      {
        targets: ".profilePic",
        opacity: [0, 1],
        scale: [0, 1.2],
        easing: "easeOutQuint",
        duration: 1800,
      },
      "-=" + duration
    );

    ppDottedAnim.add({
      targets: "#dottedStrokeBlob path",
      strokeDashoffset: 0,
      easing: "linear",
      duration: 10000,
    });
  }

  useEffect(() => {
    if (props.startAnimations) {
      anime({
        targets: ".container",
        opacity: [0, 1],
      });
      loadEnterAnimation(1200);
    } else {
      anime({
        targets: ".container",
        opacity: [0, 0],
      });
    }
  });

  return (
    <main className="homePage">
      <div className="container">
        <div className="text">
          <div className="textWrapper">
            <span>I am a</span>
          </div>
          <div className="textWrapper">
            <span>Front-end</span>
          </div>
          <div className="textWrapper">
            <span>web developer</span>
          </div>
        </div>

        <div className="profilePic" style={{ transform: "scale(1.3) " }}>
          <svg
            id="profilePicSvg"
            xmlns="http://www.w3.org/2000/svg"
            width="1164.035"
            height="1066.323"
            viewBox="0 0 1164.035 1066.323"
          >
            <g
              id="dottedStrokeBlob"
              data-name="dottedStrokeBlob"
              transform="translate(947.69 516.3) rotate(135)"
              fill="none"
            >
              <path
                d="M305.038,611.14C57.016,677.659,0,474.57,0,306.1S106.431-71.157,305.038,1.064,596.773,189.218,610.076,306.1C610.076,388.776,553.06,544.621,305.038,611.14Z"
                stroke="none"
              />
            </g>

            <path
              id="plainStrokeBlob"
              d="M 226.9416961669922 656.0872192382812 C 254.3273620605469 656.0872192382812 284.6658020019531 651.674560546875 317.1143493652344 642.9718627929688 C 545.2138061523438 581.7957763671875 626.5531005859375 440.2929992675781 626.9982299804688 337.3067932128906 C 611.659423828125 206.2162780761719 501.20849609375 96.95114898681641 315.8739318847656 29.55675888061523 C 289.31103515625 19.89764785766602 263.4988098144531 14.99998092651367 239.1543579101562 14.99998092651367 C 84.54425048828125 14.99998092651367 15.00003051757812 202.9795379638672 15.00003051757812 336.4598693847656 C 15.00003051757812 455.8306579589844 42.53458786010742 656.0872192382812 226.9416961669922 656.0872192382812 M 226.9416809082031 671.0872192382812 C 45.03754806518555 671.0872192382812 3.0517578125e-05 490.1003723144531 3.0517578125e-05 336.4598693847656 C 3.05175763060106e-05 159.1765441894531 112.0000228881836 -60.5401496887207 321.0000305175781 15.45986938476562 C 530 91.45986938476562 628 213.4598693847656 642 336.4598693847656 C 642 423.4598693847656 582 587.4598388671875 321.0000305175781 657.4598388671875 C 286.1925964355469 666.795166015625 254.933837890625 671.0872192382812 226.9416809082031 671.0872192382812 Z"
              stroke="none"
              fill="#ffe1c8"
              transform="translate(454.94 228.07) rotate(9)"
              opacity="0.1"
            />

            <path
              id="mainBlob"
              data-name="mainBlob"
              d="M321,0C582-70,642,143.717,642,321S530,718,321,642,14,444,0,321C0,234,60,70,321,0Z"
              transform="translate(282.16 222.69)"
              fill="#ffe1c8"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
