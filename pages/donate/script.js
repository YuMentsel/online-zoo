const nav = document.querySelector('.nav'),
  navLink = document.querySelectorAll('.nav__link'),
  burger = document.querySelector('.burger'),
  overlay = document.querySelector('.overlay'),
  once = document.querySelector('.once'),
  monthly = document.querySelector('.monthly'),
  checked = document.querySelector('.checked');

// Бургер и меню

burger.addEventListener('click', (e) => {
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
  nav.classList.toggle('small');
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    nav.classList.toggle('small');
  });
});

document.addEventListener('click', (e) => {
  const target = e.target,
    its_nav = target == nav || nav.contains(target),
    its_burger = target == burger || burger.contains(target),
    nav_is_active = nav.classList.contains('small'),
    burger_is_active = burger.classList.contains('active');

  if (!its_nav && !its_burger && nav_is_active && burger_is_active) {
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    nav.classList.toggle('small');
  }
});

// Amount ///////////////////////////////////////////

const input = document.querySelector('.input__number');
const amounts = document.querySelectorAll('.amount__area');
const drop = document.querySelectorAll('.amount__drop');
const price = document.querySelectorAll('.price__item');

const priceText = [];

price.forEach((item) => {
  priceText.push(item.innerHTML.slice(7, item.innerHTML.length - 7));
});

function removeAmount() {
  amounts.forEach((item) => {
    item.classList.remove('active');
  });
  price.forEach((item) => {
    item.classList.remove('active');
  });
}

function changeAmount(index) {
  removeAmount();
  amounts[index].classList.add('active');
  price[index].classList.add('active');
  input.value = priceText[index];
}

amounts.forEach((el, index) => {
  el.addEventListener('click', () => {
    changeAmount(index);
  });
});

input.addEventListener('input', () => {
  input.value = input.value.slice(0, 4);
  priceText.forEach((el, index) => {
    if (input.value == el) {
      changeAmount(index);
    }
  });
  if (!priceText.includes(input.value)) {
    removeAmount();
  }
});

// Radio ///////////////////////////////////////////

monthly.addEventListener('click', () => {
  once.classList.remove('checked');
  monthly.classList.add('checked');
});

once.addEventListener('click', () => {
  monthly.classList.remove('checked');
  once.classList.add('checked');
});
