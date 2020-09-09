// Global variables
let inventory = []
let ratIsAlive = true

// return the first word of the sentence
let getVerb = (sentence) => {
    let spl = sentence.split(" ")
    return spl[0].toLowerCase()
}

// return the second word of the sentence - "" if nothing there
let getNoun = (sentence) => {
    let spl = sentence.split(" ")
    return spl[1].toLowerCase()
}

// control the players inventory
let getInventory = () => { return inventory; }
let getItem = (index) => { 
    if(index < inventory.length)
        return inventory[index]
    else
        return null
}
let findItem = (item) => {
    for(i = 0; i < inventory.length; i++) {
        if(inventory[i].toLowerCase() == item.toLowerCase()) {
            return i;
        }
    }
    return -1;
}
let addItem = (newItem) => { inventory.push(newItem); }
let removeItem = (item) => {
    for(i = 0; i < inventory.length; i++) {
        if(inventory[i].toLowerCase() == item.toLowerCase()) {
            inventory.splice(i, 1);
            break;
        }
    }
}
let hasItem = (hasThis) => {
    for(i = 0; i < inventory.length; i++) {
        if(inventory[i].toLowerCase() == hasThis.toLowerCase()) {
            return true;
        }
    }
    return false;
}
let showInventory = () => {
    let desc = "You are carrying\n\n"
    if(inventory.length == 0)
    desc += "nothing"
    for(i = 0; i < inventory.length; i++) {
        desc += inventory[i] + "\n"
    }
    alert(desc)
}
let clearInventory = () => {
    inventory.splice(0, inventory.length)
}

// the room descriptions
let entrance = () => {
    let answer = prompt("Your torch illuminates the tiled floor up until a derelict grand staircase - some of the banisters are missing and the wooden stairs are rotten and crumbling. You decide it's unsafe to try making your way upstairs and so you play it safe and stick to the ground floor\n\nYou can go west, east or south");

    if(answer.toLowerCase() == "west") {
        hallway();
    } else if(answer.toLowerCase() == "east") {
        reception()
    } else if(answer.toLowerCase() == "south") {
        library()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        entrance()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }
}

let hallway = () => {
    let answer = prompt("A small hallway lined with a long row of cabinets. You shine your torch inside the glass and see a twinkle of colour. On closer inspection you see a large collection of multicolured egg shaped stones, carved to look almost like reptilian skin. Very strange indeed.\n\nYou can get the stones or go east, south or west")

    if(answer.toLowerCase() == "west") {
        livingRoom();
    } else if(answer.toLowerCase() == "east") {
        entrance()
    } else if(answer.toLowerCase() == "south") {
        nursery()
    } else if(getVerb(answer) == "get" && getNoun(answer) == "stones") {
        alert("picked up stones")
        addItem("Stones")
        console.log(`${inventory[0]}`)
        hallway()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        hallway()
    } else {
        alert("give me something to work with!!!")
        hallway()
    }
}

let reception = () => {
    let answer = prompt("You have entered a large reception room. There are chairs arranged around a coffee table with some decayed books and magazines, empty teacups and an empty cake stand. There are oil paintings on wall and a glass cabinet filled with antique china.\n\nYou can go east, west or south")

    if(answer.toLowerCase() == "east") {
        masterDiningRoom()
    } else if(answer.toLowerCase() == "south") {
        laboratory()
    } else if(answer.toLowerCase() == "west") {
        entrance()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        reception()
    } else {
        alert("give me something to work with!!!")
        reception()
    }
}

let livingRoom = () => {
    let answer = ("You enter into what looks to have been a small living room. Family pictures hang on the wall and you wonder what has happened to the people in the photographs! Above the fireplace hangs an eerie portrait of a lady in an emerald dress. Her eyes follow you around the room. You notice she is pointing to the south. Could this be a sign to the way out? or is she pointing you in a more sinister direction! Which way will you go?\n\nYou can head east or south")

    if(answer.toLowerCase() == "south") {
        conservatory();
    } else if(answer.toLowerCase() == "east") {
        hallway()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        livingRoom()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }
}

