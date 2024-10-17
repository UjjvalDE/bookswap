document.addEventListener('DOMContentLoaded', async function () {
  const form = document.getElementById('signup');
  form.addEventListener('submit',async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim()
    const password = document.getElementById('password').value.trim();
    const adress = document.getElementById('adress').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (name === '' || password === '' || adress === '' || phone === '' || email === '') {
      errorMessage.innerText = 'all fields are required!';
      errorMessage.style.display = 'block';
      return;
    }

    // Clear previous error
    errorMessage.style.display = 'none';

    // API call using fetch
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          password: password,
          adress: adress,
          phone: phone,
          email: email,
        })
      });

      const result = await response.json();
      errorMessage.innerText=response;
      if (response.ok) {
        errorMessage.innerText=response;
        window.location.href = 'http://localhost:3000/home';
      } else {
        // Show error message from server
        errorMessage.innerText = result.message || 'Login failed!';
        errorMessage.style.display = 'block';
      }
    } catch (error) {
      // Handle network or other errors
      errorMessage.innerText = 'An error occurred. Please try again.';
      errorMessage.style.display = 'block';
    }
  });
});


document.getElementById('signup').addEventListener('submit', async function (event) {
  event.preventDefault();

});

