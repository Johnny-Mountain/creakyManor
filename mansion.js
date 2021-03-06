// Global variables
let inventory = []

// game flags
// puzzle flags
let hasStones = false
let hasSkull = false
let hasKey = false
let isArmed = false
let ratIsAlive = true

// room flags
let livingRoomVisited = false
let hallwayVisited = false
let entranceVisited = false
let receptionVisited = false
let diningRoomVisited = false
let conservatoryVisited = false
let nurseryVisited = false
let libraryVisited = false
let laboratoryVisited = false
let kitchenVisited = false
let gamesRoomVisited = false
let armouryVisited = false
let secretRoomVisited = false
let batRoomVisited = false
let pantryVisited = false
let boneRoomVisited = false
let smokingRoomVisited = false
let emptyRoomVisited = false
let monsterRoomVisited = false
let exitRoomVisited = false

let roomsVisited = 0

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

// initialise flags for a new game
let start = () => {
    hasStones = false
    hasSkull = false
    hasKey = false
    isArmed = false
    ratIsAlive = true

    livingRoomVisited = false
    hallwayVisited = false
    entranceVisited = false
    receptionVisited = false
    diningRoomVisited = false
    conservatoryVisited = false
    nurseryVisited = false
    libraryVisited = false
    laboratoryVisited = false
    kitchenVisited = false
    gamesRoomVisited = false
    armouryVisited = false
    secretRoomVisited = false
    batRoomVisited = false
    pantryVisited = false
    boneRoomVisited = false
    smokingRoomVisited = false
    emptyRoomVisited = false
    monsterRoomVisited = false
    exitRoomVisited = false
    
    roomsVisited = 0

    alert("What?!? Why?!? Where?!? You have no idea where or who you are. You feel your head but there are no bumps, bruises or cuts but you are feeling dazed. You are in a large broken down house, getting out has to be your first priority but the door behind you is barricaded with fallen debris. Onwards it is")
    entrance()
}

// the room descriptions
let entrance = () => {
    document.body.style.backgroundImage = "url('/images/entrance.jpg')"

    if(!entranceVisited) {
        entranceVisited = true
        roomsVisited++
    }

    let answer = prompt("Your torch illuminates the tiled floor up until a derelict grand staircase - some of the banisters are missing and the wooden stairs are rotten and crumbling. You decide it's unsafe to try making your way upstairs and so you play it safe and stick to the ground floor\n\nYou can go west, east or south");

    if(answer == null) {
        alert("I don't think so")
        entrance()
    } else if(answer.toLowerCase() == "west") {
        hallway();
    } else if(answer.toLowerCase() == "east") {
        reception()
    } else if(answer.toLowerCase() == "south") {
        library()
    } else {
        alert("give me something to work with!!!")
        entrance()
    }
}

let hallway = () => {
    if(!hallwayVisited) {
        hallwayVisited = true
        roomsVisited++
    }

    let desc = "A small hallway lined with a long row of cabinets."
    if(!hasStones)
        desc += " On closer inspection you see a large collection of multicolured egg shaped stones, carved to look almost like reptilian skin. Very strange indeed.\n\nYou can get the stones or go west, east or south"
    else
        desc += "\n\nYou can go west, east or south"

    let answer = prompt(desc)

    if(answer == null) {
        alert("I don't think so")
        hallway()
    } else if(answer.toLowerCase() == "west") {
        livingRoom()
    } else if(answer.toLowerCase() == "east") {
        entrance()
    } else if(answer.toLowerCase() == "south") {
        nursery()
    } else if(((getVerb(answer) == "get" || getVerb(answer) == "take") &&
               (getNoun(answer) == "stone" || getNoun(answer) == "stones")) ||
               (getVerb(answer) == "stone" || getVerb(answer) == "stones")) {
                if(hasStones) {
                    alert("You already have them")
                } else {
                    alert("picked up egg shaped stones")
                    hasStones = true
                }
        hallway()
    } else if(answer == null) {
        alert("I don't think so")
    } else {
        alert("give me something to work with!!!")
        hallway()
    }
}

let reception = () => {
    if(!receptionVisited) {
       receptionVisited = true
       roomsVisited++
   }

   let answer = prompt("You have entered a large reception room. There are chairs arranged around a coffee table with some decayed books and magazines, empty teacups and an empty cake stand. There are oil paintings on wall and a glass cabinet filled with antique china.\n\nYou can go east, west or south")

    if(answer == null) {
        alert("I don't think so")
        reception()
    } else if(answer.toLowerCase() == "east") {
        masterDiningRoom()
    } else if(answer.toLowerCase() == "south") {
        laboratory()
    } else if(answer.toLowerCase() == "west") {
        entrance()
    } else {
        alert("give me something to work with!!!")
        reception()
    }
}

