//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg, happyDogImg

function preload()
{
	dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("happyDogImg.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500,500);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,250,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  
  
}


function draw() {  
background("pink");
if(foodS!== undefined){
  textSize(20);
  fill(255);
  text("Note: Press Up arrow to feed the dog milk", 50, 50);
  text("Food remaining: "+ foodS, 150, 150);

 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg)
}

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg)
}
 

if(foodS === 0){
  foodS = 20;
}

 drawSprites();
  //add styles here

}

}
function readStock(data){
  foodS = data.val();

}


function writeStock(x){
  
 database.ref('/').update({
  Food:x
 })
}


