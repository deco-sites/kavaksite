import { ComponentChildren } from "preact";

export interface Props {
  children: ComponentChildren;
  class?: string;
}

export function SectionTitle({ children, class: _class }: Props) {
  return (
    <h2
      class={`${_class} font-title mb-4 text-[calc(1.325rem+0.9vw)] text-base-light`}
    >
      {children}
    </h2>
  );
}
