function addUser(){
    player_1 = document.getElementById("player_1_input").value;
    player_2 = document.getElementById("player_2_input").value;

    localStorage.setItem("math_1",player_1);
    localStorage.setItem("math_2",player_2);

    window.location = "game.html";
}