
var guess_input_text;
var guess_input;
var target;
var guesses=0;
var finished= false;

function Do_Game() {

  color=[" Blue","Cyan", "Gold", "Gray","Green","orange","Red","White","Yellow"]

  var random_number= Math.random()*9;
  var random_number_integer= Math.floor(random_number);
  target= random_number_integer+1;
   target_color= color[target];

   while (!finished) {

guess_input_text= prompt(" I am thinking of one of these colors:\n " + "Blue, Cyan, Gold, Gray, Green, orange, Red, White, Yellow \n"+" What color am I thinking of?")

            guess_input= guess_input_text;
            guesses+=1;

            finished= check_guess();


   }

function check_guess() {

      if( (typeof guess_input) === 'string' )
    {

       alert(" You have not enter a color \n Please enter a color");

       return false;

    }

  return true;
}




}
