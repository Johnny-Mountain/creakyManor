// Global variables
let inventory = []

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
}

let hallway = () => {
    alert("A small hallway lined with a long row of cabinets. You shine your torch inside the glass and see a twinkle of colour. On closer inspection you see a large collection of multicolured egg shaped stones, carved to look almost like reptilian skin. Very strange indeed. You can go west or back to the east")

    let answer = prompt("west or back")

    console.log(answer)
    if(answer.toLowerCase() == "west") {
        livingRoom();
    } else if(answer.toLowerCase() == "back") {
        entrance()
    } else if(getVerb(answer) == "get" && getNoun(answer) == "stones") {
        alert("picked up stones")
        inventory.push("Stones")
        console.log(`${inventory[0]}`)
        hallway()
    } else {
        alert("give me something to work with!!!")
        hallway()
    }
}

let reception = () => {
    alert("Reception")
}

let livingRoom = () => {
    alert("You enter into what looks to have been a small living room. Family pictures hang on the wall and you wonder what has happened to the people in the photographs! Above the fireplace hangs an eerie portrait of a lady in an emerald dress. Her eyes follow you around the room. You notice she is pointing to the south. Could this be a sign to the way out? or is she pointing you in a more sinister direction! Which way will you go? You can head south or back to where you came from")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        hallway();
    } else if(answer.toLowerCase() == "back") {
        livingRoom()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }
}
