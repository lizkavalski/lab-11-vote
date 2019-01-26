'use strict'




//-----------------Globle varable----------------------------------------------//
var allItems =[];
var votes=[];
var views=0;
var totalVotes=0
var chartDrawn = false;


//-------------------grabbing from the HTML------------------------------------//

var itemsPicZero= document.getElementById('itemspic');
var itemsPicOne= document.getElementById('itemspic1');
var itemsPicTwo= document.getElementById('itemspic2');
var imageUnorderlist= document.getElementById('totalvotes');

//------------------putting the element from the html into an array---------------//
var threeImages=[itemsPicZero, itemsPicOne, itemsPicTwo];

//----------------------------- making an c.Object------------------------------//
function ItemsPicked(name) {
    this.filepath= `images/${name}.jpg`;
    this.name=name;
    this.views=0;
    this.votes=0;
    allItems.push(this);
}


if (localStorage.getItem('items')){
    var retrievedItems = JSON.parse(localStorage.getItem('items'));
   // console.log(allItems);
    allItems = retrievedItems;
  
}else{
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
        
       
    }


//__________________________________making into a list__________________________________________________//
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

//__________________________________to stop repeat same image on and between cycle screen_________//     
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
    }else{
        //random= Math.floor(Math.random()*(allItems.length-1));
        //console.log('duplicate stopped') 
    }
    }
  
   
}

//-------------------------------------to get three images to appear---------------------------------------//
function threeRandomPics() {
    noPatterns();
    for (var i=0; i< threeImages.length;i++){
            threeImages[i].src = allItems[currentItemlist[i]].filepath;
            threeImages[i].alt = allItems[currentItemlist[i]].name;
            threeImages[i].title = allItems[currentItemlist[i]].name;
            allItems[currentItemlist[i]].views++;
            }    
        } 
//__________________________________________________chart______________________________________//
var data = {
labels: ['bag', 'banana', 'bathroom','boots','breakfast','bubblegum', 'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'], // titles array we declared earlier
datasets: [{
    data: votes, // votes array we declared earlier
    backgroundColor: [
    '#B7AF93',
    '#8ACDD0',
    '#4C9BCE',
    '#547182',
    '#4E485A',
    '#B7AF93',
    '#8ACDD0',
    '#4C9BCE',
    '#547182',
    '#4E485A',
    '#B7AF93',
    '#8ACDD0',
    '#4C9BCE',
    '#547182',
    '#4E485A',
    '#B7AF93',
    '#8ACDD0',
    '#4C9BCE',
    '#547182',
    '#4E485A',
    '#B7AF93',
    '#8ACDD0',
    '#4C9BCE',
    '#547182',
    ],
    hoverBackgroundColor: [
    'purple',
    'purple',
    'purple',
    'purple',
    'purple'
    ]
}]
};

function drawChart() {
//console.log(votes, 'votes')

var ctx = document.getElementById('tallys').getContext('2d');
var tallyOfVotes = new Chart(ctx, {
        type: 'bar',
        data: data,
        //options: options
    });
}
// eventlistener------------------------------------------------------------------------------/
document.getElementsByTagName('section')[0].addEventListener ('click', handleClick);
// document.getElementById('draw-chart').addEventListener('click', function() {
//     drawChart();
//     console.log('chart was drawn');
//   });

//event handle---------------------------------------------------------------------------------/
function handleClick(event) {

  for( var i=0; i < allItems.length; i++){
      if (allItems[i].name === event.target.title){
        totalVotes++
          votes.push(allItems[i].votes++);
      }
  }
   //console.log('i pick this one', event.target.title)
    
    console.log(totalVotes)
    if (totalVotes > 24){
        document.getElementsByTagName('section') [0].removeEventListener('click', handleClick);
        drawChart();
    
    //---------------------puting it in local storeage-----------------------------------------------------//
localStorage.items= JSON.stringify(allItems);
  //console.log(event.target);
    }


  threeRandomPics()
}
 threeRandomPics();
