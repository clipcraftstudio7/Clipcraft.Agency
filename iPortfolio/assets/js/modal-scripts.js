function openModal(mediaElement) {
  const modal = document.getElementById("previewModal");
  const modalMedia = document.getElementById("modalMedia");
  modal.classList.remove("hidden");

  const clone = mediaElement.cloneNode(true);
  clone.controls = true;
  clone.autoplay = true;
  clone.loop = true;

  modalMedia.innerHTML = "";
  modalMedia.appendChild(clone);
}

function closeModal() {
  const modal = document.getElementById("previewModal");
  modal.classList.add("hidden");
  document.getElementById("modalMedia").innerHTML = "";
}

// Attach click events to all video/image/iframe elements
document.querySelectorAll("video, img, iframe").forEach((media) => {
  media.style.cursor = "pointer";
  media.addEventListener("click", () => openModal(media));
});

AOS.init();

function showCategory(name) {
  document
    .querySelectorAll(".category")
    .forEach((cat) => cat.classList.add("hidden"));
  document.querySelector(`.${name}`).classList.remove("hidden");

  document
    .querySelectorAll(".tabs button")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelectorAll(".tabs button").forEach((btn) => {
    if (btn.textContent.toLowerCase() === name) {
      btn.classList.add("active");
    }
  });
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  // Save user preference
  localStorage.setItem("theme", newTheme);
});

// On page load, apply saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
});
<script>
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
</script>
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    const name = form.elements['name'].value.trim();
    const email = form.elements['_replyto'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    const name = form.elements['name'].value.trim();
    const email = form.elements['_replyto'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  const name = this.elements['name'].value.trim();
  const email = this.elements['_replyto'].value.trim();
  const message = this.elements['message'].value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all fields before submitting.');
    return;
  }

  // Show alert after short delay to simulate response
  setTimeout(() => {
    alert('✅ Message sent successfully!');
  }, 1000);
});
<script>
  const elements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
</script>
