import NavIconLink from "../link";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { navs, social } from "../nav-aside";
type Props = {
  visible: boolean;
  toggle: () => void;
};

export default function NavModal({ visible, toggle }: Props) {
  if (visible)
    return (
      <div
        className="fixed top-0 right-0 z-[999] flex w-full h-screen  backdrop-filter backdrop-blur-[20px] bg-gray-900/20"
        onClick={() => toggle()}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="flex flex-col ml-auto w-[70%]
       text-white bg-[#131127]"
        >
          <div className="flex flex-col justify-end gap-8 p-4 my-auto">
            <button
              onClick={() => toggle()}
              className="flex p-2 ml-auto border border-gray-800 rounded-md cursor-pointer max-w-max top-8 right-8 text-theme-body md:block bg-opacity-10 hover:bg-theme-primary hover:bg-opacity-5"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-3">
              {navs.map((nav) => (
                <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
                  {nav.name}
                </NavIconLink>
              ))}
            </div>
            <hr className="border border-gray-800 cursor-pointer" />
            <div className="flex flex-col gap-3">
              {social.map((nav) => (
                <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
                  {nav.name}
                </NavIconLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
}
