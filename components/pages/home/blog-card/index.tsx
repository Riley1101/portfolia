import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "types/articles";
import Image from "next/image";

export default function HomeBlogCard({
  title,
  description,
  slug,
  releasedAt,
  mainImage,
  categories,
}: ArticlCardType) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="flex flex-col items-center gap-4 p-4 transition-all duration-500 rounded-md
      cursor-pointer md:flex-row bg-theme-accent-opaque hover:bg-gradient-to-r hover:from-theme-primary-opaque "
    >
      <div className="basis-[70%]">
        <h2 className="text-lg tefont-semi xt-white mb-2 leading-relaxed font-semibold">{title}</h2>
        <p className="my-2 text-base line-clamp-2 text-gray-400">{description}</p>
        <div className="flex justify-between items-center gap-4">
          <span className="block my-1 text-sm text-theme-primary">
            {dateformat(releasedAt, "mediumDate")}
          </span>
          {categories  && (
            <div className="flex items-center gap-2 ">
              {categories.map((category) => (
                <div key={category}>
                  <span className="text-sm ">{category}</span>
                  <span className="text-theme-accent"> / </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="justify-end w-full ml-auto md:w-auto">
        <Image
          src={mainImage}
          alt={title}
          width={150}
          height={150}
          className="w-full md:w-[150px] min-h-[100px] aspect-video object-cover rounded-md max-h-[170px]"
        ></Image>
      </div>
    </Link>
  );
}
