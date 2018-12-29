$(document).ready(function() {


	//shuffle answer 
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		} 
		return array;
	  }

	$.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple", getNewQuestions)
	function getNewQuestions(data) {
		var questions_set = data['results'];
	
		for (var x = 0; x < questions_set.length; x++){
			var question = questions_set[x].question;
			var answers = questions_set[x].incorrect_answers;
			answers.push(questions_set[x].correct_answer);
			var shuffled_answers = shuffle(answers);
			var correct_answer = questions_set[x].correct_answer;
			$('ul').append("<li class='question_item' id="+x+" alt-answers = '"+shuffled_answers+"'  alt-correct = '"+correct_answer+"'><div class='question' >"+question+"</div></li>")
			//var question_id = $(this).attr('id');
			
			$(".question_item").on('click',function(){
				var new_answers = $(this).attr('alt-answers').split(',');
				//console.log(new_answers);
				var HTML_answers = [];
				for (var i = 0; i < new_answers.length; i++) {
					HTML_answers.push("<span>" + new_answers[i] + "</span>");
				}
				$(this).html(HTML_answers.join(''))
				var answer = $(this).attr('alt-correct');
				$('span').on('click',function(){
					//console.log('hello, I am here!');
					var selected_answer = $(this).text();
					//console.log(selected_answer);
					//console.log(answer);
					if (selected_answer == answer){
						console.log('you are correct!');
						$(this).parent().slideToggle("slow");
					}
				})
			})
		}
	};

});

