document.addEventListener('DOMContentLoaded', function() { initLanguageSwitcher(); initSmoothScroll(); initFAQAccordion(); initLazyLoadImages(); initScrollAnimations(); });

function initLanguageSwitcher() {
 const langSwitchButtons = document.querySelectorAll('.lang-switch button');
 langSwitchButtons.forEach(button => {
 button.addEventListener('click', function() {
 const lang = this.dataset.lang;
 setLanguage(lang);
 });
 });
 const savedLang = localStorage.getItem('sunrise_lang') || 'zh';
 setLanguage(savedLang);
}

function setLanguage(lang) {
 document.body.classList.remove('lang-en', 'lang-zh', 'lang-bm');
 document.body.classList.add('lang-' + lang);
 document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang);
 localStorage.setItem('sunrise_lang', lang);
 document.querySelectorAll('.lang-switch button').forEach(btn => {
 btn.classList.toggle('active', btn.dataset.lang === lang);
 });
}

function initSmoothScroll() {
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
 const href = this.getAttribute('href');
 if (href.length > 1) {
 e.preventDefault();
 const target = document.querySelector(href);
 if (target) {
 const headerHeight = document.querySelector('.header').offsetHeight;
 const targetPosition = target.offsetTop - headerHeight;
 window.scrollTo({ top: targetPosition, behavior: 'smooth' });
 }
 }
 });
 });
}

function initFAQAccordion() {
 const faqItems = document.querySelectorAll('.faq-item');
 faqItems.forEach(item => {
 const question = item.querySelector('.faq-question');
 if (question) {
 question.addEventListener('click', function() {
 const answer = item.querySelector('.faq-answer');
 const isActive = answer.classList.contains('active');
 document.querySelectorAll('.faq-answer').forEach(ans => {
 ans.classList.remove('active');
 });
 if (!isActive) {
 answer.classList.add('active');
 }
 });
 }
 });
}

function initLazyLoadImages() {
 if ('IntersectionObserver' in window) {
 const imageObserver = new IntersectionObserver((entries, observer) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 const img = entry.target;
 if (img.dataset.src) {
 img.src = img.dataset.src;
 img.removeAttribute('data-src');
 }
 observer.unobserve(img);
 }
 });
 });
 document.querySelectorAll('img[data-src]').forEach(img => {
 imageObserver.observe(img);
 });
 } else {
 document.querySelectorAll('img[data-src]').forEach(img => {
 img.src = img.dataset.src;
 });
 }
}

function initScrollAnimations() {
 if ('IntersectionObserver' in window) {
 const elementObserver = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('fade-in');
 elementObserver.unobserve(entry.target);
 }
 });
 }, { threshold: 0.1 });
 document.querySelectorAll('section, .card, .step, .team-card').forEach(el => {
 elementObserver.observe(el);
 });
 }
}

window.SunriseEducation = { setLanguage: setLanguage, getLanguage: () => localStorage.getItem('sunrise_lang') || 'zh' };