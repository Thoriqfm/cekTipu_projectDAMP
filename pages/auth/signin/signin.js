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

    // Hapus error jika ada
    const existing = group.querySelector('.error-msg');
    if (existing) existing.remove();

    const msg = document.createElement('span');
    msg.classList.add('error-msg');
    msg.textContent = message;

    // Sisipkan setelah input atau input-wrapper
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
const emailPhoneInput = document.getElementById('emailPhone');

emailPhoneInput.addEventListener('input', () => clearError(emailPhoneInput));
passwordInput.addEventListener('input', () => clearError(passwordInput));

// SIGN IN BUTTON
const signinBtn = document.getElementById('signinBtn');

signinBtn.addEventListener('click', () => {
    const emailPhone = emailPhoneInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

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
    window.location.href = '../../../pages/dashboard/dashboard.html';
});