export function initializeDate() {
  const userDateInput = document.getElementById('user-date');

  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = (currDate.getMonth() + 1).toString().padStart(2, 0);
  const date = currDate.getDate().toString().padStart(2, 0);

  userDateInput.value = [year, month, date].join('-');

  userDateInput.onchange = validateDate;
}

function validateDate(e) {
  const dateInput = e.target;

  const userDate = new Date(dateInput.value);
  if (userDate > new Date()) {
    initializeDate();
    dateInput.classList.add('invalidValue');
    dateInput.setAttribute('title', 'Нельзя поставить будущую дату');

    return;
  }

  dateInput.classList.remove('invalidValue');
}