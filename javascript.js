document.querySelectorAll('.text-select-input').forEach(textItem => {
  textItem.addEventListener('change', (event) => {
    const isSelected = event.target.checked;
    const textValue = event.target.value;
    
    console.log(`Text element "${textValue}" is now selected: ${isSelected}`);
  });
});
