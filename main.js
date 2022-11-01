const addTo = document.querySelector("#addTo");
const input = document.querySelector(".input");
const ulList = document.querySelector("#myUL");
const imgtwo = document.querySelector(".imgtwo");

addTo.addEventListener("click",(e)=>{
    
    e.stopPropagation()
    let temp = `<li>${input.value}  <img src="/images/Group56.png"></li>`
    ulList.innerHTML+=temp
    input.value=""
   
})
ulList.addEventListener("click",(e)=>{
  if(e.target.tagName="IMG"){
 e.target.parentElement.remove()
  }
})

const sortButton = document.querySelector('.imgone>img')

sortButton.addEventListener("click", () => {
    let ar = []
    const data = [...liElements?.children]
    data.forEach(item => {
        ar.push(item.innerHTML)
    })
    ar.sort();
    liElements.innerHTML = ""
    ar.forEach(item => {
        let li = `<li>${item}   </li>`

        liElements.innerHTML += li
    })
})







// let myNodelist = document.getElementsByTagName("LI");

// for (i = 0; i < myNodelist.length; i++) {
//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }


// let close = document.getElementsByClassName("close");

// for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }


// let list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);


// function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("Bir sheyler elave et!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             let div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }