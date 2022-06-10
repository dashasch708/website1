const w = document.getElementsByClassName('wowTransparent')
console.log(w)
const arr = [...w]
for (let wow of arr) {
  wow.onmouseover = peekWow
  wow.onmouseout = hide1Wow
  wow.onclick = showWow

  function peekWow() {
    wow.style.transition = 'all 0s'
    wow.style.opacity = 0.5
  }
  function showWow() {
    wow.style.transition = 'all 0s'
    wow.style.opacity = 1
    setTimeout(hideWow, 1000)
  }
  function hideWow() {
    wow.style.transition = 'all 1s'
    wow.style.opacity = 0
  }
  function hide1Wow() {
    wow.style.opacity = 0
  }
}
