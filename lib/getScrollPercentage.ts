'use client'

/**
 * calculates percentage (p) of overflow content scrolled so far. 0 < p < 1
 * @param target: overflowing element to calculate scroll for
 * @returns p
 */
const getScrollPercentage = (target?: HTMLElement): number => {
  if (typeof window === 'undefined') return 0;
  const node = target || document.documentElement;
  const documentHeight = node.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollDist = node.scrollTop; // from top
  const maxScrollableDist = documentHeight - viewportHeight;
  const scrollPercentage = scrollDist / maxScrollableDist;
  
  // Return the scroll percentage, ensuring it doesn't exceed 100%
  return Math.min(scrollPercentage, 1);
};

// // Example usage
// window.onscroll = () => {
//   console.log(getScrollPercentage());
// };

export default getScrollPercentage;