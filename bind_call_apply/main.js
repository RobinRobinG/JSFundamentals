// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(){
    console.log("I've been clicked");
    console.log(this.name);
  }
}

// var newObject = {
//   name:"West Virginia,  Montani semper liberi"
// }

// our behavior on click.
$('button').click(customObject.onClick.bind(customObject));

// // modify the button method to this:
// $('button').click(customObject.onClick.bind(newObject));