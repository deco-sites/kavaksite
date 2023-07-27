import type { BlogPostPreview } from "deco-sites/kavaksite/butterCMS/types.ts";
import Icon from "../../Icon.tsx";

export interface Props {
  post: BlogPostPreview;
}

const iconInstagram = `
<svg style="fill: var(--white); height: inherit; width: inherit;" viewBox="0 0 1024 1024"><path d="M752.064 316.859c0 24.009-19.463 43.472-43.472 43.472s-43.472-19.463-43.472-43.472 19.463-43.472 43.472-43.472 43.472 19.463 43.472 43.472zM514.995 329.224c-100.945 0-182.776 81.832-182.776 182.776s81.832 182.776 182.776 182.776c100.945 0 182.776-81.832 182.776-182.776-.11-100.901-81.877-182.668-182.767-182.776h-.009zm0 299.86c-64.665 0-117.084-52.421-117.084-117.084s52.421-117.084 117.084-117.084c64.665 0 117.084 52.421 117.084 117.084-.11 64.621-52.466 116.976-117.075 117.084h-.01z"></path><path d="M660.095 883.156H363.711c-123.094-.111-222.854-99.868-222.965-222.953V363.809c.111-123.094 99.868-222.854 222.953-222.965h296.394c123.178 0 223.047 99.8 223.157 222.953v296.394c-.111 123.162-99.979 222.965-223.157 222.965zM363.713 210.593c-84.574.11-153.105 68.641-153.216 153.204v296.394c.11 84.574 68.641 153.105 153.204 153.216h296.394c84.574-.11 153.105-68.641 153.216-153.204V363.809c-.11-84.574-68.641-153.105-153.204-153.216h-.01z"></path></svg>
`;

function SocialCard({ post }: Props) {

  function formatPrice(value: number) {
    return value.toLocaleString('pt-br', {
      maximumFractionDigits: 3,
    })
  }

  const socialCardIcon = post.category.name == "instagram" ? "instagramIcon" : 
                        post.category.name == "facebook" ? "facebookIcon" :
                        post.category.name == "linkedin"? "linkedinIcon" :
                        post.category.name == "youtube" ? "youtubeIcon" : "twitterIcon"
  
  return (
    <a href={post.imageAlt} class={`w-[200px] flex justify-start items-center gap-3`}>
      <div class={`w-[35px] h-[35px] bg-black rounded-[50%] flex justify-center items-center`}>
        {/* <div dangerouslySetInnerHTML={{ __html: socialCardIcon }}></div> */}
        <Icon id={socialCardIcon} style={"width:28px; height:28px;"}/>
      </div>
      <div class={`flex flex-col justify-center items-start`}>
        <p class={`text-sm font-semibold`}>{formatPrice(parseInt(post.category.slug))}</p>
        <span>{post.summary}</span>
      </div>
    </a>
  );
}

export default SocialCard;