let livingRoom = () => {
    if(!livingRoomVisited) {
       livingRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("You enter into what looks to have been a small living room. Family pictures hang on the wall and you wonder what has happened to the people in the photographs! Above the fireplace hangs an eerie portrait of a lady in an emerald dress. Her eyes follow you around the room. You notice she is pointing to the south. Could this be a sign to the way out? or is she pointing you in a more sinister direction! Which way will you go?\n\nYou can head east or south")

    if(answer == null) {
        alert("I don't think so")
        livingRoom()
    } else if(answer.toLowerCase() == "south") {
        conservatory();
    } else if(answer.toLowerCase() == "east") {
        hallway()
    } else {
        alert("give me something to work with!!!")
        livingRoom()
    }
}

let conservatory = () => {
    if(!conservatoryVisited) {
       conservatoryVisited = true
       roomsVisited++
   }

   let answer = prompt("You've wondered into a small conservatory. The room is bright as a beam of moonlight pours through the skylight above. You wonder if you could maybe climb out and make your way to freedom but the skylight is much too high, even with a chair to stand on. You notice a stack of winter coats hanging along the wall and below them a rucksack. You see a flask peeking out of the top and open it up, it’s empty. Bah!\n\nYou can go east, north or south")

    if(answer == null) {
        alert("I don't think so")
        conservatory()
    } else if(answer.toLowerCase() == "south") {
        gamesRoom();
    } else if(answer.toLowerCase() == "north") {
        livingRoom()
    } else if(answer.toLowerCase() == "east") {
        nursery()
    } else {
        alert("give me something to work with!!!")
        conservatory()
    }
}

let gamesRoom = () => {
    if(!gamesRoomVisited) {
       gamesRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("You have entered the games room. There is a billiard table in the centre of the room, a large dart board on one wall with half a dozen darts, a backgammon table with pieces set for game and at the far end of the room is a large ornate chess board - the game was started but not finished. Ther are also three card tables; one large and two small. On one of the small card tables are several hands of cards, some brandy glasses and a decanter half-filled with brandy.\n\nYou can go north, east or south")

    if(answer == null) {
        alert("I don't think so")
        gamesRoom()
    } else if(answer.toLowerCase() == "south") {
        boneRoom();
    } else if(answer.toLowerCase() == "north") {
        conservatory()
    } else if(answer.toLowerCase() == "east") {
        armoury()
    } else {
        alert("give me something to work with!!!")
        gamesRoom()
    }
}

let boneRoom = () => {
    if(!boneRoomVisited) {
       boneRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("As you try to enter the room an invisible barrier blocks your path. A booming voice bellows \"If you answer this question correctly you may enter:\n\nA box without hinges, key or lid, yet golden treasure inside is hid. What is it?\"\n\nwhat is your answer?")

    if(answer.toLowerCase() != "egg" && answer.toLowerCase() != "eggses")
        boneRoom()
    
    while(true) {
        let desc = "Strange, this room is totally empty... apart from the pile of charred bones in the corner..."
        if(!hasSkull) {
            desc += " rummaging through the bones you find a skull with eerie runes carved into it.\n\nYou can get the skull or go north"
        } else {
            desc += "\n\nYou can go north"
        }

        answer = prompt(desc)

        if(answer == null) {
            alert("I don't think so")
        } else if(((getVerb(answer) == "get" || getVerb(answer) == "take") &&
                   (getNoun(answer) == "skull" && !hasSkull)) ||
                   (getVerb(answer) == "skull")) {
            hasSkull = true
        } else if(answer.toLowerCase() == "north") {
            break
        } else {
            alert("give me something to work with!!!")
        }
    }

    gamesRoom()
}

let masterDiningRoom = () => {
    if(!diningRoomVisited) {
       diningRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("The master dining room. The long table has four, large silver candle sticks and is partially covered by a lace table cloth. There is a thin layer of dust on the table, and someone has written \"Help Me!\" in it. There are many oil paintings around the room showing scenes from antiquity.\n\nThere are doors to the west and south.")

    if(answer == null) {
        alert("I don't think so")
        masterDiningRoom()
    } else if(answer.toLowerCase() == "west") {
        reception();
    } else if (answer.toLowerCase() == "south") {
        kitchen()
    } else {
        alert("give me something to work with!!!")
        masterDiningRoom()
    }
}

let kitchen = () => {
    if(!kitchenVisited) {
       kitchenVisited = true
       roomsVisited++
   }

   let answer = prompt("This is the main kitchen. There are pots and pans hanging from hooks on the walls from the middle of ceiling. There is a large open fire with a huge saucepan, boiling something mysterious. There different kind of meat and birds hanging, waiting to be cooked. There is a large pile potatoes in the corner of the room to be cleaned and peeled.\n\nYou can go west, north or south")

    if(answer == null) {
        alert("I don't think so")
        kitchen()
    } else if(answer.toLowerCase() == "north"){
        masterDiningRoom()
    } else if(answer.toLowerCase() == "west") {
        laboratory()
    } else if(answer.toLowerCase() == "south") {
        pantry()
    } else {
        alert("give me something to work with!!!")
        kitchen()
    }
}

let laboratory = () => {
    if(!laboratoryVisited) {
       laboratoryVisited = true
       roomsVisited++
   }

   let answer = prompt("A laboratory? Rows and rows of cobwebbed covered jars line the shelves on just about every wall. An old wooden bench sits in the centre of the room atop it a Bunsen burner and a book. A handwritten list is scrawled on the open page and you can just about make out some of the words. '...ADD THE FERMENTED EYE OF NEWT, BLOOD OF BAT AND WART OF TOAD AND SIMMER FOR 20 MINS...' Is this some sort of recipe? But for what?\n\nWill you go west, north, east or south")

    if(answer == null) {
        alert("I don't think so")
        laboratory()
    } else if(answer.toLowerCase() == "north") {
        reception();
    } else if(answer.toLowerCase() == "west") {
        library()
    } else if(answer.toLowerCase() == "east") {
        kitchen()
    } else if(answer.toLowerCase() == "south") {
        batRoom()
    } else {
        alert("give me something to work with!!!")
        laboratory();
    }
}

let library = () => {
    if(!libraryVisited) {
       libraryVisited = true
       roomsVisited++
   }

   let desc = "You have entered the master library. There are bookselves on every wall except the wall facing the window. There are desks for reading and studying in the middle of the floor. They are very old and still have inkwells. a copy of Javascript for Dummies is sitting on one of the desks."

    if(hasSkull) {
        desc += "\nYou feel an overwhelming urge to search the bookshelves and to you're surprise find the entrance to a secret room\n\nYou can go west, north, east or south"
    } else {
        desc += "\n\nYou can go west, north or east"
    }
    let answer = prompt(desc)

    if(answer == null) {
        alert("I don't think so")
        library()
    } else if(answer.toLowerCase() == "east") {
        laboratory();
    } else if(answer.toLowerCase() == "west") {
        nursery();
    } else if(answer.toLowerCase() == "north") {
        entrance()
    } else if(answer.toLowerCase() == "south" && hasSkull) {
        secretRoom()
    } else {
        alert("give me something to work with!!!")
        library();
    }
}

let nursery = () => {
    if(!nurseryVisited) {
       nurseryVisited = true
       roomsVisited++
   }

   let answer = prompt("You have entered the nursery where you can see two large wooden cots. There are two shelves of children’s toys, a bookshelf of colourful children’s books, two small fishing rods are leaning against one wall and a large kite hangs from the ceiling. Up against a wall is a big leather chair and next to it a large rocking horse. Toy soldiers are arranged in rows on the floor with a small bronze cannon.\n\nYou can go west, north, east or south")

    if(answer == null) {
        alert("I don't think so")
        nursery()
    } else if(answer.toLowerCase() == "east") {
        library();
    } else if(answer.toLowerCase() == "west") {
        conservatory()
    } else if(answer.toLowerCase() == "north") {
        hallway()
    } else if(answer.toLowerCase() == "south") {
        armoury();
    } else {
        alert("give me something to work with!!!")
        nursery();
    }
}

let armoury = () => {
   let desc = ""
    if(!armouryVisited) {
        desc = "CRAASH! You think you’ve bumped into someone! Oh, it’s a suit of armour! It falls back into the suit behind causing an entire row of them to collapse like dominoes - the noise is deafening! You hope someone or something didn’t hear that! Looking around you notice huge swords and axes mounted along the walls. "
        armouryVisited = true
        roomsVisited++
    } else {
        desc = "You're in the armoury. Huge swords and axes are mounted along the walls and armour lies scattered all over the floor. "
    }

    if(isArmed) {
        desc += "In the centre of the room is a large empty wooden chest.\n\nYou can go west, north or south"
    } else {
        desc += "In the centre of the room is a large wooden chest with a broken lock. It contains a pointy dagger!!! That could come in handy\n\nWould you like to get the dagger or go west, north or south"
    }

    let answer = prompt(desc)

    if(answer == null) {
        alert("I don't think so")
        armoury()
    } else if (((getVerb(answer) == "get") && (getNoun(answer) == "dagger")) ||
                (getVerb(answer) == "dagger")) {
        alert("picked up dagger")
        isArmed = true
        armoury()
    } else if(answer.toLowerCase() == "south") {
        smokingRoom();
    } else if(answer.toLowerCase() == "north") {
        nursery();
    } else if(answer.toLowerCase() == "west") {
        gamesRoom();
    } else {
        alert("give me something to work with!!!")
        armoury();
    }
}

let smokingRoom = () => {
    if(!smokingRoomVisited) {
       smokingRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("You have entered the smoking room. There are several leather chairs separated by small tables which of which houses a large humidor and there is a distinctive smell of Cuban cigars and ancient tobacco smoke. Decanters of Port, Brandy, whiskey, gin and rum sit atop a large Edwardian drinks cabinet filled with ornate glassware.\n\nYou can head north or east")

    if(answer == null) {
        alert("I don't think so")
        smokingRoom()
    } else if(answer.toLowerCase() == "north") {
        armoury();
    } else if(answer.toLowerCase() == "east") {
        emptyRoom()
    } else {
        alert("give me something to work with!!!")
        smokingRoom();
    }
}

let emptyRoom = () => {
    if(!emptyRoomVisited) {
       emptyRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("Water drips from a crack in the ceiling. Your footsteps echo as you walk further into the empty room and your torch illuminates a message scratched onto the stone wall \"BEWARE THE EMERALD BEAST DO NOT GO EAST\". Do you heed the warning?\n\nYou can go west or east")

    if(answer == null) {
        alert("I don't think so")
        emptyRoom()
    } else if(answer.toLowerCase() == "west") {
        smokingRoom();
    } else if(answer.toLowerCase() == "east") {
        monsterRoom()
    } else {
        alert("give me something to work with!!!")
        emptyRoom();
    }
}

let secretRoom = () => {
    if(!secretRoomVisited) {
       secretRoomVisited = true
       roomsVisited++

       alert("As you enter the runed skull floats from your hand and drifts across the room and settles on a desk. It turns to face you and, immposibly, seems to smile and a voice whispers \"Thankyou\" before the skull crumbles to dust. Glinting in the remnants of the skull you see a key. Maybe this is important?")
    }

    let desc = "A Secret room! This dimly lit room has a desk, and beside it, a small safe. There is a large revolver on the desk but sadly you can find no ammunition for it. There is gun rack with a selection of rusty hunting rifles and shotguns. There is another rack on the opposite wall with some decayed antique swords and crossbow. There is an empty cupboard marked ‘survival rations’ and empty boxes litter the floor.\n\n"
    if(!hasKey)
        desc += "You can get the key or go north"
    else
        desc += "You can go north"
    let answer = prompt(desc)

    // pick something up here to be able to leave the house
    if(answer == null) {
        alert("I don't think so")
        secretRoom()
    } else if (((getVerb(answer) == "get") && (getNoun(answer) == "key")) ||
                (getVerb(answer) == "key")){
        if(hasKey) {
            alert("you already have it")
            secretRoom()
        } else {
            alert("picked up key")
            hasKey = true
            secretRoom()
        }
    } else if(answer.toLowerCase() == "north") {
        library();
    } else {
        alert("give me something to work with!!!")
        secretRoom();
    }
}

let monsterRoom = () => {
    if(!monsterRoomVisited) {
       monsterRoomVisited = true
       roomsVisited++
   }

   if(!hasStones) {
        alert("A thunderous growl shakes the ground around you. You quickly dodge the rocks crumbling from the ceiling. Before you stands a ginormous green beast drawing in its breath a-... it can't be... it's a \"DRAGGGOOOONNN\". You just about get the word out before you're engulfed in flames and burnt to a crisp.\n\nGAME OVER!")
        restart()
    }

    let answer = prompt("A ginormous green beast draws in its breath, a-.... it can't be... it's a \"DRAGGGOOOONNN\". It's just about to burn you to a crisp when the strange stones you carry begin to glow brightly. The dragon shrinks back, obviously afraid, leaving you just enough space to run past.\n\nYou can go west,north or east")

    if(answer == null) {
        alert("I don't think so")
        monsterRoom()
    } else if(answer.toLowerCase() == "west") {
        emptyRoom();
    } else if(answer.toLowerCase() == "north") {
        batRoom();
    } else if(answer.toLowerCase() == "east") {
        theFinalRoom();
    } else {
        alert("give me something to work with!!!")
        emptyRoom();
    }
}

let batRoom = () => {
    if(!batRoomVisited) {
       batRoomVisited = true
       roomsVisited++
   }

   let answer = prompt("You shine your torch into an empty cupboard startling a family of bats, they let out a shriek and frantically flap their wings in your direction. You try to take a step backwards falling over in the process and dropping your torch but luckily no bites. That was a close one!\n\nYou can go north, east or south")

    if(answer == null) {
        alert("I don't think so")
        batRoom()
    } else if(answer.toLowerCase() == "south") {
        monsterRoom();
    } else if(answer.toLowerCase() == "east") {
        pantry();
    } else if(answer.toLowerCase() == "north") {
        laboratory();
    } else {
        alert("give me something to work with!!!")
        batRoom();
    }
}

let pantry = () => {
    if(!pantryVisited) {
       pantryVisited = true
       roomsVisited++
   }

   if(ratIsAlive) {
        alert("You have found the pantry and in doing so have disturbed a huge rat feasting on some moldy cheese. The rat shoots you a menacing glare and gets ready to pounce!\n\nYou must fight")

        if(isArmed) {
            alert("You draw your weapon just as the giant rat leaps for your throat. Your adrenalin enhanced reflexes allow you move out of the way of it's attack and as you turn to face the crazed beast you're already moving to attack. The rat dies painfully and messily under your onslaught")
            ratIsAlive = false
            pantry()
        } else {
            alert("As you look around to try and find an esacpe route the giant rat leaps at your throat and either by chance or by instinct it finds your jugular vein and sinks in it's teeth.\n\nYou are now rat food. Better luck next time.\n\nGAME OVER")
            restart()
        }
    } else {
        let answer = prompt("You are in the pantry\n\nYou can go west, north or south")

        if(answer == null) {
            alert("I don't think so")
            pantry()
        } else if(answer.toLowerCase() == "west") {
            batRoom();
        } else if(answer.toLowerCase() == "north") {
            kitchen();
        } else if(answer.toLowerCase() == "south") {
            theFinalRoom();
        } else {
            alert("give me something to work with!!!")
            pantry();
        }
    }
}

let theFinalRoom = () => {
    if(!exitRoomVisited) {
       exitRoomVisited = true
       roomsVisited++
    }

    let desc = "This is it! You have completed your quest.\n\nYou can go west, north or there is a door to the south to freedom."
    if(!hasKey)
        desc = "well this is the way out but the huge door is locked. There has to be some way of opening it.\n\nYou can go west or north"

    let answer = prompt(desc)
    if(answer == null) {
        alert("I don't think so")
        theFinalRoom()
    } else if(answer.toLowerCase() == "north") {
        pantry()
    } else if(answer.toLowerCase() == "west") {
        monsterRoom()
    } else if (answer.toLowerCase() == "south") {
        if(hasKey) {
            let roomsPercent = ((100 / 20) * roomsVisited)
            alert(`You turn the key in the lock and the door creaks open. Daylight blinds you momentarily and you step out onto crunchy gravel and take in a lungful of fresh air. Freedom.\n\nCongratulations!\n\nThat was fun, wasn't it!\n\nYou visited ${roomsPercent}% of the rooms.`)
            restart()
        } else {
            alert("The door is locked. Perhaps a key?")
            theFinalRoom()
        }
    }
}

let restart = () => {
    let answer = prompt("Would you like to play again?\n\nYes or No")
    if(answer == null) {
        alert("I don't think so")
        theFinalRoom()
    } else if(answer.toLowerCase() == "yes" || answer.toLowerCase() == 'y') {
        start()
    } else if(answer.toLowerCase() == "no" || answer.toLowerCase() == 'n') {
        quit()
    } else {
        alert("give me something to work with!!!")
        restart();
    }
}

let quit = () => {
    alert("GAME OVER\n\nGoodbye!!")
}