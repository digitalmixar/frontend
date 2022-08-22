import { getContent } from "utils/content";
import css from "./MainHero.module.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "@/utils/button";

const MainHero = ({ data }) => {
  const content = getContent(data);

  return (
    <section className="relative flex h-screen items-end justify-start">
      <div className="absolute inset-0 z-0 overflow-hidden bg-surface-1">
        <CanvasBG />
        <SVGPlayButton />
        <SVGLine />
      </div>
      <div className={`${css["bg-overlay"]} absolute inset-0 z-0 `}></div>
      <div className="absolute inset-0 z-0">
        <SVGBars />
      </div>
      <div className="relative z-10">
        {content.subheading && (
          <h2 className={`text-3xl font-bold text-white`}>
            {content.subheading}
          </h2>
        )}
        <h1 className="text-4xl font-bold text-white">{content.heading}</h1>
        {content.text && <p>{content.text}</p>}
        {!!content.CTAs.length && (
          <ButtonLink
            button={content.CTAs[0]}
            appearance={getButtonAppearance(content.CTAs[0].type, "light")}
          />
        )}
      </div>
    </section>
  );
};

const CanvasBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const density = 50;
    let mouseX = 0;
    let mouseY = 0;
    let handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

    const draw = () => {
      requestAnimationFrame(draw);

      ctx.fillStyle = `rgba(195, 167, 255, 0.03)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i += 2) {
        let coordX = points[i];
        let coordY = points[i + 1];

        if (
          coordX > mouseX - 155 &&
          coordX < mouseX + 155 &&
          coordY > mouseY - 155 &&
          coordY < mouseY + 155
        ) {
          pointsToDraw.push(points[i], points[i + 1]);
        }
      }

      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      for (let p = 0; p < pointsToDraw.length - 2; p += 2) {
        ctx.fillRect(pointsToDraw[p], pointsToDraw[p + 1], 10, 10);
      }

      pointsToDraw = [];
    };

    draw();

    return () => {
      cancelAnimationFrame(draw);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10`}></canvas>;
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
      strokeDashoffset: 0,
    });
  }, []);

  return (
    <svg
      ref={svg}
      className={css["svg-line"]}
      viewBox="0 0 1238 632"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        ref={path}
        d="M1234 254.562C1204.5 250.395 1140.7 285.162 1121.5 457.562C1116.83 513.895 1100.5 626.762 1072.5 627.562C1072.5 627.562 1040.5 634.362 1024.5 561.562L975.5 254.562C973.333 239.062 964.3 208.062 945.5 208.062C934.5 208.562 918.9 221.862 914.5 253.062L903 312.562C899.333 327.562 885.5 357.762 859.5 358.562C842.667 360.729 805.5 347.862 791.5 279.062L774.5 196.062C774.5 196.062 767.5 165.562 755 164.562C755 164.562 719 158.062 715.5 239.062L706.5 419.062C703.667 464.062 679.4 552.762 605 547.562C605 547.562 528 538.062 496 321.062L461.5 73.5621C458 49.8954 446.2 3.06207 427 5.06207C427 5.06207 399.5 2.06207 394.5 100.062L378 321.062C378 321.062 371.5 446.562 305 446.562C305 446.562 251 452.562 234 326.562L210 181.062C210 181.062 198 113.062 139.5 113.062C125.5 116.062 96.7998 104.762 95.9998 195.562C97.1665 215.895 87.8998 256.662 41.4998 257.062C32.1665 256.562 11.5998 254.462 3.99976 250.062"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SVGPlayButton = () => {
  const svgRef = useRef();
  const rect1Ref = useRef();
  const rect2Ref = useRef();
  const rect3Ref = useRef();

  useEffect(() => {
    gsap.to([rect1Ref.current, rect2Ref.current, rect3Ref.current], {
      duration: 0.7,
      ease: "power2.inOut",
      css: {
        filter: "blur(24px)",
      },
      delay: 2.2,
    });
    gsap.to([rect1Ref.current, rect2Ref.current], {
      duration: 0.7,
      ease: "power2.inOut",
      css: {
        opacity: 1,
      },
      delay: 2.2,
    });
    gsap.to([rect3Ref.current], {
      duration: 0.7,
      ease: "power2.inOut",
      css: {
        opacity: 0.7,
      },
      delay: 2.2,
    });
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className={css["svg-play-button"]}
        viewBox="0 0 182 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          ref={rect1Ref}
          x="-7"
          y="-28"
          width="246"
          height="42"
          fill="#B1004A"
          style={{ transform: "rotate(47deg)", transformOrigin: "0px 0px" }}
        ></rect>
        <rect
          ref={rect2Ref}
          x="-7"
          y="381"
          width="246"
          height="42"
          fill="#1C9BA4"
          style={{
            transform: "rotate(-47deg)",
            transformOrigin: "-34px 377px",
          }}
        ></rect>
        <rect
          ref={rect3Ref}
          x="-14"
          y="20"
          width="42"
          height="343"
          fill="black"
        ></rect>
        <path
          d="M-0.000244141 17.2644V205.5V344C-0.000244141 361.6 17.3121 370.5 31.4998 354.5C77.1664 303 170.2 201.264 179 191.264C183 186.719 182.666 175 179 171.5L28.9998 5.99995C20.9998 -3.32228 -0.000244141 -1.55785 -0.000244141 17.2644Z"
          fill="white"
        />
      </svg>
      <svg
        className={css["svg-play-button-tip"]}
        viewBox="0 0 182 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 256.897V107L179 172.097C182.667 175.597 183 187.316 179 191.861C176.054 195.209 163.665 208.84 146.774 227.427C138.698 236.312 129.594 246.33 120 256.897Z"
          fill="white"
        />
      </svg>
    </>
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
