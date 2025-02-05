var consoles = [];

//fake the serial output
//0: console 1
//1: console 2
//2: console 3 
//3: console 4
//supposed to be done in serial communication
var serialDatas = [];

//stores all four instructions
//generated by the consoles
var allInstructs = [];


function setup() {
  createCanvas(400, 400);
  

  initConsole();
  
  //testing
  //console 1: 
  //  a flipSwitch at index 0s
  serialDatas[0] = [0,0];
  serialDatas[1] = [0];
  serialDatas[2] = [0];
  serialDatas[3] = [0];
  
  //get instruction in each round
  newRoundInstruct();
  
}

function draw() {
  background(220);
  
  //update serial inputs
  serialUpdate();
  
  //force event listen on every interact
  listenEvents();
  
  //debug
  printAllConsoles();
}

//fake serial communication
//console 1:
  //a: 1st button
function keyTyped(){
  if(key === 'q'){
    serialDatas[0][0] = 1;
  }
  if(key === 'a'){
    serialDatas[0][1] = 1;
  }
  if(key === 'w'){
    serialDatas[1][0] = 1;
  }
  if(key === 'e'){
    serialDatas[2][0] = 1;
  }
  if(key === 'r'){
    serialDatas[3][0] = 1;
  }
}

function keyReleased(){
  if(key === 'q'){
    serialDatas[0][0] = 0;
  }
  if(key === 'a'){
    serialDatas[0][1] = 0;
  }
  if(key === 'w'){
    serialDatas[1][0] = 0;
  }
  if(key === 'e'){
    serialDatas[2][0] = 0;
  }
  if(key === 'r'){
    serialDatas[3][0] = 0;
  }
}
//track each console whether they hit or not
