// Global variables
let inventory = []

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

// the room descriptions
let entrance = () => {
    alert("Your torch illuminates the tiled floor up until a grand staircase. Some of the banisters are missing and the stairs crumbling. You wonder if it's safe to try making your way upstairs or if you should play it safe and stick to the ground floor");

    let answer = prompt("up or east")

    console.log(answer)
    if(answer.toLowerCase() == "up") {
        hallway();
    } else if(answer.toLowerCase() == "east") {
        reception()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        entrance()
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
    alert("You have entered a large reception room. There are chairs arranged around a coffee table with some books and magazines, empty teacups and an empty cake stand. There are oil paintings on wall and a glass cabinet filled with antique china. There are doors to the east and south or you can go back to the entrance")

    let answer = prompt("east, south or back")

    console.log(answer)
    if(answer.toLowerCase() == "east") {
        masterDiningRoom()
    } else if(answer.toLowerCase() == "south") {
        laboratory()
    } else if(answer.toLowerCase() == "back") {
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
    alert("You enter into what looks to have been a small living room. Family pictures hang on the wall and you wonder what has happened to the people in the photographs! Above the fireplace hangs an eerie portrait of a lady in an emerald dress. Her eyes follow you around the room. You notice she is pointing to the south. Could this be a sign to the way out? or is she pointing you in a more sinister direction! Which way will you go? You can head south or back to where you came from")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        conservatory();
    } else if(answer.toLowerCase() == "back") {
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
    alert("You have entered the games room. There is a billiard table in the centre of the room. There are three card tables, one large and two, small. One one of the small card tables are several hands of cards and some brandy glasses. There is decanter, half filled with brandy. There is large dart board on one wall with half a dozen darts. There is backgammon table with pieces set for game. At the far end of the room is a large ornate chess board. The game was started, but not finished. You can go south or back to the conservatory")

    let answer = prompt("south or back")

    console.log(answer)
    if(answer.toLowerCase() == "south") {
        boneRoom();
    } else if(answer.toLowerCase() == "back") {
        conservatory()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        gamesRoom()
    } else {
        alert("give me something to work with!!!")
        gamesRoom()
    }
}

let boneRoom = () => {
    alert("Strange, this room is totally empty.... apart from the pile of charred bones in the corner... there is no way forward you can only go back")

    let answer = prompt("back")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
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
    alert("The master dining room. The long table has four, large silver candle sticks and is partially covered by a lace table cloth. There is a thin layer of dust on the table, and someone has written ‘Help me’ in the dust. There are many oil paintings in the room showing scenes from antiquity. There is a door to the south.")

    let answer = prompt("do you want to go south or back thew way you came")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
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
    alert("You have entered, this is the main kitchen. There are pots and pans hanging on the walls and from hooks from the middle of ceiling. There is a large open fire  with a huge saucepan, boiling something mysterious. There different kind of meat and birds hanging, waited to be cooked. There is a large pile potatoes in the corner of the room waiting to be cleaned and pealed. It seems there are no exits")

    let answer = prompt("do you want to go back to the master dining?")

    console.log(answer)
    if(answer.toLowerCase() == "back"){
        masterDiningRoom()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        kitchen()
    } else {
        alert("give me something to work with!!!")
        kitchen()
    }
}

let laboratory = () => {
    alert("A laboratory? Rows and rows of cobwebbed covered jars line the shelves on just about every wall. An old wooden bench sits in the centre of the room a top it a Bunsen burner and a book. A handwritten list is scrawled on the open page and you can just about make out some of the words. '... ADD THE FERMENTED EYE OF NEWT, BLOOD OF BAT AND WART OF TOAD AND SIMMER FOR 20 MINS...'' Is this some sort of recipe? But for what? Will you go back to the reception room or head west")
    let answer = prompt("back or west")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
        reception();
    } else if(answer.toLowerCase() == "west") {
        library()
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        laboratory()
    } else {
        alert("give me something to work with!!!")
        laboratory();
    }
}

let library = () => {
    alert("You have entered. The master library. There are bookselves on every wall except the wall facing the window. Between the windowed wall and the one opposite there are desks for reading and studying. The desks are very old and still have inkwells. There is parchment paper in the drawers. A copy of Javascript for Dummies is sitting on one desk. You can go back to the laboratory or head west")

    let answer = prompt("back or west")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
        laboratory();
    } else if(answer.toLowerCase() == "west") {
        nursery();
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        library()
    } else {
        alert("give me something to work with!!!")
        library();
    }
}

