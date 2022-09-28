import "../style/Header.scss"


function Header() {
    return (
        <div className="header">
            <div className="logo"><a href="logo">O LOGOTYPE</a></div>
            <div className="menu">
                <a href="" className="menu-item">PRODUCTS</a>
                <a href="" className="menu-item">COMPANY</a>
                <a href="" className="menu-item">PARTNERS</a>
                <a href="" className="menu-item">NEWS</a>
                <a href="" className="menu-item">CONTACT US</a>
            </div>
        </div>
    );
}

export default Header;