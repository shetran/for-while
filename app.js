var ele = document.body.querySelector(".dragon");

var dragonHealth = 10;
var userHealth = 5;

while(dragonHealth > 0 && userHealth > 0){
    var damageAmount = Number(prompt("Enter the amount of times you want to hit the dragon (up to 5)"));
    var randomDamageAmount = Math.floor(Math.random() * damageAmount) + 1;
        if (randomDamageAmount > 5){
            dragonHealth = dragonHealth - 1;
        }else {
            dragonHealth = dragonHealth - randomDamageAmount;
        }
        if(dragonHealth > 0){
            randomDragonDamage = Math.floor(Math.random()*2)+1;
            userHealth = userHealth - randomDragonDamage;
        }
}
if (userHealth <= 0){
    userHealth = 0;
    ele.innerHTML = "Dragon wins! " + "Users Health: " + userHealth + "Dragons Health: " + dragonHealth;
}else {
    ele.innerHTML = "User wins! " + "Users Health: " + userHealth + "Dragons Health: " + dragonHeatlh
}