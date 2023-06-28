import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import CustomLink from "./custom-link";
import { useAppContext } from "context/state";
import Button, { ButtonContent } from "./button";

const allowedActions = ["open_contact_form", "test"];

const ActionButton = ({ action, ...props }) => {
  let handler = () => {};
  if (action == "test") {
    handler = () => {
      console.log("test action button");
    };
  } else if (action == "open_contact_form") {
    handler = () => {
      console.log("test action button");
    };
  }
  return <Button handleClick={handler} {...props} type="button" />;
};

const ButtonLink = ({
  button,
  appearance,
  compact = false,
  size = "text-base md:text-sm",
  wFull = false,
}) => {
  if (
    button.to.to.startsWith(":") &&
    allowedActions.includes(button.to.to.slice(1))
  ) {
    let action = button.to.to.slice(1);

    return (
      <ActionButton
        action={action}
        button={button}
        size={size}
        wFull={wFull}
        appearance={appearance}
        compact={compact}
      />
    );
  }

  return (
    <CustomLink link={button} wFull={wFull}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
        size={size}
        wFull={wFull}
      />
    </CustomLink>
  );
};

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
  size: PropTypes.string,
  wFull: PropTypes.bool,
};

export default ButtonLink;
