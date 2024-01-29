const pages = {
    "home": "white",
    "projects": "lightblue",
    "about": "lightgreen"
}


const showPage = (page) => {
    document.querySelector('h1').innerText = page
    document.querySelector('#content').style.backgroundColor = pages[page]
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnTheme").addEventListener("click", function () {
        document.documentElement.classList.toggle("dark")
        document.getElementById("btnTheme").innerText = document.documentElement.classList.contains("dark") ? "light" : "dark"
    })
    document.getElementById("btnMenu").addEventListener("click", function () {
        document.getElementById("popupMenu").classList.toggle("hidden")
    })

    document.querySelectorAll("a").forEach(function (el) {
        el.addEventListener("click", function () {
            showPage(el.innerText.toLowerCase())
        })
    })
})