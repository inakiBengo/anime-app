import { useEffect, useRef, useState } from 'react'

interface IntersectionObserverEntry {
  isIntersecting: boolean;
}

interface IntersectionObserverCallback {
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

interface UseIntersectionResult {
  intersecting: boolean;
  observerRef: React.MutableRefObject<HTMLElement | null>;
}

const useIntersection = (): UseIntersectionResult => {
  const observerRef = useRef<HTMLElement | null>(null)
  const [intersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = observerRef.current;

    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 1
    }

    const callBack: IntersectionObserverCallback = (entries) => {
      setIntersecting(entries[0].isIntersecting)
    }

    const observer = new IntersectionObserver(callBack, options)

    element && observer.observe(element)

    return () => {
      if(element) {
        observer.unobserve(element)
      }
    }
  }, [])


  return {intersecting, observerRef}
}

export default useIntersection