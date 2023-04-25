import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "types/articles";

export default function SnippetCard({
  title,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  return (
    <Link
      href={`/snippets/${slug}`}
      className="p-4 transition-all duration-500 border rounded-md cursor-pointer hover:bg-gradient-to-r hover:from-theme-accent-opaque border-theme-accent-opaque"
    >
      <h2 className="text-lg text-white font-semibold mb-2">{title}</h2>
      <div className="flex justify-between">
        <span className="block my-1 text-sm  text-theme-primary">
          {dateformat(releasedAt, "mediumDate")}
        </span>
        {categories && (
          <div className="flex items-center gap-2 ">
            {categories.map((category) => (
              <div key={category}>
                <span className="text-sm ">{category}</span>
                <span className="text-theme-accent"> /</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
