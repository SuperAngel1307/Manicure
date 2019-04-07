import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NailerUpdate from "./NailerUpdate";
import NailerPruduct1 from "./NailerProduct1"

class ProfileNailer extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col sm={4} md={4} sx={4} >
            <NailerUpdate />
          </Col>
          <Col sm={8} md={8} sx={8}>
            <NailerPruduct1 />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileNailer;