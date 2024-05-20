import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer"
import FirebaseProvider from "../FirebseProvider/FirebaseProvider";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <FirebaseProvider text={'brother'}/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;