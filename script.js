const titleEl = document.getElementById('title');
const activityEl = document.getElementById('activity');
const triggerEl = document.getElementById('trigger');

triggerEl.addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
   .then(data => {
     console.log(data);
     titleEl.textContent = 'you gotta';
     activityEl.textContent = data.activity;
   });
});
