import Link from "next/link";
import { ActionLink, allowedActions } from "utils/actions";

const CustomLink = ({ link, children, wFull = false, className, ...props }) => {
  let href = link.url.href;
  const isInternalLink = href.startsWith("/");

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={href}>
        <a
          className={`${wFull != "undefined" && "w-full"} ${className}`}
          {...props}
        >
          {children}
        </a>
      </Link>
    );
  }

  if (
    href.startsWith(":") &&
    allowedActions.includes(
      href.slice(1, href.indexOf(" ") > 0 ? href.indexOf(" ") : href.length)
    )
  ) {
    let action = href.slice(1);

    return (
      <ActionLink
        action={action}
        className={`${wFull && "w-full"} ${className} cursor-pointer`}
      >
        {children}
      </ActionLink>
    );
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a
        className={`${wFull && "w-full"} ${className}`}
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={`${wFull && "w-full"}  ${className}`}
      {...props}
      href={href}
      target="_self"
    >
      {children}
    </a>
  );
};

export default CustomLink;
