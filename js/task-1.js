'use strict'

const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
const title = document.querySelectorAll('.item h2')

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    
    const elements = item.querySelectorAll('ul > li');
    console.log(`Elements: ${elements.length}`);
    
})


