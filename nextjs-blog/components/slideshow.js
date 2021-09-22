import Image from "next/dist/client/image"
import { styles } from "./slideshow.module.css";
import React from "react";
import { UncontrolledCarousel, Row, Col, Container } from "reactstrap";

const items = [
  {
    src: "/images/photos_site/slide1.jpg",
    altText: "Slide 3",
    caption: "Vacantion in Albania",
    header: " ",
    key: "3",
  },
  {
    src: "/images/photos_site/slide2.jpg",
    altText: "Slide 2",
    caption: "Me at the football",
    header: " ",
    key: "2",
  },
  {
    src: "/images/photos_site/slide3.jpg",
    altText: "Slide 3",
    caption: "Me in Germany",
    header: " ",
    key: "1",
  },
  {
    src: "/images/photos_site/slide4.jpg",
    altText: "Slide 4",
    caption: "Vacantion in Albania 2",
    header: " ",
    key: "4",
  },
];

export default function Slideshow () {
    return(
    <Container className="section">
     <Row> <Col md="8" className="mx-auto">
                    <h3 className="section-subtitle">Some photos</h3>
                    </Col>
                    </Row>
        <Row>
            <Col md="8" className="mx-auto">
                <UncontrolledCarousel items={items} />
            </Col>
        </Row>
    </Container>
  )
}
