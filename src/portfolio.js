/* Change this file to get your personal Porfolio */
// import graphicsdesignImg from "./containers/skills/graphicsdesignImg"; // Adjust the path based on your folder structure

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shashi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shashi Bhushan Portfolio",
    type: "website",
    url: "https://github.com/Xprofess0r/Shashi_Portfolio.git",
  },
};

//Home Page
const greeting = {
  title: "Shashi Bhushan",
  logo_name: "Shashi Bhushan",
  nickname: "Shashi",
  subTitle: [
    "Data Analyst",
    "Web Developer",
    "UI/UX Designer",
    "Graphics Designer",
    "Crafting innovative solutions through code",
    "I am passionate about turning ideas into reality.",
    "Code Crafter",
    "Tech Enthusiast",
    "Problem Solver",
    "Innovation Architect",
    "Software Artisan",
    "Code Alchemist",
    "Tech Explorer",
  ],
  resumeLink:
    "https://drive.google.com/file/d/1ZBvMPjHCQFosTHQcWMvzYWCOntR0YwtJ/view?usp=sharing",
  portfolio_repository: "https://github.com/Xprofess0r/Shashi_Portfolio.git",
  githubProfile: "https://github.com/Xprofess0r",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Harish1919",
  // linkedin: "https://www.linkedin.com/in/Harish-hathidara-88710b138/",
  // gmail: "Harishhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/Harishhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Harish_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Xprofess0r",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shashi-bhushan22gg10043/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shashi2017razz@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Shashi982068",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shashi_visuals/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building interactive dashboards using Power BI to derive business insights",
        "⚡ Writing optimized SQL queries for data extraction, transformation, and analysis",
        "⚡ Performing data analysis to identify trends, patterns, and actionable insights",
        "⚡ Working with real-world datasets to support data-driven decision making",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Dedicated to building responsive and user-friendly websites that deliver seamless digital experiences",
        "⚡ Skilled in HTML, CSS, JavaScript, and backend technologies, ensuring robust and dynamic web applications.",
        "⚡ Committed to staying updated with the latest web development trends and best practices to create cutting-edge solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "ion-logo-nodejs",
          style: {
            backgroundColor: "transparent",
            color: "#529f41",
          },
        },
      ],
    },

    // {
    //   title: "Databases",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple Databases platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "MySql",
    //       fontAwesomeClassname: "simple-icons:mysql",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },

    //   ],
    // },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Graphics Design",
      fileName: "GraphicsDesignImg",
      skills: [
        "⚡ Creating engaging visual content for social media and branding",
        "⚡ Expertise in Adobe Photoshop, Illustrator, and Figma for digital illustrations and design",
      ],
      softwareSkills: [
        {
          skillName: "photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "01c8fe",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF9A00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Bhushan_Shashi/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shashi2k24",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shashixbhushan",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Bhushan_shashi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology Kharagpur",
      subtitle: "Integrated M.Sc. in Geology and Geophysics",
      logo_path: "fc21.png",
      alt_name: "IIT kgp logo",
      duration: "2022 - 2027",
      descriptions: [
        "⚡ Studied core subjects including Mineralogy, Geophysics, Sedimentology, Structural Geology, and Hydrogeology, building a strong analytical foundation in Earth Sciences",
        "⚡ Applied quantitative and computational methods in geophysical and geological analysis, strengthening data interpretation and problem-solving skills",
        "⚡ Worked on research-oriented projects including Bachelor’s Thesis Project (BTP), focusing on applying analytical techniques to real-world geological problems",
        "⚡ Gained hands-on experience through lab work, field studies, and data-driven geological investigations",
      ],
      website_link: "https://www.iitkgp.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Technical Team Subhead",
      subtitle: "- Kshitij Techno Mangement fest of IIT kharagpur",
      logo_path: "ktj_logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1TbzTNqB1vPBHNER-ZjpZxzHZS23GbQnI/view?usp=sharing",
      alt_name: "kshitij",
      color_code: "black",
    },
    {
      title: "Design Team Member ",
      subtitle: "- Illumination Magazine TSG",
      logo_path: "TSG_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1IqfrTRLIdIlZ15-XWGEliRgDAvIv2gcK/view?usp=sharing",
      alt_name: "TSG",
      color_code: "black",
    },
    {
      title: "UI/UX Internship",
      subtitle: "- Encryptix",
      logo_path: "encryptix.png",
      certificate_link:
        "https://drive.google.com/file/d/1DazCa5fn4A1tnTs374Lqu2MV4AwainVf/view?usp=sharing",
      alt_name: "encryptix",
      color_code: "black",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description: "I have worked on many Websites.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Position of Responsibility",
      work: true,
      experiences: [
        {
          title: "General Secretary Students' Welfare",
          company: "Meghnad Saha Hall of Residence",
          company_url:
            "https://wiki.metakgp.org/w/Megnad_Saha_Hall_of_Residence",
          logo_path: "MS_HALL_Logo.png",
          duration: "Aug 2024 - Present",
          location: "On-site",
          description:
            "Organizing All the Events and Festivals with enthusiasm, while Taking up the Responsibility of welfare of 500+ Boarders in the Hall",
          color: "#000000",
        },
        {
          title: "Design Team Head",
          company: "KodeinKGP",
          company_url: "https://kodeinkgp.in/",
          logo_path: "kik_logo.png",
          duration: "Jun 2024 - Present",
          location: "On-site",
          description:
            "Mentoring the Design Team Members enhancing their design skills and interests, Actively collaborating with the other Team Heads",
          color: "#000000",
        },
        {
          title: "Technical Team Subhead",
          company: "Kshitij",
          company_url: "https://ktj.in/",
          logo_path: "ktj_logo.svg",
          duration: "May 2023 - Jun 2024",
          location: "On-site",
          description:
            "Developed and integrated the accommodation portal, implemented a secure payment gateway, and facilitated 2.5K+ registrations",
          color: "#000000",
        },
        {
          title: "Design and Media Team Subhead",
          company: "Shaurya",
          company_url: "https://www.instagram.com/shaurya.iitkgp/?hl=en",
          logo_path: "shaurya_logo.png",
          duration: "May 2023 - Jun 2024",
          location: "On-site",
          description:
            "Designed over 30+ sponsorship posters displayed across college holdings, event posters and real-time sports results and fixtures",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Loving Room Concerts",
          company_url: "",
          logo_path: "lovng.png",
          duration: "Aug 2025 - Sept 2025",
          location: "Remote",
          description:
            "Engineered and optimized the desktop version of the platform using Node.js, enhancing responsiveness and user experience. Led backend data migration from Firebase to a new system, improving data consistency and system efficiency.",
          color: "#000000",
        },
        {
          title: "junior Developer",
          company: "DevLaunch",
          company_url: "https://www.devlaunch.in/",
          logo_path: "Devlaunch.svg",
          duration: "Oct 2024 - Dec 2024",
          location: "Remote",
          description:
            "Developed a full-stack AI-powered blog platform enabling automated content generation, image uploads, and secure user authentication. Designed scalable APIs and improved user experience through seamless content creation workflows.",
          color: "#000000",
        },

        {
          title: "Full Stack Developer",
          company: "Prajnan Software",
          company_url: "https://github.com/LostNSeeker/prajnanCRM",
          logo_path: "prajnan_logo.jpeg",
          duration: "Aug 2024 - Sept 2024",
          location: "Remote",
          description:
            "Built an interactive HR dashboard for managing employee data, integrating frontend with backend APIs for real-time data access. Enhanced usability and streamlined workforce management through dynamic data visualization.",
          color: "#000000",
        },

        {
          title: "Graphic Design Intern",
          company: "enerzyflow",
          company_url: "https://www.enerzyflow.com/",
          logo_path: "enerzyflow_logo.png",
          duration: "Sept 2024 - Dec 2024",
          location: "Remote",
          description:
            "Led UI/UX and graphic design initiatives, creating visually engaging assets and improving user experience across digital platforms. Collaborated with cross-functional teams to ensure consistent branding and effective design communication.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications and deploy.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Competition",
  description: "General Championships",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "QPo Cabs Case Study",
      name: "Open IIT Case Study",
      createdAt: "2025-08-10",
      description:
        "Developed a hotspot-based shared mobility expansion strategy for QPo Cabs in Chennai, addressing first and last-mile connectivity gaps. Designed customer acquisition and retention models through referral programs, college and corporate partnerships, while proposing AI-enabled safety and operational solutions to improve scalability and reliability.",
      url: "YOUR_DRIVE_LINK_HERE",
    },
    {
      id: "Snap Attendance",
      name: "Case Study",
      createdAt: "2024-06-23",
      description:
        "Formulated a marketing plan for Indian three-wheeler market, encompassing segmentation, campaigns, and multi-channel outreach.",
      url:
        "https://drive.google.com/file/d/1ZLkNKOw0ydB0O3AK6ZoHM56BVYe0OAOw/view?usp=sharing",
    },
    {
      id: "Snap Attendance",
      name: "Chem Quest",
      createdAt: "2024-06-23",
      description:
        "Conducted an in-depth study on EMI, its causes, impacts, shielding mechanisms, and identifying PG10 as the best Hybrid variant.",
      url:
        "https://drive.google.com/file/d/1wjT-F3Ejdan5DBJMfC6na2YTOJpjtQTV/view?usp=sharing",
    },
    {
      id: "Snap Attendance",
      name: "Ad Design",
      createdAt: "2024-06-23",
      description:
        "Research focused on mental health issues, MHQ assessments, addressing stigma, and fostering mental health awareness",
      url:
        "https://drive.google.com/file/d/1c3W99eBAGxdESB2PHb8yQype3f9koD_w/view?usp=sharing",
    },
    {
      id: "Snap Attendance",
      name: "ABInbev 100+ challenge",
      createdAt: "2024-10-23",
      description:
        "Created a marketing Compaign idea, Go-To-Market strategy and Generalised the Company's Pillars of Growth",
      url:
        "https://drive.google.com/file/d/1KCRFLV0PGh4OLg-6_50K1kefyNh7pR8Z/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harish_pic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development, Graphics Design and UI/UX.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.Harishhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Meghnad saha Hall of Residence, IIT Kharagpur,Kharagpur West Bengal-721302",
    locality: "Kharagpur",
    country: "India",
    region: "asia",
    postalCode: "721302",
    streetAddress: "MSH",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JaZo5nrkQowViu3t6",
  },
  phoneSection: {
    title: "Call Me.",
    subtitle: "+91 7643949963",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
