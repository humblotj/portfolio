/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Portfolio.scss";
// @ts-ignore
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import Modal from "react-modal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import worksAll from "../data/works.json";
import { Work } from "../data/interface";

import { ReactComponent as GitHubIcon } from "../assets/icons/github.svg";
import Element from "./Element";

Modal.setAppElement("#root");

type Tab = "All" | "Works" | "Personal Projects";

class Portfolio extends Component<
  { size: { width: number } },
  { activeTab: Tab; works: Work[]; activeWork: Work | null }
> {
  tabs: Tab[] = ["All", "Works", "Personal Projects"];

  constructor(props: { size: { width: number } }) {
    super(props);
    this.state = { activeTab: "All", works: worksAll, activeWork: null };
  }

  changeTab = (activeTab: Tab) => {
    let works = worksAll;
    if (activeTab === "Works") {
      works = works.filter((work) => !work.isPersonal);
    } else if (activeTab === "Personal Projects") {
      works = works.filter((work) => work.isPersonal);
    }
    this.setState({ activeTab, works });
  };

  toggleModal = (activeWork: Work | null) => {
    this.setState({ activeWork });
  };

  render() {
    const { activeTab, works, activeWork } = this.state;
    const {
      size: { width },
    } = this.props;

    return (
      <Element name="portfolio" className="portfolio">
        <header>
          <h2>Portfolio</h2>
        </header>
        <div className="tabs">
          <ul>
            {this.tabs.map((tab) => (
              <li key={tab}>
                <a
                  href="#"
                  className={activeTab === tab ? "active" : ""}
                  onClick={(event) => {
                    event.preventDefault();
                    this.changeTab(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <StackGrid
          columnWidth={width <= 600 ? "100%" : "50%"}
          gutterWidth={20}
          gutterHeight={20}
        >
          {works.map((work) => (
            <div className="item-container" key={work.id}>
              <div
                className={work.platform + " img-wrap"}
                onClick={() => this.toggleModal(work)}
              >
                {work.img.length ? (
                  <img src={work.img[0]} alt="preview" />
                ) : (
                  <span className="not-released">
                    Not officially released yet
                  </span>
                )}
              </div>
              <div className="item-info">
                <h3 className="item-name">{work.name}</h3>
                <span className="item-desc">{work.shortDesc}</span>
                <ul className="item-techs">
                  {work.techs.map((tech, index) => (
                    <li key={index}>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </StackGrid>
        <Modal
          overlayClassName="dark-overlay"
          className="modal"
          isOpen={!!activeWork}
          onRequestClose={() => this.toggleModal(null)}
        >
          <h2>{activeWork?.name}</h2>
          <button onClick={() => this.toggleModal(null)}></button>
          <div className="modal-main">
            {activeWork?.img.length ? (
              <Carousel
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoFocus={true}
              >
                {activeWork?.img.map((i, index) => (
                  <div key={index}>
                    <img src={i} alt="preview" />
                  </div>
                ))}
              </Carousel>
            ) : (
              <span className="not-released carousel-root">
                Not officially released yet
              </span>
            )}

            <div className="project-info-container">
              <div>
                <h3>Project Info:</h3>
                <p>{activeWork?.desc}</p>
              </div>
              <div>
                <h3>Project Details:</h3>
                <ul>
                  <li>
                    <span>Technologies:&nbsp;</span>
                    <ol>
                      {activeWork?.techs.map((tech, index) => (
                        <li key={index}>
                          <span>{(index ? ", " : "") + tech}</span>
                        </li>
                      ))}
                    </ol>
                  </li>
                  <li>
                    <span>Year:&nbsp;</span>
                    {activeWork?.year}
                  </li>
                  <li className="links">
                    <span>URL:&nbsp;</span>
                    {activeWork?.links.length
                      ? activeWork?.links.map((link, index) => (
                          <a href={link.long} key={index}>
                            {(index ? ", " : "") + link.short}
                          </a>
                        ))
                      : "Not Available"}
                  </li>
                  {activeWork?.gitHub && (
                    <li>
                      <a href={activeWork.gitHub} className="gitHub-link">
                        <GitHubIcon />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </Element>
    );
  }
}

export default sizeMe()(Portfolio);
