//Challenge 1 - function powerOn()
function powerOn() {
    ship.powerOn = true;
}

//Challenge 2 - function countModules()
function countModules() {
    return availableModules.length;
}

//Challenge 3 - function countEssential()
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

//Challenge 4 - functions loadModule(index), getToLoadModules()
//Modularized isLifeSupport() in Challenge 5 to findModuleIndex(name)
function loadModule(index) {
    ship.modules.push(availableModules[index]);
}

function getToLoadModules() {
    for (let i=0; i<availableModules.length; i++){
      if (availableModules[i].enabled === false){
        availableModules[i].enabled = true;
        loadModule(i);
      }
      else {
        loadModule(i);
      }
    }
}

getToLoadModules();

//Challenge 4 - function findModuleIndex(name)
function findModuleIndex(name) {
    var index = 0;
    for (let i=0; i<availableModules.length; i++){
        if (availableModules[i].name === name){
            index = i;          
        }
        else {
            //do nothing
        }
    }
    return index;
}

var lifeSupportIndex = findModuleIndex('life-support');
loadModule(lifeSupportIndex);

var propulsionIndex = findModuleIndex('propulsion');
loadModule(propulsionIndex);


