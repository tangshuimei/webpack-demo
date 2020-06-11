import {sum} from './math'

const sumRes = sum(10,20)
console.log(sumRes)

console.log('window.ENV',ENV)

function insertImgElem(imgFile) {  
    const img  = new Image
    img.src = imgFile
    // img.onload = function () {  
        document.body.appendChild(img)
    // }
}

import img1 from './img/1.jpg'
insertImgElem(img1)
import img2 from './img/2.png'
insertImgElem(img2)

  
