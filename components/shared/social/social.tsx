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
              <i className={`icon ${icon}`} />
          </div>
          <span className="name">{name}</span>
      </a>;
  };

  const renderUrl = (url) => {
      if (url.startsWith('https://')) {
          return url.substring(8);
      } else if (url.startsWith('http://') || url.startsWith('mailto:')) {
          return url.substring(7);
      }

      return url;
  };

  const renderInline = () => {
      return <a className="inline" href={url}><i className={`icon inline fab ${icon}`} /> {renderUrl(url)}</a>
  };

  return inline ? renderInline() : renderDefault()
};

export default SocialIcon;
