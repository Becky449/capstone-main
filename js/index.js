// import speakers from 'speakersData.js';

const nav = document.getElementById('hamburger');
const popup = document.getElementById('popup');
nav.addEventListener('click', () => {
  nav.classList.toggle('open');
  popup.classList.toggle('hide-popup');
  popup.style.left = 0;
});

const speakers = [
  {
    id: '1',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_01.png',
  },
  {
    id: '2',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_02.png',
  },
  {
    id: '3',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_03.png',
  },
  {
    id: '4',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_04.png',
  },
  {
    id: '5',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_05.png',
  },
  {
    id: '6',
    name: 'Rabecca Nabwire',
    role: 'Co-Founder and Lead software Engineer at Afritech R&D center',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'images/speaker_06.png',
  },
];

const data = speakers;
const speakersCards = document.getElementById('speakers-cards');

const speakerArray = data.splice(0, 2);
speakerArray.forEach((speaker) => {
  const card = `<div class="speakers-card">
            <div class="speakers-card-img">
              <img src="${speaker.image}" alt="speaker-1" />
            </div>
            <div class="speakers-card-info">
              <h3>${speaker.name}</h3>
              <p class="speaker-role">${speaker.role}</p> 
              <hr>
              <p class="speaker-description">${speaker.description} </p>
            </div>
          </div>`;

  speakersCards.innerHTML += card;
});

function matches(x) {
  if (x.matches) {
    const moreBtn = `
    <button class="more-btn" id="more-btn">More
      <i class="fas fa-chevron-down"></i>
    </button>
  
`;
    speakersCards.innerHTML += moreBtn;
    const moreBtnEl = document.getElementById('more-btn');
    moreBtnEl.addEventListener('click', () => {
      moreBtnEl.style.display = 'none';
      speakersCards.innerHTML = '';
      speakerArray.push(...data.splice(0, data.length));
      speakerArray.forEach((speaker) => {
        const card = `<div class="speakers-card">
            <div class="speakers-card-img">
              <img src="${speaker.image}" alt="speaker-1" />
            </div>
            <div class="speakers-card-info">
              <h3>${speaker.name}</h3>
              <p class="speaker-role">${speaker.role}</p> 
              <hr>
              <p class="speaker-description">${speaker.description} </p>
            </div>
          </div>`;

        speakersCards.innerHTML += card;
      });
    });
  } else {
    data.forEach((speaker) => {
      const card = `<div class="speakers-card">
            <div class="speakers-card-img">
              <img src="${speaker.image}" alt="speaker-${speaker.id}" />
            </div>
            <div class="speakers-card-info">
              <h3>${speaker.name}</h3>
              <p class="speaker-role">${speaker.role}</p> 
              <hr>
              <p class="speaker-description">${speaker.description} </p>
            </div>
          </div>`;

      speakersCards.innerHTML += card;
    });
  }
}
const x = window.matchMedia('(max-width: 768px)');
matches(x);
x.addListener(matches);