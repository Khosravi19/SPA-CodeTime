import { Col, Container, Row } from "react-bootstrap";
import articleData from '../../ArticleData'
import TopTitlesItem from "../TopTitlesItem/TopTitlesItem";


function TopTitle() {
    return (
        <Container>
            <Row>
                {articleData.map(article => (
                    <Col lg={4} key={article.id} className='my-2'>
                        <TopTitlesItem {...article} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default TopTitle;