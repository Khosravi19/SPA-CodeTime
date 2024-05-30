import { Col, Container, Row } from "react-bootstrap";
import Zlogo from '../../../src/assets/Images/Z150.png'
import Elogo from '../../../src/assets/Images/Enamad.png'
import Slogo from '../../../src/assets/Images/samandehi.png'
import Mlogo from '../../../src/assets/Images/Majazi.png'
import { Instagram, Linkedin, Telegram, TwitterX, Skype, Whatsapp } from 'react-bootstrap-icons';


function Footer() {
  return (
    <footer className="bg-primary-subtle p-2 mt-5">
      <Container >
        <Row>
          <Col lg={4} xl={5} className="text-center">
            <h4 style={{ fontFamily:'Lalezar',wordSpacing:'4px',marginTop:'10px'}}>تیم کد تایم با شما در شبکه های اجتمایی</h4>
            <ul className="d-flex justify-content-center list-unstyled fs-1">
              <li className="pe-4"><Instagram /></li>
              <li className="pe-4"><Telegram /></li>
              <li className="pe-4"><Whatsapp /></li>
              <li className="pe-4"><Skype />  </li>
              <li className="pe-4"><TwitterX /></li>
              <li ><Linkedin /></li>
            </ul>

            <hr />

            <h5 style={{ fontFamily: 'Lalezar', marginTop: '25px' }}>با عضویت در خبرنامه از آخرین تخفیف ها مطلع شوید</h5>

            <div className="d-flex position-relative mt-3">
              <input style={{ height: 52 }} className="w-100 p-3 rounded text-start" type="email" placeholder="ایمیل خود را وارد کنید" />
              <button className="position-absolute end-0 rounded bg-dark text-white p-2 m-1">عضویت</button>
            </div>

            <p className="text-center mt-4">© 2024 - کليه حقوق اين سايت متعلق به شرکت کدتایم می‌باشد.</p>
          </Col>

          <Col lg={8} xl={7} style={{ textAlign: "left", alignContent: 'center', textAlign: 'center' }}>
            <img src={Mlogo} className="d-none d-md-inline" style={{ width: '150px' }} />
            <img src={Slogo} className="" />
            <img src={Elogo} className="" />
            <img src={Zlogo} className="" />
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer;