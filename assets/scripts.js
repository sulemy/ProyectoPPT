'use strict'

var answerPlayer1 = '';
var answerPlayer2 = '';
function getOptionPlayer1(result){
	switch(true) {
		case result.player1Slug.checked == true :
			answerPlayer1 = 'Slug'; 
			break;
		case result.player1Flog.checked == true : 
			answerPlayer1 = 'Flog';
			break;
		case result.player1Snake.checked == true :
			answerPlayer1 = 'Snake'; 
			break;
		default : 
			alert('Hubo un error en el proceso'); 
	}

	document.getElementById('player2').classList.remove('section__display');
	// document.getElementById('player2').style.visibility = 'visible';	

	document.getElementById('player1').classList.add('section__display');
}

function deselectSelectPlayer1(valuePlayer1)
{
	console.log(valuePlayer1);
	let slug = document.getElementsByName('player1Slug');
	let flog = document.getElementsByName('player1Flog');
	let snake = document.getElementsByName('player1Snake');
	switch(true) {
		case valuePlayer1 == 'slug' : 
			if(slug[0].checked == true){
				flog[0].checked = false;
				snake[0].checked = false;
			}
			break;
		case valuePlayer1 == 'flog' :
			if(flog[0].checked == true){
				slug[0].checked = false;
				snake[0].checked = false;
			}
			break;
		case valuePlayer1 == 'snake' :
			if(snake[0].checked == true){
				flog[0].checked = false;
				slug[0].checked = false;
			}
			break;
		default : 
			alert('Hubo un error en el proceso'); 
	}

}

function deselectSelectPlayer2(valuePlayer2)
{
	console.log(valuePlayer2);
	let slug = document.getElementsByName('player2Slug');
	let flog = document.getElementsByName('player2Flog');
	let snake = document.getElementsByName('player2Snake');
	switch(true) {
		case valuePlayer2 == 'slug' : 
			if(slug[0].checked == true){
				flog[0].checked = false;
				snake[0].checked = false;
			}
			break;
		case valuePlayer2 == 'flog' :
			if(flog[0].checked == true){
				slug[0].checked = false;
				snake[0].checked = false;
			}
			break;
		case valuePlayer2 == 'snake' :
			if(snake[0].checked == true){
				flog[0].checked = false;
				slug[0].checked = false;
			}
			break;
		default : 
		alert('Hubo un error en el proceso');
	}

}

function getOptionPlayer2(result){
	switch(true) {
		case result.player2Slug.checked == true :
			answerPlayer2 = 'Slug';
			break; 
		case result.player2Flog.checked == true : 
			answerPlayer2 = 'Flog';
			break;
		case result.player2Snake.checked == true :
			answerPlayer2 = 'Snake'; 
			break;
		default : 
		alert('Hubo un error en el proceso'); 
	}

	document.getElementById('player2').style.display = 'none';	
	// document.getElementById('player2').style.visibility = 'visible';	
	document.getElementById('player1').style.display = 'none';
	getResult();
}

function getResult()
{
	console.log("prueba1 " + answerPlayer1+ " prueba 2 " + answerPlayer2);
	switch(true){
		case (answerPlayer1 == answerPlayer2) :
			console.log("iguales");
			document.getElementById('player1-won').style.display = 'block';
			document.getElementById('player2-won').style.display = 'block';
			break;	
		case (answerPlayer1 == 'Snake' && answerPlayer2 == 'Flog') :
			document.getElementById('player1-won').style.display = 'block';
			// document.getElementById('player2-won').style.display = 'none';
			break;
		case (answerPlayer2 == 'Snake' && answerPlayer1 == 'Flog') :
			document.getElementById('player2-won').style.display = 'block';
			// document.getElementById('player1-won').style.display = 'none';
			break;
		case (answerPlayer1 == 'Flog' && answerPlayer2 == 'Slug') :
			document.getElementById('player1-won').style.display = 'block';
			// document.getElementById('player2-won').style.display = 'none';
			break;
		case (answerPlayer2 == 'Flog' && answerPlayer1 == 'Slug') :
			document.getElementById('player2-won').style.display = 'block';
			// document.getElementById('player1-won').style.display = 'none';
			break;
		case (answerPlayer1 == 'Slug' && answerPlayer2 == 'Snake') :
			document.getElementById('player1-won').style.display = 'block';
			// document.getElementById('player2-won').style.display = 'none';
			break;
		case (answerPlayer2 == 'Slug' && answerPlayer1 == 'Snake') :
			document.getElementById('player2-won').style.display = 'block';
			// document.getElementById('player1-won').style.display = 'none';
			break;
		default : 
		alert('Hubo un error en el proceso');
	}
}

function getOptionComp(){
  const min = 2; 
  const max = 4;
  let valueComp = Math.floor(Math.random() * (max - min)) + min;
  console.log(Math.random());

  switch(true) {
		case valueComp == 1 :
			answerPlayer2 = 'Slug';
			break; 
		case valueComp == 2 : 
			answerPlayer2 = 'Flog';
			break;
		case valueComp == 3 :
			answerPlayer2 = 'Snake'; 
			break;
		default : 
		alert('Hubo un error en el proceso'); 
	}
}

function getOptionPlayer1vsComp(result){
	switch(true) {
		case result.player1Slug.checked == true :
			answerPlayer1 = 'Slug'; 
			break;
		case result.player1Flog.checked == true : 
			answerPlayer1 = 'Flog';
			break;
		case result.player1Snake.checked == true :
			answerPlayer1 = 'Snake'; 
			break;
		default : 
			alert('Hubo un error en el proceso'); 
	}

	document.getElementById('player2').style.display = 'block';	
	// document.getElementById('player2').style.visibility = 'visible';	

	document.getElementById('player1').style.display = 'none';

	getOptionComp();
	getResult();
}


