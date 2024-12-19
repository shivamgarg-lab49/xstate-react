import { setup, fromPromise, log } from "xstate";
import { User } from "../types/types";
import { createActorContext } from "@xstate/react";

type LoginEvent = {
  type: "Check User State";
};

export const loginMachine = setup({
  types: {} as {
    events: LoginEvent;
  },
  actors: {
    checkIfUserIsAlreadySaved: fromPromise<User>(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = localStorage.getItem("savedUser");
          if (user !== null && user !== undefined) {
            resolve(JSON.parse(user));
          } else {
            reject("No user saved");
          }
        }, 1000);
      });
    }),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBsD2UCWA7AsgQwGMALbMAOgAlUBbMAYgGEiwCBrAAgFVYwAndgMoAXPELABtAAwBdRKAAOqWBiEZUWOSAAeiAIwBmABxkAbABZJJ-QCYT1gJz77ZgKz6ANCACee65LLWLgC+QZ5omLiEJFjkTCwcAngAbpBcPLx0EOrk2EmorOTh2PjEpGRxbILJqdx8CLmoBKJqWFLSbZqKyqrqmjoIAOyuZLoDuoaGtg5Orp4+CLqS1gHBoSBFkaUx5cyViSkQaXx0fLyovGTyyKIAZufUZBsl0bG7CdWHtbz1WHlNPa0ZB0kCAuioWn1EEMXCMxhMpo5nC45noTP4hvZ7IYzENdNZFs4QmssKgIHBNE8oqROkpwb0Qf0ALQmFEIRkwzGcyS6Mw8-QuQwDfQhMLoYpU7ZUWg07oQhmIMzWVl49GrUURZ5lCrvA5HXgyukaeUIGzGUbjSZ2RGuDzeRCGXRkNXrMWbF5kL7sACiWgwsCEBoBkIWS30Tt0LisCJmyLtIcdgRFLo1EvInpJQm9vv9gbloH6i2sYZcEajVpjypc9jIA1WISAA */
  id: "loginMachine",
  initial: "Home",
  states: {
    Home: {
      on: {
        "Check User State": {
          actions: log("Checking User State event has been fired"),
          target: "Check Saved User",
        },
      },
    },

    "Check Saved User": {
      tags: ["state-loading"],

      description:
        "Here in this state we are checking if user is already logged in",

      invoke: {
        src: "checkIfUserIsAlreadySaved",
        onDone: {
          target: "User Exist",
        },
        onError: {
          target: "User not Exist",
        },
      },
    },

    "User Exist": {},
    "User not Exist": {},
  },
});

export const LoginMachineContext = createActorContext(loginMachine);
