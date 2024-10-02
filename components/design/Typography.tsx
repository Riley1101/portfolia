import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1(props: TypographyProps) {
  let { children, className } = props;
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2(props: TypographyProps) {
  let { children, className } = props;
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3(props: TypographyProps) {
  let { children, className } = props;
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4(props: TypographyProps) {
  let { children, className } = props;
  return (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function Paragraph(props: TypographyProps) {
  let { children, className } = props;
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4 text-lg", className)}
    >
      {children}
    </p>
  );
}

export function Blockqoute({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

interface LinkProps { }

export function Link(props: React.AnchorHTMLAttributes<LinkProps>) {
  const { children, className, ...rest } = props;
  return (
    <NextLink
      href="#"
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className,
      )}
      {...rest}
    >
      {children}
    </NextLink>
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
