// File: script.js
function setLanguage(lang) {
    document.getElementById('en-btn').classList.remove('active-lang');
    document.getElementById('hi-btn').classList.remove('active-lang');
    document.getElementById(lang + '-btn').classList.add('active-lang');

    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (el.hasAttribute('data-' + lang)) {
            el.innerText = el.getAttribute('data-' + lang);
        }
    });

    const lists = document.querySelectorAll('[data-en-list]');
    lists.forEach(ul => {
        const listData = JSON.parse(ul.getAttribute('data-' + lang + '-list'));
        ul.innerHTML = '';
        listData.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
        });
    });

    document.documentElement.lang = lang;
}

const modal = document.getElementById("regModal");
const btn = document.getElementById("register-btn");
const span = document.getElementsByClassName("close")[0];

if (btn) {
    btn.onclick = function() {
        modal.style.display = "flex";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}