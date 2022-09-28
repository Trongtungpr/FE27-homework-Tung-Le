import Header from "../components/content/Header";
import MainItem from "../components/content/MainItem";
import "./MainLayout.scss"


function MainLayout() {
    return ( 
        <div className="main-layout">
            <Header />
            <MainItem />
        </div>
     );
}

export default MainLayout;