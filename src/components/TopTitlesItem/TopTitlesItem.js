import { Col } from "react-bootstrap";


function TopTitlesItem({ title, img }) {
    return (
                <Col style={{border:'1px solid #000',borderRadius:'20px',padding:'8px'}}>
                    <h4 style={{fontFamily:'Lalezar',textAlign:'center'}}>{title}</h4>
                    <img  src={img} className="img-fluid rounded " />
                </Col>
    )
}
export default TopTitlesItem;