import Link from "next/link";
interface Props {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function NavIconLink({ children, icon, href }: Props) {
  return (
    <Link
      href={href}
      className={` flex items-center py-3 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  border-transparent px-4 max-w-max rounded-full`}
    >
      <div className="flex gap-4 text-sm">
        {icon}
        {children}
      </div>
    </Link>
  );
}

export default NavIconLink;
