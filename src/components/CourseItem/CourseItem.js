import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CourseItem({id ,img , title , text}) {
    
    return (
        <div>

            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary">
                        <Link to={`/course/${id}`} style={{textDecoration:'none', color:'#fff'}}>خرید دوره</Link>
                    </Button>
                </Card.Body>
            </Card>

        </div>

    )
}

export default CourseItem;