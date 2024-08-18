function ApplyColor(event) {
  event.preventDefault();
  var selectedColor = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = selectedColor;
}

document.getElementById("applyColor").addEventListener("click", ApplyColor);
