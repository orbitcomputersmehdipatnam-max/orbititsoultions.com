const { JSDOM } = require("jsdom");
const fs = require("fs");

const indexHTML = fs.readFileSync('index.html', 'utf8');
const coursesJS = fs.readFileSync('data/courses.js', 'utf8');
const mainJS = fs.readFileSync('js/main.js', 'utf8');

const dom = new JSDOM(indexHTML, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

try {
  window.eval(coursesJS);
  window.eval(mainJS);
  window.eval(`
    renderCourseCards('tech', 'techGrid');
    renderCourseCards('business', 'businessGrid');
    renderCourseCards('creative', 'creativeGrid');
    renderTrainers();
    renderReviews();
    renderFAQs();
  `);
  
  const btn = document.querySelector('.faq-q');
  console.log("Before click:", document.querySelector('.faq-item').className);
  btn.click();
  console.log("After 1st click:", document.querySelector('.faq-item').className);
} catch (e) {
  console.error("ERROR:", e);
}
