import { useState } from "react";

export function useToggleSingleButtonState() {
  const [activeButton, setActiveButton] = useState("left");

  return {
    activeButton,
    setActiveButton,
  };
}
