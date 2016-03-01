var input = document.querySelector("[data-action=input]")

// Store keyCode to use/see later
if (localStorage.getItem("keyCode")) {
  input.value = localStorage.getItem("keyCode")
}

input.onkeydown = function(e) {
  this.value = e.keyCode
  localStorage.setItem("keyCode", input.value)
  e.preventDefault()
}
