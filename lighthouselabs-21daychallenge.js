//Challenge 1
function powerOn() {
  ship.powerOn = true;
}

//Challenge 2
function countModules() {
  return availableModules.length;
}

//Challenge 3
function countEssential() {
  var countEssential = 0;
  for (let i=0; i<availableModules.length; i++){
    if (availableModules[i].essential === true){
      countEssential += 1;
    }
    else {
      //do nothing
    }
  }
  return countEssential;
}

//Challenge 4
function setEnabled() {
  for (let i=0; i<availableModules.length; i++){
    if (availableModules[i].enabled === false){
      availableModules[i].enabled = true;
    }
    else {
      //do nothing
    }
  }
}

// TODO: You need to loop over the availableModules and find the module called "life-support" and get its index, then use it to call loadModule().
function isLifeSupport() {
    for (let i=0; i<availableModules.length; i++){
      if (availableModules[i].name === 'life-support'){
        return availableModules[i];
      }
      else {
        //do nothing
      }
    }
  }

function loadModule(index) {
  setEnabled(); //run to set object's properties to true
  
  //load three essential modules ONLY?
  for (let i=0; i<availableModules.length; i++){
    if (availableModules[i].essential === true){
      modules[i].push;
    }
    else {
      //do nothing
    }
  }

}
