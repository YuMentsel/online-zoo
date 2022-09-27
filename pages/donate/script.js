const once = document.querySelector('.once');
const monthly = document.querySelector('.monthly'),
checked = document.querySelector('.checked');

monthly.addEventListener('click', (e) => {
  once.classList.remove('checked');
  monthly.classList.add('checked');
});

once.addEventListener('click', (e) => {
  monthly.classList.remove('checked');
  once.classList.add('checked');
});