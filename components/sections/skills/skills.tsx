import * as React from "react";

import "./skills.scss";

interface IProps {
  categoryList: ISkillCategory[];
}

export interface ISkillCategory {
  category: string;
  workingKnowledge: string[];
  basicKnowledge: string[];
}

class Skills extends React.Component<IProps, {}> {
  public render() {
    const {categoryList} = this.props;
    return (
        <section className="section section-primary">
          <h2>Skills at a Glance</h2>
          <div className="skills-container">
            {categoryList.map((category) => {
              return (
                  <div className="category-column">
                    <h4>{category.category}</h4>
                    <p><b>Working Knowledge</b></p>
                    <ul>
                      {category.workingKnowledge.map((skill) => {
                        return (<li>{skill}</li>);
                      })}
                    </ul>
                    <p><b>Basic Knowledge</b></p>
                    <ul>
                      {category.basicKnowledge.map((skill) => {
                        return (<li>{skill}</li>);
                      })}
                    </ul>
                  </div>
              )
            })}
          </div>
        </section>
    );
  }
}


export default Skills;
