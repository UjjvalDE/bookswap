document.getElementById('login').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Basic validation
    if (username === '' || password === '') {
      errorMessage.innerText = 'Both fields are required!';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Clear previous error
    errorMessage.style.display = 'none';
  
    // API call using fetch
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        
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
  
