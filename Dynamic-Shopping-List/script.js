const input = document.querySelector(".input-container input")
const button = document.querySelector(".input-container button")
const itemsList = document.querySelector(".input-container ul")

function addItem() {
    if (input.value == "") return
    const item = document.createElement("li")
    const itemName = document.createElement("span")
    const deleteButton = document.createElement("button")

    itemName.innerText = input.value
    deleteButton.innerText = "Delete"

    item.appendChild(itemName)
    item.appendChild(deleteButton)

    itemsList.appendChild(item)

    deleteButton.addEventListener("click", (e) => { itemsList.removeChild(item) })
}

button.addEventListener("click", addItem)