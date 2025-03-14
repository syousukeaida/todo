let input = document.getElementById('input');
let lists = document.getElementById('lists');

const add = (value) => {
  let div = document.createElement('div');
  let checkbox = document.createElement('input');
  let li = document.createElement('li');
  let edit = document.createElement('button');
  let button = document.createElement('button');
  let span = document.createElement('span');
  button.onclick = () => {
    let bank = JSON.parse(localStorage.getItem('bank')) || [];
    let index = bank.indexOf(value);
    if (index !== -1) {
      bank.splice(index, 1);
      localStorage.setItem('bank', JSON.stringify(bank));
      div.remove();
    }
  };
  checkbox.onclick = () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  }
  // edit.onclick = () => {
  //   let new_value = prompt('編集');
  //   if (new_value) {
  //     let bank = JSON.parse(localStorage.getItem('bank')) || [];
  //     let index = bank.indexOf(value);
  //     if (index !== -1) {
  //       bank[index] = new_value;
  //       localStorage.setItem('bank', JSON.stringify(bank));
  //       li.innerHTML = new_value;
  //     }
  //   }
  // }
  button.classList.add('delete');
  edit.classList.add('edit');
  li.classList.add('list');
  div.classList.add('list_wrapper');
  span.classList.add('batsu');
  checkbox.classList.add('checkbox');
  edit.textContent = 'e';
  button.textContent = '';
  checkbox.type = 'checkbox';
  li.innerHTML = value;
  lists.append(div);
  div.append(checkbox, li, edit, button);
  button.append(span);
};

const set_local = () => {
  const bank = JSON.parse(localStorage.getItem('bank')) || [];
  bank.push(input.value);
  localStorage.setItem('bank', JSON.stringify(bank));
  add(input.value);
};

const get_local = () => {
  const bank = JSON.parse(localStorage.getItem('bank')) || [];
  bank.forEach(value => add(value));
};

document.addEventListener('DOMContentLoaded', () => {
  get_local();
});