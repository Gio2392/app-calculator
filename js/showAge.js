const d = document;
const showDay = d.querySelector('.result__value--days');
const showMonth = d.querySelector('.result__value--months');
const showYear = d.querySelector('.result__value--years');

export const showAge = (age) => {
  console.log(age);
  const { differenceOfDays, differenceOfMonths, differenceOfYears } = age;

  showDay.textContent = differenceOfDays;
  showMonth.textContent = differenceOfMonths;
  showYear.textContent = differenceOfYears;
};
