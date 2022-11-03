const addTo = document.querySelector("#addTo");
const input = document.querySelector(".input");
const ulList = document.querySelector("#myUL");
const imgtwo = document.querySelector(".imgtwo");
const sortButton2 = document.querySelector('.img2')
const sortButton = document.querySelector('.imgone')


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



let liElements = document.getElementById('myUL')

sortButton?.addEventListener('click',()=>{
    sortButton2.style.display = 'block';
    sortButton.style.display = 'none';
    sortButton2.style.marginBottom = '20px';
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
    // ar.sort((c,t)=>{
    //     if (c > t) {
    //         return -1;
    //         }
    //         if (c < t) {
    //           return 1;
    //         }
    //         // a bərabərdir b
    //         return 0;
    

    // })

 

 })
      
  
 sortButton2?.addEventListener('click',()=>{
    sortButton.style.display = 'block';
    sortButton2.style.display = 'none';
    let ar = [];
    const data = [...liElements.children];
    data.forEach(item =>{
      ar.push(item.innerHTML);
    })
    ar.sort();
    ar.reverse()
    liElements.innerHTML = '';
    ar.forEach(item =>{
      let li = `<li>${item}</li>`;
      liElements.innerHTML += li;
    })

   console.log("wefwef")

  sortButton.style.display = 'block';
    sortButton2.style.display = 'none';





})





