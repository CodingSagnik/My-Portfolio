/**
 * Portfolio Data Configuration
 * 
 * This file contains all the static data used throughout the portfolio website.
 * It serves as a single source of truth for content, making updates easy and
 * maintaining consistency across components.
 */

/**
 * Navigation items for the floating navigation bar
 * These correspond to sections on the main page using anchor links
 */
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
/**
 * Grid items for the "About Me" bento grid layout
 * Each item represents a card in the interactive grid with specific styling and content
 * 
 * @property {number} id - Unique identifier for the grid item
 * @property {string} title - Main heading text displayed on the card
 * @property {string} description - Subtitle or additional context
 * @property {string} className - Tailwind CSS classes for responsive layout
 * @property {string} imgClassName - CSS classes for image styling
 * @property {string} titleClassName - CSS classes for title positioning
 * @property {string} img - Path to main image asset
 * @property {string} spareImg - Path to secondary/background image
 */
  export const gridItems = [
    {
      id: 1,
      title: "I approach development with clarity, structure, and a passion for problem-solving ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Collaborating across time zones? I've got you covered!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "A Passionate coder with an eye for detail",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Developing a tool for Reverse Engineering Softwares",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Want a closer look at what I bring to the table?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
/**
 * Featured projects showcase
 * Highlights the most important development work with live links and tech stacks
 * 
 * @property {number} id - Unique project identifier
 * @property {string} title - Project name/title
 * @property {string} des - Brief project description
 * @property {string} img - Project thumbnail/preview image
 * @property {string[]} iconLists - Array of technology icon paths used in the project
 * @property {string} link - Live deployment URL
 */
  export const projects = [
    {
      id: 1,
        title: "Hash-Chat: Private Decentralized Chat",
        des: "Enjoy secure, encrypted messaging with no servers or tracking, just true privacy powered by blockchain.",
      img: "/p1.svg",
        iconLists: ["/nextjs.svg", "/react.svg", "/js.svg", "/tailwind.svg", "/solidity.svg", "/ethers.svg", "/metamask.svg", "/netlify.svg"],
        link: "https://hashchatbymechanoids.netlify.app/",
    },
    {
      id: 2,
        title: "Synapse Health: AI Virtual Health Assistant",
        des: "Get quick medical insights from an AI assistant that analyzes images and answers questions via voice or text.",
      img: "/p2.svg",
        iconLists: ["/python.svg", "/tailwind.svg", "/gradio.svg", "/groq.svg", "/gtts.svg", "/vercel.svg"],
        link: "https://huggingface.co/spaces/CodingSagnik/synapse-health",
    },
];

/**
 * Client testimonials and recommendations
 * Social proof from colleagues, mentors, and collaborators
 * 
 * @property {string} quote - The testimonial text
 * @property {string} name - Person's full name
 * @property {string} title - Professional title and organization
 * @property {string} profileImg - Path to profile photo
 */
  export const testimonials = [
    {
      quote:
            "Working with Sagnik has been a seamless experience. His attention to detail, creative thinking, and technical expertise brought real value to our project. Sagnik consistently delivered high-quality work on time and was always open to feedback. For any team looking for a reliable and forward-thinking developer, Sagnik is a fantastic choice.",
        name: "Neeraj Gupta",
        title: "Team Lead, Digital Guru",
        profileImg: "/digitalguru.png",
    },
    {
        quote:
            "Sagnik's journey through my Calculus course was truly inspiring. What stood out most was his unwavering determination and refusal to give up, even in the face of early setbacks. His growth was the result of consistent effort, a strong will to improve, and a commendable attitude toward learning. He exemplifies the mindset of a true learner.",
        name: "Dr. Anshul Gopal",
        title: "Asst. Professor Sr. Grade-1, Dept of Mathematics, VIT-AP",
        profileImg: "/anshul.jpeg",
    },
    {
      quote:
            "I had the pleasure of mentoring Sagnik during his Engineering Clinics-I, when he was a second year student. He demonstrated strong initiative, curiosity, and a solid grasp of concepts. His dedication and responsiveness to feedback resulted in an impressive final project. Sagnik clearly shows promise as a future engineer.",
        name: "Dr. Hari Kishan Kondaveeti",
        title: "Deputy Director, Engineering Clinics, VIT-AP",
        profileImg: "/hari.jpeg",
    },
    {
      quote:
            "Working with Sagnik on Team Mechanoids during Technova 2025 was an incredible experience. As our full-stack developer, he brought deep technical expertise, quick problem solving, and a calm presence under pressure. Beyond his skills, Sagnik is someone who lifts the team's spirit and brings people together. A great developer and an even better friend.",
        name: "Tridib Das",
        title: "Team Lead, Team Mechanoids",
        profileImg: "/tridib.jpeg",
    },
    {
      quote:
            "Sagnik was a student in my Data Structures and Algorithms course, and I found him to be highly engaged and driven. He consistently showed a strong grasp of problem solving and was never hesitant to explore concepts beyond the syllabus. His passion for coding and curiosity in the subject stood out throughout the semester.",
        name: "Dr. Kuppusamy P",
        title: "Professor, SCOPE, VIT-AP",
        profileImg: "/kuppu.jpeg",
    },
    {
      quote:
            "Having worked with Sagnik across multiple hackathons as part of Team Mechanoids, I've seen his consistency, technical depth, and creative thinking in action. As a full-stack developer, he's fast, reliable, and focused on building clean, effective solutions. More than a teammate, Sagnik is someone you can always count on.",
        name: "Shiven Patro",
        title: "Full Stack Dev Intern, Cordly AI",
        profileImg: "/shiven.jpg",
    },
];

/**
 * Companies and organizations associated with
 * Used in the experience and company showcase sections
 * 
 * @property {number} id - Unique company identifier
 * @property {string} name - Company/organization name
 * @property {string} img - Company logo/icon
 * @property {string} nameImg - Company name as image/svg
 */
  export const companies = [
    {
      id: 1,
        name: "Digital Guru",
        img: "/digitalgurutrans.svg",
        nameImg: "/digitalgurutext.svg",
    },
    {
      id: 2,
        name: "Internshala",
        img: "/internshala.png",
        nameImg: "/internshalatext.svg",
    },
    {
      id: 3,
        name: "Mechanoids",
        img: "/mechanoids.svg",
        nameImg: "/mechanoidstext.svg",
    },
];

/**
 * Professional work experience
 * Chronological list of internships, positions, and roles
 * 
 * @property {number} id - Unique experience identifier
 * @property {string} title - Job title/position
 * @property {string} date - Employment duration
 * @property {string} organisation - Company/organization name
 * @property {string} desc - Role description and responsibilities
 * @property {string} className - CSS classes for card layout
 * @property {string} thumbnail - Company logo for the experience card
 */
  export const workExperience = [
    {
      id: 1,
        title: "Fullstack Web Development Intern",
        date: "June 2025 - Present",
        organisation: "Digital Guru",
        desc: "Assisting in building fullstack web apps using React.js, Next.js, Node.js, and more, ensuring responsiveness and performance.",
      className: "md:col-span-2",
        thumbnail: "/digitalgurutrans.svg",
    },
    {
      id: 2,
        title: "Student Partner",
        date: "June 2025 - Present",
        organisation: "Internshala",
        desc: "Assisted student onboarding, offered techical support, and guided peers on using Internshala's platform and tools.",
      className: "md:col-span-2",
        thumbnail: "/internshala.png",
    },
  ];
  
/**
 * Social media links and platforms
 * Contact and networking information with clickable URLs
 * 
 * @property {number} id - Unique social media identifier
 * @property {string} img - Platform icon/logo path
 * @property {string} url - Direct link to social media profile
 */
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
        url: "https://github.com/CodingSagnik",
    },
    {
      id: 2,
        img: "/link.svg",
        url: "https://www.linkedin.com/in/ray-sagnik/", 
    },
    {
      id: 3,
        img: "/insta.svg",
        url: "https://www.instagram.com/am.i.sagnik/", 
    },
  ];