//JavaScript File

function myFunction(){
    let age = document.getElementById("guessAge").value;
    let whilecontrol = true;
    while (whilecontrol) {
        if (age == 14 ) {
            alert("Congratulations!!!You guessed My Age!!! ");
            whilecontrol = false;
        }
        else {
            alert("Please Try Again");
            whilecontrol = false;
}
}
}