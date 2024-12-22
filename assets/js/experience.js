AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/Meta.png",
    place: "Meta Platforms Inc.",
    time: "(May, 2020 - May 2021)",
    desp: "<li>Worked on various projects and fullfilled different tasks using React and other Front-end Languages</li><li>implemented many practices and trained on cooperating with colleagues</li> <li>Worked with Meta engineers and benifited from their daily life experiences and skills</li>",
  },
  {
    title: "Wordpress Developer",
    cardImage: "assets/images/experience-page/GT.jpg",
    place: "Greatness Team",
    time: "(Jan, 2024 - Present)",
    desp: "<li>Developed the whole site from A to Z.</li><li>Designed the full interface and cooperated with the administrative team to ensure satisfaction.</li><li>Tested and Integrated Woo-Plugins to allow online Education and inegration.</li>",
  },
  {
    title: " Level 3 IT Specialist | Sys Admin | Wordpress Developer",
    cardImage: "assets/images/experience-page/Innobev.jpg",
    place: "Innovation Beverage CoPacking and Labeling",
    time: "(June, 2023 - June, 2024)",
    desp: "<li>Company's Web Editor</li><li>IT Infrastructure Manager and System Administrator</li><li>Full time IT Support</li>",
  },
  {
    title: "Owner | Hardware & Software Technician | Sales ",
    cardImage: "assets/images/experience-page/masstech.jpg",
    place: "Masstech",
    time: "(jan, 2021 - Present)",
    desp: "<li>Ceo Of a Small business Which i ran and i still run</li><li>Cooperating with wholesale retailers</li><li>Hardware and software maintenance of laptops and PCs",
  },
  {
    title: "Senior Whish Money Agent | Cashier ",
    cardImage: "assets/images/experience-page/whish.png",
    place: "Whish Money Hamra Branch",
    time: "(Nov, 2024 - Dec, 2024)",
    desp: "<li>Fullfilled 10000+ transaction for customers and firms</li><li>Cooperated with salespersons and other branches </li><li>Worked with microsoft append to record accounting operations",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
