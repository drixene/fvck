import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"


let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "PLANETS",
    img1: "../image/dark3.jpg",
    desc1: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun.",
    btn1: "LearnMore",
    img2: "../image/dark2.jpg",
    desc2: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.",
    btn2: "Learn More",
    img3: "../image/dark1.png",
    desc3: "It's dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.",
    btn3: "Learn More"
}

let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


