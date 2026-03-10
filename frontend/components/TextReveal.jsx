"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const App = () => {
  const wrapperRef = useRef(null);
  const lines = [{text: 'Lorem ipsum dolor sit amet,'},{text: 'consectetur adipiscing elit.'}, {text: 'Sed non risus.'},{text: 'Suspendisse lectus tortor, dignissim vel,'}, {text: 'luctus pulvinar, hendrerit id, lorem.'}];

  useEffect(() => {
    if (wrapperRef.current) {
      const chars = gsap.utils.toArray(".char");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "center center",
            scrub: true,
            pin: ".textRevealWrapper",
            markers: true,
          }
        })
        .to(
          chars,
          {
            opacity: 1,
            stagger: 0.08
          },
          0
        );
    }
  }, []);

  return (
    <div className="page">
      <div className="color">scroll</div>
      <div className="textRevealWrapper">
        <div ref={wrapperRef} className="text">
          {lines.map((line, lineKey) => (
            <div className="line" key={lineKey}>
              {line.text.split("").map((char, charKey) => (
                <span className="char" key={`${lineKey}-${charKey}`}>
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="color">scroll</div>
    </div>
  );
};


