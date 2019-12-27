function isElementVisible(selector) {
  const el = document.querySelector(selector);

  if (!el || typeof window === "undefined") {
    return false;
  }

  const rect = el.getBoundingClientRect();
  const vWidth = window.innerWidth || doc.documentElement.clientWidth;
  const vHeight = window.innerHeight || doc.documentElement.clientHeight;

  const efp = function(x, y) {
    return document.elementFromPoint(x, y);
  };

  // Return false if it's not in the viewport
  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > vWidth ||
    rect.top > vHeight
  )
    return false;

  // Return true if any of its four corners are visible
  return (
    el.contains(efp(rect.left, rect.top)) ||
    el.contains(efp(rect.right, rect.top)) ||
    el.contains(efp(rect.right, rect.bottom)) ||
    el.contains(efp(rect.left, rect.bottom))
  );
}

export default isElementVisible;
