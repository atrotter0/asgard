/* ===============================================================*/
/*  				      Game Scripts File	      	     	      */
/*  										                      */
/*	Designed & Created by: Abel Trotter                           */
/*	Date: 01/15/16                                                */
/* ===============================================================*/



/* =========================================*/
/*              Utility Code                */
/*										    */
/* =========================================*/

/* get element */
function getEle(id) {
	return document.getElementById(id);
}

/* display text in the element corresponding with the ID */
function get(id) {
	var element = getEle(id);
	return element;
}


/* =========================================*/
/*                Game Data                 */
/*										    */
/* =========================================*/

/* jobs */
var jobs = {
	war: "Warrior", //Weaponmaster
	hnt: "Hunter", //Stalker
	rog: "Rogue", //Blade
	wiz: "Wizard" //Magi
};

/* skills list */
var warSkillsArr = [ "Slice", "Power Slash", "Adrenaline Rush", "Cleave", "Double Attack" ];
var warSkillsDescArr = [ "<strong>Benefit</strong> +2 atk <br><strong>Cost</strong> 5 Fury", "<strong>Benefit</strong> +4 dmg, -2 atk<br><strong>Cost</strong> 5 Fury", "<strong>Benefit</strong> Next attack will be a critical hit<br><strong>Cost</strong> 20 Fury", "<strong>Benefit</strong> Next attack targets all enemies<br><strong>Cost</strong> 10 Fury", "<strong>Benefit</strong> Next attack will hit the enemy twice<br><strong>Cost</strong> 20 Fury" ]; //desc of war skills
var hntSkillsArr = [ "Aim", "Split Shot", "Hunter's Mark", "Claw Trap", "Rapid Shot" ];
var hntSkillsDescArr = [ ]; //desc of hnt skills
var rogSkillsArr = [ "Sneak Attack", "Hide", "Toxic Blades", "Throw", "Shadestep" ];
var rogSkillsDescArr = [ ]; //desc of rog skills
var wizSkillsArr = [ "Flaming Hands", "Arc Lightning", "Sleep", "Paralyze", "Ice Storm" ];
var wizSkillsDescArr = [ ]; //desc of wiz skills

/* game world */



/* ======================================== */
/*             Global Variables             */
/*										    */
/* =========================================*/

/* player stats */
var weaponBonus = 0;
var armorBonus = 0;
var weaponDmgBonus = " ";
var statsArray = [ ]; //global var to hold stats
var skillsArray = [ ]; //global array to hold skills of chosen job
var skillsDescArray = [ ]; //global array to hold skill desc of chosen job
var playerBag = [ ]; //player inventory.
var stats = {
	str: 0, //strength
	dex: 0, //dexterity
	con: 0, //constitution
	intel: 0, //intelligence
	will: 0, //willpower 
	chari: 0 //charisma
};

var currentHp = 20; //current hp
var currentMp = 10; //current mp
var currHpPerc = 0; //hp percentage
var currMpPerc = 0; //mp percentage

var statsFinished = " "; //stores stats for printing to console later; <--- do i need these?
var skillsFinished = ""; //stores skills for printing to console later; -<--- do i need this?

/* object that stores character info */
var playerDetails = {
	name: " ",
	race: " ",
	gender: " ",
	level: 0,
	job: " ",
	hp: 0,
	mp: 0,
	defense: 0,
	atkBonus: 0,
	dmgBonus: 0,
	critHit: 0, //<-- need this
	exp: 0,
	storyCode: 10, //<--- code to track where you are at in story.
	locCode: "ur1", // updates with current loc on logout or when you save.
	locState: 0 // updates with current locState on logout or save to avoid cheating.
};

/* ======================================== */
/*              Page Styling                */
/*										    */
/* =========================================*/

/* add styling/icons to menus for specific jobs */
function addJobStyling(job) {
	/*styling variables */
	var boxShadowColor = " ";
	var myClass = document.getElementsByClassName("charBlock"); 
	var myClass2 = document.getElementsByClassName("statBlock"); 
	var myClass3 = document.getElementsByClassName("skillsBlock"); 
	var myClass4 = document.getElementsByClassName("inventoryBlock"); 
	var myClass5 = document.getElementsByClassName("questsBlock"); 
	var myIcon = get("powerIcon");
	var mpBorder = get("manaPointsContainer");
	var mpColor = get("mp");
	
	/* job conditionals */
	if(job == jobs.war) {
	/*	boxShadowColor = "4px 10px 18px rgb(205,0,0)";
		for(var i = 0; i < myClass.length; i++) {
			myClass[i].style.boxShadow = boxShadowColor;
		}
		myClass2[0].style.boxShadow = boxShadowColor;
		myClass3[0].style.boxShadow = boxShadowColor;
		myClass4[0].style.boxShadow = boxShadowColor;
		myClass5[0].style.boxShadow = boxShadowColor;*/
		myIcon.src = "images/fury-power-icon.png";
		//mpBorder.style.border = "2px rgb(208,21,21) solid";
		mpColor.style.backgroundColor = "rgba(255, 204, 0, 0.5)";
		//mpColor.style.color = "black";
	}
	else if(job == jobs.hnt) {
		/*boxShadowColor ="4px 10px 30px rgb(0, 102, 0)";
		for(var i = 0; i < myClass.length; i++) {
			myClass[i].style.boxShadow = boxShadowColor;
		}
		myClass2[0].style.boxShadow = boxShadowColor;
		myClass3[0].style.boxShadow = boxShadowColor;
		myClass4[0].style.boxShadow = boxShadowColor;
		myClass5[0].style.boxShadow = boxShadowColor;*/
		myIcon.src = "images/nature-power-icon.png";
		//mpBorder.style.border = "2px rgb(0, 77, 0) solid";
		mpColor.style.backgroundColor = "rgba(48,185,40, 0.5)";
		//mpColor.style.color = "black";
	}
	else if(job == jobs.rog) {
		/*boxShadowColor ="4px 10px 30px 10px rgb(13, 13, 13)";
		for(var i = 0; i < myClass.length; i++) {
			myClass[i].style.boxShadow = boxShadowColor;
		}
		myClass2[0].style.boxShadow = boxShadowColor;
		myClass3[0].style.boxShadow = boxShadowColor;
		myClass4[0].style.boxShadow = boxShadowColor;
		myClass5[0].style.boxShadow = boxShadowColor;*/
		myIcon.src = "images/shadow-power-icon.png";
		//mpBorder.style.border = "2px rgb(13, 13, 13) solid";
		mpColor.style.backgroundColor = "rgba(102, 102, 102, 0.5)";
		//mpColor.style.color = "black";
	}
	else if(job == jobs.wiz) {
		/*boxShadowColor ="4px 10px 30px rgb(66, 253, 249)";
		for(var i = 0; i < myClass.length; i++) {
			myClass[i].style.boxShadow = boxShadowColor;
		}
		myClass2[0].style.boxShadow = boxShadowColor;
		myClass3[0].style.boxShadow = boxShadowColor;
		myClass4[0].style.boxShadow = boxShadowColor;
		myClass5[0].style.boxShadow = boxShadowColor;*/
		myIcon.src = "images/element-power-icon.png";
		//mpBorder.style.border = "2px rgb(13, 13, 13) solid";
		mpColor.style.backgroundColor = "rgba(64,191,191, 0.5)";
		//mpColor.style.color = "black";
	}
}

/* ======================================== */
/*          Player Details Generator        */
/*										    */
/* =========================================*/

/* fills in player details object */
function getPlayerDetails() {
	getJob();
	getLevel();
	createStats(playerDetails.job, playerDetails.level);
	getName();
	getRace();
	getGender();
	getDefense();
	getExp();
}

/* assigns value to playerDetails.job */
function getJob() {
	//can be called by testJobSelect function (test drop down on page)
	playerDetails.job = jobs.war; //<--- hard-coded. will need to be replaced with db query.
	addJobStyling(playerDetails.job);
}

/* assigns value to playerDetails.level */
function getLevel() {
	playerDetails.level = 1; //<--- hard-coded. will need to be replaced by db query.
}

/* assigns stats based on job and level of player according to playerDetails */

/* computes and assigns stats based on job and level */
function createStats(job, level) {
	if(job == jobs.war) { 
		stats.str = 2 + (level * 2);
		stats.dex = 1 + level;
		stats.con = 3 + level;
		stats.intel = 0 + level;
		stats.will = 0 + level;
		stats.chari = 0 + level;
	}
	else if(job == jobs.hnt) { 
		stats.str = 1 + level;
		stats.dex = 1 + (level * 2);
		stats.con = 1 + level;
		stats.intel = 1 + level;
		stats.will = 2 + level;
		stats.chari = 0 + level;
	}
	else if(job == jobs.rog) { 
		stats.str = 0 + level;
		stats.dex = 1 + (level * 2);
		stats.con = 1 + level; //<--- bug here. if this value changes, it fucks up mp for rogue.
		stats.intel = 3 + level;
		stats.will = 0 + level;
		stats.chari = 1 + level;
	}
	else if(job == jobs.wiz) { 
		stats.str = 0 + level;
		stats.dex = 0 + level;
		stats.con = 1 + level;
		stats.intel = 2 + level;
		stats.will = 3 + (level * 2);
		stats.chari = 0 + level;
	}
	
	statsArray = [ "Strength " + stats.str, "Dexterity " + stats.dex, "Constitution " + stats.con, "Intelligence " + stats.intel, "Willpower " + stats.will, "Charisma " + stats.chari];
	printArray(statsArray);
	genHp(stats.con);
	genMp(stats.will);
	genAtkBonus();
	getSkills(playerDetails.job, playerDetails.level);
}

