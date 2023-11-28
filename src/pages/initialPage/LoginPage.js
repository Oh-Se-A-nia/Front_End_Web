 
import Login from '../../components/login/Login';
import './LoginPage.css'; 
import TopBar from '../../components/header/TopBar'; 

const LoginPage =() => {

    return ( 
        <div>
        <div className="bar">
        <img
            className="logoImage_login"
            alt="logoImage"
            src={`${process.env.PUBLIC_URL}/img/ecotag_logo.png`}//이미지 엑스박스 오류 방지
          />
            </div>
        <div className="LoginPage"> 
            <div className="LoginBox">
                <div><Login/></div>
            </div>
        </div>
        </div>
        
    )
}


export default LoginPage;