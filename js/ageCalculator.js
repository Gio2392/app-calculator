import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
} from 'date-fns';

const currentDate = new Date();
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

export const ageCalculator = (year, month, day) => {
  const birthDate = new Date(year, month - 1, day);
  let differenceOfDays = '';
  let differenceOfMonths = '';
  let differenceOfYears = '';

  /* CALCULATE DAY */

  if (day < currentDay) {
    differenceOfDays = currentDay % day;
  } else {
    const diference = differenceInCalendarDays(
      new Date(currentYear, currentMonth, currentDay),
      new Date(currentYear, currentMonth - 1, day)
    );
    differenceOfDays = diference;
  }

  /* MONT & YEAR CALCULATE */

  if (currentMonth < month) {
    differenceOfYears = differenceInCalendarYears(currentDate, birthDate) - 1;

    if (day > currentDay) {
      differenceOfMonths = differenceInCalendarMonths(
        currentDate,
        new Date(currentYear - 1, month, currentDay)
      );
    } else {
      differenceOfMonths = differenceInCalendarMonths(
        currentDate,
        new Date(currentYear - 1, month, currentDay)
      );
    }
  } else {
    differenceOfMonths = differenceInCalendarMonths(
      currentDate,
      new Date(currentYear, month, currentDay)
    );
    differenceOfYears = differenceInCalendarYears(currentDate, birthDate);
  }

  return { differenceOfDays, differenceOfMonths, differenceOfYears };
};
