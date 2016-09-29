import 'classlist-polyfill';

function setSubmitStatus(form, submit) {
  const inputs = Array.from(form.querySelectorAll(
    'input:not(:disabled):not([type="submit"]):not([name="mandant"])'
  ));

  let empty = false;
  inputs.forEach(input => {
    if (input.value.trim().length === 0) empty = true;
  });

  submit.disabled = empty;
}

function handleSubmitStatus(form) {
  const submit = form.querySelector('input[type="submit"]');

  setSubmitStatus(form, submit);  // initial call

  const inputs = Array.from(form.querySelectorAll(
    'input:not([type="submit"]):not([name="mandant"])'
  ));

  inputs.forEach(input => {
    input.addEventListener('input', () => setSubmitStatus(form, submit));
  });
}

function toggleForms(form, showLogin) {
  form.querySelector('input[name="password"]').disabled = !showLogin;
  form.querySelector('input[name="old-password"]').disabled = showLogin;
  form.querySelector('input[name="new-password"]').disabled = showLogin;
  form.querySelector('input[name="confirm-new-password"]').disabled = showLogin;

  const switchToChangePassword =
    document.getElementById('action-switch-to-change-password').parentNode;
  const switchToLogin =
    document.getElementById('action-switch-to-login').parentNode;
  switchToChangePassword.style.display = showLogin ? '' : 'none';
  switchToLogin.style.display = showLogin ? 'none' : '';

  setSubmitStatus(form, form.querySelector('input[type="submit"]'));

  // TODO: change form action

  form.querySelector('input:not(:disabled)').focus();
}

if (document.getElementById('login')) {
  const form = document.querySelector('form');

  handleSubmitStatus(form);

  const switchToChangePassword =
    document.getElementById('action-switch-to-change-password');
  if (switchToChangePassword) {
    switchToChangePassword
      .addEventListener('click', () => toggleForms(form, false));
  }
  const switchToLogin = document.getElementById('action-switch-to-login');
  if (switchToLogin) {
    switchToLogin.addEventListener('click', () => toggleForms(form, true));
  }
}
