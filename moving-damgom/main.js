const dot = document.querySelector(".dot");
const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  const boxRect = box.getBoundingClientRect();
  const x = e.clientX - boxRect.left - dot.clientWidth / 2;
  const y = e.clientY - boxRect.top - dot.clientHeight / 2;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
});