/* player hp */
function genHp(con) {
	playerDetails.hp = con * 10;
}

/* player mp */
function genMp(will) {
	playerDetails.mp = will * 10;
}

/* player atk bonus */
function genAtkBonus() {
	getWeaponBonus(); //<--- will need this when / if magic weapons give bonus to atk.
	if(playerDetails.job == jobs.war) {
		playerDetails.atkBonus = Math.floor((stats.str / 2 + 1));
		playerDetails.dmgBonus = Math.floor((stats.str / 2 + 1));
	}
	else if(playerDetails.job == jobs.hnt) {
		playerDetails.atkBonus = Math.floor((stats.dex / 2 + 1));
		playerDetails.dmgBonus = Math.floor((stats.dex / 2));
	}
	else if(playerDetails.job == jobs.rog) {
		playerDetails.atkBonus = Math.floor((stats.str / 2 + 1));
		playerDetails.dmgBonus = Math.floor((stats.dex / 2));
	}
	else if(playerDetails.job == jobs.wiz) {
		playerDetails.atkBonus = Math.floor((stats.will / 2 + 1));
		playerDetails.dmgBonus = Math.floor((stats.will / 2));
	}
}

/* player name */
function getName() {
	playerDetails.name = "Aranis"; //<---- hard-coded. will need to be replaced with db query.
}

/* player race */
function getRace() {
	playerDetails.race = "Human"; //<---- hard-coded. will need to be replaced with db query.
}

/* player gender */
function getGender() {
	playerDetails.gender = "Male"; //<---- hard-coded. will need to be replaced with db query.
}

/* player defense */
function getDefense() {
	getArmorBonus();
	playerDetails.defense = (10 + armorBonus + (Math.floor((stats.dex / 2 + 1))));
}

/* player armor bonus */
function getArmorBonus() {
	if(equippedArmor == true) {
		for(var i = 0; i < itemStorageArray.length; i++) {
			if(equippedArmorArr[0] == itemStorageArray[i].code) {
				armorBonus = itemStorageArray[i].val;
			}
		}
	}
}

/* player weapon bonus */
function getWeaponBonus() {
	if(equippedWpn == true) {
		for(var i = 0; i < itemStorageArray.length; i++) {
			if(equippedWpnArr[0] == itemStorageArray[i].code) {
				weaponBonus = itemStorageArray[i].effect;
			}
		}
	}
}

/* damage bonus from weapon */
function getWeaponDmgBonus() {
	if(equippedWpn == true) {
		for(var i = 0; i < itemStorageArray.length; i++) {
			if(equippedWpnArr[0] == itemStorageArray[i].code) {
				weaponDmgBonus = itemStorageArray[i].effect;
			}
		}
	}
	else {
		weaponDmgBonus = 0;
	}
}

/* player xp */
function getExp() {
	//playerDetails.exp = 200; //<--- hard-coded. will need to be replaced by db query. 
} 

/* ======================================== */
/*              Skills Generator            */
/*										    */
/* =========================================*/

// /* function to print arrays */
function printArray(myArray) {
	for(var i = 0; i < myArray.length; i++) {
		if(myArray == statsArray) {
			statsFinished += myArray[i] + "<br>";
		}
		else if(myArray == skillsArray) {
			skillsFinished += myArray[i] + "<br>";
		}
		else if(myArray == logArray) {
			logFinished += myArray[i] + "<br>";
		}
	}
}

/* Assigns skills and skill desc of current job to global variables. */
function getSkills(job, level) {
	skillsDescArray = [ ]; //resets global array to keep from stacking.
	skillsArray = [ ]; //resets global array var to keep from adding to array;
	/* warrior job */
	if (job == jobs.war) {
		for(var i = 0; i < level; i++) {
			skillsArray.push(warSkillsArr[i]);
			skillsDescArray.push(warSkillsDescArr[i]);
		}
	} /* end war */
	
	/* hunter job */
	if (job == jobs.hnt) {
		for(var i = 0; i < level; i++) {
			skillsArray.push(hntSkillsArr[i]);
			skillsDescArray.push(hntSkillsDescArr[i]);
		}
	} /* end hnt */
	
	/* rogue job */
	if (job == jobs.rog) {
		for(var i = 0; i < level; i++) {
			skillsArray.push(rogSkillsArr[i]);
			skillsDescArray.push(rogSkillsDescArr[i]);
		}
	} //end rogue
	
	/* wizard job */
	if (job == jobs.wiz) {
		for(var i = 0; i < level; i++) {
			skillsArray.push(wizSkillsArr[i]);
			skillsDescArray.push(wizSkillsDescArr[i]);
		}
	} //end wizard
	printArray(skillsArray); // <--- do I need this?
}

/* displays current skills on skills menu */
function displaySkills(myArray) {
	for(var i = 0; i < myArray.length; i++) {
		get("skill" + i).innerHTML = myArray[i];
		get("skill" + i).style.display = "block";
	}
}

/* gets current hp / mp and returns percentage to global variable for displaying health meter */
function getCurrent(myVal) {
	if(myVal == playerDetails.hp) {
		currHpPerc = Math.floor((currentHp / playerDetails.hp) * 100);
	}
	else if(myVal == playerDetails.mp){
		currMpPerc = Math.floor((currentMp / playerDetails.mp) * 100);
	}
}

/* ======================================== */
/*              Tooltip Display             */
/*										    */
/* =========================================*/

/*********************/
/*     Character    */
/*******************/

function overName() {
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = "My name is " + playerDetails.name + ", that much I remember...";
}

/* diff responses for different races */
function overRace() {
	var humanResponse = "I am mortal now, and human.";
	get("tooltip-display").style.display = "block";
	if(playerDetails.race == "Human") {
		get("tooltip-text").innerHTML = humanResponse;
	}
}

function overGender() {
	var maleResponse = "Handsome, some would say, save for the scars.";
	var femaleResponse = "Pretty, some would say, save for the scars.";
	get("tooltip-display").style.display = "block";
	if(playerDetails.gender == "Male") {
		get("tooltip-text").innerHTML = maleResponse;
	} else {
		get("tooltip-text").innerHTML = femaleResponse;
	}
}

function overJob() {
	var warResponse = "I bathe in the blood of my enemies.";
	var hntResponse = "May my arrows fly true.";
	var rogResponse = "I strike quickly from the shadows.";
	var wizResponse = "I control the elements to obliterate my foes.";
	get("tooltip-display").style.display = "block";
	if(playerDetails.job == "Warrior") {
		get("tooltip-text").innerHTML = warResponse;
	} else if (playerDetails.job == "Hunter") {
		get("tooltip-text").innerHTML = hntResponse;
	} else if (playerDetails.job == "Rogue") {
		get("tooltip-text").innerHTML = rogResponse;
	} else if (playerDetails.job == "Wizard") {
		get("tooltip-text").innerHTML = wizResponse;
	}
}

function overLevel() {
	var oneResponse = "I am relearning this mortal life.";
	var twoResponse = "I have little experience, but it is coming back quickly.";
	var threeResponse = "I am becoming stronger by the day.";
	var fourResponse = "Many have fallen before me, and many more will fall still.";
	var fiveResponse = "A champion has risen to face this darkness.";
	get("tooltip-display").style.display = "block";
	if(playerDetails.level == 1) {
		get("tooltip-text").innerHTML = oneResponse;
	} else if (playerDetails.level == 2) {
		get("tooltip-text").innerHTML = twoResponse;
	} else if (playerDetails.level == 3) {
		get("tooltip-text").innerHTML = threeResponse;
	} else if (playerDetails.level == 4) {
		get("tooltip-text").innerHTML = fourResponse;
	} else if (playerDetails.level == 5) {
		get("tooltip-text").innerHTML = fiveResponse;
	} 
}

function overHpMp() {
	var totalHp = playerDetails.hp;
	var totalMp = playerDetails.mp;
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = "<strong>Hit Points</strong> " + currentHp + " / " + totalHp + "<br><strong>Power</strong> " + currentMp + " / " + totalMp;
}

function overAtk() {
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = "<strong>Attack Bonus</strong> +" + playerDetails.atkBonus + "<br><strong>Damage</strong> " + weaponDmgBonus + " +" + playerDetails.dmgBonus;
}

function overDef() {
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = "<strong>Defense Bonus</strong> " + playerDetails.defense;
}

function overXp() {
	//eventually place conditional for amount of exp to next level dependant on level.
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = "<strong>Experience Points </strong> " + playerDetails.exp;
}

function overHp() {
	get("tooltip-display").style.display = "block";
	if(currHpPerc == 100){
		get("tooltip-text").innerHTML = "I could rip a Khor stag in half with my bare hands.";
	}
	else if(currHpPerc > 81) {
		get("tooltip-text").innerHTML = "A few scratches, nothing major.";
	}
	else if(currHpPerc > 51) {
		get("tooltip-text").innerHTML = "I think I've stopped most of the bleeding...";
	}
	else if(currHpPerc > 21) {
		get("tooltip-text").innerHTML = "I will require aid soon.";
	}
	else if(currHpPerc > 11) {
		get("tooltip-text").innerHTML = "I am bleeding profusely! I need healing!";
	}
	else {
		get("tooltip-text").innerHTML = "* Groans in pain *";
	}
}

