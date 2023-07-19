import { getContent } from "utils/content";
import css from "./MainHero.module.css";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "@/utils/button";
import Image from "next/image";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import Typed from "react-typed";

const MainHero = ({ data }) => {
  const content = getContent(data);
  const [displayTyped, setdisplayTyped] = useState(false);
  useEffect(() => {
    setdisplayTyped(true);
  }, []);

  return (
    <section className="relative flex h-screen justify-start lg:items-center">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#8959F9] shadow-[0_0_200px_#00000070_inset]">
        <Light />
        <MediaQuery minWidth={1024}>
          <CanvasBG />
        </MediaQuery>
        <SVGLine />
        <PlayButton />
      </div>
      <div className="container  relative z-10 mt-40 space-y-4">
        <div className="animated-typing text-4xl font-bold text-primary-925 lg:text-6xl">
          {displayTyped ? (
            <Typed
              strings={[
                "SEO",
                "Marketing Digital",
                "Growth Marketing",
                "User Experience",
                "WEB Development",
                "Ecommerce",
                "Make an Appointment",
                "Custom Software Development",
              ]}
              typeSpeed={150}
              backSpeed={50}
              loop
            />
          ) : (
            <h1>Custom Software Development</h1>
          )}
        </div>
        {content.subHeading && (
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-1xl text-primary-925 lg:text-3xl`}
          >
            {content.subHeading}
          </motion.h2>
        )}

        {!!content.CTAs.length && (
          // , delay: 2.5
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-6 pb-32"
          >
            <ButtonLink
              button={content.CTAs[0]}
              appearance={getButtonAppearance(content.CTAs[0].type, "light")}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

const CanvasBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.document !== "undefined" &&
      canvasRef.current
    ) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const density = 30;
      const maxOffset = 7;
      const offsetRefreshTime = 500;
      let mouseX = 0;
      let mouseY = 0;
      let mouseRadius = 118;
      let handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const random = (min, max) => {
        return Math.random() * (max - min) + min;
      };

      document.addEventListener("mousemove", handleMouseMove);

      let numberOfPoints = (canvas.width / density) * (canvas.height / density);
      let points = new Float32Array(numberOfPoints * 2);

      let pointerX = 0;
      let pointerY = 0;
      for (let p = 0; p < numberOfPoints * 2; p += 2) {
        pointerX += density;
        if (pointerX > canvas.width - density) {
          pointerX = density;
          pointerY += density;
        }
        points[p] = pointerX;
        points[p + 1] = pointerY;
      }

      let pointsToDraw = [];
      let offsetX = random(-maxOffset, maxOffset);
      let offsetY = random(-maxOffset, maxOffset);

      let previousMouseX = 0;
      let previousMouseY = 0;

      let previousFadingTimestamp = 0;
      let previousOffsetTimestamp = 0;
      const draw = (timestamp) => {
        requestAnimationFrame(draw);

        if (timestamp - previousFadingTimestamp > 100) {
          ctx.fillStyle = `rgba(0, 0, 0, 0.09)`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          previousFadingTimestamp = timestamp;
        }

        for (let i = 0; i < points.length; i += 2) {
          let coordX = points[i];
          let coordY = points[i + 1];

          const distance = Math.sqrt(
            (mouseX - coordX) ** 2 + (mouseY - coordY) ** 2
          );

          if (distance < mouseRadius) {
            pointsToDraw.push(coordX, coordY);
          }
        }

        if (timestamp - previousOffsetTimestamp > offsetRefreshTime) {
          offsetX = random(-maxOffset, maxOffset);
          offsetY = random(-maxOffset, maxOffset);
          previousOffsetTimestamp = timestamp;
        }

        if (mouseX !== previousMouseX || mouseY !== previousMouseY) {
          ctx.fillStyle = `rgba(215, 215, 215, 0.08)`;
          for (let p = 0; p < pointsToDraw.length - 2; p += 2) {
            ctx.fillRect(
              pointsToDraw[p] - 1 + offsetX,
              pointsToDraw[p + 1] - 1 + offsetY,
              8,
              8
            );
            ctx.fillRect(
              pointsToDraw[p] + 1 + offsetX,
              pointsToDraw[p + 1] + 1 + offsetY,
              8,
              8
            );
          }
          previousMouseX = mouseX;
          previousMouseY = mouseY;
        }

        pointsToDraw = [];
      };

      draw();
    }

    return () => {
      cancelAnimationFrame(draw);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 opacity-25 mix-blend-color-dodge`}
    ></canvas>
  );
};

const SVGLine = () => {
  const pathLength = useRef(null);
  const svg = useRef(null);
  const path = useRef(null);

  useEffect(() => {
    if (!pathLength.current) {
      pathLength.current = path.current.getTotalLength();
    }

    path.current.setAttribute("stroke-dasharray", pathLength.current);
    path.current.setAttribute("stroke-dashoffset", pathLength.current);
  });

  useEffect(() => {
    gsap.to(path.current, { duration: 0, visibility: "visible" });
    gsap.to(path.current, {
      duration: 4,
      ease: "power2.inOut",
      strokeDashoffset: 290,
    });
  }, []);

  return (
    <svg
      ref={svg}
      className={css["svg-line"]}
      viewBox="0 0 778 403"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        ref={path}
        d="M777 162.076C680.621 177.809 724.16 405.523 672.166 398.856C620.172 392.19 629.05 50.6712 592.696 50.6712C556.342 50.6712 601.995 225.94 540.701 228.293C479.408 230.645 514.071 105.962 469.263 108.31C424.455 110.659 483.635 346.708 387.256 348.668C290.877 350.628 309.898 1.65874 267.628 4.01185C225.357 6.36495 265.936 286.323 191.85 284.709C117.765 283.094 169.874 67.377 82.4742 72.629C45.8317 74.8313 69.7922 136.085 55.1817 150.181C34.3973 170.232 2 161.023 2 161.023"
        stroke="#4E0BA9"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Light = () => {
  return (
    <div className="pointer-events-none absolute -bottom-20 right-0 z-[-1] max-w-[80vw]">
      <Image src="/img/light.png" width={596} height={811} alt="light" />
    </div>
  );
};

const PlayButton = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5, delay: 1.5 }}
      className="pointer-events-none absolute right-1/2 top-3/4 w-56 translate-x-1/2 -translate-y-1/2 select-none opacity-0 lg:right-[15%] lg:top-1/2 lg:translate-x-0 xl:w-80"
    >
      <Image
        src="/icons/rectangle-63.png"
        width={297}
        height={488}
        alt="play button"
      />
    </motion.div>
  );
};

