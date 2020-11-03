import * as React from "react";

import "./education.scss";
import InfoCard, {IInfoCard} from "../../shared/info-card/info-card";

interface IProps {
  educationList: IInfoCard[];
}

class Education extends React.Component<IProps, {}> {
  render() {
    const {educationList} = this.props;
    return (
        <section className="section section-primary">
          <h2>Education</h2>

          <div className="content-container education-container">
            {educationList.map((exp, i) => (
                <InfoCard key={i} cardDetails={exp}/>
            ))}
          </div>
        </section>
    );
  }
}

export default Education;
