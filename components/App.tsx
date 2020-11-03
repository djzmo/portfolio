import * as React from "react";
import "./App.scss";

import Landing from "./sections/landing/landing";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Education from "./sections/education/education";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import PortfolioDataService from "../services/portfolio-data.service";

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing userDetails={PortfolioDataService.userDetails}
                 socialIconList={PortfolioDataService.socialIconList}
                 resumeUrl={PortfolioDataService.resumeUrl} />
        <About userDetails={PortfolioDataService.userDetails}
               aboutTextList={PortfolioDataService.aboutTextList}
               aboutSummaryTextList={PortfolioDataService.aboutSummaryTextList}
               skillSummaryList={PortfolioDataService.skillSummaryList} />
        <Education educationList={PortfolioDataService.educationList} />
        <Experience experienceList={PortfolioDataService.experienceList} />
        <Skills categoryList={PortfolioDataService.skillList} />
        <Projects projectList={PortfolioDataService.projectList}
                  repositoryList={PortfolioDataService.repositoryList} />
        <Contact socialIconList={PortfolioDataService.socialIconList} />
        <Footer copyrightText={PortfolioDataService.copyrightText} />
      </div>
    );
  }
}

export default App;
