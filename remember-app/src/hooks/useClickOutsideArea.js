import { useEffect, useRef, useState } from "react";

const useClickOutsideSelected = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutsideSelected = (event) => {
      if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'dropdown') {
        setExpanded(false);

      }
    };

    document.addEventListener("mouseup", handleClickOutsideSelected);
    return () => {
      document.removeEventListener("mouseup", handleClickOutsideSelected);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideSelected;