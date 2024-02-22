import NavASide from "../nav-aside/index";

type Props = {
  visible: boolean;
  toggle: () => void;
};

export default function NavModal({ visible, toggle }: Props) {
  if (visible)
    return (
      <div
        role="dialog"
        className="fixed top-0 left-0 grid place-items-center  z-[999] w-full h-dvh backdrop-filter backdrop-blur-lg bg-[#121212] bg-opacity-[0.6]"
        onClick={toggle}
      >
        <div
          className="w-[90%] bg-[#141518] rounded-lg shadow-lg "
          onClick={(e) => e.stopPropagation()}
        >
          <NavASide />
        </div>
      </div>
    );
  return <></>;
}
