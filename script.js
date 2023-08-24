const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorDiv = document.createElement('div');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '') {
    showError('Username is required.');
  } else if (password === '') {
    showError('Password is required.');
  } else {
    // Do login
    console.log('Logging in...');
  }
});

function showError(errorMessage) {
  errorDiv.innerText = errorMessage;
  errorDiv.classList.add('error');
  form.insertBefore(errorDiv, form.firstChild);
}
