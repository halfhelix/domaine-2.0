// Sets data-animate to 'false' when element is in view to all for CSS transitions

interface Options {
  bidirectional?: boolean,
  rootMargin?: string,
  threshold?: number,
  delay?: number
}

export function createViewportObserver(element: HTMLElement, options: Options) {

  const defaultSettings = {
    bidirectional: false,
    rootMargin: "0% 0% 20% 0%",
    threshold: 0.5,
    delay: 0
  } 

  const mergedSettings = {...defaultSettings, ...options};

  const event = new Event("inView");

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.dispatchEvent(event);
          return entry.target.dataset.animate = false
        }, mergedSettings.delay)
      } 
      if (mergedSettings.bidirectional) return entry.target.dataset.animate = true;
    });
  };

  
  let viewportAnimationObserver = new IntersectionObserver(callback, mergedSettings);
  element.dataset.animate = "true";
  viewportAnimationObserver.observe(element);

}