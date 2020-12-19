import moment from "moment";
import {IUserDetails} from "../components/sections/landing/landing";
import {IInfoCard} from "../components/shared/info-card/info-card";
import {SkillEnum} from "../constants";
import {IProject} from "../components/shared/project/project";
import {ISocialIcon} from "../components/shared/social/social";
import {IRepository} from "../components/shared/repository/repository";
import {ISkillCategory} from "../components/sections/skills/skills";

export default class PortfolioDataService {
  public static readonly userDetails: IUserDetails = {
    firstName: "Yana D.",
    lastName: "Nugraha",
    nickname: "Yana",
    title: "Software Engineer"
  };

  public static readonly aboutTextList: string[] = [
    "Hi! I'm Yana, a software engineer based in Indonesia specializing in building exceptional websites and applications.",
    "As a kid, I grew up in the midst of rapid internet development where I created a guestbook, my very first PHP project back in 2005. During high school, " +
    "I started my own custom private game server which afforded me some extra pocket money. Though I soon realized that software engineering means way more than just writing some codes.",
    `This interest led me into studying computer science to learn what it means to engineer a software starting from the basics. ` +
    `After graduating from <a href="https://www.upi.edu" target="_blank">Universitas Pendidikan Indonesia</a> and <a href="https://www.itb.ac.id" target="_blank">Institut Teknologi Bandung</a>, ` +
    `I joined the Accommodation engineering team at <a href="https://www.traveloka.com" target="_blank">Traveloka</a> ` +
    "where I developed interesting features and maintained the Flight+Hotel product from end-to-end.",
    "Since then, it has been my passion to create meaningful websites and applications. My goal is to always build products that scale and impacts many people.",
  ];

  public static readonly aboutSummaryTextList: string[] = [
    "Hi! I'm Yana, a software engineer based in Indonesia specializing in building exceptional websites and applications.",
    "I really love creating websites and applications and my goal is to always build products that scale and impacts many people.",
  ];

