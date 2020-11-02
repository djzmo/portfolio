import * as React from "react";

import "./info-card.scss";

interface IProps {
  cardDetails: IInfoCard;
}

export interface IInfoCard {
  logo: string;
  headings: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
  descriptionList: string[];
  isLast?: boolean;
}

const InfoCard: React.StatelessComponent<IProps> = props => {
  const {
    cardDetails: { logo, headings, descriptionList, isLast }
  } = props;

  return (
    <div className={"info-card-container" + (isLast ? " last-card" : "")}>
      <div className="logo-container">
        <img src={`/static/images/logos/${logo}`} />
      </div>

      <div className="details-container">
        <h3 dangerouslySetInnerHTML={{__html: headings.primary}} />
        {headings.secondary && <h4>{headings.secondary}</h4>}
        {headings.tertiary && <h5 dangerouslySetInnerHTML={{__html: headings.tertiary}} />}
        <ul>
          {descriptionList.map((description) => (
              <li dangerouslySetInnerHTML={{__html: description}} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
