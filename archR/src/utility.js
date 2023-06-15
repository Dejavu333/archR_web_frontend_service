function S (selector) {
  return document.querySelector(selector)
}

function SA (selector) {
    return document.querySelectorAll(selector)
}

function C (tag) {
    return document.createElement(tag)
}

export { S, SA, C }