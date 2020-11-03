import * as React from "react";

import "./experience.scss";
import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";

interface IProps {
  experienceList: IInfoCard[];
}

class Experience extends React.Component<IProps, {}> {
  public render() {
    const { experienceList } = this.props;
    return (
      <section className="section section-secondary">
        <h2>Work Experiences</h2>

        <div className="content-container experience-container">
          {experienceList.map((exp, i) => (
              <InfoCard key={i} cardDetails={exp} />
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;
