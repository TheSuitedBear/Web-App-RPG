let lowMonsterList = ["Raider", "Goblin", "Skeleton", "Troll", "Ghost"];
let mediumMonsterList = ["Mimic", "Armored Goblin", "Soldier", "Skeleton Archer"]
let toughMonsterList = ["Living Tree", "Infested Armor", "Veteran Soldier", "Giant", "Screecher", "Hunter"]
let bossMonsterList = ["Huntsman", "Reaper", "Bone Collector", "Necromancer", "Vampire", "Demon", "Dragon"]
let specialBossMonsterList = ["The Woodland Beast", "Deabrua", "The Lich", "The Mass from Beneath", "Soul Harvester"];
let monsterList = [lowMonsterList, mediumMonsterList, toughMonsterList, bossMonsterList];

let chosenMonsterLow =  lowMonsterList[Math.floor(Math.random() * lowMonsterList.length)];