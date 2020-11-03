import * as React from "react";
import {Icon} from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";

import "./repository.scss";
import { SkillEnum } from "../../../constants";
import {skillMap} from "../skill/skill";

interface IProps {
  repositoryDetails: IRepository;
}

export interface IRepository {
  name: string;
  description: string;
  tagList: SkillEnum[];
  url: string;
}

const Repository: React.StatelessComponent<IProps> = props => {
  const {
    repositoryDetails: {
      name,
      description,
      url,
      tagList
    }
  } = props;

  return (
    <div
      className="repository-container"
    >
      <a className="repository-card" href={url} target="_blank">
        <div className="body">
          <div className="description-container">
            <h5><Icon icon={githubIcon} /> {name}</h5>
            <p>{description}</p>
            <p className="repository-tags-container">
              {tagList.map((tag) => (
                  <span>{skillMap.get(tag).name}</span>
              ))}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Repository;
