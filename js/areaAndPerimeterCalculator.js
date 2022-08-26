"use strict";

let length = prompt ("Input length.");
let width = prompt ("Input width.");

length = parseInt(length);

width = parseInt(width);

const area = length*width;

const perimeter = (length+width)*2;
document.write(`<h1>length: ${length}</h1>`);
document.write(`<h1>width: ${width}</h1>`);
document.write(`<h1>area: ${area}</h1>`);
document.write(`<h1>perimeter: ${perimeter}</h1>`);