import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import Loader from "./loader";

const Button = ({
  button = {},
  appearance,
  compact = false,
  handleClick,
  loading = false,
  buttonType,
  wFull,
  size,
}) => {
  return (
    <button
      onClick={handleClick}
      type={buttonType}
      className={`${wFull ? "w-full" : "w-auto"}`}
    >
      <ButtonContent
        appearance={appearance}
        compact={compact}
        loading={loading}
        button={button}
        wFull={wFull}
        size={size}
      />
    </button>
  );
};

Button.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
};

export const ButtonContent = ({
  button = {},
  appearance,
  compact = false,
  loading = false,
  wFull,
  size,
  children,
}) => {
  return (
    <div
      className={classNames(
        // Common classes
        `inline-block ${
          wFull ? "w-full" : "w-auto"
        } text-center font-medium uppercase tracking-wide ${size} rounded-full`,
        // Full-size button
        {
          "px-16 py-4": compact === false,
        },
        // Compact button
        {
          "px-8 py-4": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-white text-primary-900 transition hover:bg-zinc-200 hover:text-zinc-900":
            appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "text-black": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "text-white transition hover:bg-white hover:text-black":
            appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white": appearance === "white-outline",
        },
        {
          "inline-flex items-center": button.icon,
        }
      )}
    >
      {loading && <Loader />}
      {button.label}
      {children}
      {button.icon && (
        <span className="button-link-icon-container ml-auto flex pl-4">
          <button.icon />
        </span>
      )}
    </div>
  );
};

export default Button;
