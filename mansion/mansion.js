let getVerb = (sentence) => {
    let spl = sentence.split(" ")
    return spl[0].toLowerCase()
}

let getNoun = (sentence) => {
    let spl = sentence.split(" ")
    return spl[1].toLowerCase()
}

let entrance = () => {
    alert("Your torch illuminates the tiled floor up until a grand staircase. Some of the banisters are missing and the stairs crumbling. You wonder if it's safe to try making your way upstairs or if you should play it safe and stick to the ground floor");

    let answer = prompt("up or east")

    console.log(answer)
    if(answer.toLowerCase() == "up") {
        hallway();
    } else if(answer.toLowerCase() == "east") {
        reception()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }

/*    console.log(getVerb(answer))
    if(getVerb(answer) == "up") {
        hallway();
    } else if(getVerb(answer) == "east") {
        reception()
    } else {
        alert("give me something to work with!!!")
        entrance()
    } */
}

let hallway = () => {
    alert("hallway")
}

let reception = () => {
    alert("Reception")
}
