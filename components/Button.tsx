import { ComponentChildren } from "preact";

interface Props {
  href: string;
  children: ComponentChildren;
  type: "primary" | "secondary" | "tertiary";
  style?: string;
}

const typeClasses: Record<Props["type"], string> = {
  primary:
    "bg-black text-white border-transparent hover:bg-white hover:text-black hover:border-black",
  secondary:
    "bg-primary-light text-primary-dark border-transparent hover:bg-primary-dark hover:text-primary-light",
  tertiary:
    "bg-primary-light text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-primary-light",
};

export default function Button(props: Props) {
  const { href, type, children, style } = props;
  const baseClasses =
    "text-md px-4 md:px-20 py-2.5 inline-block rounded-lg border border-solid text-center";
  const classes = `${style ?? ""} ${baseClasses} ${typeClasses[type]}`;

  return (
    <a href={href} class={classes}>
      {children}
    </a>
  );
}
