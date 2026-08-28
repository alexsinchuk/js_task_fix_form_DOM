'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  const fieldName = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = fieldName;

  input.placeholder = fieldName;

  input.parentElement.appendChild(label);
});
