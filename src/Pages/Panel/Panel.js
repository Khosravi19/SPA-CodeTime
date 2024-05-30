import MyNavbar from '../../components/Navbar/Navbar';
import ImgPanel from '../../../src/assets/Images/ImgPanel.png'
function Panel() {

    return (
        <div>
            <MyNavbar />
            <img src={ImgPanel} className='img-fluid' />
        </div>
    )
}

export default Panel;
