import { Project, SidebarLink } from "@types";
import chetLogo from "Assets/images/chet-logo.jpeg";
import pgLogo from "Assets/images/pg_logo_1.svg";
import rebnyLogo from "Assets/images/REBNY_LOGO.png";

export const sidebarLinks: SidebarLink[] = [
  {
    text: "Github",
    link: "https://github.com/aniganesh",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/aniruddha-ganesh/",
  },
  {
    text: "Instagram",
    link: "https://instagram.com/aniganesh741",
  },
  {
    text: "Youtube",
    link: "https://www.youtube.com/@thecodebuddha7246",
  },
  {
    text: "Stackoverflow",
    link: "https://stackoverflow.com/users/10032950/frankencode",
  },
];
export const projects: Project[] = [
  {
    id: "rajini-lipsum",
    image:
      "https://i.pinimg.com/originals/00/b4/69/00b469328c4eb1f6cdb19a3638520857.jpg",
    imgSrc:
      "https://abilitytolov3.blogspot.com/1973/07/illustration-rajinikanth-vector.html",
    projectTitle: "Rajini lipsum",
    // projectSubtitle: '',
    details:
      "A fun VS Code extension that gives you placeholder text using iconic lines from Rajini's movies",
    url: "https://marketplace.visualstudio.com/items?itemName=aniruddha.rajini-lipsum",
  },
  {
    id: "help-decide",
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/confused-man-606288.png",
    projectTitle: "Help me decide",
    imgSrc: "https://iconscout.com/icon/confused-man",
    // projectSubtitle: '',
    details:
      "A very simple single page application using HTML5, CSS3 and JS that helps you decide between tasks",
    url: "https://helpmedecide.vercel.app/",
  },
  {
    id: "colour palette",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/510/084/original/color-palette-vector-illustration.jpg",
    projectTitle: "Colour palette creator",
    imgSrc:
      "https://www.vecteezy.com/vector-art/510084-color-palette-vector-illustration",
    // projectSubtitle: '',
    details: `A simple desktop app using python and tkinter that creates a colour scheme complementing Bootstrap's BEM specification adding modifier classes`,
    url: "https://github.com/Aniganesh/Colour-Palette-creator/",
  },
  // {
  //   image: '4',
  //   projectTitle: '',
  //   // projectSubtitle: '',
  //   details: '',
  //   url: '',
  // },
];
// const GRID_SPACING_LG = 40; const GRID_SPACING_MD = 20; const GRID_SPACING_SM = 10;

