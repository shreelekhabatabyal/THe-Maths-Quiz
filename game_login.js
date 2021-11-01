function addUser() {
    console.log("hi");
    var Player1_name = document.getElementById("player1_name").value;
    var Player2_name = document.getElementById("player2_name").value;
    localStorage.setItem("Player1", Player1_name);
    localStorage.setItem("Player2", Player2_name);
    window.location = "game_page.html";

}