  public static readonly skillSummaryList: SkillEnum[] = [
      SkillEnum.java, SkillEnum.ts, SkillEnum.ruby,
      SkillEnum.mysql, SkillEnum.mongodb, SkillEnum.aws
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "icon-traveloka.png",
      headings: {
        primary: `Software Engineer, Backend <span class="text-muted">at</span> Traveloka Indonesia`,
        tertiary: `<a href="https://traveloka.com" target="_blank">traveloka.com</a> &middot; Mar 2019 - Present`,
      },
      descriptionList: [
        'Supported day-to-day operations and testing of Flight+Hotel product from end-to-end independently',
        'Saved deployment and testing time by migrating and decoupling Flight+Hotel AWS infrastructures',
        'Reduced flight operations workload during initial COVID-19 situation by 80% by creating airline e-mail automation',
        `<b>Relevant Knowledge:</b> Java, Kotlin, Spring Boot, AWS, Ansible, Terraform, Jenkins, MongoDB, Redis, Datadog, TestNG, Mockito, Git`,
      ]
    },
    {
      logo: "icon-rumahhosting.png",
      headings: {
        primary: `Software Developer <span class="text-muted">at</span> Rumahnet Internusa`,
        tertiary: `<a href="https://rumahhosting.com" target="_blank">rumahhosting.com</a> &middot; Aug 2016 - Dec 2018`
      },
      descriptionList: [
        'Created client projects ranging from information systems, e-commerce sites, and company portfolios using various stacks',
        'Developed web-based internal ledger to track revenues and implemented payment gateway integrations using 3rd-party APIs',
        'Increase in sales following implementation of Google Analytics Measurement Protocol',
        'Improved customer satisfaction by introducing WhatsApp Business integration',
        `<b>Relevant Knowledge:</b> Laravel, PHP, Node.js, NextJS, MySQL, ReactJS, Vue, Grafana, Git, HTML, CSS, Git, WHMCS, Midtrans`,
      ],
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "icon-itb.png",
      headings: {
        primary: "Institut Teknologi Bandung",
        tertiary: "Sep 2016 - Oct 2018"
      },
      descriptionList:
          [
            `<b>Major</b><br/>Master of Science in Management &mdash; GPA 3.79`,
            `<b>Coursework</b><br/>Advanced Statistics, Agent Based Modelling and Simulation, Service Science`,
            "<b>Thesis</b><br/>Text Mining to Identify Hoaxes and Its Implications in Indonesian Society",
          ]
    },
    {
      logo: "icon-upi.png",
      headings: {
        primary: "Universitas Pendidikan Indonesia",
        tertiary: "Sep 2010 - Mar 2015"
      },
      descriptionList:
        [
            `<b>Major</b><br/>Bachelor of Computer Science &mdash; GPA 3.28`,
            `<b>Coursework</b><br/>Algorithm & Programming, Data Structures, OOP, Database, Web Programming and Design, Software Engineering`,
            `<b>Thesis</b><br/>Cybil2D Library as an OpenGL ES Abstraction Alternative to Reduce Code Complexity<br/><a href="https://bitbucket.org/djzmo/cybil2d">bitbucket.org/djzmo/cybil2d</a>`,
        ],
      isLast: true
    }
  ];

  public static readonly projectList: IProject[] = [
    {
      id: 0,
      name: "Mutapi",
      description: {
        overview:
          "All of your bank statements in one dashboard!",
        detailed:
          `<p>Mutasi (bank statement) made easy - all of your bank statements in one place! Centralized bank statement dashboard.</p>
<ul>
  <li>Developed a scalable design for periodically crawling and aggregating bank statements from multiple accounts to achieve centralized bank statement dashboard</li>
  <li>Implemented API services for 3rd party access to the aggregated data</li>
</ul>`
      },
      img: "preview-mutapi.png",
      tagList: [SkillEnum.react, SkillEnum.puppeteer, SkillEnum.nextjs, SkillEnum.express, SkillEnum.mysql],
      url: {
        website: "https://mutapi.com"
      },
      releaseDate: "2018"
    },
    {
      id: 1,
      name: "Tes Kepribadian",
      description: {
        overview:
          "Online computer-assisted personality test",
        detailed:
          `<ul>
  <li>Implemented online computer-assisted personality test based on OMNI Personality Inventories</li>
  <li>Developed ReactJS web interfaces and Node.js backend APIs for psychologists and patients to manage and answer tests</li>
  <li>Currently being actively used by two Indonesian universities for identifying personality disorders in enrolling students</li>
</ul>`
      },
      img: "preview-teskepribadian.png",
      tagList: [SkillEnum.react, SkillEnum.nextjs, SkillEnum.express, SkillEnum.mysql, SkillEnum.digitalocean],
      url: {
        website: "https://teskepribadian.id"
      },
      releaseDate: "2018"
    },
    {
      id: 2,
      name: "Graduate Program System",
      description: {
        overview:
          "One-stop academic services platform for postgraduate students of School of Business and Management of ITB.",
        detailed:
          `<ul>
  <li>Designed and implemented the system based on the use-cases within the academic environment</li>
  <li>Implemented a seamless integration into the existing parent system using authentication callbacks</li>
  <li>Implemented periodic data synchronization with the parent system via API</li>
</ul>`
      },
      img: "preview-gps.png",
      tagList: [SkillEnum.php, SkillEnum.laravel, SkillEnum.bootstrap, SkillEnum.mysql],
      url: {
        website: "https://gps.sbm.itb.ac.id"
      },
      releaseDate: "2018"
    },
    {
      id: 3,
      name: "Peak Securities",
      description: {
        overview:
          "Company profile site for a brokerage firm based in Indonesia.",
        detailed:
          `<ul>
  <li>Designed a single-page company profile with Bootstrap 3</li>
  <li>Implemented the server-side controllers for managing news articles</li>
</ul>`
      },
      img: "preview-peak.png",
      tagList: [SkillEnum.php, SkillEnum.laravel, SkillEnum.bootstrap, SkillEnum.mysql],
      url: {
        website: "https://peaksekuritas.com"
      },
      releaseDate: "2018"
    }
  ];

  public static readonly repositoryList: IRepository[] = [
    {
      name: "render-ojn",
      description: "Renders O2Jam OJN/OJM to MP3/WAV/OGG music file",
      tagList: [SkillEnum.cpp],
      url: "https://github.com/djzmo/render-ojn"
    },
    {
      name: "coin-alert",
      description: "A NodeJS-based script to retrieve the most recent cryptocurrency prices from Bitcoin.co.id and send alert to predetermined Telegram group to monitor significant price changes.",
      tagList: [SkillEnum.node, SkillEnum.js],
      url: "https://github.com/djzmo/coin-alert"
    },
    {
      name: "notiby",
      description: "An iteration of coin-alert based on Ruby which fetches TradingView technical analysis indicators to generate personalized cryptocurrency alerts.",
      tagList: [SkillEnum.ruby, SkillEnum.mongodb],
      url: "https://github.com/djzmo/notiby"
    },
    {
      name: "portfolio",
      description: "Sources to this portfolio website.",
      tagList: [SkillEnum.node, SkillEnum.ts],
      url: "https://github.com/djzmo/portfolio"
    },
  ];

  public static readonly skillList: ISkillCategory[] = [
    {
      category: "Programming Languages",
      workingKnowledge: [
          "Java",
          "JavaScript",
          "PHP",
          "Typescript"
      ],
      basicKnowledge: [
          "C",
          "C++",
          "C#",
          "Go",
          "Python",
          "Ruby",
          "Visual Basic",
      ]
    },
    {
      category: "Databases",
      workingKnowledge: [
          "MongoDB",
          "MySQL",
          "NoSQL",
          "Redis",
          "SQLite"
      ],
      basicKnowledge: [
          "DynamoDB",
          "ElasticSearch",
          "Filemaker",
          "Microsoft SQL Server",
          "PostgreSQL"
      ]
    },
    {
      category: "Libraries & Frameworks",
      workingKnowledge: [
          "Bootstrap",
          "Express",
          "Laravel",
          "Next.js",
          "Node.js",
          "React",
          "Spring Boot"
      ],
      basicKnowledge: [
          "Android SDK",
          "CodeIgniter",
          "Lumen",
          "Rails",
          "SailsJS",
          "Sinatra",
          "Slim"
      ]
    },
    {
      category: "Tools & Platforms",
      workingKnowledge: [
          "AWS",
          "DigitalOcean",
          "Docker",
          "JetBrains",
          "Terraform"
      ],
      basicKnowledge: [
          "Ansible"
      ]
    },
  ];

  public static readonly socialIconList: ISocialIcon[] = [
    {
      id: "ln",
      name: "LinkedIn",
      url: "https://linkedin.com/in/yanadwi",
      icon: "fab fa-linkedin"
    },
    {
      id: "gh",
      name: "GitHub",
      url: "https://github.com/djzmo",
      icon: "fab fa-github"
    },
    {
      id: "em",
      name: "Email",
      url: "mailto:yana@dwiputra.net",
      icon: "fa fa-envelope"
    }
  ];

  public static readonly resumeUrl: string = "static/resume.pdf";

  public static readonly copyrightText: string = `Copyright © ${moment().year()} Yana Dwi Putra Nugraha`;
}
