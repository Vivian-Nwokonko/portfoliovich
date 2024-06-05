const tag = document.querySelector("#to-top")
tag.onclick = e => {
    window.scrollTo(0, 0)
}

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        tag.classList.add("false")
    } else {
        tag.classList.remove("false")
    }
})