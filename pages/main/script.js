const nav = document.querySelector('.nav'),
  navLink = document.querySelectorAll('.nav__link'),
  burger = document.querySelector('.burger'),
  menuOverlay = document.querySelector('.menu-overlay'),
  popupOverlay = document.querySelector('.popup-overlay');

// Бургер и меню ////////////////////////////////////////////////////


console.log('Привет! :) Не забывайте про перезагрузку страницы при смене ширины экрана.');
console.log('Буду очень благодарна, если оставите свои контакты или свяжетесь со мной при возникновении вопросов ;).');
console.log('Требования к заданию: https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo#%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F-3');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  nav.classList.toggle('small');
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
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
    menuOverlay.classList.toggle('active');
    nav.classList.toggle('small');
  }
});

// Pets ///////////////////////////////////////////////////////////////////////

const petsData = [
  {
    id: '0',
    petClass: 'pandas',
    img: '../../../assets/images/animals/pandas.jpg',
    title: 'Giant Pandas',
    subtitle: 'Native to Southwest China',
    text: 'The panda, with its distinctive black and white coat, is adored by the world and considered a national treasure in China.\n Pandas live mainly in temperate forests high in the mountains of southwest China, where they subsist almost entirely on bamboo. They must eat around 26 to 84 pounds of it every day, depending on what part of the bamboo they are eating. They use their enlarged wrist bones that function as opposable thumbs.',
    icon: '../../assets//icons/banana-bamboo_icon.svg',
  },
  {
    id: '1',
    petClass: 'eagles',
    img: '../../../assets/images/animals/eagles.jpg',
    title: 'Eagles',
    subtitle: 'Native to South America',
    text: 'Half a century ago, the bald eagle was in danger of extinction. Habitat loss, illegal shooting and food source contamination (largely via the pesticide DDT) decimated the bald eagle population.\n Many people think bald eagles are fish specialists, and they are great at catching fish. But eagles are actually generalists, which means they will eat pretty much anything that they can get their talons on.',
    icon: '../../assets//icons/meet-fish_icon.svg',
  },
  {
    id: '2',
    petClass: 'gorillas',
    img: '../../../assets/images/animals/gorillas.jpg',
    title: 'Gorillas',
    subtitle: 'Native to Congo',
    text: 'The gorilla is the largest of all primates.\n Gorillas have a distinctive shape in that their stomachs are larger than their chests. Their stomach size is attributed to their enlarged intestines, which digest the bulky fibrous vegetation they consume.\n Gorillas have larger muscles in their arms than in their legs. This is primarily due to the fact that they use their increased arm strength for bending and gathering foliage and for defense.',
    icon: '../../assets//icons/banana-bamboo_icon.svg',
  },
  {
    id: '3',
    petClass: 'two-toed-sloth',
    img: '../../../assets/images/animals/two-toed-sloth.jpg',
    title: 'Two-toed sloth',
    subtitle: 'Mesoamerica, South America',
    text: 'Sloths have long had a reputation for being lazy. The reason they move so slowly has a lot to do with what they eat: a variety of leaves, stems, buds, and some fruit. This kind of diet requires a special digestive system. Sloths have a large, four-chambered stomach, like a cow. Bacteria in their gut help digest the large amount of plant matter they eat. Due to the low nutritional value of their leafy diet, sloths usually move at a leisurely pace and sleep a great deal.',
    icon: '../../assets//icons/banana-bamboo_icon.svg',
  },
  {
    id: '4',
    petClass: 'cheetahs',
    img: '../../../assets/images/animals/cheetahs.jpg',
    title: 'Cheetahs',
    subtitle: 'Native to Africa',
    text: 'Cheetahs are visual hunters. Unlike other big cats cheetahs are diurnal, meaning they hunt in early morning and late afternoon. The prey species on which the cheetah depends have evolved speed and avoidance techniques that can keep them just out of reach. Cheetahs prey includes: gazelles, impalas and other small to medium-sized antelopes, hares, and rodents. Cheetahs will also prey on the calves of larger herd animals.',
    icon: '../../assets//icons/meet-fish_icon.svg',
  },
  {
    id: '5',
    petClass: 'penguins',
    img: '../../../assets/images/animals/penguins.jpg',
    title: 'Penguins',
    subtitle: 'Native to Antarctica',
    text: 'Penguins are the most common birds in the Antarctic.\n The penguin diet consists mainly of fish and squid and crustaceans. In the Antarctic, the smaller penguins mostly feed on shrimp-like krill. Although krill are small (up to 5cm in length) they form dense swarms which are a rich food source. Penguins can adapt their diet to what is available, and their diet varies considerably with season.',
    icon: '../../assets//icons/meet-fish_icon.svg',
  },
  {
    id: '6',
    petClass: 'alligators',
    img: '../../../assets/images/animals/alligators.jpg',
    title: 'Alligators',
    subtitle: 'Native to Southeastern U. S.',
    text: 'Alligators are carnivorous. They have very strong jaws that can crack a turtle shell. They eat fish, snails and other invertebrates, birds, frogs and mammals that come to the water&#8217;s edge. They use their sharp teeth to seize and hold prey. They swallow small prey whole. If the prey is large, they shake it apart into smaller, manageable pieces',
    icon: '../../assets//icons/meet-fish_icon.svg',
  },
  {
    id: '7',
    petClass: 'gorillas2',
    img: '../../../assets/images/animals/gorillas2.jpg',
    title: 'Gorillas',
    subtitle: 'Native to Congo',
    text: 'The gorilla is the largest of all primates.\n Gorillas have a distinctive shape in that their stomachs are larger than their chests. Their stomach size is attributed to their enlarged intestines, which digest the bulky fibrous vegetation they consume.\n Gorillas have larger muscles in their arms than in their legs. This is primarily due to the fact that they use their increased arm strength for bending and gathering foliage and for defense.',
    icon: '../../assets//icons/banana-bamboo_icon.svg',
  },
];