let conservatory = () => {
    let answer = prompt("You've wondered into a small conservatory. The room is bright as a beam of moonlight pours through the skylight above. You wonder if you could maybe climb out and make your way to freedom but the skylight is much too high, even with a chair to stand on. You notice a stack of winter coats hanging along the wall and below them a rucksack. You see a flask peeking out of the top and open it up, it’s filled with water. Rummaging further through the bag you find [contents]. These may come in useful later!\n\nYou can go east, north or south")

    if(answer.toLowerCase() == "south") {
        gamesRoom();
    } else if(answer.toLowerCase() == "north") {
        livingRoom()
    } else if(answer.toLowerCase() == "east") {
        nursery()
    } else if(getVerb(answer) == "get" &&
             (getNoun(answer) == "flask" || getNoun(answer) == "water")) {
        alert("picked up Flask of Water")
        addItem("Flask of Water")
        conservatory()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        conservatory()
    } else {
        alert("give me something to work with!!!")
        conservatory()
    }
}

let gamesRoom = () => {
    let answer = prompt("You have entered the games room. There is a billiard table in the centre of the room, a large dart board on one wall with half a dozen darts, a backgammon table with pieces set for game and at the far end of the room is a large ornate chess board - the game was started but not finished. Ther are also three card tables; one large and two small. On one of the small card tables are several hands of cards, some brandy glasses and a decanter half-filled with brandy.\n\nYou can go north, east or south")

    if(answer.toLowerCase() == "south") {
        boneRoom();
    } else if(answer.toLowerCase() == "north") {
        conservatory()
    } else if(answer.toLowerCase() == "east") {
        armoury()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        gamesRoom()
    } else {
        alert("give me something to work with!!!")
        gamesRoom()
    }
}

let boneRoom = () => {
    let answer = prompt("Strange, this room is totally empty... apart from the pile of charred bones in the corner... there is no way forward you can only go back to the north")

    if(answer.toLowerCase() == "north") {
        gamesRoom();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        boneRoom()
    } else {
        alert("give me something to work with!!!")
        gamesRoom()
    }
}

let masterDiningRoom = () => {
    let answer = prompt("The master dining room. The long table has four, large silver candle sticks and is partially covered by a lace table cloth. There is a thin layer of dust on the table, and someone has written \"Help Me!\" in it. There are many oil paintings around the room showing scenes from antiquity.\n\nThere are doors to the west and south.")

    if(answer.toLowerCase() == "west") {
        reception();
    } else if (answer.toLowerCase() == "south") {
        answer = prompt("If you answer this correctly, you may enter:\n\nOne word in this sentence is misspelled. What word is it\n\nwhat is your answer?")
        if(answer.toLowerCase() == "misspelled") {
            kitchen()
        } else {
            masterDiningRoom()
        }
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        masterDiningRoom()
    } else {
        alert("give me something to work with!!!")
        masterDiningRoom()
    }
}

let kitchen = () => {
    let answer = prompt("This is the main kitchen. There are pots and pans hanging from hooks on the walls from the middle of ceiling. There is a large open fire with a huge saucepan, boiling something mysterious. There different kind of meat and birds hanging, waiting to be cooked. There is a large pile potatoes in the corner of the room to be cleaned and peeled.\n\nYou can go west, north or south")

    if(answer.toLowerCase() == "north"){
        masterDiningRoom()
    } else if(answer.toLowerCase() == "west") {
        laboratory()
    } else if(answer.toLowerCase() == "south") {
        pantry()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        kitchen()
    } else {
        alert("give me something to work with!!!")
        kitchen()
    }
}

let laboratory = () => {
    let answer = prompt("A laboratory? Rows and rows of cobwebbed covered jars line the shelves on just about every wall. An old wooden bench sits in the centre of the room atop it a Bunsen burner and a book. A handwritten list is scrawled on the open page and you can just about make out some of the words. '...ADD THE FERMENTED EYE OF NEWT, BLOOD OF BAT AND WART OF TOAD AND SIMMER FOR 20 MINS...' Is this some sort of recipe? But for what?\n\nWill you go west, north, east or south")

    if(answer.toLowerCase() == "north") {
        reception();
    } else if(answer.toLowerCase() == "west") {
        library()
    } else if(answer.toLowerCase() == "east") {
        kitchen()
    } else if(answer.toLowerCase() == "south") {
        batRoom()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        laboratory()
    } else {
        alert("give me something to work with!!!")
        laboratory();
    }
}

