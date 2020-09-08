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
    alert("You have entered a large reception room. There are chairs arranged around a coffee table with some books and magazines, empty teacups and an empty cake stand. There are oil paintings on wall and a glass cabinet filled with antique china. There are doors to the east and south or you can go back to the entrance")

    let answer = prompt("east, south or back")

    console.log(answer)
    if(answer.toLowerCase() == "east") {
        masterDiningRoom()
    } else if(answer.toLowerCase() == "south") {
        alert("south")
    } else if(answer.toLowerCase() == "back") {
        entrance()
    } else {
        alert("give me something to work with!!!")
        reception()
    }
}

let livingRoom = () => {
    alert("You enter into what looks to have been a small living room. Family pictures hang on the wall and you wonder what has happened to the people in the photographs! Above the fireplace hangs an eerie portrait of a lady in an emerald dress. Her eyes follow you around the room. You notice she is pointing to the south. Could this be a sign to the way out? or is she pointing you in a more sinister direction! Which way will you go? You can head south or back to where you came from")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        conservatory();
    } else if(answer.toLowerCase() == "back") {
        hallway()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }
}

let conservatory = () => {
    alert("You've wondered into a small conservatory. The room is bright as a beam of moonlight pours through the skylight above. You wonder if you could maybe climb out and make your way to freedom but the skylight is much too high, even with a chair to stand on. You notice a stack of winter coats hanging along the wall and below them a rucksack. You see a flask peeking out of the top and open it up, it’s filled with water. Rummaging further through the bag you find [contents]. These may come in useful later! You can go south or back the way you came")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        gamesRoom();
    } else if(answer.toLowerCase() == "back") {
        livingRoom()
    } else if(getVerb(answer) == "get" &&
             (getNoun(answer) == "flask" || getNoun(answer) == "water")) {
        alert("picked up Flask of Water")
        inventory.push("Flask of Water")
        conservatory()
    } else {
        alert("give me something to work with!!!")
        conservatory()
    }
}

let gamesRoom = () => {
    alert("You have entered the games room. There is a billiard table in the centre of the room. There are three card tables, one large and two, small. One one of the small card tables are several hands of cards and some brandy glasses. There is decanter, half filled with brandy. There is large dart board on one wall with half a dozen darts. There is backgammon table with pieces set for game. At the far end of the room is a large ornate chess board. The game was started, but not finished. You can go south or back to the conservatory")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        boneRoom();
    } else if(answer.toLowerCase() == "back") {
        conservatory()
    } else {
        alert("give me something to work with!!!")
        conservatory()
    }
}

let boneRoom = () => {
    alert("Strange, this room is totally empty.... apart from the pile of charred bones in the corner... there is no way forwardd you can only go back")

    let answer = prompt("back")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
        gamesRoom();
    }
}