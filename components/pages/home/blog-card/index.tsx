import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "types/articles";

export default function HomeBlogCard({
  title,
  description,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="p-4 transition-all duration-500 rounded-md cursor-pointer bg-theme-accent-opaque hover:bg-gradient-to-r hover:from-theme-primary-opaque "
    >
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <div className="flex justify-between">
        <span className="block my-1 text-sm font-bold text-theme-primary">
          {dateformat(releasedAt, "mediumDate")}
        </span>
        {categories && (
          <div className="flex items-center gap-2 ">
            {categories.map((category) => (
              <>
                <span key={category} className="text-sm ">
                  {category}
                </span>
                <span className="text-theme-accent">/</span>
              </>
            ))}
          </div>
        )}
      </div>
      <p className="my-2">{description}</p>
      <div>
        <p className="text-sm text-gray-400">Read more</p>
      </div>
    </Link>
  );
}
