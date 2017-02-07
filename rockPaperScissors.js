



function startPicButton() {
	computerRandomChoice(name);
	compareFunction(userChoice,comChoice);
		
}


function computerRandomChoice(name){
	var computerChoice = Math.floor(Math.random() * 3);
	
	if (computerChoice === 1){
		document.getElementById("paperElementCom").style.display ="none";
		document.getElementById("scissorsElementCom").style.display ="none";
		document.getElementById("rockElementCom").style.display = "block";
		comChoice = "rock";
		name = comChoice;
		return name;
		
	}else if (computerChoice === 2){
		document.getElementById("rockElementCom").style.display ="none";
		document.getElementById("scissorsElementCom").style.display ="none";
		document.getElementById("paperElementCom").style.display = "block";
		comChoice = "paper";
		name = comChoice;
		return name;
		
	}else {
		document.getElementById("rockElementCom").style.display ="none";
		document.getElementById("paperElementCom").style.display ="none";
		document.getElementById("scissorsElementCom").style.display = "block";
		comChoice = "scissors";
		name = comChoice;
		return name;
	}
	
	
}
var play1 = 0;
var play2 = 0;	
	
function compareFunction(choice1,choice2){
	if(choice1 === choice2){
		document.getElementById("winnerPic").style.display ="none";
		document.getElementById("loserPic").style.display ="none";
		document.getElementById("tiePic").style.display = "block";
		
	}else if(choice1 === "rock"){
		if (choice2 === "paper"){
			document.getElementById("winnerPic").style.display ="none";
			document.getElementById("loserPic").style.display = "block";
			document.getElementById("tiePic").style.display = "none";
			play2++;
			document.getElementById("play2").innerHTML = "Player 2 Score: " + play2;
		}else{
			document.getElementById("winnerPic").style.display = "block";
			document.getElementById("loserPic").style.display ="none";
			document.getElementById("tiePic").style.display ="none";
			play1++;
			document.getElementById("play1").innerHTML =  "Player 1 Score: " + play1;
		}
	}else if (choice1 === "paper"){
		if (choice2 === "rock"){
			document.getElementById("winnerPic").style.display = "block";
			document.getElementById("loserPic").style.display ="none";
			document.getElementById("tiePic").style.display ="none";
			play1++;
			document.getElementById("play1").innerHTML =  "Player 1 Score: " + play1;
		}else{
			document.getElementById("winnerPic").style.display ="none";
			document.getElementById("loserPic").style.display = "block";
			document.getElementById("tiePic").style.display ="none";
			play2++;
			document.getElementById("play2").innerHTML =  "Player 2 Score: "  + play2;
		}	
	}else if (choice1 === "scissors"){
		if (choice2 === "paper"){
			document.getElementById("winnerPic").style.display = "block";
			document.getElementById("loserPic").style.display = "none";
			document.getElementById("tiePic").style.display = "none";
			play1++;
			document.getElementById("play1").innerHTML =  "Player 1 Score: " + play1;
		}else{
			document.getElementById("winnerPic").style.display ="none";
			document.getElementById("loserPic").style.display = "block";
			document.getElementById("tiePic").style.display ="none";
			play2++;
			document.getElementById("play2").innerHTML =  "Player 2 Score: " + play2;	
		}
	}
}


var userChoice = "";

function rockPic(choice1){
	document.getElementById("scissorsElement").style.display = "none";
	document.getElementById("paperElement").style.display = "none";
	document.getElementById("rockElement").style.display = "block";
	userChoice = "rock";
	choice1 = userChoice;
	return choice1;
	
}

function paperPic(choice1){
	document.getElementById("rockElement").style.display = "none";
	document.getElementById("scissorsElement").style.display = "none";
	document.getElementById("paperElement").style.display = "block";
	userChoice = "paper";
	choice1 = userChoice;
	return choice1;
}

function scissorsPic(choice1){
	document.getElementById("rockElement").style.display = "none";
	document.getElementById("paperElement").style.display = "none";
	document.getElementById("scissorsElement").style.display = "block";
	userChoice = "scissors";
	choice1 = userChoice;
	return choice1;
}








