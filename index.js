/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  setTimeout(() => {fadeOut(div)}, range)
  // Your solution here
  // setTimeout(() => {
  //   fadeOut(div)},
  //    LONGRANGE)
  // fadeOut(div)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {fadeIn(div)}, range)
  // Your solution here
}

function fadeAllOut(el, group) {
  // debugger
  // Your solution here
  group.forEach(div => {
    if(div === el) {
      delayedFadeOut(div, LONGRANGE)
    } else {
      delayedFadeOut(div, SHORTRANGE)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div, Math.floor(Math.random() * (LONGRANGE - SHORTRANGE) + SHORTRANGE))
  })
}
