function getInputValue(inputId) {
    const valueInputted = document.getElementById(inputId);
    const newValueInputted = parseInt(valueInputted.value);
    return newValueInputted;
  }
  
  function setTextValue(textId, value) {
    
    const textElement = document.getElementById(textId);

    textElement.innerText = value;
  }
  