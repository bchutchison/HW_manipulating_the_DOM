document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#new-car-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const make = event.target.make.value;
    const model = event.target.model.value;
    const colour = event.target.colour.value;
    const enginesize = event.target.enginesize.value;

    const formResult = document.createElement('li');
    formResult.textContent = `${make} ${model} ${colour} ${enginesize}`;
    const list = document.querySelector('#car-list');
    list.appendChild(formResult);

    const form = document.querySelector('#new-car-form').reset();
  });
})
