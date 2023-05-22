import { useEffect, useState } from "react";
function useCmdk() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // when user press cmd+k
      if (e.metaKey && e.key === "k") {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return open;
}

export default useCmdk;
