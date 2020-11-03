import * as React from "react";

import "./about.scss";
import {IUserDetails} from "../landing/landing";
import {SkillEnum} from "../../../constants";
import Skill from "../../shared/skill/skill";

const renderSkillSummary = (skillSummaryList: SkillEnum[]) => {
  if (skillSummaryList != null) {
    return (
        <>
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="skills-summary-container">
            {skillSummaryList.map((skill, i) => (
                <Skill key={i} skill={skill} size="small"/>
            ))}
          </div>
        </>
    )
  }
};

const renderAboutText = (aboutTextList: string[], skillSummaryList: SkillEnum[]) => (
    <div className="about-text">
      {aboutTextList.map((textSection, i) => (
          <p key={i} dangerouslySetInnerHTML={{__html: textSection}}/>
      ))}

      {renderSkillSummary(skillSummaryList)}
    </div>
);

interface IProps {
  userDetails: IUserDetails;
  aboutTextList: string[];
  aboutSummaryTextList: string[];
  skillSummaryList?: SkillEnum[];
}

class About extends React.Component<IProps, {}> {
  public render() {
    const {userDetails, aboutTextList, aboutSummaryTextList, skillSummaryList} = this.props;

    return (
        <section className="section section-primary section-about">
          <h2>About {userDetails.nickname}</h2>
          <div className="content-container about-container">
            <img className="portrait" src='/static/images/profile-picture.png'/>

            <div className="about-full-container">
              {renderAboutText(aboutTextList, skillSummaryList)}
            </div>
            <div className="about-summary-container">
              {renderAboutText(aboutSummaryTextList, skillSummaryList)}
            </div>
          </div>
        </section>
    );
  }
}

export default About;