function overMp() {
	get("tooltip-display").style.display = "block";
	if (currMpPerc == 100) {
		get("tooltip-text").innerHTML = "I am limber and ready for anything.";
	}
	else if(currMpPerc > 81) {
		get("tooltip-text").innerHTML = "I am a little winded.";
	}
	else if(currMpPerc > 51) {
		get("tooltip-text").innerHTML = "I need to catch my breath.";
	}
	else if(currMpPerc > 21) {
		get("tooltip-text").innerHTML = "My endurance is lagging...";
	}
	else if(currMpPerc > 11) {
		get("tooltip-text").innerHTML = "My strength is... failing...";
	}
	else {
		get("tooltip-text").innerHTML = "*Breaths in ragged gasps*";
	}
}

function overPowerIcon() {
	get("tooltip-display").style.display = "block";
	if(playerDetails.job == jobs.war) {
		get("tooltip-text").innerHTML = "I channel my <strong>Fury</strong> to obliterate my foes.";
	}
	else if(playerDetails.job == jobs.hnt) {
		get("tooltip-text").innerHTML = "I draw upon the forces of <strong>Nature</strong> to destroy my foes.";
	}
	else if(playerDetails.job == jobs.rog) {
		get("tooltip-text").innerHTML = "I utilize darkness and <strong>Shadow</strong> energy to destroy my foes.";
	}
	else if(playerDetails.job == jobs.wiz) {
		get("tooltip-text").innerHTML = "I command the <strong>Elements</strong> to destroy my foes.";
	}
}

function mouseOff() {
	get("tooltip-display").style.display = "none";
	get("tooltip-text").innerHTML = " ";
}

/********************/
/*      Skills      */
/********************/

/*tooltip to display skills depending on job */

function overSkill0() {
	get("tooltip-display").style.display = "block";
	get("tooltip-text").innerHTML = skillsDescArray[0]
}

function overSkill1() {
	//keeps from displaying if array is empty.
	if(skillsDescArray[1] != "NULL") {
		get("tooltip-display").style.display = "block";
		get("tooltip-text").innerHTML = skillsDescArray[1]
	} 
}

function overSkill2() {
	if(skillsDescArray[2] != "NULL") {
		get("tooltip-display").style.display = "block";
		get("tooltip-text").innerHTML = skillsDescArray[2]
	}
}

function overSkill3() {
	if(skillsDescArray[3] != "NULL") {
		get("tooltip-display").style.display = "block";
		get("tooltip-text").innerHTML = skillsDescArray[3]
	}
}

function overSkill4() {
	if(skillsDescArray[3] != "NULL") {
		get("tooltip-display").style.display = "block";
		get("tooltip-text").innerHTML = skillsDescArray[4]
	}
}

/********************/
/*     Inventory    */
/********************/

/* displays current items on inventory menu */

//iterate through loc item array.
//match to code in itemStorageArray.
//display simpleName to inventory window.
//set icon div to match category of object in itemStorageArray.
var itemHoverVal = -1; // tracks current inventory item user is hovering over.

function displayInventory(myArray) {
	var space = 0; //inventory space
	for(var i = 0; i < myArray.length; i++) {
		for(var j = 0; j < itemStorageArray.length; j++) {
			if(myArray[i] == itemStorageArray[j].code) {
				get("item" + i).style.display = "block";
				get("item" + i).innerHTML = itemStorageArray[j].simpleName;
				
				if(itemStorageArray[j].category == "item") {
					get("icon" + i).style.display = "block";
					get("icon" + i).style.background = "url(images/item-icon.png)";
				}
				else if(itemStorageArray[j].category == "potion") {
					get("icon" + i).style.display = "block";
					get("icon" + i).style.background = "url(images/potion-icon.png)";
				}
				else if(itemStorageArray[j].category == "weapon") {
					get("icon" + i).style.display = "block";
					get("icon" + i).style.background = "url(images/weapon-icon.png)";
				}
				else if(itemStorageArray[j].category == "armor") {
					get("icon" + i).style.display = "block";
					get("icon" + i).style.background = "url(images/armor-icon.png)";
				}
			}
		}
	space += 1; //set space to the amount of items
	}
	//displaySpace(space);
}

/* space tracks inventory space for easy management */
function displaySpace(num) {
	get("invSpace").style.display = "block";
	get("invSpace").innerHTML = num + " / 20"; 
}

/* item hover value - populates through hover in inventory menu */
function itemHoverVal0() {
	itemHoverVal = 0; //assign value to hover state.
}

function itemHoverVal1() {
	itemHoverVal = 1; //assign value to hover state.
}

function itemHoverVal2() {
	itemHoverVal = 2; //assign value to hover state.
}

function itemHoverVal3() {
	itemHoverVal = 3; //assign value to hover state.
}

function itemHoverVal4() {
	itemHoverVal = 4; //assign value to hover state.
}

function itemHoverVal5() {
	itemHoverVal = 5; //assign value to hover state.
}

function itemHoverVal6() {
	itemHoverVal = 6; //assign value to hover state.
}

function itemHoverVal7() {
	itemHoverVal = 7; //assign value to hover state.
}

function itemHoverVal8() {
	itemHoverVal = 8; //assign value to hover state.
}

/* close item info window */
function closedVBox() {
	var closeBox = setInterval(function(){viewBox.style.display = "none";clearInterval(closeBox)}, 10);
}

/* item window that displays after clicking an item in inventory menu */
//match hover val to playerBag array.
//loop through itemStorageArr and match with playerBag code.
//display item object properties to the view item window.
//update currentItem variable with item object (used for button presses)

var currItemCode = "none"; //current item code in vbox window.
var currItemCategory = "none"; //current item cat in vbox window.
var currItemName = "none";
var equippedWpn = false; //status if wpn is equipped.
var equippedArmor = false; //status if wpn is equipped.
var equippedWpnArr = [ ];
var equippedArmorArr = [ ];


function viewItem() {
	findItem(itemHoverVal, playerBag);
	viewBox.style.display = "block";
}


/* finds item in storage and runs displayItem function */
//itereate through bag to match hover val with array position.
//grab bag code and search for item in itemStorageArr.
//run displayItem() function.
function findItem(hoverVal, bagArray) {
	var bagItemCode = " ";
	for(var i = 0; i < bagArray.length; i++) {
		if(hoverVal == i) {
			bagItemCode = bagArray[i];
			for(i = 0; i < itemStorageArray.length; i++) {
				if(bagItemCode == itemStorageArray[i].code) {
					displayItem(itemStorageArray[i]);
				}
			}
		}
	}
}

/* display item in vbox window */
function displayItem(myItemObj) {
	currItemCode = myItemObj.code; //assign current item with code of current item being viewed. 
	currItemCategory = myItemObj.category; //assign current item with code of current item being viewed. 
	currItemName = myItemObj.simpleName;
	get("vBoxEquip").style.display = "none";
	get("vBoxAccept").style.display = "none";
	get("vBoxUse").style.display = "none";
	get("vBoxContent").style.display = "none";
	get("vBoxDrop").style.display = "none";
	get("vBoxCancel").style.display = "none";
	get("vBoxDesc").style.display = "block";

	if(myItemObj.category == "potion") {
		get("vBoxHeader").innerHTML = myItemObj.fullName;
		get("vBoxDesc").innerHTML = myItemObj.desc;
		get("vBoxContent").innerHTML = "<strong>Effect: </strong>" + myItemObj.effect + "<br><strong>Uses: </strong>" + myItemObj.uses;
		get("vBoxUse").style.display = "inline";
		get("vBoxDrop").style.display = "inline";
		get("vBoxCancel").style.display = "inline";
		get("vBoxContent").style.display = "block";
	}
	else if(myItemObj.category == "item") {
		get("vBoxHeader").innerHTML = myItemObj.fullName;
		get("vBoxDesc").innerHTML = myItemObj.desc;
		get("vBoxUse").style.display = "inline";
		get("vBoxDrop").style.display = "inline";
		get("vBoxCancel").style.display = "inline";
	}
	else if(myItemObj.category == "weapon") {
		get("vBoxHeader").innerHTML = myItemObj.fullName;
		get("vBoxDesc").innerHTML = myItemObj.desc;
		get("vBoxContent").innerHTML = "<strong>Damage: </strong>" + myItemObj.effect;
		get("vBoxEquip").style.display = "inline";
		get("vBoxDrop").style.display = "inline";
		get("vBoxCancel").style.display = "inline";
		get("vBoxContent").style.display = "block";
	}
	else if(myItemObj.category == "armor") {
		get("vBoxHeader").innerHTML = myItemObj.fullName;
		get("vBoxDesc").innerHTML = myItemObj.desc;
		get("vBoxContent").innerHTML = "<strong>Effect: </strong>" + myItemObj.effect;
		get("vBoxEquip").style.display = "inline";
		get("vBoxDrop").style.display = "inline";
		get("vBoxCancel").style.display = "inline";
		get("vBoxContent").style.display = "block";
	}
}

/* equip item */
//check code against items in bag.
//run checkEquip to check equipment and remove current wpn and amrmor from array.
//change color to 'equip' new item.
function equipItem() {
	for(var i = 0; i < playerBag.length; i++) {
		if(currItemCode == playerBag[i]) {
			checkEquip();
			closedVBox();
			getArmorBonus();
			//getWeaponBonus(); <-- might use for magical weapons
			getWeaponDmgBonus();

		}
	}
}

