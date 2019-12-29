import React, { useState } from "react";
import { Card, Container, Row, Col, Badge, Modal } from "react-bootstrap";
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

import Search from "../../Components/Search/Search";
import DropdownCustom from "../../Components/Dropdown/Dropdown";
import data from "./Applicante";

const Show = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    keyword: "",
    major: "",
    jobTitle: "",
    sortBy: { value: "", label: "" },
    matchCV: { value: "", label: "" },
    experience: { value: "", label: "" }
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      sortBy: { value: "", label: "" },
      [e?.target?.name]: e?.target?.value
    }));
  };

  const likesFilter = filterData => {
    const result = [];
    filterData.forEach(element =>
      element.likes.forEach(like => {
        if (like.toLowerCase().includes(state.keyword.toLowerCase())) {
          result.push(element);
        }
      })
    );
    return result;
  };

  const jobFilter = filterData => {
    const result = [];
    filterData.forEach(element => {
      if (
        element.Position.pos
          .toLowerCase()
          .includes(state.jobTitle.toLowerCase())
      ) {
        result.push(element);
      }
    });
    return result;
  };

  const majorFilter = filterData => {
    const result = [];
    filterData.forEach(element => {
      if (
        element.university.major
          .toLowerCase()
          .includes(state.major.toLowerCase())
      ) {
        result.push(element);
      }
    });
    return result;
  };

  const allFilters = filterData => {
    const result = [];
    filterData.forEach(element => {
      if (
        element.Position.pos
          .toLowerCase()
          .includes(state.jobTitle.toLowerCase()) &&
        element.university.major
          .toLowerCase()
          .includes(state.major.toLowerCase()) &&
        result.push(element) &&
        element.likes.forEach(like =>
          like.toLowerCase().includes(state.keyword.toLowerCase())
        )
      ) {
        result.push(element);
      }
    });
    return result;
  };

  const filter = filterData => {
    let result = [];
    if (state.sortBy.value === "A-Z") {
      result = filterData.sort((a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0
      );
    } else if (state.sortBy.value === "Z-A") {
      result = filterData.sort((a, b) =>
        a.name < b.name ? 1 : a.name > b.name ? -1 : 0
      );
    } else if (state.jobTitle && state.keyword && state.major) {
      result = allFilters(filterData);
    } else if (state.jobTitle) {
      result = jobFilter(filterData);
    } else if (state.keyword) {
      result = likesFilter(filterData);
    } else if (state.major) {
      result = majorFilter(filterData);
    }
    if (
      state.sortBy.value === "" &&
      state.keyword === "" &&
      state.jobTitle === "" &&
      state.major === ""
    ) {
      result = data;
    }
    return result;
  };

  return (
    <Row className="show-container">
      <Col md={12} lg={8}>
        <Card className="show-content">
          <div className="top-text light-text">Uploaded CVs</div>
          {filter(data)?.map((cv, indexC) => (
            <Card key={indexC}>
              <Container className="cv-content">
                <Row style={{ width: "100%" }}>
                  <Col lg="auto" xl={1} className="profile-pic-content">
                    <img src={cv?.logo} alt="" className="profile-pic" />
                  </Col>
                  <Col lg={8} xl={10}>
                    <div className="applicant-content">
                      <div className="check-content ">
                        <div className="applicant-text ">{cv?.name}</div>
                        <FontAwesomeIcon icon={faUserCheck} />
                      </div>
                      <div className="flex light-text">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {cv?.address}
                      </div>
                      <div className="flex applicant-position">
                        <FontAwesomeIcon icon={faUserAlt} />
                        <div className="light-text">{`${cv?.Position.pos} of ${cv?.Position?.name} `}</div>
                        <div className="applicant-year light-text">
                          {` ${cv?.Position?.year?.from} - ${cv?.Position?.year?.to} `}
                        </div>
                      </div>
                      <div className="appicant-more">
                        <FontAwesomeIcon icon={faPlus} />2 More
                      </div>
                      <div className="flex applicant-position">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <div className="light-text">{`${cv?.university?.name} University, Major`}</div>
                        <div
                          style={{ color: "#0156b3" }}
                          className="applicant-year light-text"
                        >{` ${cv?.university?.major}`}</div>
                        <div className="applicant-year light-text">
                          {`${cv?.university?.year?.start} - ${cv?.university?.year?.end}`}
                        </div>
                      </div>
                      <div className="light-text">
                        <FontAwesomeIcon icon={faEnvelope} />
                        {cv?.email}
                      </div>
                    </div>
                    <div className="person-likes">
                      {cv?.likes?.map((like, indexL) => (
                        <Badge pill key={indexL} className="light-text">
                          {like}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                  <Col
                    lg={2}
                    xl={1}
                    className="check-content profile-pic-content"
                  ></Col>
                </Row>
              </Container>
            </Card>
          ))}
        </Card>
      </Col>
      <Col xs={4} className="d-none d-lg-block">
        <Card>
          <Card.Header>Filters</Card.Header>
          <Card.Body>
            <div className="dropdwon-content">
              <DropdownCustom
                icon={faSortAmountUp}
                name="Sort By"
                list={["A-Z", "Z-A"]}
                onChange={setState}
                title="sortBy"
                value={state.sortBy.value}
              />

              <DropdownCustom
                icon={faClone}
                name="Match CVs"
                list={["Name", "Address", "Position"]}
                onChange={setState}
                title="matchCV"
                value={state.matchCV.value}
              />

              <DropdownCustom
                icon={faBriefcase}
                name="Experience"
                list={["1-2 year", "3-5 year", "+10 yars"]}
                onChange={setState}
                title="experience"
                value={state.experience.value}
              />
            </div>

            <div className="search-contaniner">
              <div className="search-content">
                <Search
                  title="Search By Keyword"
                  onChange={onChange}
                  name="keyword"
                  value={state.keyword}
                />
              </div>
              <div className="search-content">
                <Search
                  title="Search By Job Title"
                  onChange={onChange}
                  name="jobTitle"
                  value={state.jobTitle}
                />
              </div>
              <div className="search-content">
                <Search
                  title="Search By Major"
                  onChange={onChange}
                  name="major"
                  value={state.major}
                />
              </div>
              <div className="search-content">
                <Search title="Search By Carrer level" />
              </div>
            </div>
            <div
              onClick={() =>
                setState({
                  keyword: "",
                  major: "",
                  jobTitle: "",
                  sortBy: { value: "", label: "" },
                  matchCV: { value: "", label: "" },
                  experience: { value: "", label: "" }
                })
              }
              style={{
                background: "#4c57b8",
                marginBottom: 10,
                float: "right"
              }}
              className="button"
            >
              Reset
            </div>
          </Card.Body>
        </Card>
      </Col>
      <div
        style={{ background: "#4c57b8" }}
        className="filter-button"
        onClick={handleShow}
      >
        Filters
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body>
            <div className="dropdwon-content">
              <DropdownCustom
                icon={faSortAmountUp}
                name="Sort By"
                list={["A-Z", "Z-A"]}
                onChange={setState}
                title="sortBy"
                value={state.sortBy.value}
              />

              <DropdownCustom
                icon={faClone}
                name="Match CVs"
                list={["Name", "Address", "Position"]}
                onChange={setState}
                title="matchCV"
                value={state.matchCV.value}
              />

              <DropdownCustom
                icon={faBriefcase}
                name="Experience"
                list={["1-2 year", "3-5 year", "+10 yars"]}
                onChange={setState}
                title="experience"
                value={state.experience.value}
              />
            </div>

            <div className="search-contaniner">
              <div className="search-content">
                <Search
                  title="Search By Keyword"
                  onChange={onChange}
                  name="keyword"
                  value={state.keyword}
                />
              </div>
              <div className="search-content">
                <Search
                  title="Search By Job Title"
                  onChange={onChange}
                  name="jobTitle"
                  value={state.jobTitle}
                />
              </div>
              <div className="search-content">
                <Search
                  title="Search By Major"
                  onChange={onChange}
                  name="major"
                  value={state.major}
                />
              </div>
              <div className="search-content">
                <Search title="Search By Carrer level" />
              </div>
            </div>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <div
            onClick={() =>
              setState({
                keyword: "",
                major: "",
                jobTitle: "",
                sortBy: { value: "", label: "" },
                matchCV: { value: "", label: "" },
                experience: { value: "", label: "" }
              })
            }
            style={{
              background: "#4c57b8",
              float: "right"
            }}
            className="button"
          >
            Reset
          </div>
          <div
            style={{ background: "#4c57b8" }}
            className="button"
            onClick={handleClose}
          >
            Close
          </div>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Show;
