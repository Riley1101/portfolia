import NextLink from "next/link";

export function H1() {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      The Joke Tax Chronicles
    </h1>
  );
}

export function H2() {
  return (
    <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      The King's Plan
    </h2>
  );
}

export function H3() {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
  );
}

export function H4() {
  return (
    <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
  );
}

export function Paragraph() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      As a result, people stopped telling jokes, and the kingdom fell into a
      gloom. But there was one person who refused to let the king's foolishness
      get him down: a court jester named Jokester.
    </p>
  );
}

export function Link() {
  return (
    <NextLink
      href="#"
      className="font-medium text-primary underline underline-offset-4"
    >
      a brilliant plan
    </NextLink>
  );
}

export function Blockqoute() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </blockquote>
  );
}

export function UnorderedList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

export function Table() {
  return (
    <table className="w-full">
      <thead>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            King's Treasury
          </th>
          <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            People's happiness
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Empty
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Overflowing
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Modest
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Satisfied
          </td>
        </tr>
        <tr className="m-0 border-t p-0 even:bg-muted">
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Full
          </td>
          <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            Ecstatic
          </td>
        </tr>
      </tbody>
    </table>
  );
}

