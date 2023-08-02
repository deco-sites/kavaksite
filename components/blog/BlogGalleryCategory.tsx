import type { LoaderReturnType } from "$live/types.ts";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";
import type { BlogPostList } from "deco-sites/std/commerce/butterCMS/types.ts";
import FeaturedPosts from "./sections/FeaturedPosts.tsx";

export interface Props {
  /** @default  Lo más fresco */
  title: string;
  list: LoaderReturnType<BlogPostList>;
}

function BlogGalleryCategory({ title, list: { posts } }: Props) {

  if (!posts?.length) {
    return <div class="hidden" aria-hidden="true" />;
  }

  return (
    <Container>
      <SectionTitle class="text-black leading-[1] 2lg:text-[2rem]">
        {title}
      </SectionTitle>
      <FeaturedPosts posts={posts} />
    </Container>
  );
}

export default BlogGalleryCategory;
