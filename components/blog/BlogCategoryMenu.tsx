import type { LoaderReturnType } from "$live/types.ts";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";
import type {
  BlogPage,
  Category,
} from "deco-sites/kavaksite/std/butterCMS/types.ts";
import { BlogBreadcrumb } from "./BlogBreadcrumb.tsx";

export interface Props {
  categories: LoaderReturnType<Category[]>;
  page?: LoaderReturnType<BlogPage>;
  hideTitle?: boolean;
}

function BlogCategoryMenu({ categories, page, hideTitle }: Props) {
  const categoriesList = [{ name: "Tudo", slug: "" }, ...categories];

  return (
    <Container class="mb-6 mt-7">
      {!hideTitle
        ? (
          <SectionTitle class="override:text-[calc(1.425rem+2.1vw)]">
            {page?.title}
          </SectionTitle>
        )
        : null}
      <nav class="mb-2 overflow-auto">
        <ul class="flex sm:flex-wrap gap-x-4 pb-2">
          {categoriesList.map((category, index) => (
            <li key={index}>
              <a
                href={index === 0 ? "/blog" : `/blog-category/${category.slug}`}
                class={`${
                  page?.title === category.name ? "text-primary" : ""
                } py-1 block whitespace-nowrap text-base-lighter`}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <BlogBreadcrumb categories={page?.breadcrumbList} />
    </Container>
  );
}

export default BlogCategoryMenu;
