import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { SyncedText } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";

type Store = {
  resume: {
    content?: SyncedText;
  };
};

export const useCollaborativeStore = (roomId: string) => {
  const store = syncedStore<Store>({
    resume: {},
  });

  store.resume.content = new SyncedText("");

  // Create a document that syncs automatically using WebRTC
  const doc = getYjsDoc(store);

  let provider: WebsocketProvider | undefined;
  if (typeof window !== "undefined") {
    console.log(window.location.origin);
    // Connect to peers and sync automatically using WebRTC
    provider = new WebsocketProvider(
      `${window.location.protocol}//${window.location.hostname}:1234`,
      `resume-${roomId}`,
      doc
    );

    provider.on("status", (event) => {
      console.log(event.status); // logs "connected" or "disconnected"
    });
  }

  return {
    store,
    provider,
  };
};
