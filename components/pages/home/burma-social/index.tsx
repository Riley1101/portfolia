import Image from "next/image";
import { getPosts } from "@/utils/masto";
import type { MastodonPost } from "@/utils/masto";
import dateFormat from "dateformat";
import { rgbDataURL } from "@/utils/image-blur";
import { convert } from "html-to-text";
import asyncComponent from "@/utils/async-component";

export const SocialCard = ({ post }: { post: MastodonPost }) => {
  const { content, created_at, media_attachments, url } = post;
  const media = media_attachments[0] || null;
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <div className="flex flex-col gap-2 p-2 border rounded-md cursor-pointer cusor-pointer hover:bg-gradient-to-r hover:from-theme-accent-opaque border-theme-accent-opaque md:p-4 border-theme-primary-opaque bg-theme-accent-opaque">
        <p className="text-sm text-theme-accent">
          {dateFormat(created_at, "mmm dd yyyy HH:MM")}
        </p>
        <div className="html-renderer text-gray-500">{convert(content)}</div>

        {media && (
          <Image
            placeholder="blur"
            blurDataURL={rgbDataURL(2, 129, 210)}
            className="object-contain w-full aspect-video max-h-[130px] rounded-md"
            width={130}
            height={130}
            src={media.preview_url}
            alt="something"
          />
        )}
      </div>
    </a>
  );
};

export const BurmaSocial = asyncComponent(async () => {
  const posts = await getPosts();
  return (
      <div className="lg:w-[90%]  p-4 bg-theme-accent-opaque w-full border border-theme-primary-opaque rounded-md">
        <div className="flex items-center gap-4 ">
          <Image
            className="border-2 rounded-full w-[45px] h-[45px] cursor-pointer aspect-video border-theme-primary-opaque hover:border-theme-primary"
            width={45}
            height={45}
            src="/images/mastro.png"
            alt="profile"
          ></Image>
          <div className="flex flex-col overflow-auto">
            <a
              href="https://burma.social/@arkardev"
              target={"_blank"}
              rel="noreferrer"
              className="block object-contain cursor-pointer text-body hover:text-theme-accent"
            >
              arkardev
            </a>
            <span className="text-sm text-gray-500">@burma.social</span>
          </div>
        </div>
        <div className="flex items-center gap-2 my-4 mt-6 text-sm font-bold">
          <Image
            src={"/images/mastodon.svg"}
            width={20}
            height={20}
            alt="mastodon"
          ></Image>
          Recent posts
        </div>
        <div className="flex flex-col gap-4 max-h-[300px] overflow-auto pr-1">
          {posts.map((item, index) => {
            return <SocialCard key={index} post={item}></SocialCard>;
          })}
        </div>
      </div>
  );
});

