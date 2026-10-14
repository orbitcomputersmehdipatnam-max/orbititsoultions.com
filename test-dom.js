const { JSDOM } = require("jsdom");
const fs = require("fs");

const FAQS_DATA = [
  { q: 'What is the batch size?', a: 'To ensure personalized attention...' }
];

const html = `
<div id="faqList"></div>
`;

const dom = new JSDOM(html);
const document = dom.window.document;
const container = document.getElementById('faqList');

container.innerHTML = FAQS_DATA.map((f, i) => `
  <div class="faq-item">
    <button class="faq-q">${f.q}<span class="faq-icon">+</span></button>
    <div class="faq-ans"><p>${f.a}</p></div>
  </div>
`).join('');

container.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    container.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const btn = document.querySelector('.faq-q');
console.log("Before click:", document.querySelector('.faq-item').className);
btn.click();
console.log("After 1st click:", document.querySelector('.faq-item').className);
btn.click();
console.log("After 2nd click:", document.querySelector('.faq-item').className);

