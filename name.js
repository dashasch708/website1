document.getElementById('nameButton').onclick = currentName
function currentName() {
  document.getElementById('helloTxt').value =
    document.getElementById('nameUser').value
}
