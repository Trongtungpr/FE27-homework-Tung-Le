import "./style.css";
import logo from './assets/img/mocchau.jpg'

const CardItem = () => {
    return (
        <div className="carditem">
            <img src={logo} className="img"  alt="img" />
            <div className="container_card">
                <h1 className="card_title">Title</h1>
                <p className="title">Secondary Text</p>
                <p className="sub_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum dolorum accusantium sit. Aut tempora ut asperiores eligendi consectetur, harum delectus architecto cumque autem pariatur fugit natus optio iusto dolor.</p>
            </div>
            <hr />
            <p className="Sub__title">Subtitle</p>
            <button className="btn">Item 1</button>
            <button className="btn">Item 2</button>
            <button className="btn">Item 3</button>
            <button className="btn">Item 4</button>
            <p className="action">Action 1</p>
        </div>
    );
};

export default CardItem;