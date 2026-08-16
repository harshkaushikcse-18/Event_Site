/* ==========================================================================
   DATA
   ========================================================================== */
const TOPICS = [
  { en:"Introduction to 5G, IoT and Machine Learning", hi:"5G, IoT और मशीन लर्निंग का परिचय" },
  { en:"IoT and Mobile Applications", hi:"IoT और मोबाइल एप्लीकेशन" },
  { en:"WSN 802.15.4 Standard – Zigbee, WSN 802.15.1 Standard – Bluetooth", hi:"WSN 802.15.4 स्टैंडर्ड – Zigbee, WSN 802.15.1 स्टैंडर्ड – Bluetooth" },
  { en:"IoT Implementation using Simulator/Kit (Arduino)", hi:"सिम्युलेटर/किट (Arduino) का उपयोग करके IoT कार्यान्वयन" },
  { en:"Applications of IoT in Rural Development", hi:"ग्रामीण विकास में IoT के अनुप्रयोग" },
  { en:"Machine Learning Techniques for Big Data Analytics", hi:"बिग डेटा एनालिटिक्स के लिए मशीन लर्निंग तकनीकें" },
  { en:"Hands-on and Demo on Healthcare Sensors using IoT and ML", hi:"IoT और मशीन लर्निंग का उपयोग करके स्वास्थ्य सेवा सेंसर पर हैंड्स-ऑन और डेमो" },
  { en:"Big Data Analytics on Cloud", hi:"क्लाउड पर बिग डेटा एनालिटिक्स" },
  { en:"6G and Beyond", hi:"6G और उससे आगे" }
];

const SCHEDULE = {
  1: [
    { time:"09:00 – 10:30", en:"Introduction to 5G, IoT and Machine Learning", hi:"5G, IoT और मशीन लर्निंग का परिचय", speakerEn:"Dr. Rakesh Kumar — CUH, Mahendergarh", speakerHi:"डॉ. राकेश कुमार — CUH, महेंद्रगढ़" },
    { time:"10:30 – 10:45", en:"Tea Break", hi:"चाय विराम", brk:true },
    { time:"10:45 – 12:15", en:"Applications of IoT for Social Good: Some Case Studies", hi:"सामाजिक भलाई के लिए IoT के अनुप्रयोग: कुछ केस स्टडीज", speakerEn:"Prof. Sarbani Roy — Jadavpur University", speakerHi:"प्रो. सरबनी रॉय — जादवपुर विश्वविद्यालय" },
    { time:"12:15 – 13:45", en:"Wireless Network Planning and Testing", hi:"वायरलेस नेटवर्क योजना और परीक्षण", speakerEn:"Mr. Kapil Bhutani — Director, Telcocrats, Mohali", speakerHi:"श्री कपिल भूटानी — निदेशक, Telcocrats, मोहाली" },
    { time:"13:45 – 14:15", en:"Lunch Break", hi:"भोजन विराम", brk:true },
    { time:"14:15 – 15:45", en:"Machine Learning Techniques for Big Data Analytics", hi:"बिग डेटा एनालिटिक्स के लिए मशीन लर्निंग तकनीकें", speakerEn:"Dr. Sunirmal Khatua — University of Calcutta", speakerHi:"डॉ. सुनिर्मल खतुआ — कलकत्ता विश्वविद्यालय" },
    { time:"15:45 – 16:00", en:"Tea Break", hi:"चाय विराम", brk:true },
    { time:"16:00 – 17:30", en:"Ensemble Machine Learning for High Performance Prediction", hi:"उच्च प्रदर्शन भविष्यवाणी के लिए एन्सेम्बल मशीन लर्निंग", speakerEn:"Dr. Sujata Pal — IIT Ropar", speakerHi:"डॉ. सुजाता पाल — IIT रोपड़" }
  ],
  2: [
    { time:"09:00 – 10:30", en:"Security Risk Management in IoT", hi:"IoT में सुरक्षा जोखिम प्रबंधन", speakerEn:"Prof. Mayank Dave — NIT Kurukshetra", speakerHi:"प्रो. मयंक दवे — NIT कुरुक्षेत्र" },
    { time:"10:30 – 10:45", en:"Tea Break", hi:"चाय विराम", brk:true },
    { time:"10:45 – 12:15", en:"IoT Implementation using Open Source Tools", hi:"ओपन सोर्स टूल्स का उपयोग करके IoT कार्यान्वयन", speakerEn:"Dr. Gaurav Kumar — Director, Magma Research and Consultancy", speakerHi:"डॉ. गौरव कुमार — निदेशक, Magma Research and Consultancy" },
    { time:"12:15 – 13:45", en:"Innovation and Entrepreneurship", hi:"नवाचार और उद्यमिता", speakerEn:"Er. Meenu Dhiman — Asst. Director, MSME DFO Karnal, GoI", speakerHi:"इंजी. मीनू धीमान — सहायक निदेशक, MSME DFO करनाल, भारत सरकार" },
    { time:"13:45 – 14:15", en:"Lunch Break", hi:"भोजन विराम", brk:true },
    { time:"14:15 – 15:45", en:"Significance of Software Defined Networking in 5G", hi:"5G में सॉफ्टवेयर डिफाइंड नेटवर्किंग का महत्व", speakerEn:"Mr. Vipin Gupta — Director, U-Net Solutions", speakerHi:"श्री विपिन गुप्ता — निदेशक, U-Net Solutions" },
    { time:"15:45 – 16:00", en:"Tea Break", hi:"चाय विराम", brk:true },
    { time:"16:00 – 17:30", en:"IoT Using AWS 5G", hi:"AWS 5G का उपयोग करके IoT", speakerEn:"Mr. Vipin Gupta — Director, U-Net Solutions", speakerHi:"श्री विपिन गुप्ता — निदेशक, U-Net Solutions" }
  ]
};

