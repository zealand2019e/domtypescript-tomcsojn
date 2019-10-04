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



for (let index = 0; index < usunds.length; index++) {
    const element = usunds[0];
    listeUsund.appendChild(element)
    console.log(element)
}

document.getElementById("3").textContent = "ALMA";

//eventlistener task!
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
document.getElementById("myBtn").addEventListener("click", addToList);
let list: HTMLElement = document.getElementById("liste");
let sundt: HTMLInputElement = <HTMLInputElement>document.getElementById("sundt");



function addToList() {
    let inputText = inputElement.value;
    let newLi: HTMLElement = document.createElement("li");
    newLi.textContent = inputText;


    if (sundt.checked) {
        newLi.id = list.childElementCount.toString();
        newLi.className = "sundt"
        list.appendChild(newLi);
    } else {
        newLi.id = listeUsund.childElementCount.toString();
        newLi.className = "usundt"
        listeUsund.appendChild(newLi);
    }

}

