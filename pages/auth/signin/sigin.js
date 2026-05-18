// TOGGLE SHOW/HIDE PASSWORD
function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  const isHidden = inp.type === 'password';

  // Ganti tipe input
  inp.type = isHidden ? 'text' : 'password';

  // Ganti ikon mata
  btn.innerHTML = isHidden
    ? `<svg viewBox="0 0 24 24" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-linecap:round;stroke-linejoin:round">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
       </svg>`
    : `<svg viewBox="0 0 24 24" style="width:18px;height:18px;stroke:currentColor;fill:none;stroke-linecap:round;stroke-linejoin:round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
       </svg>`;
}

// VALIDASI & SUBMIT SIGN IN
 
function handleSignIn() {
  const email     = document.getElementById('emailInput');
  const password  = document.getElementById('passwordInput');
  const emailErr  = document.getElementById('emailError');
  const passErr   = document.getElementById('passwordError');
  let valid = true;

  // Reset error dulu
  email.classList.remove('error');
  password.classList.remove('error');
  emailErr.style.display  = 'none';
  passErr.style.display   = 'none';

  // Cek email kosong
  if (!email.value.trim()) {
    email.classList.add('error');
    emailErr.style.display = 'block';
    valid = false;
  }

  // Cek password kosong
  if (!password.value.trim()) {
    password.classList.add('error');
    passErr.style.display = 'block';
    valid = false;
  }

  // Kalau valid → pindah ke dashboard
  if (valid) {
    window.location.href = '../../pages/dashboard/dashboard.html';
  }
}

// SIGN IN WITH GOOGLE
// Pilihan B: redirect ke dashboard seolah berhasil login
function handleGoogle() {
  window.location.href = '../../pages/dashboard/dashboard.html';
}