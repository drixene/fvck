let func3 = (h1,img1,p1,btn1,img2,p2,btn2,img3,p3,btn3) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1>${h1}</h1>
                     <div class= card>
                     <div class="p1">
                     <img src="./images/${img1}">
                     <p>${p1}</p>
                     <button>${btn1}</button>
                     </div>
                     <div class="p1">
                     <img src="./images/${img2}">
                     <p>${p2}</p>
                     <button>${btn2}</button>
                     </div>
                     <div class="p1">
                     <img src="./images/${img3}">
                     <p>${p3}</p>
                     <button>${btn3}</button>
                     </div>
                     </div>
    `
    return div
}
export{func3}