// TODO: Add actual content which mention features worked on and explain the roles.
//TODO: Replace images
export const workProjects: Project[] = [
  {
    id: "chet",
    image: chetLogo,
    projectTitle: "Chet",
    imgSrc: chetLogo,
    details:
      "Chet is an e-learning platform that gives people the opportunity to learn from collections curated by experts from top companies",
    url: "https://chetnetwork.com/",
    roles: ["Front-end lead", "Front-end contributor"],
    additionalDetails:
      "Chet was my first major project post my internship. I started out as a Front-end contributor working on adding features to a completely newly setup react app.\n\nOver the next few months, I familiarized myself with the business requirements of the project and when the front-end lead moved on to a different organization, I was able to pick up from where he left off. I had by then learnt that this project came with an older admin app from where various parameters could be tuned and customized. Adding features to the admin app had been taken care of by the senior developer until then. After he moved on, I started managing this app too. I also trained newcomers by assigning tasks to them and helping them out as they stumbled upon issues.",
    duration: "Feb 2021 - Jun 2022",
  },
  {
    id: "pg",
    image: pgLogo,
    projectTitle: "Playground",
    imgSrc: pgLogo,
    details:
      "Playground is a social media style site for creators to connect with their audience and advertise their events, merchandise, podcasts, content and much more.",
    url: "https://playgroundapp.com/",
    additionalDetails:
      "Playground was my second major project at Mithya. It is a considerably larger project than Chet and involved a larger team with upto 6 people working on the front-end alone at times. With frequently changing requirements, the project has undergone significant changes to every core feature at least twice. Playground was originally a small Flask project which we first ported to react in less than 2 weeks and then started adding new features one by one. With every new feature set the team would meet and discuss how to architect it such that there were minimum people who were blocked by another and could accommodate possible future changes. While our initial architecture seemed to work for a while, we started seeing issues with that implementation quite quickly as file became larger and less maintainable. So we switched to using a ViewModel pattern on the front-end to keep business logic and presentation logic separate. This made things way simpler and is our go-to pattern for our larger projects.\n\nI worked on various features in the project over the months contributing in creating components, updating components for new requirements and fixing issues that came up. One challenging aspect of this project was when we had issues with the image cropper we were using. Storing only the base64 data of the cropped part of the image meant we couldn't edit the image later and it also significantly made the image size significantly larger leading to performance issues. I tried creating a custom implementation and that only made the issue worse. Following which I looked for a better library and also switched to storing the original image and the crop coordinates such that we could apply the appropriate transformation through our image cdn.",
    roles: ["Front-end contributor"],
  },
  {
    id: "chardan",
    image: "https://www.chardan.com/img/apple-touch-icon.png",
    projectTitle: "Chardan website",
    imgSrc: "https://www.chardan.com/img/apple-touch-icon.png",
    details:
      'Built on a custom framework, the chardan website and "micro sites" serve a myriad different functions; from being a way for Chardan to communicate with the general public and various stakeholders by showcasing their projects to helping them comply with laws',
    url: "https://chardan.com",
    roles: ["Full-stack contributor"],
    additionalDetails:
      'The Chardan website was built using a CMS called [Prismic](https://prismic.io) and a custom framework that used [handlebars.js](https://handlebarsjs.com/) to "render" dynamic content from the CMS and [jquery](https://jquery.com/) for a myriad different functions within the app. The custom framework was essentially a [Nodejs](https://nodejs.org) and [Express](https://expressjs.com) app that connected to the CMS, generated all of the pages from it and served those pages along with a few REST endpoints that the app used. It also would generate "microsites" which were essentially smaller websites with no more than two or three static pages with very minimal interactivity and upload them to a S3 bucket that was then served over a caching service.\n\n When I joined this project, it had already been running for quite a few years. I was responsible for creating new components that were requested by the design team. These components would have their data in the CMS and the templates and processing for that data would be done by the framework that had been built using tools like gulp, babel, handlebars and less. Every time there was a new set of components to be built or new requirements came up, the Project manager and I would meet and discuss the requirements and how best to make those components such that whoever does content entry on that project finds it intuitive to add the content and ensure that components do not conflict with each other or affect the general layout of the website.\n\n One of the more challenging features on this project was a "table" component. The CMS\'s interface was not one that would allow adding tables quickly and safely. So an [airtable](https://airtable.com/) integration was built such that any tables added in a particular "base" was accessible to the app. All that was needed on the cms was to add a component which mentions the name of the table to be displayed. This also involved creating an app on the airtable platform that would trigger our webhook to rebuild the site whenever table data changed.',
    duration: "Nov 2021 - Mar 2023",
  },
  {
    id: "rebny",
    image: rebnyLogo,
    projectTitle: "REBNY lease store",
    imgSrc: rebnyLogo,
    details:
      "Rebny lease store is a web app that helps Real Estate Board of New York (REBNY) customers create customised leases for their properties within New York. REBNY's legal team would make templates for various types of commercial and residential leases which their customers could use to create custom leases from through the lease store interface",
    url: "https://lease-store.rebny.com",
    additionalDetails:
      "The REBNY Lease store web app allowed managing past leases and creating new ones from its interface. Once all details were finalized, the app would take the user to a payment page and once the payment was done, it would generate a finalized lease pdf that would not be editable by any fully compliant pdf reader/editor. It also allowed the user to preview watermarked pdfs that could be generated during any step in the lease customization process. \n\nEach lease had its template in a CMS called [Contentful](https://contentful.com). The back-end would fetch all of the content on demand and store them in the db whenever a new instance of that lease was created by a user. This ensured that even if there was a new revision of a lease, the user always got the same version that they initially saw.\n\nInitially I worked only on the front-end adding form components and a simple form state management solution.  As the back-end setup was finished, I worked on adding some features to the back-end too. With each lease type came its own requirements that needed backward compatible changes to lease types in the CMS. While most leases were similar enough to have one common structure, there were some that needed some special handling from a content formatting perspective. These had to be handled. There was also an AWS lambda λ setup that would generate the pdf. I worked on this too when the requirement to disable pdf editing came up.",
    duration: "Jun 2022 - Apr 2023",
    roles: ["Front-end contributor", "Full-stack contributor"],
  },
  {
    id: "humans",
    image:
      "https://images.squarespace-cdn.com/content/v1/62a0ff769bb0454090ba7a78/1676657933490-W71Z4TINOBT13RSCKAIU/favicon.ico?format=100w",
    projectTitle: "Humans",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/62a0ff769bb0454090ba7a78/1676657933490-W71Z4TINOBT13RSCKAIU/favicon.ico?format=100w",
    url: "https://humans.inc",
    details:
      "Humans is a web app and an IRL way to get like minded people together and form communities. The web app serves as a way to connect with people with similar interests.",
    additionalDetails:
      "The Humans web app is built with React, [D3](https://d3js.org), [GSAP](https://greensock.com/), [easy-peasy](https://easy-peasy.vercel.app/) and Typescript. The admin and back-end is powered by Strapi. GSAP powers most animations on the site with D3 powering the bubble simulation on its home page.\n\nWe built the MVP of the app in less than two weeks and over the next months added features gradually to it and tweaking various features to ensure that its unique interface works across devices reliably. \n\nWhile I did regularly work on features, I also did mentor and train one other person on this project and help him add features to the front-end.",
    roles: ["Front-end lead", "Front-end contributor"],
    duration: "Jan 2023 - Present",
  },
  // TODO: Add T4k and Venzi
];