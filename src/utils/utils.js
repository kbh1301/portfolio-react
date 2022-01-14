import { useEffect, useState, useRef } from 'react';
import { contentRoutesNames } from '../components/Content/ContentRouter';

// function to prompt re-render when popstate is triggered from navlinks
export const useReRender = (setCurrentPath) => {
  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onLocationChange = () => {
      // returns a route name if one is found in the current url
      const path = contentRoutesNames.find(name => window.location.pathname.includes(name))
      setCurrentPath(path);
    }
    window.addEventListener('popstate', onLocationChange);
    // clean up event listener
    return () => {
        window.removeEventListener('popstate', onLocationChange)
    };
  }, [setCurrentPath])
}

// function to determine if component is in viewport
export const useInViewport = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

// timeout function
export const timeout = (ms) => new Promise( res=> setTimeout(res, ms));

// function to update url with new route and popstate for re-render
export const routeChange = (path) => {
  // update url
  window.history.pushState({}, "", path);
  // communicate to routes that URL has changed
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// media query function
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}