// Рандом

function shufflePets(pets) {
  for (let i = pets.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pets[i], pets[j]] = [pets[j], pets[i]];
  }
  return pets;
}

let randomPets = shufflePets(petsData);
let slide;

const petsCarousel = document.querySelector('.pets__carousel');
let cardsCount = 5;
let counter = 0;
let isEnabled = true;
function createPetsCards() {
  const petsSlide = document.querySelector(`.slide${counter}`);
  if (window.innerWidth < 821) {
    cardsCount = 3;
  }

  for (let i = 0; i <= cardsCount; i++) {
    const petCardHTML = `<div class="pet">
        <div class="pet__img pet__${randomPets[i].petClass}"></div>
          <div class="pet__info">
            <div class="pet__descr">
                <div class="pet__title">${randomPets[i].title}</div>
                <div class="pet__subtitle">${randomPets[i].subtitle}</div>
                <div class="pet__text">${randomPets[i].text}</div>
          </div>
          <img class="pet__icon" src="${randomPets[i].icon}" alt="diet">
      </div>`;
    petsSlide.insertAdjacentHTML('beforeend', petCardHTML);
  }
}

function createPetsSlide() {
  let petsSlide = `<div class="pets__slide slide${counter}"></div>`;
  petsCarousel.insertAdjacentHTML('beforeend', petsSlide);
  createPetsCards();
}

function createAllPetsSlides() {
  for (let i = 0; i < 3; i++) {
    counter++;
    shufflePets(petsData);
    createPetsSlide();
  }
  slide = document.querySelectorAll('.pets__slide');
  slide[2].classList.remove('active');
  slide[1].classList.add('active');
}

createAllPetsSlides();

// Удаление ////////////////////////////////////////

function removeSlides() {
  const petsSlide = document.querySelectorAll('.pets__slide');
  petsSlide.forEach((el) => {
    if (!el.classList.contains('active')) {
      el.remove();
    }
  });
}

function addSlides() {
  counter++;
  shufflePets(petsData);
  let petsSlide = `<div class="pets__slide slide${counter}"></div>`;
  petsCarousel.insertAdjacentHTML('afterbegin', petsSlide);
  createPetsCards();
  counter++;
  shufflePets(petsData);
  petsSlide = `<div class="pets__slide slide${counter}"></div>`;
  petsCarousel.insertAdjacentHTML('beforeend', petsSlide);
  createPetsCards();
  slide = document.querySelectorAll('.pets__slide');
}
// Карусель ////////////////////////////////////////
slide = document.querySelectorAll('.pets__slide');

function hideSlide(direction) {
  isEnabled = false;
  slide[1].classList.add(direction);
  slide[1].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  });
}

function showSlide(direction) {
  slide[2].classList.add('next', direction);
  slide[2].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
  });
}

function nextSlide() {
  hideSlide('to-left');
  showSlide('from-right');
}

function prevSlide() {
  hideSlide('to-right');
  showSlide('from-left');
}

// Кнопки ////////////////////////////////////////

const prevDesktop = document.querySelector('#prev_desktop'),
  nextDesktop = document.querySelector('#next_desktop');

prevDesktop.addEventListener('click', function () {
  if (isEnabled) {
    prevSlide();
    setTimeout(() => {
      removeSlides();
    }, 1550);
    setTimeout(() => {
      addSlides();
    }, 1600);
    setTimeout(() => {
      isEnabled = true;
    }, 1650);
  }
});

nextDesktop.addEventListener('click', function () {
  if (isEnabled) {
    nextSlide();
    setTimeout(() => {
      removeSlides();
    }, 1550);
    setTimeout(() => {
      addSlides();
    }, 1600);
    setTimeout(() => {
      isEnabled = true;
    }, 1650);
  }
});

