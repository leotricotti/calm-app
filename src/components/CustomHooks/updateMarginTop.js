import { useRef, useEffect } from "react";

function useUpdateMarginTop(elementClassName) {
  const ref = useRef(null);

  useEffect(() => {
    function updateMarginTop() {
      const elementHeight = ref.current.offsetHeight;
      const elementUnder = document.querySelector(`.${elementClassName}`);
      if (elementUnder) {
        elementUnder.style.marginTop = elementHeight + "px";
      }
    }

    updateMarginTop();
    window.addEventListener("resize", updateMarginTop);
    return () => {
      window.removeEventListener("resize", updateMarginTop);
    };
  }, [elementClassName]);

  return ref;
}

export default useUpdateMarginTop;
