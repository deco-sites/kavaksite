import type { LoaderReturnType } from "$live/types.ts";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type { BlogPostList } from "deco-sites/std/commerce/butterCMS/types.ts";
import SearchCard from "./post-card/SearchCard.tsx";
import { useId } from "preact/compat";

export interface Props {
  title: string;
  list: LoaderReturnType<BlogPostList>;
}

function BlogGallery({ title, list: { posts } }: Props) {
  const id = useId();

  if (!posts?.length) {
    return <div class="hidden" aria-hidden="true" />;
  }

  return (
    <Container id={id} class="my-8">
      <section>
        <h3 class="text-black text-[1.17em] font-title mb-2 text-base-light">
          {title}
        </h3>
        <div class="flex flex-row overflow-x-scroll lg:overflow-x-visible gap-y-10 -mx-4 2lg:gap-y-8">
          {posts.map((post) => <SearchCard post={post} />)}
        </div>
      </section>
    </Container>
  );
}

export default BlogGallery;
