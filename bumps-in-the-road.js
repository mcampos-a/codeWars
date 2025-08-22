//7 Kyu
//Bumps in the Road
//Fundamentals, Strings

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead



//Solution

function bump(x){
//set up a variable to keep track of "n"
    let nCount = 0
//loop through the str and check if (n) is in the str at each element if so add 1 to the variable
    for(letter of x){
        if(letter === "n"){
            nCount++
        }
    }
//check if the variable for (n) is <= 15 if so return "Woohoo!" else return "Car Dead"
    if(nCount <= 15){
        return "Woohoo!"
    }else{
        return "Car Dead"
    }
}

//str-> of (_) flat ground or (n) bumps. Never empty, never null or undefined, always a str coming in

//str-> if count of (n) <= 15 return "Woohoo!" else return "Car Dead"

console.log(bump("n"), "Woohoo!")
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
