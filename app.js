'use strict'

var allItems =[];

var itemsPicZero= document.getElementById('itemspic');
var itemsPicOne= document.getElementById('itemspic1');
var itemsPicTwo= document.getElementById('itemspic2');

var threeImages=[itemsPicZero, itemsPicOne, itemsPicTwo]



function ItemsPicked(name) {
    this.filepath= `images/${name}.jpg`;
    this.name=name;
    this.views=0;
    this.clicks=0;
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


    //to get three images to appear
function threeRandomPics() {
    noPatterns();
    noRepeat();
    for (var i=0; i< threeImages.length;i++){
            threeImages[i].src = allItems[noRepeatlist[i]].filepath;
            threeImages[i].alt = allItems[noRepeatlist[i]].name;
            threeImages[i].title = allItems[noRepeatlist[i]].name;
            allItems[noRepeatlist[i]].views++;
            }    
        } 
//to stop repeat same image on the same screen     
var randomItemslist=[];
var noRepeatlist=[];
function noPatterns (){
    noRepeatlist=[];
    while( noRepeatlist.length <= threeImages.length){
        var random = Math.floor(Math.random()*(allItems.length-1));
        if (noRepeatlist.includes(random) ){
        random = Math.floor(Math.random()*(allItems.length-1));
            //console.log( "and if")
        }
        noRepeatlist.unshift(random)
        
    }
    randomItemslist=noRepeatlist
}
//not to show a past images
var pastItems=[];
var currentItems=[];
function noRepeat(){
    currentItems=[];
    for (var i =0; i<threeImages.length; i++){

    while (currentItems.length < threeImages.length){
        if( currentItems.includes(pastItems[i])){
            console.log("if and ")
    
            currentItems.unshift()
        }
    
    }
    pastItems=currentItems
}
}


// eventlistener
document.getElementsByTagName('section')[0].addEventListener ('click', handleClick);



function handleClick(event) {
  console.log(event.target);


  threeRandomPics()
}
 threeRandomPics();
