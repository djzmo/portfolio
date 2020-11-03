import * as React from "react";

import "./contact.scss";
import SocialIcon, { ISocialIcon } from "../../shared/social/social";

interface IProps {
  socialIconList: ISocialIcon[];
}

class Contact extends React.Component<IProps, {}> {
  render() {
    const {socialIconList} = this.props;
    return (
      <section className="section section-theme">
        <h2>Get In Touch</h2>

        <div className="contact-container">
          <div className="social-container">
            {socialIconList.map((social, i) => (
                <SocialIcon key={i} social={social} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