const SVGBars = () => {
  const svgBars = useRef([]);

  useEffect(() => {
    gsap.to(svgBars.current, {
      duration: 1.8,
      ease: "elastic.out(1, 0.75)",
      css: {
        opacity: 1,
        transform: "translateY(-50%)",
      },
      stagger: 0.5,
      delay: 1.2,
    });

    let circles = svgBars.current
      .map((el) => {
        return [...el.querySelectorAll("circle")];
      })
      .flat();

    gsap.to(circles, {
      duration: 0.4,
      ease: "power2.inOut",
      css: {
        filter: "blur(10px)",
        opacity: 0.6,
      },
      delay: 1.3,
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <svg
        // store in ref array
        ref={(el) => {
          svgBars.current[0] = el;
        }}
        className={css["svg-bars1"]}
        viewBox="0 0 82 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="41" cy="130" r="24" fill="#B1004A"></circle>
        <circle cx="41" cy="866" r="28" fill="#1C9BA4"></circle>
        <path
          d="M82 151C82 128.356 63.6437 110 41 110C18.3563 110 0 128.356 0 151V846.5C0 869.144 18.3563 887.5 41 887.5C63.6437 887.5 82 869.144 82 846.5V151Z"
          fill="#503CCC"
        />
        <path
          d="M82 276.5C82 253.856 63.6437 235.5 41 235.5C18.3563 235.5 0 253.856 0 276.5V846.5C0 869.144 18.3563 887.5 41 887.5C63.6437 887.5 82 869.144 82 846.5V276.5Z"
          fill="#9975E6"
        />
      </svg>

      <svg
        ref={(el) => {
          svgBars.current[1] = el;
        }}
        className={css["svg-bars2"]}
        viewBox="0 0 82 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="41" cy="280" r="24" fill="#B1004A"></circle>
        <circle cx="41" cy="866" r="28" fill="#1C9BA4"></circle>
        <path
          d="M82 301C82 278.356 63.6437 260 41 260C18.3563 260 0 278.356 0 301V847C0 869.644 18.3563 888 41 888C63.6437 888 82 869.644 82 847V301Z"
          fill="#503CCC"
        />
        <path
          d="M82 428.5C82 405.856 63.6437 387.5 41 387.5C18.3563 387.5 0 405.856 0 428.5V847C0 869.644 18.3563 888 41 888C63.6437 888 82 869.644 82 847V428.5Z"
          fill="#9975E6"
        />
      </svg>

      <svg
        ref={(el) => {
          svgBars.current[2] = el;
        }}
        className={css["svg-bars3"]}
        viewBox="0 0 82 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="41" cy="24" r="24" fill="#B1004A"></circle>
        <circle cx="41" cy="866" r="28" fill="#1C9BA4"></circle>
        <path
          d="M82 41C82 18.3563 63.6437 0 41 0C18.3563 0 0 18.3563 0 41V847C0 869.644 18.3563 888 41 888C63.6437 888 82 869.644 82 847V41Z"
          fill="#503CCC"
        />
        <path
          d="M82 159C82 136.356 63.6437 118 41 118C18.3563 118 0 136.356 0 159V847C0 869.644 18.3563 888 41 888C63.6437 888 82 869.644 82 847V159Z"
          fill="#9975E6"
        />
      </svg>
    </>
  );
};

export default MainHero;