let nursery = () => {
    alert("You have entered the nursery. There two large wooden cots. There are two shelves of children’s toys, and a bookshelf of colourful children’s books. There is a big leather chair and a large rocking horse. There two small fishing rods leaning against one wall and a large kite hanging from the ceiling. There are rows of toy soldiers on the floor and a small bronze cannon. You can go back to the library or head south")
    let answer = prompt("back or south")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
        library();
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
    alert("CRAASH! You think you’ve bumped into someone! Oh, it’s a suit of armour! It falls back into the suit behind causing an entire row of them to collapse like dominoes. The noise is deafening! You hope someone or something didn’t hear that! Looking around you notice huge swords and axes mounted along the walls. This must be the armoury In the centre of the room is a large wooden chest with a rusted lock. As you examine the lock further it snaps in your hand. YOU’RE IN! The chest contains a pointy dagger! Would you like to pick up the dagger, head south or go back to the nursery")

    let answer = prompt("back, south or get dagger")

    console.log(answer)
    if ((getVerb(answer) == "get") && (getNoun(answer) == "dagger")) { 
            alert("picked up dagger")
            addItem("Pointy dagger")
            let answer= prompt("back or south")
    }
    else if(answer.toLowerCase() == "south") {
        smokingRoom();
    } 
    else if(answer.toLowerCase() == "back") {
        nursery();
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
    alert("You have entered. The smoking room. There are several leather chairs separated by small tables. There are several large humidors and there is a distinctive smell of Cuban cigars and ancient tobacco smoke. Decanters of Port, Brandy, whiskey, gin and vodka sit atop a large Edwardian drinks cabinet, filled with ornate glass-wear. You can head east or back to the armoury")
    let answer = prompt("back or south")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
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
    alert("Water drips from a crack in the ceiling. Your footsteps echo as you walk further into the empty room. Your torch illuminates a message scratched onto the stone wall \"BEWARE THE EMERALD BEAST DO NOT GO EAST\". Do you heed the warning? You can go east or back")
    let answer = prompt("east or back")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
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
    alert("A thunderous growl shakes the ground around you. You quickly dodge the rocks crumbling from the ceiling. Before you stands a ginormous green beast, drawing in its breath a-.... it can't be... it's a \"DRAGGGOOOONNN\". You just about get the word out before you're engulfed in flames and burnt to a crisp. GAME OVER! You can go north or back")
    let answer = prompt("north or back")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
        emptyRoom();
    } else if(answer.toLowerCase() == "north") {
        alert("north");
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        monsterRoom()
    } else {
        alert("give me something to work with!!!")
        emptyRoom();
    }
}

let batRoom = () => {
    alert("You shine your torch into an empty cupboard startling a family of bats in the process they let out a shriek and frantically flap their wings in your direction. You try to take a step backwards falling over in the process and dropping your torch but luckily no bites, that was a close one! You can go east or back")
    let answer = prompt("east or back")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
        monsterRoom();
    } else if(answer.toLowerCase() == "east") {
        alert("east");
    } else if(answer.toLowerCase() == "inventory") {
        showInventory()
        batRoom()
    } else {
        alert("give me something to work with!!!")
        batRoom();
    }
}

let pantry = () => {
    alert("You have found the pantry and in doing so have disturbed a huge rat feasting on some moldy cheese. The rat shoots you a menacing glance and gets ready to pounce! FIGHT/FLEE/GET FOOD You can go north, south or back")
    let answer = prompt("north, south or back")
    console.log(answer)
    if(answer.toLowerCase() == "back") {
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

let theFinalRoom = () => {
    alert("This is it! You have completed your quest. There is a door to the south to the freedom.")

    let answer = prompt("To exit go south or go back to the last room")

    console.log(answer)
    if(answer.toLowerCase() == "back") {
        reception()
    } else if (answer.toLowerCase() == "south") {
        alert("south")
        alert("Congratulations! The game has ended")
        alert("That was fun, wasn't it!")

        prompt("Would you like to play again?")
        if(answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
                entrance()
        } else if(answer.toLowerCase() == "inventory") {
            showInventory()
            theFinalRoom()
        } else {
            alert("GAME OVER")
        }
    } else {
        alert("give me something to work with!!!")
        armoury();
    }
}