/* ==========================================================================
   LANGUAGE
   ========================================================================== */
let currentLang = 'en';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-en]').forEach(el=>{
    const val = lang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    if (val !== null) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-opt').forEach(el=>{
    el.classList.toggle('active', el.getAttribute('data-val') === lang);
  });
  renderTopics();
  renderSchedule(activeDay);
  renderSpeakers();
}

document.getElementById('langToggle').addEventListener('click', ()=>{
  applyLang(currentLang === 'en' ? 'hi' : 'en');
});

/* ==========================================================================
   RENDER: TOPICS
   ========================================================================== */
function renderTopics(){
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = TOPICS.map((t,i)=>`
    <div class="topic-card">
      <span class="topic-num">${String(i+1).padStart(2,'0')}</span>
      <p>${currentLang==='hi' ? t.hi : t.en}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER: SCHEDULE
   ========================================================================== */
let activeDay = 1;

function renderSchedule(day){
  activeDay = day;
  const rail = document.getElementById('scheduleRail');
  const items = SCHEDULE[day];
  rail.innerHTML = items.map(it=>{
    const title = currentLang==='hi' ? it.hi : it.en;
    const speaker = it.brk ? '' : `<span>${currentLang==='hi' ? it.speakerHi : it.speakerEn}</span>`;
    return `
      <div class="sched-item ${it.brk ? 'is-break':''}">
        <div class="sched-card">
          <div class="sched-time">${it.time}</div>
          <div class="sched-body">
            <h4>${title}</h4>
            ${speaker}
          </div>
        </div>
      </div>`;
  }).join('');
}

document.querySelectorAll('.day-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.day-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    renderSchedule(Number(tab.dataset.day));
  });
});

/* ==========================================================================
   RENDER: SPEAKERS (derived from schedule, de-duplicated)
   ========================================================================== */
function renderSpeakers(){
  const grid = document.getElementById('speakersGrid');
  const all = [...SCHEDULE[1], ...SCHEDULE[2]].filter(i=>!i.brk);
  const seen = new Set();
  const unique = all.filter(i=>{
    if (seen.has(i.speakerEn)) return false;
    seen.add(i.speakerEn); return true;
  });
  grid.innerHTML = unique.map(sp=>{
    const nameLine = currentLang==='hi' ? sp.speakerHi : sp.speakerEn;
    const [name, org] = nameLine.split(/—|-/).map(s=>s && s.trim());
    const initials = (sp.speakerEn.match(/[A-Z]/g) || ['?']).slice(0,2).join('');
    const topic = currentLang==='hi' ? sp.hi : sp.en;
    return `
      <div class="speaker-card">
        <div class="speaker-avatar">${initials}</div>
        <div>
          <h4>${name || nameLine}</h4>
          <span>${org || ''}</span>
          <span class="speaker-topic">${topic}</span>
        </div>
      </div>`;
  }).join('');
}

/* ==========================================================================
   COUNTDOWN — to 15 Oct 2026, 09:00 IST
   ========================================================================== */
function tickCountdown(){
  const target = new Date('2026-10-15T09:00:00+05:30').getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const day = 1000*60*60*24;
  const days = Math.floor(diff/day); diff -= days*day;
  const hours = Math.floor(diff/(1000*60*60)); diff -= hours*1000*60*60;
  const mins = Math.floor(diff/(1000*60)); diff -= mins*1000*60;
  const secs = Math.floor(diff/1000);

  document.getElementById('cdDays').textContent = String(days).padStart(2,'0');
  document.getElementById('cdHours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cdMins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cdSecs').textContent = String(secs).padStart(2,'0');
}
setInterval(tickCountdown, 1000);
tickCountdown();

/* ==========================================================================
   NAV: mobile toggle, scroll-spy, header state, scroll progress
   ========================================================================== */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', ()=>{
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> mainNav.classList.remove('open'));
});

const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const sections = [...navLinks].map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll(){
  const scrollY = window.scrollY;
  const doc = document.documentElement;
  const total = doc.scrollHeight - doc.clientHeight;
  document.getElementById('progressFill').style.width = (total>0 ? (scrollY/total*100) : 0) + '%';

  let currentId = sections[0] && sections[0].id;
  for (const sec of sections){
    if (scrollY >= sec.offsetTop - 140) currentId = sec.id;
  }
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
  });
}
window.addEventListener('scroll', onScroll, { passive:true });

/* ==========================================================================
   HERO CANVAS — drifting node network (IoT/AI motif)
   ========================================================================== */
(function netBackground(){
  const canvas = document.getElementById('netCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    const hero = document.querySelector('.hero');
    w = canvas.width = window.innerWidth;
    h = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    canvas.style.height = h + 'px';
    const count = Math.min(70, Math.floor(w/22));
    nodes = Array.from({length:count}, ()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.18,
      vy: (Math.random()-0.5)*0.18
    }));
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    for (const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    for (let i=0;i<nodes.length;i++){
      for (let j=i+1;j<nodes.length;j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 130){
          ctx.strokeStyle = `rgba(30,138,133,${(1-dist/130)*0.16})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for (const n of nodes){
      ctx.fillStyle = 'rgba(15,27,51,0.28)';
      ctx.beginPath(); ctx.arc(n.x,n.y,1.6,0,Math.PI*2); ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ==========================================================================
   INIT
   ========================================================================== */
applyLang('en');
onScroll();
