/* script.js */
document.addEventListener('DOMContentLoaded', () => {

  // Topics data for EN and HI
  const topicsData = [
    {
      num: "01",
      enTitle: "5G & Beyond Architecture",
      hiTitle: "5G और उससे आगे का आर्किटेक्चर",
      enDesc: "Core network slicing, massive MIMO, beamforming principles, and ultra-reliable low-latency communications (URLLC).",
      hiDesc: "कोर नेटवर्क स्लाइसिंग, मैसिव MIMO, बीमफॉर्मिंग सिद्धांत, और अल्ट्रा-रिलायबल लो-लेटेंसी कम्युनिकेशंस (URLLC)।"
    },
    {
      num: "02",
      enTitle: "IoT Hardware & Sensors",
      hiTitle: "IoT हार्डवेयर और सेंसर",
      enDesc: "Hands-on integration with Raspberry Pi, Arduino, actuators, and wireless sensor node communication protocols.",
      hiDesc: "Raspberry Pi, Arduino, एक्चुएटर और वायरलेस सेंसर नोड संचार प्रोटोकॉल के साथ व्यावहारिक एकीकरण।"
    },
    {
      num: "03",
      enTitle: "Machine Learning for Edge",
      hiTitle: "एज के लिए मशीन लर्निंग",
      enDesc: "Deploying lightweight ML algorithms on resource-constrained IoT edge devices for anomaly detection.",
      hiDesc: "विसंगति का पता लगाने के लिए संसाधन-बाधित IoT एज उपकरणों पर हल्के ML एल्गोरिदम तैनात करना।"
    },
    {
      num: "04",
      enTitle: "Network Data Analytics",
      hiTitle: "नेटवर्क डेटा एनालिटिक्स",
      enDesc: "Applying data science principles to monitor traffic, predict bandwidth bottlenecks, and optimize routing.",
      hiDesc: "ट्रैफिक की निगरानी करने, बैंडविड्थ बाधाओं की भविष्यवाणी करने और रूटिंग को अनुकूलित करने के लिए डेटा विज्ञान सिद्धांतों को लागू करना।"
    },
    {
      num: "05",
      enTitle: "Security & Privacy in IoT",
      hiTitle: "IoT में सुरक्षा और गोपनीयता",
      enDesc: "Cryptographic techniques, secure boot, firmware updates, and lightweight encryption for connected devices.",
      hiDesc: "क्रिप्टोग्राफिक तकनीक, सुरक्षित बूट, फर्मवेयर अपडेट और जुड़े हुए उपकरणों के लिए हल्का एन्क्रिप्शन।"
    },
    {
      num: "06",
      enTitle: "Open-Source Simulation Tools",
      hiTitle: "ओपन-सोर्स सिमुलेशन टूल्स",
      enDesc: "Practical exploration of Network Simulator (ns-3), Python libraries, and open frameworks for validation.",
      hiDesc: "मान्यताओं के लिए नेटवर्क सिम्युलेटर (ns-3), पाइथन लाइब्रेरी और ओपन फ्रेमवर्क की व्यावहारिक खोज।"
    }
  ];

  const topicsGrid = document.getElementById('topicsGrid');
  const langToggle = document.getElementById('langToggle');
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  // Render Topics
  function renderTopics(lang) {
    if (!topicsGrid) return;

    topicsGrid.innerHTML = topicsData.map(t => `
      <div class="topic-card">
        <span class="topic-num">${t.num}</span>
        <h3 class="topic-title">
          ${lang === 'hi' ? t.hiTitle : t.enTitle}
        </h3>
        <p class="topic-desc">
          ${lang === 'hi' ? t.hiDesc : t.enDesc}
        </p>
      </div>
    `).join('');
  }

  // Language Switcher Logic (Forced default to Hindi on first load)
  let currentLang = localStorage.getItem('seminar_lang') || 'hi';

  setLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'hi' : 'en';
      setLanguage(currentLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;

    localStorage.setItem('seminar_lang', lang);

    document.documentElement.setAttribute('data-lang', lang);

    // Update elements with data-en and data-hi
    document.querySelectorAll('[data-en]').forEach(el => {

      const enText = el.getAttribute('data-en');
      const hiText = el.getAttribute('data-hi');

      if (lang === 'hi' && hiText) {
        el.innerHTML = hiText;
      } else if (enText) {
        el.innerHTML = enText;
      }

    });

    renderTopics(lang);
  }

  // Mobile Menu Toggle
  if (hamburger && mainNav) {

    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });

    });
  }

  // Countdown Timer to Oct 15, 2026 09:00:00
  const seminarDate =
    new Date('2026-10-15T09:00:00').getTime();

  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins = document.getElementById('cdMins');
  const cdSecs = document.getElementById('cdSecs');

  function updateCountdown() {

    const now = new Date().getTime();
    const diff = seminarDate - now;

    if (diff <= 0) {

      if (cdDays) cdDays.textContent = '00';
      if (cdHours) cdHours.textContent = '00';
      if (cdMins) cdMins.textContent = '00';
      if (cdSecs) cdSecs.textContent = '00';

      return;
    }

    const days =
      Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
      Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

    const mins =
      Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
      );

    const secs =
      Math.floor(
        (diff % (1000 * 60)) /
        1000
      );

    if (cdDays) {
      cdDays.textContent =
        String(days).padStart(2, '0');
    }

    if (cdHours) {
      cdHours.textContent =
        String(hours).padStart(2, '0');
    }

    if (cdMins) {
      cdMins.textContent =
        String(mins).padStart(2, '0');
    }

    if (cdSecs) {
      cdSecs.textContent =
        String(secs).padStart(2, '0');
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Scroll Progress Bar
  window.addEventListener('scroll', () => {

    const winScroll =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled =
      (winScroll / height) * 100;

    const progressFill =
      document.getElementById('progressFill');

    if (progressFill) {
      progressFill.style.width =
        scrolled + '%';
    }

  });

  // Background Interactive Node Canvas Animation
  const canvas = document.getElementById('netCanvas');

  if (canvas) {

    const ctx = canvas.getContext('2d');

    let width =
      canvas.width = window.innerWidth;

    let height =
      canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {

      width =
        canvas.width = window.innerWidth;

      height =
        canvas.height = window.innerHeight;

    });

    const particles =
      Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      }));

    let mouse = {
      x: null,
      y: null
    };

    window.addEventListener('mousemove', e => {

      mouse.x = e.clientX;
      mouse.y = e.clientY;

    });

    window.addEventListener('mouseout', () => {

      mouse.x = null;
      mouse.y = null;

    });

    function animate() {

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      particles.forEach((p, index) => {

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) {
          p.vx *= -1;
        }

        if (p.y < 0 || p.y > height) {
          p.vy *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          'rgba(59, 130, 246, 0.5)';

        ctx.fill();

        for (
          let j = index + 1;
          j < particles.length;
          j++
        ) {

          const p2 = particles[j];

          const dist =
            Math.hypot(
              p.x - p2.x,
              p.y - p2.y
            );

          if (dist < 130) {

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              p2.x,
              p2.y
            );

            ctx.strokeStyle =
              `rgba(59, 130, 246, ${
                0.15 * (1 - dist / 130)
              })`;

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }

        if (
          mouse.x !== null &&
          mouse.y !== null
        ) {

          const mDist =
            Math.hypot(
              p.x - mouse.x,
              p.y - mouse.y
            );

          if (mDist < 150) {

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              mouse.x,
              mouse.y
            );

            ctx.strokeStyle =
              `rgba(96, 165, 250, ${
                0.3 * (1 - mDist / 150)
              })`;

            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }

      });

      requestAnimationFrame(animate);
    }

    animate();
  }

});