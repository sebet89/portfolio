function loadLanguage(lang) {
  fetch(`./lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      const elements = document.querySelectorAll('[data-lang-key]');

      elements.forEach(element => {
        const langKey = element.getAttribute('data-lang-key');
        element.textContent = data[langKey];
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('language-selector');

  languageSelector.addEventListener('change', event => {
    loadLanguage(event.target.value);
  });

  loadLanguage('pt');
});
