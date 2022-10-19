import AboutCCImg from "../assets/images/AboutCC/AboutCCImages.svg";
import OurServiceImage from "../assets/images/ourServices/Image1.svg";
import team from "../assets/images/team/Group.svg";
import CBImg from '../assets/images/ShowProjects/cbFront.png';
import CBImg1 from '../assets/images/ShowProjects/CBmid.png';
import Font from '../assets/images/ShowProjects/FontPic.png';
import img1 from '../assets/images/ShowProjects/screencapture-cakesandbakes1.png';
import img2 from '../assets/images/ShowProjects/screencapture-cakesandbakes2.png'
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../assets/images/ourServices", false, /\.(png|jpe?g|svg)$/)
);
const LearnGoRetailry = importAll(
  require.context("../assets/images/learnGo", false, /\.(png|jpe?g|svg)$/)
);
const ourWork = importAll(
  require.context("../assets/images/OurWork", false, /\.(png|jpe?g|svg)$/)
);
const ourTech = importAll(
  require.context(
    "../assets/images/technologyStack/img",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
export const headerLinks = [
  {
    name: "About",
    path: "/#aboutSection",
  },
  {
    name: "Services",
    path: "/#OurServices",
  },
  {
    name: "Products",
    path: "/#learnGoRetailry",
  },
  {
    name: "Work",
    path: "/#ourWork",
  },
  {
    name: "Careers",
    path: "/#team",
  },
];

export const footerData = [
  {
    text: "Unlock the potential of the digital world. Let us help give your business a boost",
    button: "Contact Us",
    socialLinks: [
      {
        name: "behanceLogo",
        path: "https://www.behance.net/crunchcraft",
        color: "#3aa5a9",
        size: "25",
      },
      {
        name: "facebookLogo",
        path: "https://www.facebook.com/crunch.craft.33",
        color: "#3aa5a9",
        size: "25",
      },
      {
        name: "youtubeLogo",
        path: "https://www.youtube.com/channel/UCSCFaqp-dm0UbVpeOFARIKA",
        color: "#3aa5a9",
        size: "25",
      },
      {
        name: "instagramLogo",
        path: "https://www.instagram.com/crunch.craft/",
        color: "#3aa5a9",
        size: "25",
      },
      {
        name: "LinkedInLogo",
        path: "https://www.linkedin.com/company/crunch-craft/mycompany/",
        color: "#3aa5a9",
        size: "25",
      },
    ],
  },
];

export const DigitalProductData = {
  heading: "We craft digital products and services",
  content:
    "We work across different frameworks, platforms and tools to engineer superior quality solutions for the most complex web projects, whilst ensuring code quality and security. Our mobile developers carefully analyze user needs while applying creative thinking to produce apps adhered to offering a digitally refined user experience.",
};

export const AboutCrunchCraft = {
  heading: "About Crunch Craft",
  img: AboutCCImg,
  content: {
    content_1:
      "We are a digital design and engineering Company enthusiastic about creating a blend of technology and art to transform the real world through the virtual one. We’re a tightly knit, experienced team of researchers, designers and developers who enjoy crafting great solutions.",
    content_2:
      "We are a digital design and engineering Company enthusiastic about creating a blend of technology and art to transform the real world through the virtual one. We’re a tightly knit, experienced team of researchers, designers and developers who enjoy crafting great solutions.",
  },
};
export const ourServicesData = {
  title: "Our Services",
  heading: "Looking to expand your horizons? You’ve landed at the right place",
  content:
    "We offer expertise for end-to-end product design and development, with solutions tailor-made to fit a product’s specific requirements.",
  img: OurServiceImage,
};

export const services = [
  {
    title: "Branding",
    img: images["branding.svg"],
    content:
      "We provide creative solutions for electronic, print and social media campaigns. Our clientele includes some prominent names in business.",
  },
  {
    title: "UI/Ux Design",
    img: images["UX.svg"],
    content:
      "We are really enthusiastic about the user interface we create and focus greatly on crafting a truly hassle-free and enjoyable user experience.",
  },
  {
    title: "Web Development",
    img: images["webDev.svg"],
    content:
      "Our web developers adopt analytical thinking and solve complex problems to serve our customers deftly in a wide range of domains.",
  },
  {
    title: "App Development",
    img: images["AppDev.svg"],
    content:
      "Our mobile developers apply logical and creative thinking to produce apps adhered to fulfilling user needs and offering a digitally refined experience.",
  },
  {
    title: "Game Development",
    img: images["gameDev.svg"],
    content:
      "The games we develop are backed by strong codes written by our skilled programmers and ingenious graphics designed by our specialist graphic designers.",
  },
  {
    title: "Quality Assurance",
    img: images["QA.svg"],
    content:
      "Our quality assurance team ensures high-quality project implementation and helps deliver robust software on time.",
  },
  {
    title: "Digital Media Marketing",
    img: images["digitalMarketing.svg"],
    content:
      "We take care of all the digital marketing solutions for our clients, be it designs, content or social media strategy.",
  },
];
export const ourProductsData = [
  {
    id: "Learnigo",
    title: "Our Products",
    subtitle: "Learnigo",
    logo: LearnGoRetailry["learngo.svg"],
    img: LearnGoRetailry["Img1.svg"],
    heading: "Flagship ed-tech solution by us",
    content:
      "Learnigo empowers its partners by providing them with a wide range of online tools designed to assist their learners and enable them to broaden their horizons and disseminate knowledge well beyond their boundary walls.",
    button: "Go to Learnigo",
    path: "https://www.learnigo.org/",
  },
  {
    id: "Retailry",
    title: "Our Products",
    subtitle: "Retailry",
    logo: LearnGoRetailry["retailry.svg"],
    img: LearnGoRetailry["img2.svg"],
    heading: "Flagship e-commerce solution by us",
    content:
      "Retailry offers you a software in cloud that takes care of all your e-commerce needs anywhere, anytime, so you can take your business to the next level by focusing on the most important component, your own product.",
    button: "Go to Retailry",
    path: "https://retailry.com/",
  },
];

export const ourWorkData = {
  title: "Our Work",
  heading: "How we’ve contributed to the reshaping of the digital world",
  content:
    "We take pride in our strong capability for designing and engineering robust software and have helped some of the leading businesses in Pakistan modernize their business operations and optimize efficiency.",
  button: "View All Projects",
  path: "/projects",
  Details: [
    {
      id: "cakes&bakes",
      title: "CAKES AND BAKES",
      img: ourWork["cakes-bakes.png"],
      backgroundcolor: "bg-coloryellow",
      content:
        "Cakes & Bakes is an avant-garde bakery chain with more than 65 outlets offering a wide range of products. We have designed their web portal, which provides bakery clienteles with a new experience. Its functionalities include the facility to place online orders...",
      button: "Show Project",
      path: "/projects/cakes-and-bakes",
    },
    {
      id: "kipsEducation",
      title: "KIPS EDUCATION SYSTEM",
      img: ourWork["kips-college.png"],
      backgroundcolor: "bg-colorblue",
      content:
        "KIPS has a large network of educational institutes including schools, colleges, and preparatory institutes throughout the country. We have designed the websites for all of these keeping in view their business goals and the needs of their students.",
      button: "Show Project",
      path: "/projects/kips-Education",
    },
    {
      id: "iqtedar",
      title: "IQTEDAR CONSTRUCTION",
      img: ourWork["Iqtedar.png"],
      backgroundcolor: "bg-color-red",
      content:
        "Iqtedar Constructions is a renowned construction company with an experience of more than half a century in the planning, designing, and construction of various projects throughout Pakistan. We have constructed space for them in the virtual world, thus empowering them to expand...",
      button: "Show Project",
      path: "/projects/iqtedar-construction",
    },
    {
      id: "waseela",
      title: "WASEELA FOUNDATION",
      img: ourWork["waseela.png"],
      backgroundcolor: "bg-colorGrey",
      content:
        "Waseela Foundation is a social welfare organization working for the interests of the socio-economically deprived and underserved segments of society. We have done our bit for this cause by designing their website, thereby facilitating donations and helping them reach out to those...",
      button: "Show Project",
      path: "/projects/waseela-foundation",
    },
    {
      id: "lms",
      title: "KIPS LMS",
      img: ourWork["kips-lms.png"],
      backgroundcolor: "bg-colorGreen",
      content:
        "We have designed and built a comprehensive online learning solution for the students of KIPS, one of the largest chains of educational institutes in Pakistan. Its main features include video lectures, readings, adaptive testing, performance reports, search, teacher support, and a leaderboard.",
      button: "Show Project",
      path: "/projects/kips-lms",
    },
  ],
};
export const ourTechData = {
  title: "Our Technology Stack",
  heading: "Illustrious Services With The Right Tools",
  details: [
    {
      id: "ManagementTools",
      title: "Management Tools",
      img: ourTech["ManagTol.png"],
      bullet: ourTech["Ellipse.svg"],
    },
    {
      id: "TechnologyStack",
      title: "Technology Stack",
      img: ourTech["TC.png"],
      bullet: ourTech["Ellipse.svg"],
    },
    {
      id: "DevOps",
      title: "Dev.Ops",
      img: ourTech["devOps.png"],
      bullet: ourTech["Ellipse.svg"],
    },
    {
      id: "Database",
      title: "Database",
      img: ourTech["dataBase.png"],
      bullet: ourTech["Ellipse.svg"],
    },
  ],
};
export const TeamAugmentation = {
  title: "Team Augmentation",
  heading: "Teamwork is the ability to work together toward a common vision",
  content:
    "Every member of the Crunch Craft family has a part to play in the growth of all individuals of the family as well as that of the Company which strives to go beyond the expectations of its customers with the help of its committed and forward-looking workforce.",
  img: team,
  button: "Join Our Team",
  path: "/careers",
};

export const Openings = {
  title: "PHP WORDPRESS DEVELOPER",
  Date: "10-SEP-2021",
  button: "READ MORE",
  Qualification: "Qualification & skill set",
  skillSet: [
    "At least 2 to 3 years of experience is required",
    "Knowledge of WordPress Core",
    "Strong knowledge of WordPress Hooks and Filters",
    "Strong knowledge of Database (MySQL)",
    "Ability to customize WordPress plugins/themes in code using hooks and filters",
    "Translate exact replica of PSD and AI designs into HTML & WordPress",
    "Creating pixel perfect websites for desktop and mobile via WordPress",
    "Creating landing pages and forms that get our clients leads and sales (HTML & CSS)",
    "Optimizing the user interfaces of sites",
    "Updating sites and fixing bugs",
    "Dealing with hosting, DNS, and website issues that pop up",
  ],
  Technologies: "PHP/Wordpress Javascript, HTML, CSS",
  email: "admin@crunchcraft.com",
};

export const CB = {
  heading: "CAKES AND BAKES",
  Skills: [
    "UI Design",
    "UX Design",
    "Branding",
    "Digital Publishing",
    "Business Development",
    " Prototyping",
  ],
  Date: "November 16, 2021",
  img: CBImg,
  sampleImg : [CBImg1, Font, img1, img2 ],
  website: "www.cakesandbakes.com"
};
