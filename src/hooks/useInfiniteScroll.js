import { useEffect } from "react";

import { isEndOfPage } from "../utils";

const useInfiniteScroll = (callback, deps = []) => {
  useEffect(() => {
    const delayTime = 200;
    let timer;
    const debounce = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (isEndOfPage()) {
          callback();
        }
      }, delayTime);
    };
    window.addEventListener("scroll", debounce);
    return () => {
      window.removeEventListener("scroll", debounce);
    };
  }, [...deps]);
};

export default useInfiniteScroll;
