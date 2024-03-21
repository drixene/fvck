let func2 = (title, desc,title1, desc1, btn1, btn2, btn3, btn4) => {
    let div = document.createElement("div")
    div.className="info"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${desc}</p>
                     <h1>${title1}</h1>
                     <p>${desc1}</p>
                     <button>${btn1}</button>
                     <button>${btn2}</button>
                     <button>${btn3}</button>
                     <button>${btn4}</button>
    `
    return div
}
export{func2}