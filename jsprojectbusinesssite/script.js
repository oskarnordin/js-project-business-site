document.getElementById("hamburger-btn").addEventListener("click", function() {
    let menu = document.getElementById("nav-menu")
    let title = document.getElementById("main-title")

    // Toggle menu visibility
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none"

    // Toggle text shadow on H1
    if (title.style.textShadow && title.style.textShadow !== "4px 4px 10px rgba(0, 0, 0, 0.2)") {
        title.style.textShadow = "4px 4px 10px rgba(0, 0, 0, 0.2)"
    } else {
        title.style.textShadow = "none"
    }
})

