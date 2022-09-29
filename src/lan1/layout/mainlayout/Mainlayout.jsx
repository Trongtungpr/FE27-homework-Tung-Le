import AddForm from "../../components/addform/AddForm";
import Header from "../../components/header/Header";
import ItemList from "../../components/itemlist/ItemList";
import './Mainlayout.scss';



function MainLayout() {
    return (
      <div className="main-layout">
          <Header />
        <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
        <div className="main-content">
         <AddForm />
         <ItemList />
        </div>
      </div>
    );
  }
  
  export default MainLayout;