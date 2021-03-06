/**
 * Resize handler. Calculate widths and add classes.
 */
function update() {
  console.time('onResize')

  var elements = document.querySelectorAll('[data-breaks]')
  var element
  var classes
  var elementWidth
  var breakPoints
  var breakPoint

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i]
    classes = element.className
    elementWidth = element.offsetWidth
    breakPoints = element.getAttribute('data-breaks').split(',')
    classes = classes.replace(/\s*[<>]\d+/g, '')
    for (var j = 0, k = breakPoints.length; j < k; j++) {
      breakPoint = breakPoints[j]
      if (__MOBILE_FIRST__) {
        if (elementWidth >= +breakPoint) {
          classes += ' >' + breakPoint
        } else {
          break
        }
      } else {
        if (elementWidth <= +breakPoint) {
          classes += ' <' + breakPoint
        }
      }
    }
    element.className = classes
  }

  console.timeEnd('onResize')
}

/**
 * Initialize responsive elements. Called once on page load.
 */
function init() {
  update()
  if (__IE8_SUPPORT__) {
    if (window.addEventListener) {
      window.addEventListener('resize', update, false)
    } else {
      window.attachEvent('onresize', update)
    }
  } else {
    window.addEventListener('resize', update, false)
  }
};

/**
 * Uninitialize responsive elements.
 */
function uninit() {
  if (__IE8_SUPPORT__) {
    if (window.removeEventListener) {
      window.removeEventListener('resize', update, false)
    } else {
      window.detachEvent('onresize', update)
    }
  } else {
    window.removeEventListener('resize', update, false)
  }

  const elements = document.querySelectorAll('[data-breaks]')
  let element

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i]
    element.className = element.className.replace(/\s*[<>]\d+/g, '')
  }
}

export { init, uninit, update }
