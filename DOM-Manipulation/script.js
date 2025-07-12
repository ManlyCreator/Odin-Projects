const container = document.querySelector(".container");

const p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.setAttribute("style", "color: red;");
container.appendChild(p);

const h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.setAttribute("style", "color: blue;");
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background: pink; border: 4px solid black");
container.appendChild(div);

const inner_h1 = document.createElement("h1");
inner_h1.innerText = "I'm in a div";
div.appendChild(inner_h1);

const inner_p = document.createElement("p");
inner_p.innerText = "ME TOO!";
div.appendChild(inner_p);
