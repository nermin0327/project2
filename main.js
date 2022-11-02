const addTo = document.querySelector("#addTo");
const input = document.querySelector(".input");
const ulList = document.querySelector("#myUL");
const imgtwo = document.querySelector(".imgtwo");
const sortButton2 = document.querySelector('.img2')


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

const sortButton = document.querySelector('.img1')

let liElements = document.getElementById('myUL')

if(sortButton.addEventListener('click',()=>{
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
    ar.sort((c,t)=>{
        if (c > t) {
            return -1;
            }
            if (c < t) {
              return 1;
            }
            // a bərabərdir b
            return 0;
    

    })
 

 }))
      
  
if(sortButton2.addEventListener('click',()=>{
    sortButton.style.display = 'none';
    sortButton2.style.display = 'block'
    // let liElements = document.getElementById('myUL')
// sortButton2.addEventListener("click", () => {
//     let ar = []
//     const data = [...liElements?.children]
//     data.forEach(item => {
//         ar.push(item.innerHTML)
//     })
//     ar.sort();
//     liElements.innerHTML = ""
//     ar.forEach(item => {
//         let li = `<li>${item}   </li>`

//         liElements.innerHTML += li
//     })
//     ar.sort((c,t)=>{
//         if (c < t) {
//             return -1;
//             }
//             if (c > t) {
//               return 1;
//             }
//             // a bərabərdir b
//             return 0;
    

//     })

})){

}



 




    // ar.sort((c,t)=>{
    //     if (c < t) {
    //         return -1;
    //         }
    //         if (c >t) {
    //           return 1;
    //         }
    //         // a bərabərdir b
    //         return 0;

  
    // })
    

   



// let arr = ["z","b","c"]

// arr.sort((c,t)=>{
//     if (c > t) {
//         return -1;
//         }
//         if (c < t) {
//           return 1;
//         }
//         // a bərabərdir b
//         return 0;
// })

// console.log(arr)





