import { Col, Container, Row } from 'react-bootstrap';
import MyNavbar from '../../components/Navbar/Navbar';
import HomeImg from '../../assets/Images/langpic.png'
import CourseItem from '../../components/CourseItem/CourseItem';
import Footer from '../../components/Footer/Footer';
import courseData from '../../CourseData';

function Home() {
    
    return (
        <div>
            <MyNavbar />
            <Container fluid='sm'>
                <Row className='align-items-center'>
                    <Col lg='6'>
                        <h2 style={{fontFamily:'Lalezar'}} className='mb-5'>آموزش برنامه نویسی آنلاین با کد تایم</h2>
                        <p style={{ textAlign: 'justify' }}>
                            بزرگترین سرمایه‌داران دنیای امروز، شرکت‌های نرم افزاری و تکنولوژی محور هستند. در سال‌های اخیر بسیاری از مشاغل سنتی با اپلیکیشن‌ها و یا نرم افزارها جایگزین شده‌اند و کاملا قابل پیش‌بینی است که در آینده نزدیک استقبال به سمت مهارت‌های مهمی مانند طراحی وب، برنامه نویسی و هوش مصنوعی رو به گسترش خواهد بود. در حال حاضر بازار کار ایران و جهان به شدت نیازمند نیروی متخصص در این زمینه‌هاست و در صورتی که به یادگیری این مهارت‌ها بپردازید، آینده شلغی بسیار روشنی در انتظار شما خواهد بود.

                            کد تایم مرجع تخصصی آموزش برنامه نویسی این امکان را برای شما فراهم کرده است تا با یادگیری برنامه نویسی و توسعه اپلیکیشن‌های موبایل و طراحی وب فرصت‌های بی‌نظیری همچون استخدام در شرکت‌های بزرگ فناوری محور، دورکاری و کار فریلنسری، فرصت دریافت پیشنهادهای شغلی خارجی و امکان مهاجرت آسان و یا حتی فرصت راه اندازی کسب و کار و استارتاپ شخصی خود را خواهید داشت.

                            با مشاهده این آموزش راحت‌تر تصمیم می‌گیرید که آیا برنامه نویسی مناسب شما است و با توجه به هدفتان چه زبان برنامه نویسی را انتخاب کنید و در کدام یک از دوره‌های زیر ثبت‌نام کنید:
                        </p>
                    </Col>
                    <Col lg='6' className=''>
                        <img className='img-fluid' src={HomeImg}/>
                    </Col>
                </Row>

                <Row className='my-5'>
                    <h2 style={{fontFamily:'Lalezar'}} className='py-4'> دوره های آموزشی </h2>
                    {courseData.map(course => (
                        <Col md={6} xl={3} className='py-4' key={course.id}>
                            <CourseItem {...course} />
                        </Col>
                    ))}
                </Row>

            </Container>

            <Footer />

        </div>
    )
}

export default Home;