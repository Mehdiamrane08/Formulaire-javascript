function btnAge() {
    let age = document.getElementById("age").value;
    if (age >= 18){
        alert("bienvenue");
    }
    else {
        alert("acces interdit")
    }
};
function btnDate() {
    let date = document.getElementById("date").value;
    date = new Date(date).getFullYear()
    if ( date >= 18){
        alert("bienvenue");
    }
    else {
        alert("acces interdit")
    }
};