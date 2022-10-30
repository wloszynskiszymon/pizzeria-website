// Comments could be inplemented in the same way as menu, but I hardcoded 3 imaginary comments
export const initScroll = function () {
  const container = document.querySelector(".ratings__main");

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    e.preventDefault();
    pos = {
      // The current scroll
      left: container.scrollLeft,
      top: container.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    container.addEventListener("mousemove", mouseMoveHandler);
    container.addEventListener("mouseup", mouseUpHandler);

    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const mouseMoveHandler = function (e) {
    e.preventDefault();
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    container.scrollTop = pos.top + dy * 1.3;
    container.scrollLeft = pos.left + dx * 1.3;
  };

  const mouseUpHandler = function (e) {
    e.preventDefault();
    container.removeEventListener("mousemove", mouseMoveHandler);
    container.removeEventListener("mouseup", mouseUpHandler);

    container.style.cursor = "grab";
    container.style.removeProperty("user-select");
  };

  container.addEventListener("mousedown", mouseDownHandler);
};
