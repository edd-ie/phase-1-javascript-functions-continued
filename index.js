// code your solution here

//TODO: saturdayFun()
//Todo: uses the default activity 'roller-skate' when no arguments are passed
//Todo: permits the default activity to be overriden
function saturdayFun(e){
    if (e == undefined){
        e = 'roller-skate';
    }
    return (`This Saturday, I want to ${e}!`)
}



//TODO: mondayWork()
//Todo: uses the default activity 'go to the office' when no arguments are passed
//Todo: permits the default activity to be overriden
function mondayWork(e){
    if (e == undefined){
        e = 'go to the office';
    }
    return (`This Monday, I will ${e}.`)
}


//TODO: wrapAdjective()
//Todo: when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//Todo: when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(e){
    return function wrap(txt){
        return `You are ${e}${txt}${e}!`
    }
    
}

let one = wrapAdjective('||');
let two = one('a dedicated programmer');

let test1 = wrapAdjective('*')('a hard worker')
let test2 = wrapAdjective('||')('a dedicated programmer');

console.log(test1,'\n',test2);