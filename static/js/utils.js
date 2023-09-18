function isInView(elem, offset) {
    const top = elem.getBoundingClientRect().top + offset;
    return (top > 0 && top < document.documentElement.clientHeight);
}