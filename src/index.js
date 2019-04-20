import _ from 'lodash';
import './style.css'
import cat from './cat.png'
import math from './math'

function component() {
    var element = document.createElement('div');
    let rs=math(20,9)
    element.innerHTML = _.join(['Hello', 'webpack',rs], ' ');
    element.classList.add('hello');
    let img=new Image();
    img.src=cat;
    element.appendChild(img)
    return element;
}

document.body.appendChild(component());
