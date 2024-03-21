import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"


let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "MY COMPILATION",

    img1: "../image/idea.jpg",
    btn1: "WHAT I LEARNED",
    desc1: " What i learn is to function well my code and also i developed new idea on how functions work well",
    

    img2: "../image/confused.png",
    btn2: "WHAT DIFFICULTS ME",
    desc2: "What difficults me is to form a block of design to arrange the proper code like sometimes it confused me to understand",
    
}

let {title2, img1, desc1, btn1, img2, desc2, btn2,} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2)) 


