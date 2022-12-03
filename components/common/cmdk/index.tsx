import { Command } from "cmdk";
import React from "react";

interface Props {
  toggle(): void;
  visible: boolean;
}
const CommandMenu = ({ toggle, visible }: Props) => {
  React.useEffect(() => {
    const down = (e: any) => {
      if (e.key === "k" && e.metaKey) {
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  return (
    <Command.Dialog
      open={visible}
      onOpenChange={toggle}
      label="Global Command Menu"
    >
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog>
  );
};
export default CommandMenu;
