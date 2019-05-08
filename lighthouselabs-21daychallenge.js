/* Challenge 1 - function powerOn() */
function powerOn() {
    ship.powerOn = true;
}

/* Challenge 2 - function countModules() */
function countModules() {
    return availableModules.length;
}

/* Challenge 3 - function countEssential() */
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

/* Challenge 4 - loadModule(index)
 * Initially I made functions loadModule(index), getToLoadModules(), isLifeSupport()
 * Modularized isLifeSupport() in Challenge 5 to findModuleIndex(name)
 * Modularized loadModule(index) and getToLoadModules() into one function loadModule(index) 
 * */
function loadModule(index) {
    if (availableModules[index].essential === true){
        if (availableModules[index].enabled === false){
            availableModules[index].enabled = true;
            ship.modules.push(availableModules[index]);
        }
        else {
            ship.modules.push(availableModules[index]);
        }
    }
    else {
        //do nothing
    }
}

var lifeSupportIndex = findModuleIndex('life-support');
loadModule(lifeSupportIndex);

/* Challenge 5 - function findModuleIndex(name) */
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

var propulsionIndex = findModuleIndex('propulsion');
loadModule(propulsionIndex);

/* Challenge 6 - load navigation module */
var navigationIndex = findModuleIndex('navigation');
loadModule(navigationIndex);

/* Challenge 7 - function resetLARRY() and call the function */
function resetLARRY() {
  var quackCountdown = 0;
  
  do {
    LARRY.quack();
    quackCountdown += 1;
  } while (quackCountdown < 10);
  
}

resetLARRY();