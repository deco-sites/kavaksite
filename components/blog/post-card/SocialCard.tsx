import type { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import Icon from "../../Icon.tsx";

export interface Props {
  post: BlogPostPreview;
  arrangementType?: "flex" | "grid";
}

function SocialCard({ post, arrangementType = "flex" }: Props) {
  function formatPrice(value: number) {
    return value.toLocaleString("pt-br", {
      maximumFractionDigits: 3,
    });
  }

  const socialCardIcon = post.category.name == "instagram"
    ? "instagramIcon"
    : post.category.name == "facebook"
    ? "facebookIcon"
    : post.category.name == "linkedin"
    ? "linkedinIcon"
    : post.category.name == "youtube"
    ? "youtubeIcon"
    : "twitterIcon";

  return (
    <a
      href={post.imageAlt}
      class={`${
        arrangementType == "grid" ? "w-full" : "w-[200px]"
      } max-w-[200px] flex justify-start items-center gap-3`}
    >
      <div
        class={`w-[35px] h-[35px] bg-black rounded-[50%] flex justify-center items-center`}
      >
        {/* <div dangerouslySetInnerHTML={{ __html: socialCardIcon }}></div> */}
        <Icon id={socialCardIcon} style={"width:28px; height:28px;"} />
      </div>
      <div class={`flex flex-col justify-center items-start`}>
        <p class={`text-sm font-semibold`}>
          {formatPrice(parseInt(post.category.slug))}
        </p>
        <span>{post.summary}</span>
      </div>
    </a>
  );
}

export default SocialCard;
