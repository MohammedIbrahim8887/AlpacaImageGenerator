/*Style Button variables*/
const hair = document.getElementById("hair");
const eyes = document.getElementById("eyes");
const mouth = document.getElementById("mouth");
const ears = document.getElementById("ears");
const neck = document.getElementById("neck");
const leg = document.getElementById("leg");
const background = document.getElementById("backGround");
const accessories = document.getElementById("accessories");

/*Download and Random button variables*/
const download = document.getElementById("download");
const random = document.getElementById("random");

/*Content divs*/
const alpacaStyle = document.getElementById("alpacaStyle");

/*Button creator component*/
function createButton(text, tag, id) {
    const btn = document.createElement(tag);
    btn.className = "btn";
    btn.id = id;
    btn.textContent = text;
    console.log("Button created");
    return btn;
}

/*Holder component creator*/
function createHolder(id) {
    const holder = document.createElement("div");
    holder.className = "holder";
    holder.id = id;
    return holder;
}

/*Component created checker*/
function check(isCreated, component, button) {
    if (isCreated) {
        alpacaStyle.removeChild(component);
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
        isCreated = false;
    } else {
        return;
    }


}

/*Hair event*/
let hairCounter = 0;
let hairCreated = false;
hair.addEventListener("click", (e) => {
    if (hairCounter === 0) {
        hair.style.backgroundColor = "#265bff";
        hair.style.color = "#fff";
        const hairDiv = createHolder("hairDiv");
        const defatultBtn = createButton("Default", "div", "default");
        const bang = createButton("Bang", "div", "bang");
        const curis = createButton("Curis", "div", "curis");
        const elegant = createButton("Elegant", "div", "elegant");
        const fancy = createButton("Fancy", "div", "fancy");
        const quiff = createButton("Quiff", "div", "quiff");
        const short = createButton("Short", "div", "short");
        alpacaStyle.appendChild(hairDiv);
        hairDiv.appendChild(defatultBtn);
        hairDiv.appendChild(bang);
        hairDiv.appendChild(curis);
        hairDiv.appendChild(elegant);
        hairDiv.appendChild(fancy);
        hairDiv.appendChild(quiff);
        hairDiv.appendChild(short);
        hairCounter++;
        hairCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Background Event*/
let backgroundCounter = 0;
let backgroundCreated = false;
background.addEventListener("click", (e) => {
    if (!backgroundCreated) {
        background.style.backgroundColor = "#265bff";
        background.style.color = "#fff";
        const backgroundDiv = createHolder("backgroundDiv");
        const blue50 = createButton("Blue 50", "div", "blue50");
        const blue60 = createButton("Blue 60", "div", "blue76");
        const blue70 = createButton("Blue 70", "div", "blue70");
        const darkBlue30 = createButton("Dark Blue 30", "div", "darkBlue30");
        const darkBlue50 = createButton("Dark Blue 50", "div", "darkBlue50");
        const darkBlue70 = createButton("Dark Blue 70", "div", "darkBlue70");
        const green50 = createButton("Green 50", "div", "green50");
        const green60 = createButton("Green 60", "div", "green60");
        const green70 = createButton("Green 70", "div", "green70");
        const gray40 = createButton("Gray 40", "div", "gray40");
        const gray70 = createButton("Gray 70", "div", "gray70");
        const gray80 = createButton("Gray 80", "div", "gray80");
        const red50 = createButton("Red 50", "div", "red50");
        const red60 = createButton("Red 60", "div", "red60");
        const red80 = createButton("Red 80", "div", "red70");
        const yellow50 = createButton("Yellow 50", "div", "yellow50");
        const yellow60 = createButton("Yellow 60", "div", "yellow60");
        const yellow70 = createButton("Yellow 70", "div", "yellow70");
        alpacaStyle.appendChild(backgroundDiv);
        backgroundDiv.appendChild(blue50);
        backgroundDiv.appendChild(blue60);
        backgroundDiv.appendChild(blue70);
        backgroundDiv.appendChild(darkBlue30);
        backgroundDiv.appendChild(darkBlue50);
        backgroundDiv.appendChild(darkBlue70);
        backgroundDiv.appendChild(green50);
        backgroundDiv.appendChild(green60);
        backgroundDiv.appendChild(green70);
        backgroundDiv.appendChild(gray40);
        backgroundDiv.appendChild(gray70);
        backgroundDiv.appendChild(gray80);
        backgroundDiv.appendChild(red50);
        backgroundDiv.appendChild(red60);
        backgroundDiv.appendChild(red80);
        backgroundDiv.appendChild(yellow50);
        backgroundDiv.appendChild(yellow60);
        backgroundDiv.appendChild(yellow70);
        backgroundCounter++;
        backgroundCreated = true;
        check(hairCreated, hairDiv, hair);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Accessories Event*/
let accessoriesCounter = 0;
let accessoryCreated = false;
accessories.addEventListener("click", (e) => {
    if (accessoriesCounter === 0) {
        accessories.style.backgroundColor = "#265bff";
        accessories.style.color = "#fff";
        const accessoriesDiv = createHolder("accessoriesDiv");
        const earings = createButton("Earings", "div", "earings");
        const flower = createButton("Flower", "div", "flower");
        const glasses = createButton("Glasses", "div", "glasses");
        const headphone = createButton("Headphone", "div", "headphone");
        alpacaStyle.appendChild(accessoriesDiv);
        accessoriesDiv.appendChild(earings);
        accessoriesDiv.appendChild(flower);
        accessoriesDiv.appendChild(glasses);
        accessoriesDiv.appendChild(headphone);
        accessoriesCounter++;
        accessoryCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(hairCreated, hairDiv, hair);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Mouth Event*/
let mouthCounter = 0;
let mouthCreated = false;
mouth.addEventListener("click", (e) => {
    if (mouthCounter === 0) {
        mouth.style.backgroundColor = "#265bff";
        mouth.style.color = "#fff";
        const mouthDiv = createHolder("mouthDiv");
        const defaultMouth = createButton("Default ", "div", "defaultMouth");
        const astonished = createButton("Astonished", "div", "astonished");
        const eating = createButton("Eating", "div", "eating");
        const laugh = createButton("Laugh", "div", "laugh");
        const tounge = createButton("Tounge", "div", "tounge");
        alpacaStyle.appendChild(mouthDiv);
        mouthDiv.appendChild(defaultMouth);
        mouthDiv.appendChild(astonished);
        mouthDiv.appendChild(eating);
        mouthDiv.appendChild(laugh);
        mouthDiv.appendChild(tounge);
        mouthCounter++;
        mouthCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(hairCreated, hairDiv, hair);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Eyes Event*/
let eyesCounter = 0;
let eyesCreated = false;
eyes.addEventListener("click", (e) => {
    if (eyesCounter === 0) {
        eyes.style.backgroundColor = "#265bff";
        eyes.style.color = "#fff";
        const eyesDiv = createHolder("eyesDiv");
        const defaultEyes = createButton("Default", "div", "default");
        const angry = createButton("Angry", "div", "angry");
        const naughty = createButton("Naughty", "div", "naughty");
        const panda = createButton("Panda", "div", "panda");
        const smart = createButton("Smart", "div", "smart");
        const star = createButton("Star", "div", "star");
        alpacaStyle.appendChild(eyesDiv);
        eyesDiv.appendChild(defaultEyes);
        eyesDiv.appendChild(angry);
        eyesDiv.appendChild(naughty);
        eyesDiv.appendChild(panda);
        eyesDiv.appendChild(smart);
        eyesDiv.appendChild(star);
        eyesCounter++;
        eyesCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(hairCreated, hairDiv, hair);
    } else {
        return;
    }
});

/*Ears Event*/
let earsCounter = 0;
let earsCreated = false;
ears.addEventListener("click", (e) => {
    if (earsCounter === 0) {
        ears.style.backgroundColor = "#265bff";
        ears.style.color = "#fff";
        const earsDiv = createHolder("earsDiv");
        const defaultEars = createButton("Default", "div", "default");
        const tiltBackward = createButton("Tilt Backward", "div", "tiltBackward");
        const tiltForward = createButton("Tilt Forward", "div", "tiltForward");
        alpacaStyle.appendChild(earsDiv);
        earsDiv.appendChild(defaultEars);
        earsDiv.appendChild(tiltBackward);
        earsDiv.appendChild(tiltForward);
        earsCounter++;
        earsCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(legCreated, legDiv, leg);
        check(hairCreated, hairDiv, hair);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Neck Event*/
let neckCounter = 0;
let neckCreated = false;
neck.addEventListener("click", (e) => {
    if (neckCounter === 0) {
        neck.style.backgroundColor = "#265bff";
        neck.style.color = "#fff";
        const neckDiv = createHolder("neckDiv");
        const defaultNeck = createButton("Default", "div", "default");
        const bendBackward = createButton("Bend Backward", "div", "bendBackward");
        const bendForward = createButton("Bend Forward", "div", "bendForward");
        const thick = createButton("Thick", "div", "thick");
        alpacaStyle.appendChild(neckDiv);
        neckDiv.appendChild(defaultNeck);
        neckDiv.appendChild(bendBackward);
        neckDiv.appendChild(bendForward);
        neckDiv.appendChild(thick);
        neckCounter++;
        neckCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(hairCreated, hairDiv, hair);
        check(legCreated, legDiv, leg);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});

/*Leg Event*/
let legCounter = 0;
let legCreated = false;
leg.addEventListener("click", (e) => {
    if (legCounter === 0) {
        leg.style.backgroundColor = "#265bff";
        leg.style.color = "#fff";
        const legDiv = createHolder("legDiv");
        const defaultLeg = createButton("Default", "div", "default");
        const bubbleTea = createButton("Bubble Tea", "div", "bubbleTea");
        const cookie = createButton("Cookie", "div", "cookie");
        const gameConsole = createButton("Game Console", "div", "gameConsole");
        const tiltBackward = createButton("Tilt Backward", "div", "tiltBackward");
        const tiltForward = createButton("Tilt Forward", "div", "tiltForward");
        alpacaStyle.appendChild(legDiv);
        legDiv.appendChild(defaultLeg);
        legDiv.appendChild(bubbleTea);
        legDiv.appendChild(cookie);
        legDiv.appendChild(gameConsole);
        legDiv.appendChild(tiltBackward);
        legDiv.appendChild(tiltForward);
        legCounter++;
        legCreated = true;
        check(backgroundCreated, backgroundDiv, background);
        check(accessoryCreated, accessoriesDiv, accessories);
        check(neckCreated, neckDiv, neck);
        check(hairCreated, hairDiv, hair);
        check(earsCreated, earsDiv, ears);
        check(mouthCreated, mouthDiv, mouth);
        check(eyesCreated, eyesDiv, eyes);
    } else {
        return;
    }
});