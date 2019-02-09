document.querySelectorAll(".points").forEach(elem => {
  const point = elem.getAttribute("data-point") + "%";
  elem.querySelector(".fill").style.width = point;
});
