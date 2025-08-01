// /* Change this file to get your personal Portfolio */

// // To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// // Splash Screen

// const splashScreen = {
//   enabled: true, // set false to disable splash screen
//   animation: splashAnimation,
//   duration: 2000 // Set animation duration as per your animation
// };

// // Summary And Greeting Section

// const illustration = {
//   animated: true // Set to false to use static SVG
// };

// const greeting = {
//   username: "PRASAD",
//   title: "Hi all, I'm Prasad",
//   subTitle: emoji(
//     "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
//   ),
//   resumeLink:
//     "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
//   displayGreeting: true // Set false to hide this section, defaults to true
// };

// // Social Media Links

// const socialMediaLinks = {
//   github: "https://github.com/saadpasta",
//   linkedin: "https://www.linkedin.com/in/saadpasta/",
//   gmail: "saadpasta70@gmail.com",
//   gitlab: "https://gitlab.com/saadpasta",
//   facebook: "https://www.facebook.com/saad.pasta7",
//   medium: "https://medium.com/@saadpasta",
//   stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
//   // Instagram, Twitter and Kaggle are also supported in the links!
//   // To customize icons and social links, tweak src/components/SocialMedia
//   display: true // Set true to display this section, defaults to false
// };

// // Skills Section

// const skillsSection = {
//   title: "What I do",
//   subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
//   skills: [
//     emoji(
//       "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
//     ),
//     emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
//     emoji(
//       "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
//     )
//   ],

//   /* Make Sure to include correct Font Awesome Classname to view your icon
// https://fontawesome.com/icons?d=gallery */

//   softwareSkills: [
//     {
//       skillName: "html-5",
//       fontAwesomeClassname: "fab fa-html5"
//     },
//     {
//       skillName: "css3",
//       fontAwesomeClassname: "fab fa-css3-alt"
//     },
//     {
//       skillName: "sass",
//       fontAwesomeClassname: "fab fa-sass"
//     },
//     {
//       skillName: "JavaScript",
//       fontAwesomeClassname: "fab fa-js"
//     },
//     {
//       skillName: "reactjs",
//       fontAwesomeClassname: "fab fa-react"
//     },
//     {
//       skillName: "nodejs",
//       fontAwesomeClassname: "fab fa-node"
//     },
//     // {
//     //   skillName: "swift",
//     //   fontAwesomeClassname: "fab fa-swift"
//     // },
//     {
//       skillName: "npm",
//       fontAwesomeClassname: "fab fa-npm"
//     },
//     {
//       skillName: "sql-database",
//       fontAwesomeClassname: "fas fa-database"
//     },
//     {
//       skillName: "aws",
//       fontAwesomeClassname: "fab fa-aws"
//     },
//     {
//       skillName: "firebase",
//       fontAwesomeClassname: "fas fa-fire"
//     },
//     // {
//     //   skillName: "python",
//     //   fontAwesomeClassname: "fab fa-python"
//     // },
//     {
//       skillName: "docker",
//       fontAwesomeClassname: "fab fa-docker"
//     },
//     // {
//     //   skillName: "bootstrap",
//     //   fontAwesomeClassname: "fa-brands fa-bootstrap"
//     // },
//     // {
//     //   skillName: "tailwind css",
//     //   fontAwesomeClassname: "fa-brands fa-bootstrap"
//     // }
    
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "savitribai phule pune university",
//       logo: require("./assets/images/sppu.png"),
//       subHeader: "Bachelors",
//       duration: "September 2015 - April 2019",
//       // desc: "Participated in the researches and published 3 papers.",
//       descBullets: [
//         "Worked as an General Secretory representing the leadership qualities.",
//         "Participated in the researches and published 3 papers."
//       ]
//     },
//     // {
//     //   schoolName: "Stanford University",
//     //   logo: require("./assets/images/stanfordLogo.png"),
//     //   subHeader: "Bachelor of Science in Computer Science",
//     //   duration: "September 2013 - April 2017",
//     //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//     //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     // }
//   ]
// };

// // Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "90%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Backend",
//       progressPercentage: "70%"
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "60%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// // Work experience section

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
    
