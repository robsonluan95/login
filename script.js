document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Clear previous messages
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('form-message').textContent = '';
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
  
    // Email validation
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById('email-error').textContent = 'E-mail inválido.';
      toastr.error('E-mail inválido.', 'Erro de Validação');
      valid = false;
    }
  
    // Password validation
    if (password.length < 6) {
      document.getElementById('password-error').textContent = 'A senha deve ter pelo menos 6 caracteres.';
      toastr.error('A senha deve ter pelo menos 6 caracteres.', 'Erro de Validação');
      valid = false;
    }
  
    // Display success or error message
    if (valid) {
      toastr.success('Login realizado com sucesso!', 'Sucesso');
      document.getElementById('form-message').textContent = 'Login realizado com sucesso!';
      document.getElementById('form-message').style.color = 'green';
    } else {
      toastr.error('Corrija os erros antes de continuar.', 'Erro');
      document.getElementById('form-message').textContent = 'Corrija os erros acima antes de continuar.';
      document.getElementById('form-message').style.color = 'red';
    }
  });
  