let library = () => {
    let answer = prompt("You have entered the master library. There are bookselves on every wall except the wall facing the window. There are desks for reading and studying in the middle of the floor. They are very old and still have inkwells. There is parchment paper in the drawers and a copy of Javascript for Dummies is sitting on one of the desks.\n\nYou can go west, north or east")

    if(answer.toLowerCase() == "east") {
        laboratory();
    } else if(answer.toLowerCase() == "west") {
        nursery();
    } else if(answer.toLowerCase() == "north") {
        entrance()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        library()
    } else {
        alert("give me something to work with!!!")
        library();
    }
}

let nursery = () => {
    let answer = prompt("You have entered the nursery where you can see two large wooden cots. There are two shelves of children’s toys, a bookshelf of colourful children’s books, two small fishing rods are leaning against one wall and a large kite hangs from the ceiling. Up against a wall is a big leather chair and next to it a large rocking horse. Toy soldiers are arranged in rows on the floor with a small bronze cannon.\n\nYou can go west, north, east or south")

    if(answer.toLowerCase() == "east") {
        library();
    } else if(answer.toLowerCase() == "west") {
        conservatory()
    } else if(answer.toLowerCase() == "north") {
        hallway()
    } else if(answer.toLowerCase() == "south") {
        armoury();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        nursery()
    } else {
        alert("give me something to work with!!!")
        nursery();
    }
}

let armoury = () => {
    let answer = prompt("CRAASH! You think you’ve bumped into someone! Oh, it’s a suit of armour! It falls back into the suit behind causing an entire row of them to collapse like dominoes - the noise is deafening! You hope someone or something didn’t hear that! Looking around you notice huge swords and axes mounted along the walls. This must be the armoury In the centre of the room is a large wooden chest with a rusted lock. As you examine the lock further it snaps in your hand. YOU’RE IN! The chest contains a pointy dagger!\n\nWould you like to get the dagger or go west, north or south")

    if ((getVerb(answer) == "get") && (getNoun(answer) == "dagger")) {
            alert("picked up dagger")
            addItem("Pointy dagger")
            armoury()
    }
    else if(answer.toLowerCase() == "south") {
        smokingRoom();
    } 
    else if(answer.toLowerCase() == "north") {
        nursery();
    } 
    else if(answer.toLowerCase() == "west") {
        gamesRoom();
    } 
    else if(answer.toLowerCase() == "inventory") {
        showInventory()
        armoury()
    }
    else {
        alert("give me something to work with!!!")
        armoury();
    }
}

let smokingRoom = () => {
    let answer = prompt("You have entered the smoking room. There are several leather chairs separated by small tables which of which houses a large humidor and there is a distinctive smell of Cuban cigars and ancient tobacco smoke. Decanters of Port, Brandy, whiskey, gin and rum sit atop a large Edwardian drinks cabinet filled with ornate glassware.\n\nYou can head north or east")

    if(answer.toLowerCase() == "north") {
        armoury();
    } else if(answer.toLowerCase() == "east") {
        emptyRoom()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        smokingRoom()
    } else {
        alert("give me something to work with!!!")
        smokingRoom();
    }
}

let emptyRoom = () => {
    let answer = prompt("Water drips from a crack in the ceiling. Your footsteps echo as you walk further into the empty room and your torch illuminates a message scratched onto the stone wall \"BEWARE THE EMERALD BEAST DO NOT GO EAST\". Do you heed the warning?\n\nYou can go west or east")

    if(answer.toLowerCase() == "west") {
        smokingRoom();
    } else if(answer.toLowerCase() == "east") {
        monsterRoom()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        emptyRoom()
    } else {
        alert("give me something to work with!!!")
        emptyRoom();
    }
}

