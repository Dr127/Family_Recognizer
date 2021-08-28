function back(){
    window.location="index.html";
}

function start(){

document.getElementById("result").innerHTML = " ";

family_images_array = ["bro.jpeg", "mom.jpeg","dad.jpeg"];

random_number = Math.floor(Math.random() * 3);
console.log(random_number)

face_image = family_images_array[random_number];
console.log(random_number);

document.getElementById("image").src = face_image;


}
function check(){
   get_guess = document.getElementById("guess").value;
   guess = get_guess.toLowerCase();

    if(face_image == "bro.jpeg"){
        if(guess == "brother"){
            document.getElementById("result").innerHTML = "Correct!";
        }
        else{
            document.getElementById("result").innerHTML = "Incorrect!"; 
        }
    }
    else if(face_image == "mom.jpeg"){
        if(guess == "mom"){
            document.getElementById("result").innerHTML = "Correct!";
        }
        else{
            document.getElementById("result").innerHTML = "Incorrect!"; 
        }
    }
    else if(face_image == "dad.jpeg"){
        if(guess == "dad"){
            document.getElementById("result").innerHTML = "Correct!";
        }
        else{
            document.getElementById("result").innerHTML = "Incorrect!"; 
        }
    }
}