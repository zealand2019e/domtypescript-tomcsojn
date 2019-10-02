//Her skal du skrive din typescriptkode
const myElement: HTMLElement = document.getElementById("2");

let p: HTMLElement = myElement.parentElement;

p.firstElementChild.setAttribute("class", "sundt")

p.lastElementChild.setAttribute("class", "usundt")

let newElement: HTMLElement = document.createElement("li")
newElement.className = "usundt"
newElement.innerHTML = "usanka"
p.insertBefore(newElement, document.getElementById("3"));

let usunds: HTMLCollectionOf<Element> = document.getElementsByClassName("usundt");
const listeUsund: HTMLElement = document.getElementById("listeUsund")

console.log(usunds.length)
console.log(usunds[0])
console.log(usunds[1])
console.log(usunds[2])

for (let index = 0; index < usunds.length; index++) {
    const element = usunds[0];
    listeUsund.appendChild(element)
    console.log(element)
}