let secretRoom = () => {
    alert("no description so far")
    let answer = prompt("your choice")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
        secretRoom();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        secretRoom()
    } else {
        alert("give me something to work with!!!")
        secretRoom();
    }
}

let monsterRoom = () => {
    if(!hasItem("STONES")) {
        alert("A thunderous growl shakes the ground around you. You quickly dodge the rocks crumbling from the ceiling. Before you stands a ginormous green beast drawing in its breath a-... it can't be... it's a \"DRAGGGOOOONNN\". You just about get the word out before you're engulfed in flames and burnt to a crisp.\n\nGAME OVER!")
        clearInventory()
        entrance()
    }

    let answer = prompt("A ginormous green beast draws in its breath, a-.... it can't be... it's a \"DRAGGGOOOONNN\". It's just about to burn you to a crisp when the strange stones you carry begin to glow brightly. The dragon shrinks back, obvioulsy afraid, leaving you just enough space to run past.\n\nYou can go west,north or east")

    if(answer.toLowerCase() == "west") {
        emptyRoom();
    } else if(answer.toLowerCase() == "north") {
        batRoom();
    } else if(answer.toLowerCase() == "east") {
        theFinalRoom();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        monsterRoom()
    } else {
        alert("give me something to work with!!!")
        emptyRoom();
    }
}

let batRoom = () => {
    let answer = prompt("You shine your torch into an empty cupboard startling a family of bats, they let out a shriek and frantically flap their wings in your direction. You try to take a step backwards falling over in the process and dropping your torch but luckily no bites. That was a close one!\n\nYou can go north, east or south")

    if(answer.toLowerCase() == "south") {
        monsterRoom();
    } else if(answer.toLowerCase() == "east") {
        pantry();
    } else if(answer.toLowerCase() == "north") {
        laboratory();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        batRoom()
    } else {
        alert("give me something to work with!!!")
        batRoom();
    }
}

let pantry = () => {
    if(ratIsAlive) {
        alert("You have found the pantry and in doing so have disturbed a huge rat feasting on some moldy cheese. The rat shoots you a menacing glare and gets ready to pounce!\n\nYou must fight")

        if(hasItem("POINTY DAGGER")) {
            alert("You quickly draw your pointy dagger and manage to stab the rabid beast in the heart as it jumps at you")
            ratIsAlive = false
            pantry()
        } else {
            alert("As you look around to try and find an esacpe route the giant rat leaps at your throat and either by chance or on purpose it finds your jugular vein and sinks it's teeth in.\n\nYou are now rat food. Better luck next time.\n\nGAME OVER")
            clearInventory()
            entrance()
        }
    } else {
        let answer = prompt("You have found the pantry\n\nYou can go west, north or south")

        if(answer.toLowerCase() == "west") {
            batRoom();
        } else if(answer.toLowerCase() == "north") {
            kitchen();
        } else if(answer.toLowerCase() == "south") {
            theFinalRoom();
        } else if(answer.toLowerCase() == "inventory") {
            showInventory()
            pantry()
        } else {
            alert("give me something to work with!!!")
            pantry();
        }
    }
}

let theFinalRoom = () => {
    let answer = prompt("This is it! You have completed your quest.\n\nYou can go west, north or there is a door to the south to freedom.")

    if(answer.toLowerCase() == "north") {
        pantry()
    } else if(answer.toLowerCase() == "west") {
        monsterRoom()
    } else if (answer.toLowerCase() == "south" || answer.toLowerCase() == "exit") {
        answer = prompt("Congratulations! The game has ended\n\nThat was fun, wasn't it!\n\nWould you like to play again?")
        if(answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
            ratIsAlive = true
            clearInventory()
            entrance()
        } else if(answer.toLowerCase() == "no" || answer.toLowerCase() == "n") {
            alert("GAME OVER")
        } else {
            alert("give me something to work with!!!")
            theFinalRoom();
        }
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        theFinalRoom()
    } else {
        alert("give me something to work with!!!")
        theFinalRoom();
    }
}