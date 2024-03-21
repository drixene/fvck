let func2 = (title, desc, btn) => {
    let div = document.createElement("div")
    div.className="info"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${desc}</p>
                     <button>${btn}</button>
    `
    return div
}
export{func2}