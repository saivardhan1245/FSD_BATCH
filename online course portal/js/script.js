document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const successAlert = document.getElementById('successAlert');

  if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      successAlert.classList.remove('d-none');
      registrationForm.reset();
      registrationForm.querySelector('#termsCheck').checked = false;
      setTimeout(() => {
        successAlert.classList.add('d-none');
      }, 5000);
    });
  }
});
