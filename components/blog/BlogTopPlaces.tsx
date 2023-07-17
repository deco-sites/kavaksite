import type { LoaderReturnType } from "$live/types.ts";
import type { BlogSectionPlaces } from "deco-sites/std/commerce/butterCMS/types.ts";
import { BlogPlaces } from "./sections/BlogPlaces.tsx";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";

export interface Props {
  categories: LoaderReturnType<BlogSectionPlaces>;
  searchTerms: LoaderReturnType<BlogSectionPlaces>;
}

function BlogTopPlaces({ categories, searchTerms }: Props) {
  return (
    <Container class="flex sm:flex-row flex-col flex-nowrap gap-8 mb-10 mt-20">
      <section class="sm:w-1/2 w-full">
        <BlogPlaces
          title={searchTerms.title}
          places={searchTerms.places.map((place) => ({
            ...place,
            slug: `https://www.kavak.com/br/${place.slug}`,
          }))}
        />
      </section>
      <section class="sm:w-1/2 w-full">
        <BlogPlaces title={categories.title} places={categories.places} />
      </section>
    </Container>
  );
}

export default BlogTopPlaces;
