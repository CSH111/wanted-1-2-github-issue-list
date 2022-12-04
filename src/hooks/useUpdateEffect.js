import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, deps) => {
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    callback();
  }, [...deps]);
};

export default useUpdateEffect;