/* check for equipped armor / weapons */
//check for current equipped weapon or armor. 
//remove from wpn / armor array.
//set variables / colors
function checkEquip() {
	if(equippedWpn == true && currItemCategory == "weapon") {
		for(var i = 0; i < playerBag.length; i++) {
			if(equippedWpnArr[0] == playerBag[i]) {
				get("item" + i).style.color = "white";
				equippedWpnArr.splice(0, 1); //remove equipped wpn from array.
				equippedWpn = false;
				checkEquip();
			}
		}
	}
	else if(equippedArmor == true && currItemCategory == "armor") {
		for(var i = 0; i < playerBag.length; i++) {
			if(equippedArmorArr[0] == playerBag[i]) {
				get("item" + i).style.color = "white";
				equippedArmorArr.splice(0, 1); //remove equipped armor from array.
				equippedArmor = false;
				checkEquip();
			}
		}
	}
	else if(equippedWpn == false && currItemCategory == "weapon") {
		for(var i = 0; i < playerBag.length; i++) {
			if(currItemCode == playerBag[i]) {
				get("item" + i).style.color = "#00ff55";
				equippedWpnArr.push(currItemCode);
				equippedWpn = true;
				get("bottom-display").innerHTML = "You equip the " + currItemName + ".";
			}
		}
	}
	else if(equippedArmor == false && currItemCategory == "armor") {
		for(var i = 0; i < playerBag.length; i++) {
			if(currItemCode == playerBag[i]) {
				get("item" + i).style.color = "#00ff55";
				equippedArmorArr.push(currItemCode);
				equippedArmor = true;
				get("bottom-display").innerHTML = "You equip the " + currItemName + ".";
			}
		}
	}
}

/* drop item from player inventory into game world */
function dropItem() {
	//check equip
	//traverse playerBag, splice item from array.
	//close menu window.
	//set inventory display appropriately.
	for(var i = 0; i < playerBag.length; i++) {
		if(currItemCode == playerBag[i]) {
			if(currItemCode == equippedArmorArr[0] || currItemCode == equippedWpnArr[0]) {
				get("bottom-display").innerHTML = "You cannot drop something that you are using!";
			}
			else {
				playerBag.splice(i, 1);
				get("item" + itemHoverVal).style.display = "none";
				get("item" + playerBag.length).style.display = "none";
				get("icon" + playerBag.length).style.display = "none";
				get("bottom-display").innerHTML = "You drop the " + currItemName + ". It disappears in a puff of black smoke.";
				closedVBox();
			}
		}
	}
	displayInventory(playerBag);
	getLocCode();
	loadZone(playerLocCode, locStorageArray);
}

/* use item */
function useItem() {
	var uses = 0;
	for(var i = 0; i < itemStorageArray.length; i++) {
		if(currItemCode == itemStorageArray[i].code && itemStorageArray[i].uses > 0) {
			if(currItemCategory == "potion") {
				itemStorageArray[i].uses -= 1;
				runItemUse(itemStorageArray[i].what, itemStorageArray[i].val);
			}
			else if(currItemCategory == "item") {
				if(playerLocCode == "db687" && itemCode == "db687") {
					//do something
				}
				else {
					get("bottom-display").innerHTML = "I cannot use that item now.";
				}
			}
		}
	}
	closedVBox();
}

function runItemUse(what, val) {
	getPlayerDetails();
	var recoveryScore = 0;
	var stat = "none";
	if(what == "hp") {
		stat = " <font color='red'>Hit Points</font>";
		recoveryScore = Math.floor((playerDetails.hp * val));
		currentHp += recoveryScore;
		if(playerDetails.hp < currentHp ) {
			currentHp = playerDetails.hp;
			get("bottom-display").innerHTML = "You recover 0" + stat + ".";
		} else {
			get("bottom-display").innerHTML = "You recover " + recoveryScore + stat + ".";
		}
	}
}

/* ======================================== */
/*              Menu Display                */
/*										    */
/* =========================================*/

/* displays menus in menu window when user clicks menu button */
function charMenu() {
	/* get players stats */
	statsFinished = " "; //resets global var to keep from adding to array.
	getPlayerDetails();
	getCurrent(playerDetails.hp);
	getCurrent(playerDetails.mp);
	
	/* display menu, hide others */
	get("skillsMenu").style.display = "none";
	get("inventoryMenu").style.display = "none";
	get("questsMenu").style.display = "none";
	get("charMenu").style.display = "block";
	
	/* populate data on menu */
	get("charName").innerHTML = playerDetails.name;
	get("charRace").innerHTML = playerDetails.race;
	get("charGender").innerHTML = playerDetails.gender;
	get("charJob").innerHTML = playerDetails.job;
	get("charLevel").innerHTML = playerDetails.level;
	get("charHpMp").innerHTML = "HP / PW";
	get("charAtkBonus").innerHTML = "Atk"; //+ playerDetails.atkBonus;
	get("charDefense").innerHTML = "Def"; //+ playerDetails.defense;
	get("charExp").innerHTML = "Exp";
	get("charStats").innerHTML = statsFinished;
	get("hp").style.width = currHpPerc + "%";
	get("hp").innerHTML = currentHp;
	get("mp").style.width = currMpPerc + "%";
	get("mp").innerHTML = currentMp;
}

function skillsMenu() {
	/* get players stats */
	skillsFinished = ""; //overwrites global var to keep from adding to array.
	getPlayerDetails();
	
	/* display menu, hide others */
	get("charMenu").style.display = "none";
	get("inventoryMenu").style.display = "none";
	get("questsMenu").style.display = "none";
	get("skillsMenu").style.display = "block";
	
	/* display skills */
	//get("skillsList").innerHTML = skillsFinished;
	getSkills(playerDetails.job, playerDetails.level);
	displaySkills(skillsArray);
}

function inventoryMenu() {
	get("charMenu").style.display = "none";
	get("skillsMenu").style.display = "none";
	get("questsMenu").style.display = "none";
	get("inventoryMenu").style.display = "block";
	displayInventory(playerBag);
}

function questsMenu() {
	get("charMenu").style.display = "none";
	get("skillsMenu").style.display = "none";
	get("inventoryMenu").style.display = "none";
	get("questsMenu").style.display = "block";
}


/* ======================================== */
/*              Game World                  */
/*										    */
/* =========================================*/

/********************/
/*       Story      */
/********************/

var storyStorageArray = [ ]; //holds story objects.
var playerStoryCode = 1; //global variable for player story code. updates to playerDetails on save

/* story prototype. create new to add details to object. store in storageStoryArray */
function storyObject(code, text, contFlag, optionsFlag, optNum) {
	this.code = code; //story code. used for searching array to load and create object. updates to playerStoryCode. 
	this.text = text; //display text w/ options if needed
	this.contFlag = contFlag; //<-- default state = 0. if 1, then display continue button to trigger next story code.
	this.optFlag = optionsFlag; //<-- default state = 0. if 1, then display options.
	this.optNum = optNum;
}

/********************/
/*   Story Objects  */
/********************/
/* NOTE: when making new object, don't forget to trigger loadStoryStorageArr() on line 723. */

/* story styling */

/* chapter headers */
var chHeader = "<p style='font-family: Merriweather, cursive; font-size: 20px; font-weight: bold; text-align: center;'>";
var chHeaderBlurb = "<p style='font-family: Merriweather; font-size: 15px; font-style: italic;'>";

/* story text */
var storyText = "<p style='font-family: Merriweather; font-size: 15px; font-style: normal;'>";
var dialogueTextStart = "<font color='#ccddff'>"; //dialogue
var dialogueTextClose = "<font color='#ffffff'>"; //reset to story text color


/* chapter 1, code 1 object */
var ch1C1 = new storyObject(
	1, //code
	chHeader + "Chapter 1: And So, I Awake<br>" + chHeaderBlurb + "I do not recall how I died, or what my life entailed before I awoke. I only know that I had been dead, and then suddenly... I was alive, and the world was a very unfamiliar place.", //text
	1, //continue flag
	0, //options flag
	0 //options number
);

var ch1C2 = new storyObject(
	2, //code
	storyText + "Coughing and gasping for breath, you claw at the air around you. You are born again into a world of ice and despair. Thunder rumbles somewhere in the distance. Lightning flashes briefly, illuminating the cold tomb in which you lay. Your veins pulse with new life, although your body screams in agony, stiff and sore from the long slumber that has lasted countless years.<br><br>A cloaked figure leans over you, cursing and muttering to himself. His face is shadowed, but he watches as you struggle to rise from atop one of the stone sarcophagi that dot the chamber. Yellow eyes peer out from beneath a tattered, hooded robe.",
	1, //continue flag
	0, //options flag
	0 //options number
);

var ch1C3 = new storyObject(
	3, //code
	storyText + dialogueTextStart + "“By the gods, you are awake! Here, let me help you.”" + dialogueTextClose +  " The cloaked figure’s voice creaks like an old chair, but with the hint of a growl.<br><br>The figure extends a bowl of foul-smelling liquid in your direction and you catch a glimpse of fur on the backs of his clawed hands.<br><br>" + dialogueTextStart + "“My name is Surgis. Drink this, it will help you regain your strength.”" + dialogueTextClose + " Surgis extends the bowl in your direction.<br><br>[1] By the way that smells, I’m better off drinking my own piss." + "<br>[2] Thank you, friend, but… what exactly is this?" + "<br>[3] Say nothing.",
	0, //continue flag
	1, //options flag
	3 //options number
);

var ch1C4 = new storyObject(
	4, //code
	storyText + dialogueTextStart + "“Just like one of the Retrieved to question his first meal. It’s not like you would be hungry or anything, having been dead for nearly two-hundred years!”" + dialogueTextClose + " Sergis snarls, drly. " + dialogueTextStart + "“Trust me, my reborn friend, you will need this if you are to venture out there.”" + dialogueTextClose + "<br><br>Surgis motions to the bright light filtering past a rune-etched archway on the far side of the chamber. It appears to be the only visible exit from the shadowed tomb.<br><br>[1] “Who are you?”" + "<br>[2] “Where am I?”" + "<br>[3] “Wait a minute… what’s with the claws?”", //text
	0, //continue flag
	1, //options flag
	3
);

