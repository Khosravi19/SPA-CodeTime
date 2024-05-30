import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import articleData from '../../ArticleData'
import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import './Article.css'

function Article() {

    const [clickedLink, setClickedLink] = useState('Article');

    return (
        <div>
            <MyNavbar />
            <div className='d-flex justify-content-center'>
                <Link
                    to=''
                    className={`title ${clickedLink === 'Article' ? 'clicked' : ''}`}
                    onClick={() => setClickedLink('Article')}> آخرین مقالات
                </Link>

                <Link
                    to='TopTitle'
                    className={`title ${clickedLink === 'TopTitle' ? 'clicked' : ''}`}
                    onClick={() => setClickedLink('TopTitle')}> عناوین برتر
                </Link>
            </div>

            <Outlet />

            <Container>
                <Row>
                    {articleData.map(article => (
                        <Col lg={12} key={article.id} className='my-1'>
                            <ArticleItem {...article} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Footer />

        </div >
    )
}

export default Article;