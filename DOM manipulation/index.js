//1. document.getElementById('<id>')
//2. document.getElementsByClassName('<class>')
//3. document.getElementsByTagName('<tagname>')
//4. document.querySelector('<id>,<classname>,<tagname>');

const header = document.querySelector('#header');
const button = document.querySelector('#changeColor');
const list = document.querySelector('.nameList');
const listItem = document.querySelectorAll('.nameList li');
const input = document.querySelector('.inputName');
const addToListBtn = document.querySelector('.addList');
const body = document.querySelector('body');

addToListBtn.addEventListener('click', function() {
    //Create a new list
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(input.value);
    //add the input value to the list
    newLi.appendChild(liContent);
    //add the new li to the ul
    list.appendChild(newLi);
})

listItem.forEach(function (li) {
    li.addEventListener('click', function(){
        this.style.color = 'red';
    })
})

button.addEventListener('mouseover', function () {
    header.style.backgroundColor = 'red'; 
});

button.addEventListener('mouseout', function () {
    header.style.backgroundColor = 'green'; 
});
// header.style.backgroundColor = 'red'; 