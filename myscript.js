function myFunction(){
var score = 0, text;
      a = document.getElementById("Scramble Eggs").value;
      b = document.getElementById("SHIAH").value;
      c = document.getElementById("You").value;
      if(a == "Scramble Eggs"){
        score++;
        console.log("in bj");
      }
      if(b == "SHIAH"){
        score++;
      }
      if(c == "You"){
        score++;
      }
var display = "The answer you typed is : " + a + "," + b + "," + c +"<br>";
      if(score == 3) {
  	      text = "You got it right! Congrats!"
      } else {
  	     text = "Your score was " + score + "/3. Better luck next time! The correct answers are  Scramble Eggs, SHIAH, You"
      }
      document.getElementById("demo").innerHTML = display +  text;
  }
