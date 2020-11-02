import * as React from "react";

import "./contact.scss";
import SocialIcon, { ISocialIcon } from "../../shared/social/social";

interface IProps {
  socialIconList: ISocialIcon[];
}

const Contact: React.StatelessComponent<IProps> = ({socialIconList}) => {
  return (
    <section className="section section-theme">
      <h2>Get in touch</h2>

      <div className="contact-container">
        <div className="social-container">
          {socialIconList.map((social, i) => (
            <SocialIcon key={i} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
