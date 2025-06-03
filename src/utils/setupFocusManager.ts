import { focusManager } from "@tanstack/react-query";

// Code to ensure that the focus manager is aware of the browser's focus state
// This is necessary for the React Query Devtools to work correctly
// as it relies on the focus state to determine whether to refetch data or not
export const setupFocusManager = () => {
  focusManager.setEventListener((handleFocus) => {
    const setIsFocused = () => {
      handleFocus(true);
    };
    const setIsNotFocused = () => {
      handleFocus(false);
    };

    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("focus", setIsFocused, false);
      window.addEventListener("blur", setIsNotFocused, false);

      return () => {
        // Be sure to unsubscribe if a new handler is set
        window.removeEventListener("focus", setIsFocused);
        window.removeEventListener("blur", setIsNotFocused);
      };
    }
  });
};
