const isOverflowing = element => element.scrollWidth > element.offsetWidth

const adjustFontSize = (element, delta) => {
    let fontSize = element.style.fontSize
    fontSize = parseInt(fontSize.slice(0, fontSize.length - 2), 10)
    element.style.fontSize = (fontSize + delta).toString() + 'px'
}

const setFontSize = (element, size) => element.style.fontSize = size + 'px'

const setElementHeight = (element, height) => element.style.height = height + 'px'

const getOffset = element => {
    const rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    return { 
        top: rect.top + scrollTop, 
        left: rect.left + scrollLeft, 
        width: rect.width, 
        height: rect.height }
}

export { 
    isOverflowing, 
    adjustFontSize,
    setFontSize,
    setElementHeight,
    getOffset
}

