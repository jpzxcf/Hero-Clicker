setTimeout(respawnBoss, 1000);

const boss = {
    health: 0,
}

const player = {
    baseDmg: 1,
    critRate: 10,
    critDamageMultiplier: 2,
    totalGold: 0,
};

const itemList = [
    {
        name: "Espada boa",
        id: "espada-boa",
        damage: 5,
        preco: 100,
        active: false,
    }
]
  
function randomHp() {
    return Math.floor(Math.random() * (50 - 19 + 1) + 1)
} 

function randomGold() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 1;
}

function getEnemySkin(hp) {
    if (hp <= 10 ) {
        return "Slime10.png"
    } else if (hp >= 11 && hp < 30) {
        return "Goblin20.png"
    } else if (hp >= 30) {
        return "Boss.jpg";
    }
}

function buyItem(itemId) {
    const boughtItem = itemList.find(item => item.id === itemId);

    player.baseDmg = boughtItem.damage;
}

function atacar() {    
    if (boss.health > 0) {
        const attackDamage = isACriticalHit(player.critRate) ? player.baseDmg * player.critDamageMultiplier : player.baseDmg;
        
        let totalHealth = boss.health - (attackDamage)
        boss.health = totalHealth;
        
        document.getElementById("vida-do-chefe").innerHTML = totalHealth; // atualiza a vida na interface

    } 

    if (boss.health <= 0) {
        killBoss();
    }
}

function isACriticalHit(min, max) {
    const critBase = Math.floor(Math.random() * (100 - 0 + 1) + 1);
    return player.critRate >= critBase                                    
}

function getGold() {
    const gainedGold = randomGold();
    const goldPurse = document.getElementById("moedas");

    player.totalGold += gainedGold;
    goldPurse.innerHTML = player.totalGold;
}

function respawnBoss() {
    const bossElement = document.createElement("img");

    const bossHealth = randomHp();

    boss.health = bossHealth;
    document.getElementById("vida-do-chefe").innerHTML = bossHealth;

    bossElement.src = getEnemySkin(bossHealth);
    bossElement.id = "bossElement";
    bossElement.classList.add("boss-element");
    bossElement.addEventListener('click', atacar);

    document.getElementById("bossCastle").appendChild(bossElement);
}

function killBoss() {
    const bossCastle = document.getElementById("bossCastle");
    bossCastle.removeChild(bossCastle.children[0]);
    
    getGold();
    setTimeout(respawnBoss, 2000);
}

function openShop() {
    const shop = document.getElementById("shop");
    shop.style.display = "block";
}

function closeShop() {
    const shop = document.getElementById("shop");
    shop.style.display = "none";
}

function hpBar(respawnBoss) {
    var barOfHp = document.getElementById("MyBar")
    



}