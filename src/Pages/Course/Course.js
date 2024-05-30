import { useParams } from 'react-router-dom';
import MyNavbar from '../../components/Navbar/Navbar';
import courseData from '../../CourseData';
import { Col, Container, Row } from 'react-bootstrap';

function Course() {
    const paramsValue = useParams().idnumber
    const courseInfo = courseData.find(course => course.id == paramsValue)

    return (
        <div>
            <MyNavbar />

            <Container >
                <Row className='align-items-center'>

                    <Col md={6}>
                        <img src={courseInfo.img} className='img-fluid' />
                    </Col>

                    <Col md={6} className=''>
                        <h2 style={{ fontFamily: "lalezar" }}>{courseInfo.title}</h2>
                        <p>نام مدرس : {courseInfo.teacher} </p>
                        <p><b>{courseInfo.text}</b></p>
                        <p style={{ textAlign: 'justify' }}>بدون شک، برنامه نویسی یکی از مهم‌ترین مهارت‌هایی است که امروزه نه تنها برای فارغ التحصیلان و دانشجویان رشته مهندسی کامپیوتر، بلکه برای سایر رشته‌ها و زمینه‌ها نیز به شکل ضروری، مورد نیاز است. هر ساله، بر تعداد موقعیت‌های شغلی که مرتبط با برنامه‌نویسی هستند و یا پیش‌نیاز اصلی آن‌ها برنامه‌نویسی است، افزوده می‌شود. از طرفی، بخشی جدا نشدنی از فرایند تحقیق و پژوهش در اکثر رشته‌های دانشگاهی امروزی، کار با کامپیوتر و توانایی پیاده‌سازی ایده‌ها و الگوریتم‌ها در قالب برنامه‌های کامپیوتری است. قطعا در این مسیر، دانشجویان نیازمند یادگیری و کسب مهارت‌های برنامه‌نویسی هستند.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Course;