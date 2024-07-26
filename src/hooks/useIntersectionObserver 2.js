// src/hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, threshold, root, rootMargin]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
