import type { LoaderReturnType } from "$live/types.ts";
import { SectionTitle } from "deco-sites/kavaksite/components/ui/SectionTitle.tsx";
import { Container } from "deco-sites/kavaksite/components/ui/Container.tsx";
import type {
  BlogPostPreview,
  BlogSectionPosts,
} from "deco-sites/std/commerce/butterCMS/types.ts";
import type { FieldTypes } from "deco-sites/kavaksite/butterCMS/types.ts";
import FeaturedTestimonials from "./sections/FeaturedTestimonials.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "deco-sites/kavaksite/components/Button.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  starsAvaliantion: LiveImage;
  altImage: string;
  numberRating: string;
  section: LoaderReturnType<BlogSectionPosts>;
  variant: FieldTypes;
  Cta: {
    href: string;
    label: string;
  };
}

export interface SectionContentProps {
  type: FieldTypes;
  posts: BlogPostPreview[];
}

export function SectionContent(
  { type, posts }: SectionContentProps,
) {
  if (type === "featured_testimonials") {
    return <FeaturedTestimonials posts={posts} />;
  }

  return <p>For other variants you must use other sections</p>;
}

function BlogSection(
  { section, variant, title, starsAvaliantion, altImage, numberRating, Cta }:
    Props,
) {
  return (
    <>
      <Container>
        <div
          class={`px-4 mb-10 flex flex-col items-center md:flex-row md:justify-around md:mt-0 md:mb-10 md:mx-auto 2lg:justify-center `}
        >
          <SectionTitle class="text-xl text-center mb-2 md:mb-0 2lg:text-[32px] 2lg:mr-10">
            {title}
          </SectionTitle>
          <div class="flex gap-4 justify-center items-center">
            <span class="text-lg font-black">{numberRating}</span>
            <Picture class="w-full">
              <Source
                media="(max-width: 1200px)"
                src={starsAvaliantion}
                width={152}
              />
              <Source
                media="(min-width: 1201px)"
                src={starsAvaliantion ? starsAvaliantion : starsAvaliantion}
                width={200}
              />
              <Image
                width={200}
                src={starsAvaliantion}
                alt={altImage}
                loading={`lazy`}
                decoding={`async`}
                fetchPriority={`low`}
                class="w-[152px]"
              />
            </Picture>
          </div>
        </div>
      </Container>
      <Container class="overflow-x-scroll snap-x lg:overflow-x-hidden">
        <SectionContent type={variant} posts={section.posts} />
      </Container>
      <div class={`flex justify-center items-center mt-10 px-8 2lg:mt-6`}>
        <Button
          type="primary"
          href={Cta?.href}
          style="w-full sm:max-w-[250px] md:px-4 2lg:max-w-[280px]"
        >
          {Cta?.label}
        </Button>
      </div>
    </>
  );
}

export default BlogSection;
