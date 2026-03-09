import cx from "classnames";
import { handleSubmit } from "@/actions/newsLetterActions";

export function NewsLetter() {
  return (
    <div className="relative group my-4 flex flex-col overflow-hidden rounded-theme border border-theme-accent-opaque bg-theme-accent-opaque px-6 py-4">
      <div
        className="absolute -bottom-1/2 right-[-60px] z-0 w-[30%] aspect-square origin-bottom-left gradient-one transition-transform duration-500 group-hover:scale-[1.2]"
        style={{ opacity: 0.1 }}
        aria-hidden
      />
      <div className="absolute left-0 top-0 h-full w-[5px] border-l-2 border-theme-primary" aria-hidden />
      <div className="relative z-10 text-left">
        <span className="mb-2 mt-2 block text-lg font-bold text-theme-accent md:text-xl">
          Subscribe to my newsletter
        </span>
        <p className="text-theme-body/80">
          Join my web development newsletter to receive the latest updates,
          tips, and trends directly in your inbox.
        </p>
      </div>
      <form
        action={handleSubmit}
        className="group my-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center"
      >
        <label htmlFor="newsletter-name" className="sr-only">
          Your name
        </label>
        <input
          id="newsletter-name"
          type="text"
          name="name"
          autoComplete="name"
          spellCheck={false}
          placeholder="e.g. Jane…"
          className="w-full rounded-theme border border-theme-primary-opaque bg-transparent px-4 py-2 outline-none transition-colors hover:border-theme-accent-opaque focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base"
          required
        />
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          spellCheck={false}
          placeholder="you@example.com…"
          className="w-full rounded-theme border border-theme-primary-opaque bg-transparent px-4 py-2 outline-none transition-colors hover:border-theme-accent-opaque focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base"
          required
        />
        <button
          type="submit"
          className={cx(
            "z-10 flex w-full cursor-pointer items-center justify-center rounded-theme border border-theme-primary-opaque px-4 py-2 md:w-auto",
            "transition-[color,background-color,border-color] duration-300",
            "hover:border-theme-primary/5 hover:bg-theme-primary/5 hover:text-theme-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base",
          )}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
