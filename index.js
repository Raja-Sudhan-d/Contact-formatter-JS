import './style.css';

const appDiv = document.getElementById('app');
const inputField = document.getElementById('phone-number');

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^1-9]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 9)}`;
}

function phoneNumberFormatter() {
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}

inputField.addEventListener('keydown', phoneNumberFormatter);
