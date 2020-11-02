import * as React from "react";

import "./social.scss";

interface IProps {
  social: ISocialIcon;
  inline?: boolean;
}

export interface ISocialIcon {
  id: string;
  name: string;
  icon: string;
  url: string;
}

const SocialIcon: React.StatelessComponent<IProps> = props => {
  const {
    social: { id, name, icon, url }, inline
  } = props;

  const renderDefault = () => {
      return <a href={url} className={`social-item-container ${id}`}>
          <div className="icon-container">
              <i className={`icon fab ${icon}`} />
          </div>
          <span className="name">{name}</span>
      </a>;
  };

  const renderInline = () => {
      return <a href={url}><i className={`icon inline fab ${icon}`} /> {url.substring(8)}</a>
  };

  return inline ? renderInline() : renderDefault()
};

export default SocialIcon;
