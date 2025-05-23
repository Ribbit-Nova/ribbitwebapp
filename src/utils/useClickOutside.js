import { useEffect } from "react";

const useClickOutside = (triggerRef, popoverRef, isVisible, setIsVisible) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        triggerRef.current?.contains(event.target) ||
        popoverRef.current?.contains(event.target)
      ) {
        return;
      }
      setIsVisible(false);
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, triggerRef, popoverRef, setIsVisible]);
};

export default useClickOutside;
