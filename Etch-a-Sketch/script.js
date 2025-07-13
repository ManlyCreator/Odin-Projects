const canvas = document.querySelector(".canvas")
const changeDimensionsButton = document.querySelector(".change-dimensions")

changeDimensionsButton.addEventListener("click", changeDimensions)

createGrid(16)

function createGrid(d) {
    const size = `${canvas.clientWidth/d}px`
    for (let i = 0; i < d * d; i++) {
        const div = document.createElement("div")

        div.style.width = size
        div.style.height = size
        div.style.opacity = 0.1
        div.classList.add("cell")

        div.addEventListener("mouseenter", (ev) => { 
            // *** Credit to JoJo123 on The Odin Project for the random color algorithm ***
            const chars = "0123456789ABCDEF"
            let col = "#"
            for (let i = 0; i < 6; i++) {
                col += chars[Math.floor(Math.random() * 16)]
            }
            // *** 
            div.style.background = col 
            div.style.opacity = `${Math.min(Number(div.style.opacity) + 0.1, 1.0)}`
        })

        canvas.appendChild(div)
    }
}

function changeDimensions() {
    dimensions = Math.min(Number(prompt("Enter a new grid size (<= 100):")), 100)
    clear()
    createGrid(dimensions)
}

function clear(newDimensions) {
    const cells = document.querySelectorAll(".canvas div")
    cells.forEach((cell) => {
        canvas.removeChild(cell)
    })
}