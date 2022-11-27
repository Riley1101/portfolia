import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "types/articles";

export default function ArticleCard({
  title,
  description,
  slug,
  releasedAt,
}: ArticlCardType) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="p-4 transition-all duration-500 rounded-md cursor-pointer hover:bg-gradient-to-r hover:from-theme-primary-opaque "
    >
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <span className="my-1 text-theme-primary">
        {dateformat(releasedAt, "mediumDate")}
      </span>
      <p className="my-2">{description}</p>
      <div>
        <p className="text-sm text-gray-400">Read more</p>
      </div>
    </Link>
  );
}
