import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../assets/images/appstore.svg';
import img2 from '../../assets/images/chplay.svg';

export default function FooterComponent() {
    const ic_facebook = <FontAwesomeIcon className="fontSize25 white " icon={faFacebook} />
    const ic_skype = <FontAwesomeIcon className="fontSize25 white" icon={faSkype} />
    const ic_twitter = <FontAwesomeIcon className="fontSize25 white" icon={faTwitter} />
    const ic_linkedin = <FontAwesomeIcon className="fontSize25 white" icon={faLinkedin} />
    const ic_mapMaker = <FontAwesomeIcon className="fontSize25 mr-2" icon={faMapMarkerAlt} />
    const ic_mobileAlt = <FontAwesomeIcon className="fontSize25 mr-2" icon={faMobileAlt} />
    const ic_envelope = <FontAwesomeIcon className="fontSize25 mr-2" icon={faEnvelope} />
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="aboutUsTitle font-weight-bold pb-2">
                            Về chúng tôi
                        </div>
                        <div className="aboutUsContent">
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a search for 'lorem ipsum' will unco many web sites still in their infancy
                            </div>
                        <div className="font-weight-bold pt-2">Điều khoản và điều lệ</div>
                    </Col>
                    <Col md={3}>
                        <form>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="exampleInputEmail1">Gửi Email phản hồi</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail@example.com" />
                                <small id="emailHelp" className="form-text text-muted">Email của bạn sẽ được bảo mật</small>
                            </div>
                            <div className="form-group font-weight-bold">
                                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                    </Col>
                    <Col md={3}>
                        <div className="download font-weight-bold pb-2">Tải App</div>
                        <div className="chPlay pb-1">
                            <img src={img1} alt="ChPlay" />
                        </div>
                        <div className="appStore">
                            <img src={img2} alt="Appstore" />
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="contactTitle font-weight-bold pb-2">Thông tin liên hệ</div>
                        <div className="address pb-1">
                           {ic_mapMaker} 38 Nail Street, New York, USA
                        </div>
                        <div className="phoneNumber pb-1">
                            {ic_mobileAlt} +84 3123 9123
                        </div>
                        <div className="supportMail">
                            {ic_envelope} nail.system.2019@gmail.com
                        </div>
                        <Row className="footSocial">
                            <Col sm={3}>
                                <a href="https://www.twitter.com" rel="noopener noreferrer">
                                    {ic_twitter}
                                </a>
                            </Col>
                            <div className="col-sm-3">
                                <a href="https://www.linkedin.com" rel="noopener noreferrer">
                                    {ic_linkedin}
                                </a>
                            </div>
                            <div className="col-sm-3">
                                <a href="https://www.facebook.com" rel="noopener noreferrer">
                                    {ic_facebook}
                                </a>
                            </div>
                            <div className="col-sm-3">
                                <a href="https://www.skype.com" rel="noopener noreferrer">
                                    {ic_skype}
                                </a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="footBar">
                <Container>
                    <div className="copywright">2019 Copywright by Nails-system Corp</div>
                </Container>
            </div>
        </div>
    )
}
