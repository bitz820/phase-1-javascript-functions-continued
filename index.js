// code your solution here
function saturdayFun(activity) {
    if (typeof activity !== 'undefined') {
        return `This Saturday, I want to ${activity}!`
    } else {
        return `This Saturday, I want to roller-skate!`
    }
}

function mondayWork(activity) {
    return typeof activity !== "undefined" ? `This Monday, I will ${activity}.` : `This Monday, I will go to the office.`
}

function wrapAdjective(flair) {
    return function innerFunc(adj) {
        return `You are ${flair}${adj}${flair}!`
    };
    // return innerFunc(adj)
}

wrapAdjective(flair)(adj)