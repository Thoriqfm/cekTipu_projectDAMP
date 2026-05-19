document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const btnSelectFile = document.getElementById('btn-select-file');
  const urlInput = document.getElementById('url-input');
  const btnHeroMulai = document.getElementById('btn-hero-mulai');
  
  const uploadProgressState = document.getElementById('upload-progress-state');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressPercentage = document.getElementById('progress-percentage');
  const progressDoneIndicator = document.getElementById('progress-done-indicator');
  const btnLanjutAnalisis = document.getElementById('btn-lanjut-analisis');
  const uploadedFileName = document.getElementById('uploaded-file-name');

  const analysisSection = document.getElementById('analysis-section');
  const sectionUpload = document.getElementById('section-upload');

  // Elemen untuk efek 3D parallax
  const sectionHero = document.querySelector('.section-hero');
  const heroBug = document.querySelector('.hero-bug');

  // Hero Section "Mulai Pengecekan" Button Scroll
  if (btnHeroMulai) {
    btnHeroMulai.addEventListener('click', () => {
      sectionUpload.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // File Upload Logic (Drag & Drop)
  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    
    if (btnSelectFile) {
      btnSelectFile.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent double click
        fileInput.click();
      });
    }

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length) {
        handleFile(e.target.files[0]);
      }
    });
  }

  // URL Input Logic
  if (urlInput) {
    urlInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && urlInput.value.trim() !== '') {
        // Untuk URL, kita bisa pura-pura sebagai file
        simulateUpload("link-scan-result.html");
      }
    });
  }

  function handleFile(file) {
    simulateUpload(file.name);
  }

  // Simulation Logic: Progress Bar
  function simulateUpload(fileName) {
    // Tampilkan kotak progress bar di bawah form
    uploadProgressState.classList.remove('hidden');
    analysisSection.classList.add('hidden'); // Sembunyikan hasil lama jika ada
    
    // Reset state
    uploadedFileName.textContent = fileName;
    progressBarFill.style.width = '0%';
    progressPercentage.textContent = '0%';
    progressPercentage.classList.remove('hidden');
    progressDoneIndicator.classList.add('hidden');
    btnLanjutAnalisis.classList.add('hidden');

    let progress = 0;
    
    // Animasi bertahap progress bar
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5; // Naik random 5-20%
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Selesai (Done)
        progressBarFill.style.width = '100%';
        progressPercentage.classList.add('hidden');
        progressDoneIndicator.classList.remove('hidden');
        btnLanjutAnalisis.classList.remove('hidden');
      } else {
        progressBarFill.style.width = progress + '%';
        progressPercentage.textContent = progress + '%';
      }
    }, 300); // Update setiap 300ms
  }

  // Lanjut Lihat Hasil Analisis
  if (btnLanjutAnalisis) {
    btnLanjutAnalisis.addEventListener('click', () => {
      analysisSection.classList.remove('hidden');
      analysisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // 3D parallax effect untuk hero-bug img
  // Wrapper (.hero-bug-wrapper) menangani floatBug animation
  // Img (.hero-bug) menangani rotasi 3D dari mouse — transform tidak konflik
  if (sectionHero && heroBug) {

    sectionHero.addEventListener('mousemove', (e) => {
      const rect = sectionHero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);

      const rotateX = -offsetY * 40;
      const rotateY =  offsetX * 40;

      heroBug.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    // Reset: kosongkan inline style agar transition CSS smooth kembali ke neutral
    sectionHero.addEventListener('mouseleave', () => {
      heroBug.style.transform = '';
    });
  }

});
