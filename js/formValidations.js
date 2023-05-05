import { ageCalculator } from './ageCalculator';
import { showAge } from './showAge';

const d = document;
const currentFullYear = new Date().getFullYear();

export const formValidations = () => {
  const form = d.querySelector('.form-group');
  const inputs = d.querySelectorAll('.form-group input');
  let birthDate = {};

  const errorMessage = {
    day: [
      'This field is required',
      'Must be a valid day',
      'Must be a valid date',
    ],
    month: ['This field is required', 'Must be a valid month'],
    year: ['This field is required', 'Must be in the past'],
  };

  createMessage(inputs, errorMessage);
  createMessage(inputs, errorMessage, 1);
  createMessage(inputs, errorMessage, 2);

  d.addEventListener('submit', (e) => {
    e.preventDefault();
    isEmpty(inputs);
    isValidDay();
    isValidMonth();
    isValidYear();

    if (form.querySelectorAll('span.is-active').length > 0) {
    } else {
      inputs.forEach((input) => {
        const { value, name } = input;
        birthDate = { ...birthDate, [name]: parseInt(value) };
      });

      const { year, month, day } = birthDate;
      const correctDate = isValidDate(year, month, day);

      if (correctDate) {
        /* LLAMAR EL VALIDADOR DEL CUMPLEAÑOS */
        const currentAge = ageCalculator(year, month, day);
        showAge(currentAge);
      } else {
        //aqui va el error
        errorDate(inputs);
      }
    }
  });
};

const createMessage = (inputs, errorMessage, i = 0) => {
  inputs.forEach((input) => {
    const span = d.createElement('SPAN');
    span.id = i === 0 ? input.name : `${input.name}-${i}`;
    span.textContent = errorMessage[input.name][i];
    span.classList.add('error', 'none');

    if (span.textContent === '') return;
    input.insertAdjacentElement('afterend', span);
  });
};

const isEmpty = (inputs) => {
  inputs.forEach((input) => {
    const inputValue = input.value;

    if (inputValue === '' || inputValue <= 0) {
      d.getElementById(`${input.name}`).classList.add('is-active');
      input.classList.add('input-error');
      d.querySelector(`label[for="${input.name}Input"]`).classList.add(
        'form__label--error'
      );
    } else {
      d.getElementById(`${input.name}`).classList.remove('is-active');
      input.classList.remove('input-error');
      d.querySelector(`label[for="${input.name}Input"]`).classList.remove(
        'form__label--error'
      );
      d.getElementById('day-2').classList.remove('is-active');
    }
  });
};

const isValidDay = () => {
  const dayValue = d.getElementById('dayInput');
  if (dayValue.value > 31) {
    d.getElementById('day-1').classList.add('is-active');
    d.querySelector('label[for="dayInput"]').classList.add(
      'form__label--error'
    );
    dayValue.classList.add('input-error');
  } else {
    d.getElementById('day-1').classList.remove('is-active');
  }
};

const isValidMonth = () => {
  const monthValue = d.getElementById('monthInput');
  if (monthValue.value > 12) {
    d.getElementById('month-1').classList.add('is-active');
    d.querySelector('label[for="monthInput"]').classList.add(
      'form__label--error'
    );
    monthValue.classList.add('input-error');
  } else {
    d.getElementById('month-1').classList.remove('is-active');
  }
};

const isValidYear = () => {
  const yearValue = d.getElementById('yearInput');
  if (yearValue.value > currentFullYear) {
    d.getElementById('year-1').classList.add('is-active');
    yearValue.classList.add('input-error');
    d.querySelector('label[for="yearInput"]').classList.add(
      'form__label--error'
    );
  } else {
    d.getElementById('year-1').classList.remove('is-active');
  }
};

const isValidDate = (year, month, day) => {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

const errorDate = (inputs) => {
  inputs.forEach((input) => {
    d.getElementById('day-2').classList.add('is-active');
    input.classList.add('input-error');
    d.querySelector(`label[for="${input.name}Input"]`).classList.add(
      'form__label--error'
    );
  });
};
