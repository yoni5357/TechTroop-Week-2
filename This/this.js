//Ex1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"

//Ex2
const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//Ex3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  },
  fuel: 0
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());


//Ex4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (amount) {
    this.coinCount -= amount
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//Ex5
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " ,result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);


//Ex6
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    let requiredBeans = this.drinkRequirements[drinkType]
    if(!requiredBeans){
        console.log("Sorry, we don't make " + drinkType)
    }
    else if(this.beans - requiredBeans < 0){
        console.log("Sorry, we're all out of beans!")
    }
    else{
        this.beans -= requiredBeans
        console.log("making " + drinkType)
    }
  },

  money:100,

  buyBeans: function(numBeans){
    if(numBeans <= 0){
      console.log("You can't buy negative beans!")
    }
    else if(this.money < numBeans * 0.5){
      console.log("You don't have enough money to buy " + numBeans + " beans!")
    }
    else{
      this.beans += numBeans;
      this.money -= numBeans * 0.5;
      console.log("You bought " + numBeans + " beans. You now have " + this.beans + " beans and " + this.money + " money left.");
    }
  }

}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

//Ex 6.2
const coffeeShop2 = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirment:10, price: 5},
    americano: { beanRequirment:5, price: 5},
    doubleShot: { beanRequirment:15, price: 5},
    frenchPress: { beanRequirment:12, price: 5}
  },

  makeDrink: function (drinkType) {
    let requiredBeans = this.drinkRequirements[drinkType]
    if(!requiredBeans){
        console.log("Sorry, we don't make " + drinkType)
    }
    else if(this.beans - requiredBeans < 0){
        console.log("Sorry, we're all out of beans!")
    }
    else{
        this.beans -= requiredBeans
        console.log("making " + drinkType)
    }
  },

  money:100,

  buyBeans: function(numBeans){
    if(numBeans <= 0){
      console.log("You can't buy negative beans!")
    }
    else if(this.money < numBeans * 0.5){
      console.log("You don't have enough money to buy " + numBeans + " beans!")
    }
    else{
      this.beans += numBeans;
      this.money -= numBeans * 0.5;
      console.log("You bought " + numBeans + " beans. You now have " + this.beans + " beans and " + this.money + " money left.");
    }
  },

  buyDrink: function(drinkType) {
    let drink = this.drinkRequirements[drinkType];
    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
    } else if (this.beans < drink.beanRequirment) {
      console.log("Sorry, we're all out of beans!");
    } else if (this.money < drink.price) {
      console.log("You don't have enough money to buy a " + drinkType);
    } else {
      this.beans -= drink.beanRequirment;
      this.money += drink.price;
      console.log("Enjoy your " + drinkType);
    }
  }
}

coffeeShop2.buyDrink("latte");
coffeeShop2.buyDrink("americano");
