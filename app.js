'use strict'

var allItems =[];

var itemspic= document.getElementById('itemspic');
var itemspicOne= document.getElementById('itemspic1');
var itemspicTwo= document.getElementById('itemspic2');

var threeImages=[itemspic, itemspicOne, itemspicTwo]



function ItemsPicked(name) {
    this.filepath= `images/${name}.jpg`;
    this.name=name;
    this.views=0;
    allItems.push(this);
}
    new ItemsPicked('bag');
    new ItemsPicked('banana');
    new ItemsPicked('bathroom');
    new ItemsPicked('boots');
    new ItemsPicked('breakfast');
    new ItemsPicked('bubblegum');
    new ItemsPicked('chair');
    new ItemsPicked('cthulhu');
    new ItemsPicked('dog-duck');
    new ItemsPicked('dragon');
    new ItemsPicked('pen');
    new ItemsPicked('pet-sweep');
    new ItemsPicked('scissors');
    new ItemsPicked('shark');
    new ItemsPicked('tauntaun');
    new ItemsPicked('unicorn'); 
    new ItemsPicked('water-can');
    new ItemsPicked('wine-glass');
    new ItemsPicked('sweep-one');
    new ItemsPicked('usb-one');

function threeRandomPics() {
    for (var i=0; i< threeImages.length;i++);{
            var random = Math.floor(Math.random()*(allItems.length-1));
            threeImages[i].src = allItems[random].filepath;
            threeImages[i].alt = allItems[random].name;
            threeImages[i].title = allItems[random].name;
            allItems[random].views++;
            }
    
        }       

itemspic.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
  threeRandomPics()
}
 threeRandomPics();
