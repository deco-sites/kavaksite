import { ComponentChildren } from "preact";

export interface Props {
  id?: string;
  class?: string;
  children: ComponentChildren;
}

export function Container({ class: _class, id, children }: Props) {
  return (
    <div
      id={id}
      class={`${_class} 2xl:max-w-[1320px] xl:max-w-[1180px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-4`}
    >
      {children}
    </div>
  );
}