var ch1C5 = new storyObject(
	5, //code
	storyText + dialogueTextStart + "“I am one of the Aanari, and I am your ally.”" + dialogueTextClose + "<br><br> The man removes his hood revealing a feline face with yellow, gleaming eyes and black, pointed ears. Dark fur bristles across the creature’s neck. Whiskers twitch at the corners of Surgis' mouth as he watches you intently. " + dialogueTextStart + "“You are in the Burial Tomb of the Lost Legion in the Urian Forest.”" + dialogueTextClose + "<br><br>[1] “The Aanari?”" + "<br>[2] “What kind of witchcraft is this?”" + "<br>[3] “Beast, I know not of your kind, can I trust you?”", //text
	0, //continue flag
	1, //options flag
	3
);

var ch1C6 = new storyObject(
	6, //code
	storyText + "Surgis chuckles to himself." + dialogueTextStart + " “Be still, my friend. If I had meant you harm, I would not have allowed you to wake. You seem to have forgotten much during your slumber, but you will remember, in time.”<br><br>“We Aanari are a magical race, though we are shunned by the outside world. Legend says that we were once humans that struck a deal with the demons of the Infinite Black, but we broke our end of the bargain. For that, we were cursed with this beast-like appearance, so that all the other races would know that we are not to be trusted.”" + dialogueTextClose + "<br><br>[1] “You are really winning my confidence, Surgis.”" + "<br>[2] “So… don’t drink from the bowl, then?”" + "<br>[3] “This just keeps getting better and better.”", //text
	0, //continue flag
	1, //options flag
	3
);

var ch1C7 = new storyObject(
	7, //code
	storyText + dialogueTextStart + "“Your will is yours and yours alone. I will not try to sway the choices you are to make, or the path that you must walk. Trust me or not, you will need my help if you are to survive the trials yet to come. Many have been Retrieved, but none have been able to live to accomplish their purpose.”" + dialogueTextClose + "<br><br>[1] “And what might my purpose be?”" + "<br>[2] “The path I walk will be my own.”", //text
	0, //continue flag
	1, //options flag
	2
);

var ch1C8 = new storyObject(
	8, //code
	storyText + dialogueTextStart + "“In due time, you will discover your calling. I am here to assist you in that endeavor.”" + dialogueTextClose + "<br><br>Surgis moves towards the archway on the far side of the chamber, and the runes chiseled into the stone surface flare to life. Blue and indigo light cascades throughout the chamber. The Aanari stares at the mystical runes for a moment before continuing." + dialogueTextStart + "<br><br>“We will need to help one another, if we are to succeed. First, you must regain your strength. In the Frostlands, you will surely be tested, and unfortunately I cannot leave this place to aid you.”",
	1, //continue flag
	0, //options flag
	0
);

var ch1C9 = new storyObject(
	9, //code
	storyText + dialogueTextStart + "“I would tell you more, but time is of the essence. I need you to venture out into the Urian Forest and gather my spell components. If you are to recall your true powers, we will need to perform a ritual. I require 4 oncharra mushrooms, a frost bat’s beating heart, and a waterskin filled with fresh water from the Frozen Lake. But be wary, the creatures roaming these lands are fierce and hungry.”<br><br>“You know how to defend yourself. Trust your instincts, for this is just the beginning of your new life.”" + dialogueTextClose + "<br><br>[1] “I will do what I must and return to you with haste.”<br>[2] “I suppose that I have no other choice.”<br>[3] “I have a bad feeling about this…”",
	0, //continue flag
	1, //options flag
	3
);


/********************/
/*     Locations    */
/********************/
/* NOTE: use prototype like storyObject above to build zones */

/* current player location */
var currLocStuffName = " "; //<--- holds loc name for the stuff (ex. ur1Stuff)
var playerLocCode = " "; //use location codes to pass into function when moving to display next room. playerDetails.locCode
var locStorageArray = [ ]; //holds location objects.
var currExitsArr = [ ];
var hoverVal = -1; //global var to update on hover over specific loc menu items. 0-3 = exits, 4-7 = items, 8-11 = npcs, 12-15 = enemies.

/* location prototype. create new to add details to object. store in locStoryArray */
function locObject(code, name, desc, state, timer) {
	this.code = code; //code used for quickly finding in locations array. upates to playerDetails.locCode 
	this.name = name; //display area name - bold white
	this.desc = desc; //area description
	this.state = state; //state. 0 default, 1 for items missing, 2 for enemies killed. on state change, call locWriteStorageArray.
	this.timer = timer; //timer starts for enemy respawn.
};

/********************/
/*    Loc Objects   */
/********************/
/* NOTE: when making new object, don't forget to trigger loadLocStorageArr() on line 723. */

/* location object styling */

var locTextStyle = "<p style='font-family: Merriweather; font-size: 15px; font-style: normal;'>";
var locNameStyle = "<center><strong><font color='#ffffff'>"; //name
var locDescStyle = "<font color='#ffffff'>"; //desc
var locDefaultStyle = "<font color='#ffffff'>"; //reset to default text color

/* area, zone */

/* urian forest */
var ur1 = new locObject(
	"ur1", //code
	locTextStyle + locNameStyle + "=== The Tomb of the Lost Legion ===</strong></center>", //name
	locDescStyle + "A chill seeps into your bones as you look around this vast and desolate stone chamber. Torches mounted on the walls cast flickering shadows across three sealed sarcophagi resting in front of an intricately carved stone altar. You can see a faint imprint in the dust where you awoke atop the middle sarcophagus. Though the other sarcophagi remain sealed, you cannot help but wonder what might rest inside...<br><br>An archway etched with glowing runes marks the exit of the tomb to the east. Bright daylight filters into the chamber from beyond the archway.", //area description
	0, //state 0 default, 1 for items missing, 2 for enemies killed. on state change, call locWriteStorageArray.
	0 //timer
);

var ur1Exits = ["East"];
//var ur1ExitsTooltip = ["A frozen path"];
var ur1Stuff = ["potion1", "skin1"]; //use item codes!
var ur1Npcs = ["Sergis"];
var ur1Enemies = [ ];

/*******************************/

var ur2 = new locObject(
	"ur2", //code
	locTextStyle + locNameStyle + "=== Frozen Path ===</strong></center>", //name
	locDescStyle + "Blah blah blah next zone. ", //area description
	0, //state 0 default, 1 for items missing, 2 for enemies killed. on state change, call locWriteStorageArray.
	0 //timer
);

var ur2Exits = ["East", "West"];
var ur2Stuff = ["armor1", "armor2"];
var ur2Npcs = [ ];
var ur2Enemies = ["bat1"];

function loadJobItems(job) {
	if(job == jobs.war) {
		ur1Stuff.push("sword1");
	}
	else if (job == jobs.hnt) {
		ur1Stuff.push("bow1");
	}
	else if (job == jobs.rog) {
		ur1Stuff.push("dag1");
	}
	else if (job == jobs.wiz) {
		ur1Stuff.push("staff1");
	}
}

/********************/
/*       Items      */
/********************/

var itemStorageArray = [ ]; //holds item objects.

/* item prototype. create new to add details to object. store in itemStoryArray */
function itemObject(code, category, simpleName, fullName, desc, uses, effect, what, val) {
	this.code = code; //code used for quickly finding in items array
	this.category = category; //category (item, weapon, armor, potion)
	this.simpleName = simpleName; //simple name 
	this.fullName = fullName; //full name 
	this.desc = desc; //description of item
	this.uses = uses; //# of uses before the item is gone. on hover, check if uses ==  num, display certain text (full, half full, etc, nearly empty, etc)
	this.effect = effect; //desc of effect for tooltip / item menu
	this.what = what; //pass into function to clarify what it effects.
	this.val = val; // 
};

/********************/
/*   Item Objects   */
/*******************/

/* potions */
var potion1 = new itemObject(
	"potion1", //code
	"potion", //category
	"Vial", //simple name
	"Vial of Lesser Recovery", //fullName
	"A simple glass vial filled with a red liquid.", // description
	3, // 3 uses
	"Restore 25% HP", //effect
	"hp", //what
	.25 // value
);

/* misc items */
var waterskin1 = new itemObject(
	"skin1", //code
	"item", //category
	"Waterskin", //simple name
	"Waterskin", //fullName
	"A leather waterskin for holding small quantities of drinking water.", // description
	0, // uses
	"none", //effect
	"none", //what
	0 // value
);

/* Swords */
var sword1 = new itemObject(
	"sword1", //code
	"weapon", //category
	"Rusty Sword", //simple name
	"Rusty Sword", //fullName
	"A rusted sword. The blade's edge is chipped and worn.", // description
	0, // uses
	"1-2", //effect
	"damage", //what
	Math.floor((Math.random() * 2) + 1) // value. random damage between 1-2
);

var sword99 = new itemObject(
	"sword99", //code
	"weapon", //category
	"Onyx Sword", //simple name
	"Onyx Longsword", //fullName
	"A finely crafted onyx longsword. The blade is sharp as glass, and as strong as steel.", // description
	0, // uses
	"15-20", //effect
	"damage", //what
	Math.floor((Math.random() * 5) + 16) // value
);

/* Bows */
var bow1 = new itemObject(
	"bow1", //code
	"weapon", //category
	"Ash Bow", //simple name
	"Ash Shortbow", //fullName
	"A worn shortbow carved from the limb of an ashwood tree.", // description
	0, // uses
	"1-2", //effect
	"damage", //what
	Math.floor((Math.random() * 2) + 1) // value. random damage between 1-2
);

