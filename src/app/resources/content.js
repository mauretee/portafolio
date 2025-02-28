import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mauro",
  lastName: "Lopez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Web Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Argentina/Buenos_Aires", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish", "Portguese", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system/nextjs-starter",
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mauro-lopez-5a2845137/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mauro.javier.lopez@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> Senior Web Developer</>,
  subline: (
    <>
      I’m a senior web developer specializing in Webflow, Elementor, React,
      HTML, CSS, and responsive design, with a passion for turning ideas into{" "}
      <InlineCode>dynamic digital experiences</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a Software Engineer, my goal is to continually master new
        technologies and effectively apply my skills to real-world projects. I
        specialize in event-driven microservice architectures and scalable web
        systems. Over the years, I have contributed to diverse projects ranging
        from e-commerce platforms to real estate applications, ensuring each
        solution meets modern standards of design and performance.”{" "}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Buenos Bytes",
        timeframe: "Feb 2024 – Jan 2025",
        role: "WordPress & Webflow Developer",
        achievements: [
          <>
            Developed and maintained dentistry-focused websites using WordPress
            and Webflow, leveraging Elementor and other website builders to
            create modern, responsive designs.
          </>,
          <>
            Collaborated with dental practices to craft user-friendly,
            marketing-optimized digital experiences, enhancing client engagement
            and online presence.
          </>,
          <>
            Implemented best practices for performance, SEO, and accessibility,
            ensuring each site met high standards of quality and functionality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "AutoFlow",
        timeframe: "Nov 2022 – Feb 2024",
        role: "Staff Engineer",
        achievements: [
          <>
            Developed a comprehensive e-commerce platform for car dealerships,
            streamlining inventory management.
          </>,
          <>
            Integrated AI-driven image enhancement to optimize listing visuals
            and operational efficiency.
          </>,
          <>
            Engineered robust backend solutions with Django and FastAPI, paired
            with a user-friendly React interface.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Ungga",
        timeframe: "Jul 2021 – Aug 2022",
        role: "Staff Engineer",
        achievements: [
          <>
            Spearheaded the development of a real estate web application
            targeting the Mexican market.
          </>,
          <>
            Leveraged Django, GraphQL, React, and Next.js to deliver a scalable,
            high-performance solution.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "DinoCloud",
        timeframe: "Jul 2020 – Aug 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Led the migration of a SaaS platform for car dealerships to AWS,
            establishing robust cloud-based services.
          </>,
          <>
            Developed customized websites using AWS services, Django, and modern
            front-end frameworks.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Hipcam",
        timeframe: "Aug 2018 – Jul 2020",
        role: "Backend Team Lead",
        achievements: [
          <>
            Led the backend team in a major restructuring initiative,
            transitioning from an AWS-hosted private media server to an in-house
            developed solution.
          </>,
          <>
            Implemented internationalization and established local testing by
            effectively mocking AWS services, ensuring robust and
            region-independent performance.
          </>,
          <>
            Decomposed a monolithic architecture into modular microservices,
            significantly enhancing scalability, maintainability, and deployment
            efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ministry of HealthCare, City of Buenos Aire",
        timeframe: "Jun 2016 – Jul 2018",
        role: "Fullstack Developer",
        achievements: [
          <>
            Enhanced the Health Information System focusing on Electronic
            Medical Records.
          </>,
          <>
            Web development best practices, bug fixing, and feature
            enhancements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Buenos Aires",
        description: <>Bachelor’s in Computer Science.</>,
      },
      {
        name: "University of Buenos Aires",
        description: (
          <>Bachelor’s in Mathematical Science (Two years completed)</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
