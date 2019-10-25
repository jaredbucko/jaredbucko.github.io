document.querySelector(".mainleft h3").addEventListener("click", function(e) {
  console.log("clicked on", e.target);
  var clickedelement = e.target;
  var link = clickedelement.querySelector("a");
  console.log("found link", link.href);
  window.location = link.href;
});

document.querySelector(".mainleft h3").addEventListener("click", (e) =>  {
  window.location = e.target.querySelector("a").href;
});