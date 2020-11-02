import * as React from "react";
import {Icon} from "@iconify/react";
import googleChromeIcon from "@iconify/icons-simple-icons/googlechrome";
import nextDotJsIcon from "@iconify/icons-simple-icons/next-dot-js";
import digitalOceanIcon from "@iconify/icons-simple-icons/digitalocean";

import "./skill.scss";
import { SkillEnum } from "../../../constants";

interface IProps {
  skill: SkillEnum;
  size: string;
}

export interface ISkill {
  name: string;
  icon: string;
  iconVariant?: string;
  showAsDefault?: boolean;
  faIcon?: string;
  iconElement?: any;
}

export const skillMap: Map<SkillEnum, ISkill>  = new Map<SkillEnum, ISkill> ([
  [SkillEnum.html5, { name: 'HTML 5', icon: 'html5', showAsDefault: false}],
  [SkillEnum.css3, { name: 'CSS 3', icon: 'css3', showAsDefault: false}],
  [SkillEnum.sass, { name: 'Sass', icon: 'sass', showAsDefault: false}],
  [SkillEnum.js, { name: 'JavaScript', icon: 'javascript'}],
  [SkillEnum.ts, { name: "TypeScript", icon: "typescript" }],
  [SkillEnum.php, { name: "PHP", icon: "php" }],
  [SkillEnum.jquery, { name: "JQuery", icon: "jquery", showAsDefault: false }],
  [SkillEnum.react, { name: "React", icon: "react" }],
  [SkillEnum.redux, { name: "Redux", icon: "", faIcon: "code", showAsDefault: false }],
  [SkillEnum.angular2, { name: "Angular 2+", icon: "angularjs", showAsDefault: false }],
  [SkillEnum.jasmine, { name: "Jasmine", icon: "jasmine", showAsDefault: false }],
  [SkillEnum.webpack, { name: "Webpack", icon: "webpack", showAsDefault: false }],
  [SkillEnum.grunt, { name: "Grunt", icon: "grunt", showAsDefault: false }],
  [SkillEnum.gulp, { name: "Gulp", icon: "gulp", showAsDefault: false }],
  [SkillEnum.node, { name: "Node", icon: "nodejs" }],
  [SkillEnum.csharp, { name: "C#", icon: "csharp", showAsDefault: false }],
  [SkillEnum.java, { name: "Java", icon: "java" }],
  [SkillEnum.mongodb, { name: "MongoDB", icon: "mongodb" }],
  [SkillEnum.postgresql, { name: "PostgreSQL", icon: "postgresql", showAsDefault: false }],
  [SkillEnum.git, { name: "Git", icon: "git" }],
  [SkillEnum.nginx, { name: "Nginx", icon: "nginx", showAsDefault: false }],
  [SkillEnum.vs, { name: "Visual Studio", icon: "visualstudio", showAsDefault: false }],
  [SkillEnum.android, { name: "Android", icon: "android", showAsDefault: false }],
  [SkillEnum.ionic, { name: "Ionic", icon: "", faIcon: "code", showAsDefault: false }],
  [SkillEnum.websockets, { name: "Websockets", icon: "", faIcon: "plug", showAsDefault: false }],
  [SkillEnum.panelleum, { name: "Panelleum", icon: "", faIcon: "columns", showAsDefault: false }],
  [SkillEnum.processing, { name: "Processing", icon: "", faIcon: "code", showAsDefault: false }],
  [SkillEnum.puppeteer, { name: "Puppeteer", icon: "", iconElement: <Icon className="icon" icon={googleChromeIcon} />, showAsDefault: false }],
  [SkillEnum.nextjs, { name: "NextJS", icon: "", iconElement: <Icon className="icon" icon={nextDotJsIcon} /> }],
  [SkillEnum.laravel, { name: "Laravel", icon: "laravel" }],
  [SkillEnum.bootstrap, { name: "Bootstrap", icon: "bootstrap" }],
  [SkillEnum.express, { name: "Express", icon: "express", iconVariant: "original" }],
  [SkillEnum.mysql, { name: "MySQL", icon: "mysql"}],
  [SkillEnum.digitalocean, { name: "DigitalOcean", icon: "", iconElement: <Icon className="icon" icon={digitalOceanIcon} />, showAsDefault: false }],
]);

const Skill: React.StatelessComponent<IProps> = props => {
  const { skill, size } = props; 

  const skillDetails = skillMap.get(skill);

  if (!skillDetails) {
    return null;
  }

  const { name, icon, iconVariant, faIcon, iconElement } = skillDetails;

  const renderIcon = () => {
    if (iconElement != null) {
      return iconElement;
    } else {
      return <i className={'icon ' + (faIcon ? `fas fa-${faIcon}` : `devicon-${icon}-${iconVariant ? iconVariant : 'plain'}`)} />;
    }
  };

  return (
    <div className={`skill-container ${size}`}>
      {renderIcon()}
      <span className="name">{name}</span>
    </div>
  );
};

export default Skill;
