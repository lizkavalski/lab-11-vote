'use strict'
//Globle varable//
var allItems =[];
var votes=0;
var views=0;
var totalVotes=0
//grabbing from the HTML//
var itemsPicZero= document.getElementById('itemspic');
var itemsPicOne= document.getElementById('itemspic1');
var itemsPicTwo= document.getElementById('itemspic2');
var imageUnorderlist= document.getElementById('totalvotes')
//putting the element into an array//
var threeImages=[itemsPicZero, itemsPicOne, itemsPicTwo]

// making an c.Object
function ItemsPicked(name) {
    this.filepath= `images/${name}.jpg`;
    this.name=name;
    this.views=0;
    this.votes=0;
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
//making itto a list
function render(){
    var liEl= document.createElement('li');

    for(var i=0; i<allItems.length; i++){
        liEl= document.createElement('li')
        liEl.textContent = `${allItems[i].name} ${allItems[i].votes}`;
        imageUnorderlist.appendChild(liEl);
    }    
    liEl= document.createElement('li');
   

    imageUnorderlist.appendChild(liEl);
}
//to stop repeat same image on the same screen     
var previousItemslist=[];
var currentItemlist=[];
function noPatterns (){
    previousItemslist= currentItemlist
    currentItemlist=[];
    while( currentItemlist.length < threeImages.length){
       var random = Math.floor(Math.random()*(allItems.length-1));
        if (currentItemlist.includes(random)===false && previousItemslist.includes(random)===false){
        currentItemlist.unshift(random)

        //console.log( "and if")
        }else{console.log('duplicate stopped')}
    }
    // console.log(currentItemlist,'now')
    // console.log(previousItemslist,'past')
   
}

//to get three images to appear
function threeRandomPics() {
    noPatterns();
    //noRepeat();
    for (var i=0; i< threeImages.length;i++){
            threeImages[i].src = allItems[currentItemlist[i]].filepath;
            threeImages[i].alt = allItems[currentItemlist[i]].name;
            threeImages[i].title = allItems[currentItemlist[i]].name;
            allItems[currentItemlist[i]].views++;
            }    
        } 

// eventlistener
document.getElementsByTagName('section')[0].addEventListener ('click', handleClick);

function handleClick(event) {
   event.target.title
  for( var i=0; i < allItems.length; i++){
      if (allItems[i].name === event.target.title){
          allItems[i].votes++;
      }
  }
   console.log('i pick this one', event.target.title)
    totalVotes++
    if (totalVotes > 24){
        document.getElementsByTagName('section') [0].removeEventListener('click', handleClick);
        render();
    }
  //console.log(event.target);


  threeRandomPics()
}
 threeRandomPics();
