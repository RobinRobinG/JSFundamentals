//ES5 Solution
// function Ninja(name){
// 	this.name = name;
// 	this.health = 100;
// 	var speed = 3;
// 	var strength = 3;
// 	this.sayName = function(){
// 		console.log('My ninja name is ' + this.name);
// 	}
// 	this.showStats = function(){
// 		console.log('name: ' + this.name + ', ' + 'Health: ' + this.health + ', ' + 'Strength: ' + strength);
// 	}
// 	this.drinkSake = function(){
// 		this.health += 10;
// 		return this.health;
// 	}
// 	this.punch = function(x){
// 		if (x instanceof Ninja){
// 			x.health -= 5;
// 			console.log(x.name + ' was punched by ' + this.name + ' and lost 5 health!');
// 		}
// 	}
// 	this.kick = function(x){
// 		if (x instanceof Ninja){
// 			var lost_health = strength * 15;
// 			x.health -= lost_health;
// 			console.log(x.name + ' was kicked by ' + this.name + ' and lost ' + lost_health + ' health!')
// 		}
// 	}
// }
// var ninja_kitty = new Ninja('meowmewo');
// var redNinja = new Ninja("Bill Gates");

// let cat = {}
// cat.fur = 'short';
// cat.face = 'furry';
// Object.prototype.purr = function() {
// 	console.log('prrrrrrrrrrrrrr')
// }

//ES6 Solution
class Ninja {
	constructor(name){
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}
	sayName(){
		console.log(`My ninja name is ${this.name}.`);
	}
	showStats(){
		console.log(`name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}`);
	}
	drinkSake(){
		this.health += 10;
		return this.health;
	}
}
class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom(){
		const drinkSake = super.drinkSake();
		console.log(`What one programmer can do in one month, two programmers can do in two months.`)
	}
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();