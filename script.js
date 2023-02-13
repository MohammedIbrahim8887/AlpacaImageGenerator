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
    const holder = document.getElementById(component);
    if (isCreated && holder !== null) {
        alpacaStyle.removeChild(holder);
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
        isCreated = false;
        return isCreated;
    } else {
        return;
    }
}

/*Remove button color */
function removeColor(id){
    id.style.backgroundColor = "#fff";
    id.style.color = "#000";
}

/*Hair event*/
let hairCreated = false;
hair.addEventListener("click", (e) => {
    if (!hairCreated) {
        hair.style.backgroundColor = "#265bff";
        hair.style.color = "#fff";
        const hairDiv = createHolder("hairDiv");
        const hairImg = document.getElementById("hairImage");
        const defaultBtn = createButton("Default", "div", "default");
        const bang = createButton("Bang", "div", "bang");
        const curls = createButton("Curls", "div", "curls");
        const elegant = createButton("Elegant", "div", "elegant");
        const fancy = createButton("Fancy", "div", "fancy");
        const quiff = createButton("Quiff", "div", "quiff");
        const short = createButton("Short", "div", "short");
        alpacaStyle.appendChild(hairDiv);
        hairDiv.appendChild(defaultBtn);
        hairDiv.appendChild(bang);
        hairDiv.appendChild(curls);
        hairDiv.appendChild(elegant);
        hairDiv.appendChild(fancy);
        hairDiv.appendChild(quiff);
        hairDiv.appendChild(short);
        hairCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        defaultBtn.addEventListener("click",(e)=>{
            defaultBtn.style.backgroundColor = "#265bff";
            defaultBtn.style.color = "#fff";
            hairImg.src = "alpaca/hair/default.png";
            removeColor(bang);
            removeColor(curls);
            removeColor(elegant);
            removeColor(fancy);
            removeColor(quiff);
            removeColor(short);
        });
        bang.addEventListener("click",(e)=>{
            bang.style.backgroundColor = "#265bff";
            bang.style.color = "#fff";
            hairImg.src = "alpaca/hair/bang.png";
            removeColor(defaultBtn);
            removeColor(curls);
            removeColor(elegant);
            removeColor(fancy);
            removeColor(quiff);
            removeColor(short);
        });
        curls.addEventListener("click",(e)=>{
            curls.style.backgroundColor = "#265bff";
            curls.style.color = "#fff";
            hairImg.src = "alpaca/hair/curls.png";
            removeColor(bang);
            removeColor(defaultBtn);
            removeColor(elegant);
            removeColor(fancy);
            removeColor(quiff);
            removeColor(short);
        });
        elegant.addEventListener("click",(e)=>{
            elegant.style.backgroundColor = "#265bff";
            elegant.style.color = "#fff";
           hairImg.src = "alpaca/hair/elegant.png";
            removeColor(bang);
            removeColor(curls);
            removeColor(defaultBtn);
            removeColor(fancy);
            removeColor(quiff);
            removeColor(short);
        });
        fancy.addEventListener("click",(e)=>{
            fancy.style.backgroundColor = "#265bff";
            fancy.style.color = "#fff";
           hairImg.src = "alpaca/hair/fancy.png";
            removeColor(bang);
            removeColor(curls);
            removeColor(elegant);
            removeColor(defaultBtn);
            removeColor(quiff);
            removeColor(short);
        });
        quiff.addEventListener("click",(e)=>{
            quiff.style.backgroundColor = "#265bff";
            quiff.style.color = "#fff";
           hairImg.src = "alpaca/hair/quiff.png";
            removeColor(bang);
            removeColor(curls);
            removeColor(elegant);
            removeColor(fancy);
            removeColor(defaultBtn);
            removeColor(short);
        });
        short.addEventListener("click",(e)=>{
            short.style.backgroundColor = "#265bff";
            short.style.color = "#fff";
           hairImg.src = "alpaca/hair/short.png";
            removeColor(bang);
            removeColor(curls);
            removeColor(elegant);
            removeColor(fancy);
            removeColor(quiff);
            removeColor(defaultBtn);
        });
    } else {
        return;
    }
});

