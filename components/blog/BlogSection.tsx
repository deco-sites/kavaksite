import type { LoaderReturnType } from "$live/types.ts";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type {
  BlogPostPreview,
  BlogSectionPosts,
  FieldTypes,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import FeaturedAds from "./sections/FeaturedAds.tsx";
import FeaturedPosts from "./sections/FeaturedPosts.tsx";

export interface Props {
  section: LoaderReturnType<BlogSectionPosts>;
  variant: FieldTypes;
}

export interface SectionContentProps {
  type: FieldTypes;
  posts: BlogPostPreview[];
  direction?: "row" | "column";
}

export function SectionContent(
  { type, posts, direction = "row" }: SectionContentProps,
) {
  if (type === "featured_posts") {
    return <FeaturedPosts posts={posts} />;
  }

  if (type === "featured_ads") {
    return <FeaturedAds posts={posts} direction={direction} />;
  }

  return <p>For other variants you must use other sections</p>;
}

function BlogSection({ section, variant }: Props) {
  return (
    <Container>
      <SectionTitle>{section.title}</SectionTitle>
      <SectionContent type={variant} posts={section.posts} />
    </Container>
  );
}

export default BlogSection;
