document
  .getElementById("player-expenses-btn")
  .addEventListener("click", function () {
    const getPlayersList = document.getElementById("player-selected");
    const playersNumber = getPlayersList.childNodes.length;

    const perPlayerBudget = getInputValue("per-player-budget");
    if (isNaN(perPlayerBudget) || perPlayerBudget < 0) {
     alert("Input valid number");

    
      return;

    }
    const totalPlayerBudget = perPlayerBudget * playersNumber;
    setTextValue("total-player-expenses", totalPlayerBudget);

    const getPlayerExpenses = document.getElementById("total-player-expenses");

    const playerExpenses = parseInt(getPlayerExpenses.innerText);
    
    if (playerExpenses === 0) {
     alert("Please select players");
      return;
    }
  });
