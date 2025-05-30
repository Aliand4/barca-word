
function validateForm() {
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas. Veuillez les saisir à nouveau.");
        return false; 
    }

    
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    const fakeEmail = "ali@barca.com";
    const fakePassword = "viscabarca";

    if (email === fakeEmail && password === fakePassword) {
      alert("Connexion réussie !");
      window.location.href = "accueil.html"; 
    } else {
      alert("Identifiants incorrects !");
    }
  });
});


