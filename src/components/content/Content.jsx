import React from "react";
import Gallery from "../gallery/Gallery";
import SkillCard from "../skillsCard/SkillCard";
import ExperienceCard from "../experiencesCard/ExperienceCard.jsx";
import Footer from "../footer/Footer.jsx";
import galleryoneimage from "../../assets/images/galleryoneimage.webp";
import gallerytwoimage from "../../assets/images/gallerytwoimage.webp";
import { textOne, textTwo, cardObject, experienceObject } from "./content.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";

function Content() {
  return (
    <>
      <div className="contentStyle">
        <Container>
          <Row>
            <Col xs={12} md={12}  >
              <h2 className="titleStyle">
                SENIOR <br />
                EXPERIENCE <br />
                DESIGNER©
              </h2>
              <h5 className="textStyle">
                CURRENTLY CRAFTING <br /> EXPERIENCES AT CROSBY
              </h5>
              <h5 className="yearStyle">(2021 – PRESENT)</h5>
              <div className="imageContainer">
                <Gallery src={gallerytwoimage} text={textOne} />
                <Gallery src={galleryoneimage} text={textTwo} />
              </div>
            </Col>
          </Row>
        </Container> <br /> <br /> <br /> <br /> <br />


        <Container>
          <div className="skillsContainer">
            <h3 className="skillStyle">
              My tried-and-true <br /> design process
            </h3> <br /> <br /> <br />

            {cardObject.length > 0 && (
              <Row>
                {cardObject.map((element, index) => (
                  <Col key={index} xs={12} lg={4} md={6}>
                    <SkillCard
                      number={element.number}
                      title={element.title}
                      text={element.text}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container> <br /> <br /> <br /> <br />


        <Container>
          <div className="experienceContainer">
            <h1 className="experienceStyle display-4 display-md-4">
              RELEVANT <br />
              EXPERIENCE
            </h1> <br /> <br /> <br />

            {experienceObject.length > 0 && (
              <Row>
                {experienceObject.map((element, index) => (
                  <Col key={index} xs={12} lg={12} md={12}>
                    <ExperienceCard
                      title={element.title}
                      subTitle={element.subTitle}
                      text={element.text}
                      year={element.year}
                    />
                  </Col>
                ))}
              </Row>
            )}

            <Row className="justify-content-center">

            </Row>
            <Col xs={12} sm={6} className="text-center mb-3">
              <Button
                variant="light"
                className="rounded-pill py-2 px-4 mr-sm-2 mb-2 "
                style={{fontSize : '18px', marginRight: '3%'}}
              >
                VIEW WORK
              </Button>
              <Button
                variant="dark"
                className="rounded-pill py-2 px-4"
                style={{fontSize : '18px'}}

              >
                VIEW RESUME
              </Button>
            </Col>
          </div>
        </Container> <br /> <br /> <br /> <br />
      </div>
    </>
  );
}

export default Content;

