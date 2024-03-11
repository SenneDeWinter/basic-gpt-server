const form = document.querySelector('.form');
const submit = document.querySelector('.btn--submit');
const output = document.querySelector('.output');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const prompt = formData.get('prompt');
  const system = formData.get('system');

  console.log('system', system);
  console.log('prompt', prompt);

  if (!prompt) { return; }
});