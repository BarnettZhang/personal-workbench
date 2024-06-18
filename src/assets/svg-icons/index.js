const req = import.meta.glob("./icons/*.svg");
console.log(req);

const icons = Object.keys(req).map((item) => {
  return item.split("./icons/", 1).split(".svg", 0);
});

console.log(icons);
export default icons;
