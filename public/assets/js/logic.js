//when a user clicks will call this function to generate new div with the burgers the want to eat
var newBurger = function(event){
	event.preventDefault();
	console.log("listener  working")
//div id to prepend new burgers to #newBurgers
var yumBurger = $("#addBurger")
var burgerArr = [];
//id #addBurger from text area in index
burgerArr.push(yumBurger);
for(var i = 0; i < burgerArr.length; i++){
	var newRow = $('<div class="col-md-4">' + "<p>test</p>")
		.append('<p class="text-muted">' + burgerArr[i] + "</div>");
		//.append/get from schema current burgers to devour
	$("#newBurgers").append(newRow);
}

}
//on submit, enter a new burger on the newly generated column 
$("#submit").on("click", newBurger);

/* new data is being pushed t the burgerArr, and passing it to the rows on everynew submit...now to get current data in the db and post burgerArr into db*/
