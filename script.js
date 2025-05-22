// Smooth scroll + active nav link highlight
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    links.forEach(l => l.classList.remove('active', 'text-blue-600'));
    links.forEach(l => l.classList.add('text-white'));

    this.classList.remove('text-white');
    this.classList.add('active', 'text-blue-600');
  });
});

// Change background gradient on scroll based on current section
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  document.body.classList.remove(
    'bg-gradient-to-l', 'bg-gradient-to-r', 'bg-gradient-to-b',
    'from-blue-900', 'from-blue-800', 'from-gray-950', 'from-black',
    'to-gray-900', 'to-blue-900', 'to-black'
  );

  switch (current) {
    case 'home':
      document.body.classList.add('bg-gradient-to-l', 'from-blue-900', 'to-gray-900');
      break;
    case 'skills':
      document.body.classList.add('bg-gradient-to-r', 'from-blue-800', 'to-gray-900');
      break;
    case 'project':
      document.body.classList.add('bg-gradient-to-l', 'from-blue-900', 'to-gray-900');
      break;
    case 'contact':
      document.body.classList.add('bg-gradient-to-r', 'from-blue-800', 'to-gray-900');
      break;
  }
});

// Menu toggle animation for mobile
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    menu.classList.remove('hidden');
    setTimeout(() => {
      menu.classList.add('show');
    }, 10); // Delay kecil agar animasi bisa dimulai
  } else {
    menu.classList.remove('show');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 300); // Sembunyikan setelah animasi selesai
  }
});

const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    const zoomModal = document.getElementById('zoom-modal');
    const zoomedImage = document.getElementById('zoomed-image');

    // Filter functionality
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Highlight selected button
        filterButtons.forEach(btn => btn.classList.remove('text-blue-500'));
        button.classList.add('text-blue-500');

        cards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (category !== 'all' && cardCategory !== category) {
            // Animate out
            card.classList.remove('opacity-100', 'scale-100');
            card.classList.add('opacity-0', 'scale-90');
            setTimeout(() => {
              card.style.display = 'none';
            }, 500);
          } else {
            // Animate in
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.remove('opacity-0', 'scale-90');
              card.classList.add('opacity-100', 'scale-100');
            }, 10);
          }
        });
      });
    });

    // Zoom functionality
    document.querySelectorAll('.project-card img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        zoomedImage.src = img.src;
        zoomModal.classList.add('active');
      });
    });

    // Close zoom modal when clicking outside the image
    zoomModal.addEventListener('click', e => {
      if (e.target === zoomModal || e.target === zoomedImage) {
        zoomModal.classList.remove('active');
        zoomedImage.src = '';
      }
    });

     document.getElementById('contactForm').addEventListener('submit', function () {
            const submitButton = document.getElementById('submitButton');
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...'; // Anda perlu menambahkan CSS untuk spinner ini
            submitButton.disabled = true;
            submitButton.classList.add('opacity-75', 'cursor-not-allowed');
          });
