const totalPlayers = document.querySelectorAll(".select-player-btn");

for (const player of totalPlayers) {

  player.addEventListener("click", function (selectField) {

    const playerName = selectField.target.parentNode.childNodes[1].innerText;

    const getPlayersList = document.getElementById("player-selected");
    const playersNumber = getPlayersList.childNodes.length;

    console.log(playersNumber);
    if (playersNumber > 4) {

     alert("You can't add more than five players")

      return;
    }

    const liCreate = document.createElement("li");

    liCreate.innerText = playerName;

    getPlayersList.appendChild(liCreate);

    
    selectField.target.setAttribute("disabled", true);
    selectField.target.style.backgroundColor = "light-blue";
    
  });
}
