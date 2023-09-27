let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function shipIsHit() {
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
    return Math.random() > 0.5;
    // let randomNumber = Math.random() * 1;
    // if (randomNumber > .5) {
    //     console.log("Ship is hit");
    // } else {
    //     console.log("Ship is not hit");
    // };

}

function shipCanFire() {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    return shipAmmo > 0 && shipHealth > 0;
    // if (shipHealth > 0 && shipAmmo > 0) {
    //     console.log("Ship can fire");
    // } else {
    //     console.log("Ship is out of ammo");
    // };
};

function isDestroyed(health) {
    // return true if health is zero or less
    return health <= 0;
    // if (shipHealth <= 0) {
    //     console.log("Ship is destroyed");
    // };
};

function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3
    shipHealth--;
    shipAmmo += 3;
    // if (shipAmmo === 0 && targetHealth >= 1) {
    //     shipHealth--;
    //     shipAmmo += 3;
    // };
};

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;

        if (shipIsHit()) {
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        } else {
            console.log("miss");
        };

    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    };
    ;
}

function encounter() {
    console.log("You see a target");

    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();

        if (isDestroyed(targetHealth)) {
            console.log("Target eliminated");
        };

        if (isDestroyed(shipHealth)) {
            console.log("ship destroyed");
        };
    };
};

encounter();