// Отзывы //////////////////////////////////////////////////////////

const testimonialsData = [
  {
    id: '0',
    name: 'Michael John',
    img: '../../assets/icons/user.svg',
    local: 'Austria',
    day: 'Today',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '1',
    name: 'Oskar Samborsky',
    img: '../../assets/images/avatar/oskar.png',
    local: 'Austria',
    day: 'Yesterday',
    text: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '2',
    name: 'Fredericka Michelin',
    img: '../../assets/images/avatar/fredericka.png',
    local: 'Austria',
    day: 'Yesterday',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.',
  },
  {
    id: '3',
    name: 'Mila Riksha',
    img: '../../assets/images/avatar/mila.png',
    local: 'Austria',
    day: 'Yesterday',
    text: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '4',
    name: 'Alexander Martinovich',
    img: '../../assets/images/avatar/4.jpg',
    local: 'Belarus',
    day: 'Today',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '5',
    name: 'Hanna Yemelyanava',
    img: '../../assets/images/avatar/5.jpg',
    local: 'Belarus',
    day: 'Today',
    text: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '6',
    name: 'Sergey Koksharov',
    img: '../../assets/images/avatar/6.jpg',
    local: 'Russia',
    day: 'Yesterday',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.',
  },
  {
    id: '7',
    name: 'Vladislav Serov',
    img: '../../assets/images/avatar/7.jpg',
    local: 'Russia',
    day: 'Yesterday',
    text: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '8',
    name: 'Aleksandra Mazur',
    img: '../../assets//images/avatar/8.jpg',
    local: 'Belarus',
    day: 'Today',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '9',
    name: 'Konstantin Smirnov',
    img: '../../assets/images/avatar/9.png',
    local: 'Russia',
    day: 'Yesterday',
    text: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
  {
    id: '10',
    name: 'Mariya Koroleva',
    img: '../../assets/images/avatar/10.jpg',
    local: 'Belarus',
    day: 'Today',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.',
  },
  {
    id: '11',
    name: 'Mila Guzeeva',
    img: '../../assets/icons/user.svg',
    local: 'Austria',
    day: 'Yesterday',
    text: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.\n The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for',
  },
];

const testimonialsWrapper = document.querySelector(`.testimonials__wrapper`);

let testimonialsCount = 11;

function testimonialCards() {
  if (window.innerWidth < 851) {
    testimonialsCount = 2;
  }
  for (let i = 0; i <= testimonialsCount; i++) {
    const testimonialCardHTML = `<div class="testimonial">
        <div class="testimonial__wrapper">
          <div class="testimonial__title">
            <img src="${testimonialsData[i].img}" alt="avatar" class="testimonial__img">
            <div class="testimonial__user">
              <div class="testimonial__name">${testimonialsData[i].name}</div>
              <div class="testimonial__local">Local ${testimonialsData[i].local} <span> • </span> ${testimonialsData[i].day}</div>
            </div>
          </div>
          <div class="testimonial__text">${testimonialsData[i].text}</div>
        </div>
      </div>`;
    testimonialsWrapper.insertAdjacentHTML('beforeend', testimonialCardHTML);
  }
}

testimonialCards();

const input = document.querySelector('.testimonials__input');

const rangeValue = function () {
  let newValue = input.value;
  let transform;
  if (window.innerWidth == 1000) {
    transform = `translateX(-${newValue * 322}px)`;
  } else if (window.innerWidth < 1000) {
    transform = `translateX(-${newValue * 277}px)`;
  } else {
    transform = `translateX(-${newValue * 297}px)`;
  }
  testimonialsWrapper.style.transform = transform;
};

input.addEventListener('input', rangeValue);

// PopUp //////////////////////////////////////////////

let testimonialsItem;
let cloneTestimonial;

const testimonialsAll = document.querySelectorAll('.testimonial');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

function createPopup(item) {
  cloneTestimonial = item.cloneNode(true);
  popup.prepend(cloneTestimonial);
}

function closePopup(e) {
  const its_testimonial = e.target == testimonialsItem,
    popupClose_is_active = popupClose.classList.contains('active');
  if (window.innerWidth < 851 && !its_testimonial && popupClose_is_active ) {
    cloneTestimonial.remove();
    popupOverlay.classList.toggle('active');
    popupClose.classList.toggle('active');
  }
}

testimonialsWrapper.addEventListener('click', (e) => {
  if (e.target.closest('.testimonial') && window.innerWidth < 851) {
    testimonialsItem = e.target.closest('.testimonial');
    createPopup(testimonialsItem);
    popupOverlay.classList.toggle('active');
    popupClose.classList.toggle('active');
  }
})

popupOverlay.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);