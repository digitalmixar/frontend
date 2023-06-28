import React from "react";

/**
 * @param {React.ComponentPropsWithoutRef<'svg'> && {
 *  direction?: "left" | "right" | "up" | "down";
 * }} props - props
 *
 * @returns JSX.Element
 */
const ChevronIcon = (props) => {
  const { direction = "down" } = props;
  const deg =
    direction === "right"
      ? "0deg"
      : direction === "left"
      ? "180deg"
      : direction === "up"
      ? "-90deg"
      : direction === "down"
      ? "90deg"
      : "90deg";

  return (
    <svg
      width="27"
      height="42"
      viewBox="0 0 27 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{
        transform: `rotate(${deg})`,
        ...props.style,
      }}
    >
      <path
        d="M4.1571 41.147L0.746094 37.485L18.8051 20.698L0.747069 3.91598L4.15808 0.253975L26.1471 20.698L4.1571 41.147Z"
        fill="#CCB9EF"
      />
    </svg>
  );
};

export default ChevronIcon;
