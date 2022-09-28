import "../style/MainItem.scss";
import Logo from '../assets/teamwork.jpg';


function MainItem() {
    return (
      <div className="main-item">
        <div className="main-item-left">
          <div className="about-item">
            <h1>ABOUTS US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis repellat, suscipit illum similique, quae pariatur reiciendis ducimus corrupti reprehenderit possimus, officiis quibusdam voluptatibus deserunt saepe vero eos excepturi facilis.
            </p>
          </div>
          <div className="btn">
            <button><a href="btn">Learn More</a></button>
          </div>
        </div>
        <div className="main-item-right">
          <img src={Logo} />
        </div>
      </div>
    );
  }
  
  export default MainItem;