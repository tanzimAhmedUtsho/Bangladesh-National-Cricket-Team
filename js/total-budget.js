document
  .getElementById("total-expenses")
  .addEventListener("click", function () {
    const getPlayersExpenses = document.getElementById("total-player-expenses");
    const playersExpenses = parseInt(getPlayersExpenses.innerText);

    const budgetForManager = getInputValue("budget-for-manager");
    const budgetForCoach = getInputValue("budget-for-coach");

    if ( isNaN(budgetForManager) || isNaN(budgetForCoach) || budgetForManager < 0 || budgetForCoach < 0) {
      alert("Input valid number");

      return;
    }
    const finalExpenses = playersExpenses + budgetForManager + budgetForCoach;
    setTextValue("total", finalExpenses);
  });
