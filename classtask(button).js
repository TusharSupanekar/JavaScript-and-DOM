let ol=document.createElement("ol")
ol.textContent="Fruits:-"



document.body.append(ol)




function change() {
document.body.style.backgroundColor="black";
document.body.style.color="yellow";

let li1=document.createElement("li")
li1.textContent="apple"
ol.appendChild(li1)

let li2=document.createElement("li")
li2.textContent="mango"
ol.appendChild(li2)

let li3=document.createElement("li")
li3.textContent="grapes"
ol.appendChild(li3)


  
}
