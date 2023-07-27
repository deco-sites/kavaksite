import type { LoaderReturnType } from "$live/types.ts";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type {
  BlogPostPreview,
  BlogSectionPosts,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import type { FieldTypes } from "deco-sites/kavaksite/butterCMS/types.ts";
import FeaturedSocial from "./sections/FeaturedSocial.tsx";

export interface Props {
  section: LoaderReturnType<BlogSectionPosts>;
  variant: FieldTypes;
}

export interface SectionContentProps {
  type: FieldTypes;
  posts: BlogPostPreview[];
}

export function SectionContent(
  { type, posts }: SectionContentProps,
) {
  if (type === "featured_social") {
    return <FeaturedSocial posts={posts} />;
  }

  return <p>For other variants you must use other sections</p>;
}

function BlogSection(
  { section, variant }:
    Props,
) {
  return (
    <>
      <Container class="overflow-x-scroll snap-x pt-8 mt-8 lg:overflow-x-hidden">
        <SectionContent type={variant} posts={section.posts} />
      </Container>
    </>
  );
}

export default BlogSection;
