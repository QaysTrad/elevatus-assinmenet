import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUserAlt,
  faGraduationCap,
  faEnvelope,
  faUserCheck,
  faPlus,
  faSortAmountUp,
  faClone,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

import SmallPic from "../../Assets/Images/35295307.jpeg";
import Search from "../../Components/Search/Search";
import DropdownCustom from "../../Components/Dropdown/Dropdown";

const data = [
  {
    logo: SmallPic,
    name: "Mikel lang",
    address: "2301 market Street, Philadelphia, PA USA",
    Position: {
      name: "lorem lpsum",
      year: {
        from: "Aug 2018",
        to: "Present"
      }
    },
    university: { name: "Lorem lpsum", year: { start: "2012", end: "2019" } },
    email: "qaystrad@gmail.com",
    likes: [
      "Photoshop",
      "Illstrator",
      "Coreldrew X5",
      "Lerom",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum"
    ]
  },
  {
    logo: SmallPic,
    name: "Mikel lang",
    address: "2301 market Street, Philadelphia, PA USA",
    Position: {
      name: "lorem lpsum",
      year: {
        from: "Aug 2018",
        to: "Present"
      }
    },
    university: { name: "Lorem lpsum", year: { start: "2012", end: "2019" } },
    email: "qaystrad@gmail.com",
    likes: [
      "Photoshop",
      "Illstrator",
      "Coreldrew X5",
      "Lerom",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum"
    ]
  },
  {
    logo: SmallPic,
    name: "Mikel lang",
    address: "2301 market Street, Philadelphia, PA USA",
    Position: {
      name: "lorem lpsum",
      year: {
        from: "Aug 2018",
        to: "Present"
      }
    },
    university: { name: "Lorem lpsum", year: { start: "2012", end: "2019" } },
    email: "qaystrad@gmail.com",
    likes: [
      "Photoshop",
      "Illstrator",
      "Coreldrew X5",
      "Lerom",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum",
      "Lerom lpsum"
    ]
  }
];

const Show = () => (
  <Row className="show-container">
    <Col xs={8} lg={8}>
      <Card className="show-content">
        <div className="top-text light-text">Uploaded CVs</div>
        {data.map((cv, indexC) => (
          <Card key={indexC}>
            <Container className="cv-content">
              <Row>
                <Col xs={1} className="profile-pic-content">
                  <img src={cv.logo} alt="" className="profile-pic" />
                </Col>
                <Col xs={10}>
                  {" "}
                  <div className="applicant-content">
                    <div className="applicant-text ">{cv.name}</div>
                    <div className="flex light-text">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {cv.address}
                    </div>
                    <div className="flex applicant-position">
                      <FontAwesomeIcon icon={faUserAlt} />
                      <div className="light-text">{`Director of ${cv.Position.name} `}</div>
                      <div className="applicant-year light-text">
                        {` ${cv.Position.year.from} - ${cv.Position.year.to} `}
                      </div>
                    </div>
                    <div className="appicant-more">
                      <FontAwesomeIcon icon={faPlus} />2 More
                    </div>
                    <div className="flex applicant-position">
                      <FontAwesomeIcon icon={faGraduationCap} />
                      <div className="light-text">{`${cv.university.name} University`}</div>
                      <div className="applicant-year light-text">
                        {`${cv.university.year.start} - ${cv.university.year.end}`}
                      </div>
                    </div>
                    <div className="light-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                      {cv.email}
                    </div>
                  </div>
                  <div className="person-likes">
                    {cv.likes.map((like, indexL) => (
                      <Badge pill key={indexL} className="light-text">
                        {like}
                      </Badge>
                    ))}
                  </div>
                </Col>
                <Col xs={1} className="check-content profile-pic-content">
                  <FontAwesomeIcon icon={faUserCheck} />
                </Col>
              </Row>
            </Container>
          </Card>
        ))}
      </Card>
    </Col>
    <Col xs={4}>
      <Card>
        <Card.Header>Filters</Card.Header>
        <Card.Body>
          <div className="dropdwon-content">
            <DropdownCustom
              icon={faSortAmountUp}
              name="Sort By"
              list={["Name", "Address", "Position"]}
            />

            <DropdownCustom
              icon={faClone}
              name="Match CVs"
              list={["Name", "Address", "Position"]}
            />

            <DropdownCustom
              icon={faBriefcase}
              name="Experience"
              list={["Name", "Address", "Position"]}
            />
          </div>

          <div className="search-contaniner">
            <div className="search-content">
              <Search name="Search By Keyword" />
            </div>
            <div className="search-content">
              <Search name="Search By Job Title" />
            </div>
            <div className="search-content">
              <Search name="Search By Major" />
            </div>
            <div className="search-content">
              <Search name="Search By Carrer level" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Show;
