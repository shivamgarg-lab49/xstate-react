import { createMachine } from "xstate";

export const loginMachine = createMachine({
  id: "toggle",
  initial: "Inactive",
  states: {
    Inactive: {
      on: { toggle: "Active" },
    },
    Active: {
      on: { toggle: "Inactive" },
    },
  },
});
