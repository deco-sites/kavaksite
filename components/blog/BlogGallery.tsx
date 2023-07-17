import type { LoaderReturnType } from "$live/types.ts";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";
import type { BlogPostList } from "../../std/commerce/butterCMS/types.ts";
import GalleryPagination from "./gallery/GalleryPagination.tsx";
import PostCard from "./post-card/PostCard.tsx";
import { useId } from "preact/compat";

export interface Props {
  title: string;
  list: LoaderReturnType<BlogPostList>;
}

function BlogGallery({ title, list: { posts, pagination } }: Props) {
  const id = useId();

  if (!posts?.length) {
    return <div class="hidden" aria-hidden="true" />;
  }

  return (
    <Container id={id} class="my-8">
      <section>
        <SectionTitle>{title}</SectionTitle>
        <div class="flex flex-row flex-wrap gap-y-10 -mx-4">
          {posts.map((post) => <PostCard post={post} />)}
        </div>
        {pagination
          ? <GalleryPagination pagination={pagination} containerId={id} />
          : null}
      </section>
    </Container>
  );
}

export default BlogGallery;
