import { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";

import type { JSX } from "preact";
import TestimonialCard from "../post-card/TestimonialCard.tsx";

export interface Props {
  posts: BlogPostPreview[];
  direction?: "row" | "column";
}

function FeatureTestimonials({ posts }: Props) {
  return (
    <section
      class={`flex overflow-visible gap-5 w-[1000px] pb-4 pl-4 md:w-[1400px] lg:w-full 2lg:gap-0 2lg:justify-between lg:px-4`}
    >
      {posts.map<JSX.Element>(
        (post, index) => <TestimonialCard key={index} post={post} />,
      )}
    </section>
  );
}

export default FeatureTestimonials;