//     {
//       role: "Front-End Developer",
//       company: "Testyantra software solutions",
//       companylogo: require("./assets/images/tylogo.jpeg"),
//       date: "Present",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       role: "Trainer",
//       company: "Qspiders",
//       companylogo: require("./assets/images/qsp.png"),
//       date: "July 2023",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     // {
//     //   role: "Software Engineer Intern",
//     //   company: "Airbnb",
//     //   companylogo: require("./assets/images/airbnbLogo.png"),
//     //   date: "Jan 2015 – Sep 2015",
//     //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     // }
//   ]
// };

// /* Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
//   display: true // Set false to hide this section, defaults to true
// };

// // Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Achievement Section
// // Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Resume Section
// const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",

//   // Please Provide with Your Podcast embeded Link
//   display: true // Set false to hide this section, defaults to true
// };

// const contactInfo = {
//   title: emoji("Contact Me ☎️"),
//   subtitle:
//     "Discuss a project or just want to say hi? My Inbox is open for all.",
//   number: "+92-0000000000",
//   email_address: "saadpasta70@gmail.com"
// };

// // Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

// const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// export {
//   illustration,
//   greeting,
//   socialMediaLinks,
//   splashScreen,
//   skillsSection,
//   educationInfo,
//   techStack,
//   workExperiences,
//   openSource,
//   bigProjects,
//   achievementSection,
//   blogSection,
//   talkSection,
//   podcastSection,
//   contactInfo,
//   twitterDetails,
//   isHireable,
//   resumeSection
// };




import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "PRASAD",
  title: "Hi all, I'm Prasad",
  subTitle: emoji(
    "Experienced React Developer 🚀 with 2 years of experience in building responsive, high-performance web applications using React.js, Redux Toolkit, and modern UI libraries. Passionate about clean code, performance, and collaboration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/prasadkadam1/",
  linkedin: "https://www.linkedin.com/in/prasad-kadam-0a8a9a254/",
  gmail: "prasadkadam2303@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FRONTEND DEVELOPER WHO BUILDS MODERN WEB INTERFACES",
  skills: [
    emoji("⚡ Building responsive, accessible, and interactive UIs with React.js and Tailwind CSS"),
    emoji("⚡ Integrating RESTful APIs and managing state using Redux Toolkit and Context API"),
    emoji("⚡ Developing and deploying performant web apps using modern CI/CD and cloud tools")
  ],

  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppu.png"),
      subHeader: "Bachelor’s Degree",
      duration: "2015 - 2019",
      descBullets: [
        "Worked as a General Secretary showcasing leadership abilities."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "60%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Testyantra Software Solutions Pvt Ltd",
      companylogo: require("./assets/images/tylogo.jpeg"),
      date: "July 2023 – Present",
      desc:
        "Built and maintained responsive UI components using React.js and Tailwind CSS. Integrated RESTful APIs using Axios and managed global state using Redux Toolkit. Collaborated with designers and QA engineers to resolve UI bugs and improve performance."
    },
    {
      role: "Trainer",
      company: "QSpiders",
      companylogo: require("./assets/images/qsp.png"),
      date: "Prior to July 2023",
      desc: "Conducted frontend technology training, mentored students, and delivered Java Full Stack content as part of the training program."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE BUILT AND CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "UI Integration and Testing Portal",
      projectDesc:
        "Led a team of 22 to build a pixel-perfect UI using React, Tailwind, Figma, and wrote unit tests for quality assurance.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Online Camping Booking Platform",
      projectDesc:
        "Developed a full-fledged booking platform with search, filters, Firebase auth, and deployed it on Netlify.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java Full Stack Development",
      subtitle:
        "Completed comprehensive training covering frontend and backend technologies from QSpiders.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Full Stack Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love sharing my frontend learning and tips from real-world React development experience.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE KNOWLEDGE ON REACT AND FRONTEND DEVELOPMENT"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Sharing thoughts around frontend tech, career tips, and real dev experiences",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to freelance, collaboration, or full-time roles. Let's connect.",
  number: "+91 8149837983",
  email_address: "prasadkadam2303@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
