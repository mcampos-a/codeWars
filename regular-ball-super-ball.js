//8 Kyu
//Regular Ball Super Ball
//Fundamentals

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


//Solution 

class Ball{
  constructor(ballType){
    if(ballType === "super"){
      this.ballType = "super"
    }else{
      this.ballType = "regular"
    }
  }
}


//str -> a string word that sets the ball type, can be empty, wnt be null or undefined, will always be a str or can be empty

//str -> when the ballType attribute is called if the new Ball() instatiation did not recieve an argument return "regular" else return "regular"

