import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import User from 'react-icons/lib/fa/user';
import './Header.css'
import { Link } from "react-router-dom";

  const Header = () => (
    <div>
      <Container>
          <Row className="header">
            <Col sm="1" className="free-time">FreeTime</Col>
            <Col  sm={{ size: 2, offset: 9 }}><Link to="/"><User className="icon" /></Link> Submit a Cupon</Col>
          </Row>
        </Container>
      </div>
);

export default Header;
