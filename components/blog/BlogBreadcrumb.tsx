import { Category } from "deco-sites/kavaksite/butterCMS/types.ts";

export interface Props {
  categories?: Category[];
}

function Slash() {
  return <span aria-hidden="true" class="mx-1 hidden lg:inline">/</span>;
}

export function BlogBreadcrumb({ categories = [] }: Props) {
  const list = [{ name: "Blog", slug: "" }, ...categories];

  return (
    <ul class="hidden md:flex uppercase text-xs font-bold tracking-wider leading-3">
      {list.map(({ name, slug }, index, array) => (
        <li class="first:text-primary text-base-lighter last:font-normal)">
          {index > 0 ? <Slash /> : null}
          <a
            href={slug ? `/blog-category/${slug}` : "/blog"}
            class={index === array.length - 1 ? "pointer-events-none" : ""}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
