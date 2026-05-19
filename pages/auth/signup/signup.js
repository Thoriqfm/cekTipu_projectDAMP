// TOGGLE PASSWORD VISIBILITY
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeOpen = document.getElementById('eyeOpen');
const eyeClose = document.getElementById('eyeClose');

togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeOpen.classList.toggle('hidden', isPassword);
    eyeClose.classList.toggle('hidden', !isPassword);
});

// VALIDASI INPUT
function setError(input, message) {
    const group = input.closest('.form-group');
    input.classList.add('input-error');

    const existing = group.querySelector('.error-msg');
    if (existing) existing.remove();

    const msg = document.createElement('span');
    msg.classList.add('error-msg');
    msg.textContent = message;

    const wrapper = group.querySelector('.input-wrapper') || input;
    wrapper.insertAdjacentElement('afterend', msg);
}

function clearError(input) {
    const group = input.closest('.form-group');
    input.classList.remove('input-error');
    const existing = group.querySelector('.error-msg');
    if (existing) existing.remove();
}

// Hapus error saat user mulai mengetik
const fullNameInput = document.getElementById('fullName');
const emailPhoneInput = document.getElementById('emailPhone');

fullNameInput.addEventListener('input', () => clearError(fullNameInput));
emailPhoneInput.addEventListener('input', () => clearError(emailPhoneInput));
passwordInput.addEventListener('input', () => clearError(passwordInput));

// SIGN UP BUTTON
const signupBtn = document.getElementById('signupBtn');

signupBtn.addEventListener('click', () => {
    const fullName = fullNameInput.value.trim();
    const emailPhone = emailPhoneInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    if (!fullName) {
        setError(fullNameInput, 'Full name is required.');
        hasError = true;
    } else {
        clearError(fullNameInput);
    }

    if (!emailPhone) {
        setError(emailPhoneInput, 'Email or phone number is required.');
        hasError = true;
    } else {
        clearError(emailPhoneInput);
    }

    if (!password) {
        setError(passwordInput, 'Password is required.');
        hasError = true;
    } else {
        clearError(passwordInput);
    }

    if (hasError) return;

    // Redirect ke dashboard
    window.location.href = '../../../pages/dashboard/index.html';
});