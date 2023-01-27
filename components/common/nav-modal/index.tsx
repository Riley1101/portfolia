import NavIconLink from "../link";
import { Bars2Icon } from "@heroicons/react/20/solid";

import { navs, social } from "../nav-aside";
type Props = {
  visible: boolean;
  toggle: () => void;
};

export default function NavModal({ visible, toggle }: Props) {
  if (visible)
    return (
      <div className="fixed top-0 left-0 z-50 flex flex-col w-full h-screen text-white bg-gray-900 backdrop-filter">
        <div className="flex flex-col items-center justify-center gap-8 my-auto">
          <button
            onClick={() => toggle()}
            className="absolute flex p-2 border border-gray-800 rounded-md cursor-pointer top-8 right-8 lg:hidden text-theme-body md:block bg-opacity-10 hover:bg-theme-primary hover:bg-opacity-5"
          >
            <Bars2Icon className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center gap-3">
            {navs.map((nav) => (
              <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
                {nav.name}
              </NavIconLink>
            ))}
          </div>
          <hr className="border border-gray-800 cursor-pointer" />
          <div className="flex flex-col items-center gap-3">
            {social.map((nav) => (
              <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
                {nav.name}
              </NavIconLink>
            ))}
          </div>
        </div>
      </div>
    );
  return <></>;
}
