import { Outlet } from "react-router-dom";
import Header from "../Component/Shared/Header/Header";




const Main = () => {

    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;