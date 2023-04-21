import { createClient, LiveObject, LiveList} from "@liveblocks/client";

import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_fal2HXfh9McH86E7HgiCzbC9qvpPnfATihxHvGRw8-c3qwvtPaPOVxnTMVZ46Q9b",
});

type Storage = {
  emojis: LiveObject<{ emojis : LiveList<{ x : number, y : number , emoji : string}>}>;
};
type Presence = {
  cursor: { x: number; y: number } | null;
};

export const { useStorage, RoomProvider,  useOthers, useUpdateMyPresence, } = createRoomContext<Presence, Storage>(client);
