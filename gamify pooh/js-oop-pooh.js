// create objects with character attribute

var tigger = { 
	character: "Tigger",
	greet: function(){
		console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
	},
	honey: 0,
};
var pooh = { 
	character: "Winnie the Pooh",
	greet: function(){
		console.log("The wonderful thing about Winnie the Pooh is Winnie the Pooh are wonderful things!")
	},
	honey: 0,
};
var owl = { 
	character: "Owl",
	greet: function(){
		console.log("The wonderful thing about Owls is Owls are wonderful things!")
	},
	honey: 0,
};
var piglet = {
	character: "Piglet",
	greet: function(){
		console.log("The wonderful thing about Piglets is Piglets are wonderful things!")
	},
	honey: 0,	
};
var eeyore = { 
	character: "Eeyore",
	greet: function(){
		console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
	},
	honey: 0,
};
var kanga = { 
	character: "Kanga",
	greet: function(){
		console.log("The wonderful thing about Eeyores is Eeyores are wonderful things!")
	},
	honey: 0,
};
var robin = { 
	character: "Christopher Robin",
	greet: function(){
		console.log("The wonderful thing about Robin is Robin are wonderful things!")
	},
	honey: 0,
};
var heffalumps = { 
	character: "Heffalumps",
	greet: function(){
		console.log("The wonderful thing about Heffalumps is Heffalumps are wonderful things!")
	},
	honey: 0,
};
var rabbit = { 
	character: "Rabbit",
	greet: function(){
		console.log("The wonderful thing about Rabbits is Rabbits are wonderful things!")
	},
	honey: 0,
};
var bees = { 
	character: "Bees",
	greet: function(){
		console.log("You are now at Bees's House!")
	},
	honey: 0,
};
var gopher = { 
	character: "Gopher",
	greet: function(){
		console.log("The wonderful thing about Gophers is Gophers are wonderful things!")
	},
	honey: 0,
};

//Have the objects point to each other as indicated in the diagram
owl.east = robin;
owl.south = piglet;

piglet.north = owl;
piglet.east = pooh;

eeyore.east = heffalumps;
eeyore.south = kanga;

kanga.south = robin;

robin.east = rabbit;
robin.south = pooh;
robin.west = owl;
robin.north = kanga;

pooh.east = bees;
pooh.south = tigger;
pooh.north = robin;
pooh.west = piglet;

tigger.north = pooh; 

heffalumps.west = eeyore;

rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;

bees.north = rabbit;
bees.west = pooh;

gopher.west = rabbit;

var player = {
	location: tigger,
	has_honey:false,
}

function move(direction){
	if (player.location[direction] != null) {
		player.location = player.location[direction];
		console.log("You are now at " + player.location.character +"'s home");
		player.location.greet();
	}
	else{
		console.log("You may not go that way!");
	}
}
function mission(){
	options = ['Tigger','Winnie the Pooh','Owl','Piglet','Eeyore','Heffalumps','Kanga','Rabbit','Gopher','Christopher Robin']
	rand = Math.floor(Math.random() * Math.floor(options.length));
	console.log("Your currently location is " + player.location.character + ". Please deliver honey to " + options[rand]);
	return options[rand];
}
var destination = mission();

function pickUp(){
	if (player.location == bees ){
		player.has_honey = true;
		console.log("You have gathered some honey!");
		return player.has_honey;
	}
}
function drop(){
	if (player.has_honey == true && player.location.character == destination){
		player.has_honey = false;
		player.location.honey += 1;
		console.log("Congratulations! You delivered the honey to " + destination +"!");
	}
	else{
		console.log("Whoops! This isn't the place that needs the honey!");
	}
}