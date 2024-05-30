import {Row, Col } from "react-bootstrap";


function ArticleItem({ title, desc, time, writer, img }) {
    return (
        
            <Row style={{border:'1px solid #000',borderRadius:'20px',padding:'6px'}}>
                <Col xs={6} lg={8}>
                    <h4 style={{fontFamily:'Lalezar'}} className="p-3">{title}</h4>
                    <p className="d-none d-md-block">{desc}</p>
                    <div className="d-flex align-items-end justify-content-between text-muted small">
                        <p>{time}</p>
                        <p>{writer}</p>
                        <button className="btn btn-outline-primary btn-sm d-none d-lg-block">ادامه مطلب</button>
                    </div>
                </Col>

                <Col xs={6} lg={4} className="d-flex align-items-center">
                    <div>  
                    <img  src={img} className="img-fluid rounded " />
                    </div>
                </Col>
            </Row>
    )
}
export default ArticleItem;