/* Daggers */
var dag1 = new itemObject(
	"dag1", //code
	"weapon", //category
	"Bronze Dagger", //simple name
	"Bronze Dagger", //fullName
	"A dull bronze dagger with a leather-wrapped hilt.", // description
	0, // uses
	"1-2", //effect
	"damage", //what
	Math.floor((Math.random() * 2) + 1) // value. random damage between 1-2
);

/* Staves */
var staff1 = new itemObject(
	"staff1", //code
	"weapon", //category
	"Ash Staff", //simple name
	"Ash Staff", //fullName
	"An ordinary ashwood staff.", // description
	0, // uses
	"1-2", //effect
	"damage", //what
	Math.floor((Math.random() * 2) + 1) // value. random damage between 1-2
);

/* Armor */
var armor1 = new itemObject(
	"armor1", //code
	"armor", //category
	"Leather Jerkin", //simple name
	"Leather Jerkin", //fullName
	"A simple jerkin sewn together with tough leather.", // description
	0, // uses
	"+1 defense", //effect
	"defense", //what
	1 // value
);

var armor2 = new itemObject(
	"armor2", //code
	"armor", //category
	"Hide Armor", //simple name
	"Hide Armor", //fullName
	"Sturdy armor constructed from the hides of various frost wolves.", // description
	0, // uses
	"+2 defense", //effect
	"defense", //what
	2 // value
);


/********************/
/*      Enemies     */
/********************/

var enemyStorageArray = [ ]; //holds item objects.

/* item prototype. create new to add details to object. store in itemStoryArray */
function enemyObject(code, name, hp, pw, atk, dmg, def, atkDesc, expAward, gp, aggro) {
	this.code = code; //code used for quickly finding in items array
	this.name = name;
	this.hp = hp; //enemy hp value
	this.pw = pw; //enemy power value
	this.atk = atk; //enemy atk bonus
	this.dmg = dmg; //enemy damage value
	this.def = def; //enemy defense
	this.atkDesc = atkDesc; //bites, hits, stabs, pierces, etc
	this.expAward = expAward; //exp reward from enemy
	this.gp = gp; //gold reward from enemy
	this.aggro = aggro; //aggro value. yes/no

};

/********************/
/*   Enemy Objects  */
/********************/

var wolf1 = new enemyObject (
	"wolf1", //code
	"Frost Wolf", //name
	10, //hp
	0, //pw
	1, //atk
	"2-6", //dmg between 1 and 4
	11, //def
	"bites",
	20,
	0,
	"yes"
);

var bat1 = new enemyObject (
	"bat1", //code
	"Frost Bat", //name
	10, //hp
	0, //pw
	0, //atk
	"2-3", //dmg between 1 and 2
	8, //def
	"hits", //desc
	10, //xp award.
	0,
	"no" //agro
);

/* load enemy into storage array */
function loadEnemyStorageArr(myObj) {
	enemyStorageArray.push(myObj);
}

//var wolfAtkArr = [ ]; <-- use this for harder enemies that use power for different abilities randomly.

/********************/
/*      Combat      */
/********************/

var currEnemyName = "none";
var currEnemyCode = "none";
var currEnemyHp = 0;
var currEnemyPw = 0;
var totalEnemyhp = 0;
var enemyHpPerc = 0;
var currEnemyDef = 0;
var currEnemyAtk = 0;
var currEnemyDmg = "none";
var currEnemyXp = 0;
var currEnemyDesc = "none";
var currEnemyGp = 0;
var currEnemyPos = -1; //position of enemy in storage array.
var combatFlag = 0; //updates to 1 when in combat. call checkCombatFlag when trying to switch armor.
var logArray = [ ]; //holds max of 10 items. Iterate through array to display in combat log.
var logFinished = " ";
var myDiv = document.getElementById("combat-log");

/* hover enemy variables */
function runHoverEnemy0() {
//on hover over an enemy, update global variable with value.
	hoverVal = 12;
}
function runHoverEnemy1() {
//on hover over an enemy, update global variable with value.
	hoverVal = 13;
}
function runHoverEnemy2() {
//on hover over an enemy, update global variable with value.
	hoverVal = 14;
}
function runHoverEnemy3() {
//on hover over an enemy, update global variable with value.
	hoverVal = 15;
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/* clicking the enemy begins combat */
function fightEnemy() {
	currHpPerc = Math.floor((currentHp / playerDetails.hp) * 100);
	get("player-hp").style.width = currHpPerc + "%";
	logArray = [ ]; //wipe log array
	startCombat();
}

/* grabs enemy stats and displays combat window */
function startCombat() {
	get("console-content-container").style.display = "none";
	get("combat-window").style.display = "block";
	get("bottom-display").innerHTML = "You engage the enemy.";
	getEnemyStats();
	combatFlag = 1; //trigger to disallow allow inventory item use.
}

function getEnemyStats() {
	var pos = -1;
	var enemyName = "none";
	//assign value to pos corresponding to position of enemy in menu.
	if(hoverVal == 12) {
		pos = 0;
	}
	else if(hoverVal == 13) {
		pos = 1;
	}
	else if(hoverVal == 14) {
		pos = 2;
	}
	else if(hoverVal == 15) {
		pos = 3;
	}
	//check playerLocCode and match pos value with area enemy array pos.
	if(playerLocCode == "ur2") {
		currEnemyCode = ur2Enemies[pos];
	}
	else if(playerLocCode == "other") {
		currEnemyCode = ur2Enemies[pos];
	}
	//search enemyStorageArray for enemy and assign global variables values.
	for(var i = 0; i < enemyStorageArray.length; i++) {
		if(currEnemyCode == enemyStorageArray[i].code) {
			currEnemyPos == i;
			currEnemyName = enemyStorageArray[i].name;
			currEnemyHp = enemyStorageArray[i].hp;
			totalEnemyHp = enemyStorageArray[i].hp;
			enemyHpPerc = Math.floor((currEnemyHp / totalEnemyHp) * 100);
			currEnemyPw = enemyStorageArray[i].Pw;
			currEnemyDef = enemyStorageArray[i].def;
			currEnemyAtk = enemyStorageArray[i].atk;
			currEnemyDmg = enemyStorageArray[i].dmg;
			currEnemyXp = enemyStorageArray[i].expAward;
			currEnemyGp = enemyStorageArray[i].gp;
			currEnemyDesc = enemyStorageArray[i].atkDesc;
		}
	}
	get("enemy-hp" + pos).style.width = enemyHpPerc + "%";
	get("enemy-name" + pos).innerHTML = currEnemyName;
}

/* returns currently equipped weapon damage values */
function getWpnDmg() {
	var wpn = equippedWpnArr[0]; //player wpn
	var wpnDmg = 0;
	for(var i = 0; i < itemStorageArray.length; i++) {
		if(wpn == itemStorageArray[i].code) {
			wpnDmg = itemStorageArray[i].effect;
			if(wpnDmg == "1-2") {
				wpnDmg = randomIntFromInterval(1, 2);
			}
			else if(wpnDmg == "2-4") {
				wpnDmg = randomIntFromInterval(2, 4);
			}
		}
	}
	return wpnDmg;
}

function getEnemyDmg(dmgRange) {
	var enemyDmg = 0;
	if(dmgRange == "2-3") {
		enemyDmg = randomIntFromInterval(2, 3);
	}
	else if(dmgRange == "1-4") {
		enemyDmg = randomIntFromInterval(2, 4);
	}
	return enemyDmg;
}

/* initiates combat for 1 round */
function fight0() {
	playerAttack();
	enemyAttack();
	printArray2(logArray);
	get("combat-log").innerHTML = logFinished;
	goToBottomOfLog(myDiv);
}

function playerAttack() {
	var attackRoll = randomIntFromInterval(1, 20);
	var playerAtkBonus = playerDetails.atkBonus;
	var playerDmgBonus = playerDetails.dmgBonus;
	var weaponDmg = getWpnDmg(); //dont forget to equip wpn if  you are testing this.
	var totalDmg = weaponDmg + playerDmgBonus;
	var totalAtk = attackRoll + playerAtkBonus;
	var combatDesc1 = " ";
	if(totalAtk >= currEnemyDef) {
		//get("combat-log").innerHTML = "You hit the " + currEnemyName + " for " + totalDmg + " damage!";
		get("bottom-display").innerHTML = "Attack Roll: " + attackRoll + " + " + playerAtkBonus + " = " + totalAtk + ". " + "Damage Roll: " + weaponDmg + " + " + playerDmgBonus + " = " + totalDmg + ".";
		combatDesc1 = "You hit the " + currEnemyName + " for " + totalDmg + " damage!";
		currEnemyHp -= totalDmg;
		if(currEnemyHp > 1) {
			enemyHpPerc = Math.floor((currEnemyHp / totalEnemyHp) * 100);
		}
		//when enemy dies, hide btns, pop treasure window.
		else {
			enemyHpPerc = 0;
			get("enemy-name0").style.textDecoration= "line-through";
			get("atkBtn").style.display = "none";
			get("sklBtn").style.display = "none";
			combatSpoils();
		}
		get("enemy-hp0").style.width = enemyHpPerc + "%";
	}
	else {
		//get("combat-log").innerHTML = "You miss the " + currEnemyName + ".";
		//get("bottom-display").innerHTML = "Attack Roll: " + attackRoll + " + " + playerAtkBonus + " = " + totalAtk + ".";
		combatDesc1 = "You miss the " + currEnemyName + ".";
	}
	logArray.splice(0, 2); //remove first 2 array items.
	logArray.push(combatDesc1); //push new items.
}

function enemyAttack() {
	//get("combat-log").innerHTML = "made it here";
	var attackRoll = randomIntFromInterval(1, 20);
	var myDmg = getEnemyDmg(currEnemyDmg);
	attackRoll += currEnemyAtk;
	var combatDesc2 = " ";
	if(attackRoll >= playerDetails.defense) {
		//get("combat-log").innerHTML = "The " + currEnemyName + " " + currEnemyDesc + " you for " + myDmg + " damage!";
		combatDesc2 = "The " + currEnemyName + " " + currEnemyDesc + " you for " + myDmg + " damage!";
		currentHp -= myDmg;
		currHpPerc = Math.floor((currentHp / playerDetails.hp) * 100);
		get("player-hp").style.width = currHpPerc + "%";
		get("hp").style.width = currHpPerc + "%";
		get("hp").innerHTML = currentHp;
		get("mp").style.width = currMpPerc + "%";
		get("mp").innerHTML = currentMp;
	}
	else {
		//get("combat-log").innerHTML = "The " + currEnemyName + " misses you.";
		//get("bottom-display").innerHTML = "Attack Roll: " + attackRoll + ".";
		combatDesc2 = "The " + currEnemyName + " misses you.";
	}
	logArray.push(combatDesc2);
}

/* built for combat log display */
function printArray2(myArray) {
	for(var i = myArray.length-1; i > -1; i--) {
		if(myArray == logArray) {
			logFinished += myArray[i] + "<br>";
		}
	}
}

/* automatically scroll to bottom of combat log window */
function goToBottomOfLog(div) {
	div.scrollTop = div.scrollHeight;
}

/* display rewards from combat */
//need random item reward generator.
//array with rand items. iterate through the array on certain rand numbers (0-100)
function combatSpoils() {
	viewBox.style.display = "block";
	get("vBoxEquip").style.display = "none";
	get("vBoxUse").style.display = "none";
	get("vBoxDrop").style.display = "none";
	get("vBoxCancel").style.display = "none";
	get("vBoxDesc").style.display = "block";
	get("vBoxDesc").innerHTML = "Well, it could have been worse... at least I'm still standing.";
	get("vBoxHeader").innerHTML = "You vanquish the " + currEnemyName + "!";
	get("vBoxContent").innerHTML = "<strong>EXP:</strong> " + currEnemyXp + "<br>" + " <strong>Gold Pieces:</strong> " + currEnemyGp;
	get("vBoxAccept").style.display = "inline";
	playerDetails.exp += currEnemyXp;
}

function accept() {
	viewBox.style.display = "none";
	get("enemy-name0").style.textDecoration = "none";
	logArray = [ ];
	logFinished = " ";
	get("combat-log").innerHTML = logFinished;
	get("atkBtn").style.display = "inline";
	get("sklBtn").style.display = "inline";
	get("combat-window").style.display = "none";
	get("console-content-container").style.display = "block";
	get("bottom-display").innerHTML = " ";
	//remove enemy from loc and reload menus.
	if(playerLocCode == "ur2") {
		//ur2Enemies.splice(currEnemyPos, 1);
	}
	else if(playerLocCode == "other") {
		//ur2Enemies.splice(currEnemyPos, 1);
	}
	getLocCode();
	loadZone(playerLocCode, locStorageArray);
}



/********************/
/*   Interactions   */
/********************/

//function for getting items from game world. removes from loc, adds to inventory array.

//function for using items. checks bonus, applies bonus, delete object.

//function for dropping items. removes item from inventory. adds item to loc in game world.


/* ======================================== */
/*            Game Init Functions           */
/*										    */
/* =========================================*/

/* initiate game */
function init() {
	getPlayerDetails();
	loadStoryStorageArr(ch1C1); //prep story data <--- is there a way to automate this?
	loadStoryStorageArr(ch1C2); //prep story data 
	loadStoryStorageArr(ch1C3); //prep story data 
	loadStoryStorageArr(ch1C4); //prep story data 
	loadStoryStorageArr(ch1C5); //prep story data 
	loadStoryStorageArr(ch1C6); //prep story data 
	loadStoryStorageArr(ch1C7); //prep story data 
	loadStoryStorageArr(ch1C8); //prep story data 
	loadStoryStorageArr(ch1C9); //prep story data 
	loadLocStorageArr(ur1); //load location data
	loadLocStorageArr(ur2); //load location data
	loadItemStorageArr(potion1); //load item data
	loadItemStorageArr(waterskin1); //load item data
	loadItemStorageArr(sword1); //load item data
	loadItemStorageArr(sword99); //load item data
	loadItemStorageArr(armor1); //load item data
	loadItemStorageArr(armor2); //load item data
	loadItemStorageArr(bow1); //load item data
	loadItemStorageArr(dag1); //load item data
	loadItemStorageArr(staff1); //load item data
	loadJobItems(playerDetails.job);
	loadEnemyStorageArr(bat1);
	getStoryCode();
	getLocCode();
	loadStory(storyStorageArray, playerStoryCode); //loads story from current code and storage aray. on locations, call checkStory call on move. ex: if(code) > playerStoryCode, loadZone. else, loadStory.
}

/* loads storage array with storyline arrays. */
function loadStoryStorageArr(obj) {
	storyStorageArray.push(obj);
}

function loadResponseStorageArr(obj) {
	responseStorageArray.push(obj);
}

function loadLocStorageArr(obj) {
	locStorageArray.push(obj);
}

function loadItemStorageArr(obj) {
	itemStorageArray.push(obj);
}

/* grab story code from player details */
function getStoryCode() {
	playerStoryCode = playerDetails.storyCode;
}

/* grab loc code from player details */
function getLocCode() {
	playerLocCode = playerDetails.locCode;
}

/* during gameplay, displays story in console window depending on code, else load current player zone */
function loadStory(arr, code) {
	//traverse storage array, searching for story code.
	for(var i = 0; i < arr.length; i++) {
		//if you find story code, display story object to console
		if(code == arr[i].code) {
			displayStory(arr[i]);
		}
	}
	if(playerStoryCode == 10) { //<--- find a better way to handle this
		loadZone(playerLocCode, locStorageArray);
	}
}

/* displays the currently loaded story in console window */
//build story object, traverse array and load object, display object elements in console.
function displayStory(arr) {
	get("continue-box").style.display = "none";
	get("content-options").style.display = "none";
	get("choice1Btn").style.display = "none";
	get("choice2Btn").style.display = "none";
	get("choice3Btn").style.display = "none";
	get("loc-content").style.display = "none";
	get("content-one").innerHTML = arr.text;
	if(arr.contFlag == 1) { //if cont flag is true on object, display continue box on page.
		popContBtn();
	}
	else if(arr.optFlag == 1) {
		popChoiceBtn(arr.optNum); //number of choices is passed
	}
}

/* populates continue button for story sequence */
function popContBtn() {
	get("continue-box").style.display = "block";
}

function popChoiceBtn(num) { //num = num of choices
	playerChoiceCode = 0; //reset player choice variable.
	get("continue-box").style.display = "none";
	get("choice1Btn").style.display = "none";
	get("choice2Btn").style.display = "none";
	get("choice3Btn").style.display = "none";
	get("loc-content").style.display = "none";
	get("content-options").style.display = "block";
	if(num == 1) {
		get("choice1Btn").style.display = "inline";
	}
	else if(num == 2) {
		get("choice1Btn").style.display = "inline";
		get("choice2Btn").style.display = "inline";
	}
	else if(num == 3) {
		get("choice1Btn").style.display = "inline";
		get("choice2Btn").style.display = "inline";
		get("choice3Btn").style.display = "inline";
	}
}

/* clicking continue button changes storyCode and loads next part of story */
function continueStory() {
	playerStoryCode += 1;
	loadStory(storyStorageArray, playerStoryCode);
}

/* response / choice functions */
function choice1() {
	playerStoryCode += 1;
	loadStory(storyStorageArray, playerStoryCode);
}

function choice2() {
	playerStoryCode += 1;
	loadStory(storyStorageArray, playerStoryCode);
}

function choice3() {
	playerStoryCode += 1;
	loadStory(storyStorageArray, playerStoryCode);
}


/* loads current player zone dependant on code and zone state (timers, enemies, items etc) */
function loadZone(locCode, arr) {
	//check zone state, if state is changed, load empty room (no enemies or items).
	//display zone info to console
	//traverse storage array, searching for story code.
	for(var i = 0; i < arr.length; i++) {
		//if you find loc code, display loc object to console
		if(locCode == arr[i].code) {
			displayLoc(arr[i]);
			prepLocMenu(locCode); //check loc code for proper menu load.
		}
	}
}

/* check loc code. load appropriate menu objects */ //<--- add new loc menus here
function prepLocMenu(locCode) {
	if(locCode == "ur1") {
		loadLocMenu(ur1Exits, ur1Stuff, ur1Npcs, ur1Enemies); //load with all curr arrays for items, npcs, enemies
	}
	else if(locCode == "ur2") {
		loadLocMenu(ur2Exits, ur2Stuff, ur2Npcs, ur2Enemies); 
	}
	currLocStuffName = locCode + "Stuff";
}

/* start of the loc menu */
function loadLocMenu(arr1, arr2, arr3, arr4) {
	/* hide bottom li of loc menu by default */
	var menuNodes = 4;
	for(var i = 0; i < menuNodes; i++) {
		get("exit" + i).style.display = "none";
		get("stuff" + i).style.display = "none";
		get("npc" + i).style.display = "none";
		get("enemy" + i).style.display = "none";
	}

	/*load exits */
	for(i = 0; i < arr1.length; i++) {
		currExitsArr = [ ]; //reset global array.
		get("exit" + i).innerHTML = "<a href='#'>" + arr1[i] + "</a>"; //populate text
		get("exit" + i).style.display = "block"; //display menu node
		currExitsArr.push(get("exit" + i).innerHTML); //store value in global array
	}
	/*load items (used 'stuff' because 'items' was having issues displaying because item id was already in use) */
	for(i = 0; i < arr2.length; i++) {
		//search through item storage array and match code with loc items.
		//build menu and display with item simpleName value.
		for(var j = 0; j < itemStorageArray.length; j++) {
			if(arr2[i] == itemStorageArray[j].code) {
				get("stuff" + i).innerHTML = "<a href='#'>" + itemStorageArray[j].simpleName + "</a>";
			}
		}
		get("stuff" + i).style.display = "block";
	}
	/*load NPCs */
	for(i = 0; i < arr3.length; i++) {
		get("npc" + i).innerHTML = "<a href='#'>" + arr3[i] + "</a>";
		get("npc" + i).style.display = "block";
	}
	/*load Enemies */
	for(i = 0; i < arr4.length; i++) {
		for(var k = 0; k < enemyStorageArray.length; k++) {
			if(arr4[i] == enemyStorageArray[k].code) {
				get("enemy" + i).innerHTML = "<a href='#'>" + enemyStorageArray[k].name + "</a>";
				get("enemy" + i).style.display = "block";
			}
		}
	}
}

/* display current zone to console */
function displayLoc(arr) {
	get("continue-box").style.display = "none";
	get("choice1Btn").style.display = "none";
	get("choice2Btn").style.display = "none";
	get("choice3Btn").style.display = "none";
	get("content-options").style.display = "none";
	var locDisplay = " ";
	for(var i = 0; i < 1; i++) {
		locDisplay += arr.name + "<br>";
		locDisplay += arr.desc + "<br>";
	}
	get("content-one").innerHTML = locDisplay;
	get("loc-content").style.display = "block";
}

/* loc interactions (exits) */

/* hover exit variables */
function runHoverExit0() {
//on hover over an exit, update global variable with value.
	hoverVal = 0;
	displayTooltip(playerLocCode, hoverVal);
}

function runHoverExit1() {
//on hover over an exit, update global variable with value.
	hoverVal = 1;
}
function runHoverExit2() {
//on hover over an exit, update global variable with value.
	hoverVal = 2;
}
function runHoverExit3() {
//on hover over an exit, update global variable with value.
	hoverVal = 3;
}

function exitClick() {
	//check player loc code
	//if found, check hoverExitVal.
	//0123. if only 1 exit, 0 is first exit, so for ur1, 0 = east.
	var exit = " ";
	var trigger = "exits";
	if(playerLocCode == "ur1") {
	//exits: East
		if(hoverVal == 0) {
			playerDetails.locCode = "ur2";
			exit = ur1Exits[0];
		}
	}//ur1
	else if(playerLocCode == "ur2") {
	//exits: East / West
		if(hoverVal == 0) {
			playerDetails.locCode = "ur2";
			exit = ur2Exits[0];
		}
		else if(hoverVal == 1) {
			playerDetails.locCode = "ur1";
			exit = ur2Exits[1];
		}
	}//end ur2
	youAction(exit, trigger); //display player action in bottom-display
	getLocCode();
	loadZone(playerLocCode, locStorageArray);
}

/* display what player does to the bottom-display on the console */
function youAction(thing, trigger) {
	if(trigger == "exits") {
		get("bottom-display").innerHTML = "You move to the " + thing + ".";
	}
	else if(trigger == "items") {
		//match up thing to code in itemStorageArray.
		//display simpleName from itemStorageArray.
		for(var i = 0; i < itemStorageArray.length; i++) {
			if(thing == itemStorageArray[i].code) {
				get("bottom-display").innerHTML = "You pick up the " + itemStorageArray[i].simpleName + ".";
			}
		}
	}
}

/* hover item variables */
function runHoverItem0() {
//on hover over item, update global variable with value.
	hoverVal = 4;
}

function runHoverItem1() {
//on hover over item, update global variable with value.
	hoverVal = 5;
}

function runHoverItem2() {
//on hover over item, update global variable with value.
	hoverVal = 6;
}

function runHoverItem3() {
//on hover over item, update global variable with value.
	hoverVal = 7;
}

function itemClick() {
	//check player loc code
	//if found, check hoverVal.
	//0123 items.
	var stuff = " ";
	var trigger = "items";
	var menuCode = " ";
	if(playerLocCode == "ur1") {
	//items: bowl, wasterskin, rusty sword 
		if(hoverVal == 4) {
			stuff = ur1Stuff[0]; //grab value at correct array value.
			ur1Stuff.splice(0, 1); //remove item from area's stuff array.
		}
		else if(hoverVal == 5) {
			stuff = ur1Stuff[1]; //grab value at correct array value.
			ur1Stuff.splice(1, 1); //remove item from area's stuff array.
		}
		else if(hoverVal == 6) {
			stuff = ur1Stuff[2]; //grab value at correct array value.
			ur1Stuff.splice(2, 1); //remove item from area's stuff array.
		}
		else if(hoverVal == 7) {
			stuff = ur1Stuff[3]; //grab value at correct array value.
			ur1Stuff.splice(3, 1); //remove item from area's stuff array.
		}
		menuCode = "ur1";
	}//end ur1
	else if(playerLocCode == "ur2") {
	//leather armor test
		if(hoverVal == 4) {
			stuff = ur2Stuff[0]; //grab value at correct array value.
			ur2Stuff.splice(0, 1); //remove item from area's stuff array.
		}
		else if(hoverVal == 5) {
			stuff = ur2Stuff[1]; //grab value at correct array value.
			ur2Stuff.splice(1, 1); //remove item from area's stuff array.
		}
		menuCode = "ur2";	
	}//end ur2
	addItem(stuff); //call function to add to inventory arr.
	youAction(stuff, trigger);
	displayInventory(playerBag);
	getLocCode();
	loadZone(playerLocCode, locStorageArray);
}

function addItem(thing) {
	playerBag.push(thing);
}

/* ======================================== */
/*                Game Init                 */
/*										    */
/* =========================================*/

window.onload = init;


/* ======================================== */
/*                  Testing                 */
/*										    */
/* =========================================*/

//turn on css to view. ON

//test array for print
function printThisArr(arr) {
	testFinished = " ";
	for(var i = 0; i < arr.length; i++) {
		testFinished += arr[i] + "<br>";
		//testFinished += arr.size + "<br>";
	}
}


/* changes job for quick state change for testing */
// function testJobSelect() {
	// var selectBox = get("testJobSelect");
	// var selectVal = selectBox.options[selectBox.selectedIndex].value;
	// if(selectVal == jobs.war) {
		// playerDetails.job = jobs.war;
	// }
	// else if(selectVal == jobs.hnt) {
		// playerDetails.job = jobs.hnt;
	// }
	// else if(selectVal == jobs.rog) {
		// playerDetails.job = jobs.rog;
	// }
	// else if(selectVal == jobs.wiz) {
		// playerDetails.job = jobs.wiz;
	// }
	// getJob();
// }

function testLoop() {
	text = " ";
	var i;
	for(i = 0; i < 10; i++) {
		text += i + "<br>";
	}
}

function testLoop2() {
	text = " ";
	var i;
	for(i = 0; i < 10; i++) {
		text += ur1Exits[i] + "<br>";
	}
}

/* test js 'in' functionality */
function testIn() {
	var bool = " ";
	if("exit1" in ur1Exits) {
		bool = "true";
	} else {
		bool = "false";
	}
	return bool;
}

function randomNum() {
	var val = 0;
	val = Math.floor((Math.random() * 4) + 2);
	return "rand val = " + val;
}

function test() {
	getPlayerDetails();
	//get("test-window").innerHTML = "PS Code: " + playerStoryCode;
	//get("test-window").innerHTML = "Loc code: " + playerLocCode;
	//get("test-window").innerHTML = "loc arr: " + locStorageArray[0].code;
	//get("test-window").innerHTML = "hover value = " + hoverVal;
	//get("test-window").innerHTML = randomNum(); //works!
	//get("test-window").innerHTML = "item arr: " + ur1Stuff[0];
	//get("test-window").innerHTML = "item hover value = " + itemHoverVal;
	//get("test-window").innerHTML = "bagItemCode = " + bagItemCode;
	//get("test-window").innerHTML = "arm flag = " + equippedArmor;
	//get("test-window").innerHTML = "wpn flag = " + equippedWpn;
	//get("test-window").innerHTML = "wpn dmg = " + weaponDmgBonus;
	//get("test-window").innerHTML = "level = " + playerDetails.level;
	//get("test-window").innerHTML = "curr loc Stuff = " + currLocStuffName;
	//get("test-window").innerHTML = "playerBag[0] = " + playerBag[0];
	//get("test-window").innerHTML = "playerBag.length = " + playerBag.length;
	//get("test-window").innerHTML = "currItemCategory = " + currItemCategory;
	//get("test-window").innerHTML = "itemStorageArray[0] = " + itemStorageArray[0].uses;
	//get("test-window").innerHTML = "enemyStorageArr[0] = " + enemyStorageArray[0].code;
	//get("test-window").innerHTML = "sword1 dmg = " + itemStorageArray[2].val;
	//get("test-window").innerHTML = randomIntFromInterval(2, 4);
	//get("test-window").innerHTML = equippedWpnArr[0];
	//get("test-window").innerHTML = currEnemyAtk;
	//get("test-window").innerHTML = printArray(statsArray);
}

/* ======================================== */






