import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/30_ucs/Universal Comms API/v1/room-management",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/server-liveness",
          label: "Server liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/server-readiness",
          label: "Server readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "rooms",
      items: [
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/create-room",
          label: "Create room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/list-rooms",
          label: "List rooms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/get-room-info",
          label: "Get room info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/update-room-info",
          label: "Update room info",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/close-room",
          label: "Close room",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/get-chat-info-by-room-id",
          label: "Get chat info by room ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/list-chat-messages",
          label: "List chat messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/list-chat-messages-in-a-range",
          label: "List chat messages in a range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/kick-user",
          label: "Kick user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/update-announcement",
          label: "Update announcement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/delete-announcement",
          label: "Delete announcement",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "playback",
      items: [
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/create-playback-room",
          label: "Create playback room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/start-playback",
          label: "Start playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/pause-playback",
          label: "Pause playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/stop-playback",
          label: "Stop playback",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "attachment",
      items: [
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/file-upload",
          label: "File upload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v1/file-download",
          label: "File download",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