/*Background Event*/
let backgroundCreated = false;
background.addEventListener("click", (e) => {
    if (!backgroundCreated) {
        background.style.backgroundColor = "#265bff";
        background.style.color = "#fff";
        const backgroundDiv = createHolder("backgroundDiv");
        const backgroundImg = document.getElementById("backgroundsImage");
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
        backgroundCreated = true;
        hairCreated = check(hairCreated, "hairDiv", hair);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        blue50.addEventListener("click",(e)=>{
            blue50.style.backgroundColor = "#265bff";
            blue50.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/blue50.png";
            removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        blue60.addEventListener("click",(e)=>{
            blue60.style.backgroundColor = "#265bff";
            blue60.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/blue60.png";
            removeColor(blue50);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        blue70.addEventListener("click",(e)=>{
            blue70.style.backgroundColor = "#265bff";
            blue70.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/blue70.png";
            removeColor(blue60);
            removeColor(blue50);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        darkBlue30.addEventListener("click",(e)=>{
            darkBlue30.style.backgroundColor = "#265bff";
            darkBlue30.style.color = "#fff";
           backgroundImg.src = "alpaca/backgrounds/darkblue30.png";
            removeColor(blue60);
            removeColor(blue70);
            removeColor(blue50);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        darkBlue50.addEventListener("click",(e)=>{
            darkBlue50.style.backgroundColor = "#265bff";
            darkBlue50.style.color = "#fff";
           backgroundImg.src = "alpaca/backgrounds/darkblue50.png";
            removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(blue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        darkBlue70.addEventListener("click",(e)=>{
            darkBlue70.style.backgroundColor = "#265bff";
            darkBlue70.style.color = "#fff";
           backgroundImg.src = "alpaca/backgrounds/darkblue70.png";
            removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(blue50);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        green50.addEventListener("click",(e)=>{
            green50.style.backgroundColor = "#265bff";
            green50.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/green50.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(blue50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        green60.addEventListener("click",(e)=>{
            green60.style.backgroundColor = "#265bff";
            green60.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/green60.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(blue50);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        green70.addEventListener("click",(e)=>{
            green70.style.backgroundColor = "#265bff";
            green70.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/green70.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(blue50);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        gray40.addEventListener("click",(e)=>{
            gray40.style.backgroundColor = "#265bff";
            gray40.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/grey40.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(blue50);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        gray70.addEventListener("click",(e)=>{
            gray70.style.backgroundColor = "#265bff";
            gray70.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/grey70.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(blue50);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        gray80.addEventListener("click",(e)=>{
            gray80.style.backgroundColor = "#265bff";
            gray80.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/grey80.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(blue50);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        red50.addEventListener("click",(e)=>{
            red50.style.backgroundColor = "#265bff";
            red50.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/red50.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(blue50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        red60.addEventListener("click",(e)=>{
            red60.style.backgroundColor = "#265bff";
            red60.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/red60.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(blue50);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        red80.addEventListener("click",(e)=>{
            red80.style.backgroundColor = "#265bff";
            red80.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/red70.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(blue50);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        yellow50.addEventListener("click",(e)=>{
            yellow50.style.backgroundColor = "#265bff";
            yellow50.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/yellow50.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(blue50);
            removeColor(yellow60);
            removeColor(yellow70);
        });
        yellow60.addEventListener("click",(e)=>{
            yellow60.style.backgroundColor = "#265bff";
            yellow60.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/yellow60.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(blue50);
            removeColor(yellow70);
        });
        yellow70.addEventListener("click",(e)=>{
            yellow70.style.backgroundColor = "#265bff";
            yellow70.style.color = "#fff";
            backgroundImg.src = "alpaca/backgrounds/yellow70.png";
                        removeColor(blue60);
            removeColor(blue70);
            removeColor(darkBlue30);
            removeColor(darkBlue50);
            removeColor(darkBlue70);
            removeColor(green50);
            removeColor(green60);
            removeColor(green70);
            removeColor(gray40);
            removeColor(gray70);
            removeColor(gray80);
            removeColor(red50);
            removeColor(red60);
            removeColor(red80);
            removeColor(yellow50);
            removeColor(yellow60);
            removeColor(blue50);
        });
    } else {
        return;
    }
});

/*Accessories Event*/
let accessoryCreated = false;
accessories.addEventListener("click", (e) => {
    if (!accessoryCreated) {
        accessories.style.backgroundColor = "#265bff";
        accessories.style.color = "#fff";
        const accessoriesDiv = createHolder("accessoriesDiv");
        const accessoriesImg = document.getElementById("accessoriesImage")
        const earings = createButton("Earings", "div", "earings");
        const flower = createButton("Flower", "div", "flower");
        const glasses = createButton("Glasses", "div", "glasses");
        const headphone = createButton("Headphone", "div", "headphone");
        alpacaStyle.appendChild(accessoriesDiv);
        accessoriesDiv.appendChild(earings);
        accessoriesDiv.appendChild(flower);
        accessoriesDiv.appendChild(glasses);
        accessoriesDiv.appendChild(headphone);
        accessoryCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        hairCreated = check(hairCreated, "hairDiv", hair);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        earings.addEventListener("click",(e)=>{
            earings.style.backgroundColor = "#265bff";
            earings.style.color = "#fff";
           accessoriesImg.src = "alpaca/accessories/earings.png";
            removeColor(flower);
            removeColor(glasses);
            removeColor(headphone);
        });
        flower.addEventListener("click",(e)=>{
            flower.style.backgroundColor = "#265bff";
            flower.style.color = "#fff";
            accessoriesImg.src = "alpaca/accessories/flower.png";
            removeColor(earings);
            removeColor(glasses);
            removeColor(headphone);
        });
        glasses.addEventListener("click",(e)=>{
            glasses.style.backgroundColor = "#265bff";
            glasses.style.color = "#fff";
            accessoriesImg.src = "alpaca/accessories/glasses.png";
            removeColor(flower);
            removeColor(earings);
            removeColor(headphone);
        });
        headphone.addEventListener("click",(e)=>{
            headphone.style.backgroundColor = "#265bff";
            headphone.style.color = "#fff";
            accessoriesImg.src = "alpaca/accessories/headphone.png";
            removeColor(flower);
            removeColor(earings);
            removeColor(glasses);
        });
    } else {
        return;
    }
});

/*Mouth Event*/
let mouthCreated = false;
mouth.addEventListener("click", (e) => {
    if (!mouthCreated) {
        mouth.style.backgroundColor = "#265bff";
        mouth.style.color = "#fff";
        const mouthDiv = createHolder("mouthDiv");
        const mouthImg = document.getElementById("mouthImage");
        const defaultMouth = createButton("Default ", "div", "defaultMouth");
        const astonished = createButton("Astonished", "div", "astonished");
        const eating = createButton("Eating", "div", "eating");
        const laugh = createButton("Laugh", "div", "laugh");
        const tongue = createButton("Tongue", "div", "tongue");
        alpacaStyle.appendChild(mouthDiv);
        mouthDiv.appendChild(defaultMouth);
        mouthDiv.appendChild(astonished);
        mouthDiv.appendChild(eating);
        mouthDiv.appendChild(laugh);
        mouthDiv.appendChild(tongue);
        mouthCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        hairCreated = check(hairCreated, "hairDiv", hair);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        defaultMouth.addEventListener("click",(e)=>{
            defaultMouth.style.backgroundColor = "#265bff";
            defaultMouth.style.color = "#fff";
           mouthImg.src = "alpaca/mouth/default.png";
            removeColor(astonished);
            removeColor(eating);
            removeColor(laugh);
            removeColor(tongue);
        });
        astonished.addEventListener("click",(e)=>{
            astonished.style.backgroundColor = "#265bff";
            astonished.style.color = "#fff";
            mouthImg.src = "alpaca/mouth/astonished.png";
            removeColor(defaultMouth);
            removeColor(eating);
            removeColor(laugh);
            removeColor(tongue);
        });
        eating.addEventListener("click",(e)=>{
            eating.style.backgroundColor = "#265bff";
            eating.style.color = "#fff";
            mouthImg.src = "alpaca/mouth/eating.png";
            removeColor(astonished);
            removeColor(defaultMouth);
            removeColor(laugh);
            removeColor(tongue);
        });
        laugh.addEventListener("click",(e)=>{
            laugh.style.backgroundColor = "#265bff";
            laugh.style.color = "#fff";
            mouthImg.src = "alpaca/mouth/laugh.png";
            removeColor(astonished);
            removeColor(eating);
            removeColor(defaultMouth);
            removeColor(tongue);
        });
        tongue.addEventListener("click",(e)=>{
            tongue.style.backgroundColor = "#265bff";
            tongue.style.color = "#fff";
            mouthImg.src = "alpaca/mouth/tongue.png";
            removeColor(astonished);
            removeColor(eating);
            removeColor(laugh);
            removeColor(defaultMouth);
        });
    } else {
        return;
    }
});

/*Eyes Event*/
let eyesCreated = false;
eyes.addEventListener("click", (e) => {
    if (!eyesCreated) {
        eyes.style.backgroundColor = "#265bff";
        eyes.style.color = "#fff";
        const eyesDiv = createHolder("eyesDiv");
        const eyesImg = document.getElementById("eyesImage");
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
        eyesCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        hairCreated = check(hairCreated, "hairDiv", hair);
        defaultEyes.addEventListener("click",(e)=>{
            defaultEyes.style.backgroundColor = "#265bff";
            defaultEyes.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/default.png";
            removeColor(angry);
            removeColor(naughty);
            removeColor(panda);
            removeColor(smart);
            removeColor(star);
        });
        angry.addEventListener("click",(e)=>{
            angry.style.backgroundColor = "#265bff";
            angry.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/angry.png";
            removeColor(defaultEyes);
            removeColor(naughty);
            removeColor(panda);
            removeColor(smart);
            removeColor(star);
        });
        naughty.addEventListener("click",(e)=>{
            naughty.style.backgroundColor = "#265bff";
            naughty.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/naughty.png";
            removeColor(angry);
            removeColor(defaultEyes);
            removeColor(panda);
            removeColor(smart);
            removeColor(star);
        });
        panda.addEventListener("click",(e)=>{
            panda.style.backgroundColor = "#265bff";
            panda.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/panda.png";
            removeColor(angry);
            removeColor(naughty);
            removeColor(defaultEyes);
            removeColor(smart);
            removeColor(star);
        });
        smart.addEventListener("click",(e)=>{
            smart.style.backgroundColor = "#265bff";
            smart.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/smart.png";
            removeColor(angry);
            removeColor(naughty);
            removeColor(panda);
            removeColor(defaultEyes);
            removeColor(star);
        });
        star.addEventListener("click",(e)=>{
            star.style.backgroundColor = "#265bff";
            star.style.color = "#fff";
            eyesImg.src = "alpaca/eyes/star.png";
            removeColor(angry);
            removeColor(naughty);
            removeColor(panda);
            removeColor(smart);
            removeColor(defaultEyes);
        });
    } else {
        return;
    }
});

/*Ears Event*/
let earsCreated = false;
ears.addEventListener("click", (e) => {
    if (!earsCreated) {
        ears.style.backgroundColor = "#265bff";
        ears.style.color = "#fff";
        const earsDiv = createHolder("earsDiv");
        const earsImg = document.getElementById("earsImage");
        const defaultEars = createButton("Default", "div", "default");
        const tiltBackward = createButton("Tilt Backward", "div", "tiltBackward");
        const tiltForward = createButton("Tilt Forward", "div", "tiltForward");
        alpacaStyle.appendChild(earsDiv);
        earsDiv.appendChild(defaultEars);
        earsDiv.appendChild(tiltBackward);
        earsDiv.appendChild(tiltForward);
        earsCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        legCreated = check(legCreated, "legDiv", leg);
        hairCreated = check(hairCreated, "hairDiv", hair);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        defaultEars.addEventListener("click",(e)=>{
            defaultEars.style.backgroundColor = "#265bff";
            defaultEars.style.color = "#fff";
           earsImg.src = "alpaca/ears/default.png";
            removeColor(tiltBackward);
            removeColor(tiltForward);
        });
        tiltBackward.addEventListener("click",(e)=>{
            tiltBackward.style.backgroundColor = "#265bff";
            tiltBackward.style.color = "#fff";
            earsImg.src = "alpaca/ears/tilt-backward.png";
            removeColor(defaultEars);
            removeColor(tiltForward);
        });
        tiltForward.addEventListener("click",(e)=>{
            tiltForward.style.backgroundColor = "#265bff";
            tiltForward.style.color = "#fff";
            earsImg.src = "alpaca/ears/tilt-forward.png";
            removeColor(defaultEars);
            removeColor(tiltBackward);
        });
    } else {
        return;
    }
});

/*Neck Event*/
let neckCreated = false;
neck.addEventListener("click", (e) => {
    if (!neckCreated) {
        neck.style.backgroundColor = "#265bff";
        neck.style.color = "#fff";
        const neckDiv = createHolder("neckDiv");
        const neckImg = document.getElementById("neckImage");
        const defaultNeck = createButton("Default", "div", "default");
        const bendBackward = createButton("Bend Backward", "div", "bendBackward");
        const bendForward = createButton("Bend Forward", "div", "bendForward");
        const thick = createButton("Thick", "div", "thick");
        alpacaStyle.appendChild(neckDiv);
        neckDiv.appendChild(defaultNeck);
        neckDiv.appendChild(bendBackward);
        neckDiv.appendChild(bendForward);
        neckDiv.appendChild(thick);
        neckCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        hairCreated = check(hairCreated, "hairDiv", hair);
        legCreated = check(legCreated, "legDiv", leg);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        defaultNeck.addEventListener("click",(e)=>{
            defaultNeck.style.backgroundColor = "#265bff";
            defaultNeck.style.color = "#fff";
           neckImg.src = "alpaca/neck/default.png";
           removeColor(thick);
            removeColor(bendBackward);
            removeColor(bendForward);
        });
        thick.addEventListener("click",(e)=>{
            thick.style.backgroundColor = "#265bff";
            thick.style.color = "#fff";
            neckImg.src = "alpaca/neck/thick.png";
            removeColor(bendForward);
            removeColor(defaultNeck);
            removeColor(bendForward);
        });
        bendBackward.addEventListener("click",(e)=>{
            bendBackward.style.backgroundColor = "#265bff";
            bendBackward.style.color = "#fff";
            neckImg.src = "alpaca/neck/bend-backward.png";
            removeColor(thick);
            removeColor(defaultNeck);
            removeColor(bendForward);
        });
        bendForward.addEventListener("click",(e)=>{
            bendForward.style.backgroundColor = "#265bff";
            bendForward.style.color = "#fff";
            neckImg.src = "alpaca/neck/bend-forward.png";
            removeColor(thick);
            removeColor(bendBackward);
            removeColor(defaultNeck);
        });
    } else {
        return;
    }
});

/*Leg Event*/
let legCreated = false;
leg.addEventListener("click", (e) => {
    if (!legCreated) {
        leg.style.backgroundColor = "#265bff";
        leg.style.color = "#fff";
        const legDiv = createHolder("legDiv");
        const legImg = document.getElementById("legImage");
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
        legCreated = true;
        backgroundCreated = check(backgroundCreated, "backgroundDiv", background);
        accessoryCreated = check(accessoryCreated, "accessoriesDiv", accessories);
        neckCreated = check(neckCreated, "neckDiv", neck);
        hairCreated = check(hairCreated, "hairDiv", hair);
        earsCreated = check(earsCreated, "earsDiv", ears);
        mouthCreated = check(mouthCreated, "mouthDiv", mouth);
        eyesCreated = check(eyesCreated, "eyesDiv", eyes);
        defaultLeg.addEventListener("click",(e)=>{
            defaultLeg.style.backgroundColor = "#265bff";
            defaultLeg.style.color = "#fff";
           legImg.src = "alpaca/leg/default.png";
            removeColor(bubbleTea);
            removeColor(cookie);
            removeColor(gameConsole);
            removeColor(tiltForward);
            removeColor(tiltBackward);
        });
        bubbleTea.addEventListener("click",(e)=>{
            bubbleTea.style.backgroundColor = "#265bff";
            bubbleTea.style.color = "#fff";
            legImg.src = "alpaca/leg/bubble-tea.png";
            removeColor(defaultLeg);
            removeColor(cookie);
            removeColor(gameConsole);
            removeColor(tiltForward);
            removeColor(tiltBackward);
        });
        cookie.addEventListener("click",(e)=>{
            cookie.style.backgroundColor = "#265bff";
            cookie.style.color = "#fff";
            legImg.src = "alpaca/leg/cookie.png";
            removeColor(bubbleTea);
            removeColor(defaultLeg);
            removeColor(gameConsole);
            removeColor(tiltForward);
            removeColor(tiltBackward);
        });
        gameConsole.addEventListener("click",(e)=>{
            gameConsole.style.backgroundColor = "#265bff";
            gameConsole.style.color = "#fff";
            legImg.src = "alpaca/leg/game-console.png";
            removeColor(bubbleTea);
            removeColor(cookie);
            removeColor(defaultLeg);
            removeColor(tiltForward);
            removeColor(tiltBackward);
        });
        tiltForward.addEventListener("click",(e)=>{
            tiltForward.style.backgroundColor = "#265bff";
            tiltForward.style.color = "#fff";
            legImg.src = "alpaca/leg/tilt-forward.png";
            removeColor(bubbleTea);
            removeColor(cookie);
            removeColor(gameConsole);
            removeColor(defaultLeg);
            removeColor(tiltBackward);
        });
        tiltBackward.addEventListener("click",(e)=>{
            tiltBackward.style.backgroundColor = "#265bff";
            tiltBackward.style.color = "#fff";
            legImg.src = "alpaca/leg/tilt-backward.png";
            removeColor(bubbleTea);
            removeColor(cookie);
            removeColor(gameConsole);
            removeColor(tiltForward);
            removeColor(defaultLeg);
        });
    } else {
        return;
    }
});