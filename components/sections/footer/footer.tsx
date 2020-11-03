import * as React from "react";

import "./footer.scss";

interface IProps {
  copyrightText: string
}

class Footer extends React.Component<IProps, {}> {
  public render() {
    const {copyrightText} = this.props;

    return (
        <footer className="section section-dark section-footer">
          <div className="footer-container">{copyrightText}</div>
        </footer>
    );
  }
}

export default Footer;
