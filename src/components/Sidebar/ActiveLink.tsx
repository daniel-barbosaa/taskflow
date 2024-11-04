import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        "data-testid": "active-link",
        style: {
          color: isActive ? "rgb(58, 132, 255)" : "#718096",
          background: isActive ? "white" : "transparent",
        },
      })}
    </Link>
  );
}
