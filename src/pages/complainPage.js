import "../styles/userShop.css"
import profilePicture2 from "../assets/Ellipse 2.png"
import profilePicture3 from "../assets/Ellipse 3.png"
import iconImage from "../assets/icons-image.png"
import iconSend from "../assets/icons-send.png"
import NavAdmin from "../components/navbarAdmin"

function ComplainPage () {
    return (
        <>
            <body>
                <NavAdmin/>
                <div className="containerUserShope">

                <div className="containerLeft">
                    <div className="search">
                        <input placeholder="Search" type="text" />
                    </div>
                    <div className="user">
                        <div className="profilePicture">
                            <img src={profilePicture2}/>
                        </div>
                        <div className="nameAndChat">
                            <h6>Egi_lol</h6>
                            <p> Hello Admin, I Need Your Help </p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="profilePicture">
                            <img src={profilePicture3}/>
                        </div>
                        <div className="nameAndChat">
                            <h6>Beach_lover</h6>
                            <p> Hello Admin, This Problem Product To Me </p>
                        </div>
                    </div>
                </div>
                
                <div className="vertikal"></div>

                <div className="containerRight">
                    <div className="containerChat">
                        <div className="chatOne">
                            
                        </div>
                        <div className="chatTwo">
                            <div className="avatar">
                                <img src={profilePicture2}/>
                            </div>
                            <div className="textChat">
                                <p> Hello Admin, I Need Your Help </p>
                            </div>
                        </div>
                        <div className="message">
                            <div className="iconImage">
                                <img src={iconImage}/>
                            </div>
                            <div className="input">
                                <input placeholder="Send Message" type="text" />
                            </div>
                            <div className="iconSend">
                                <img src={iconSend}/>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </body>
        </>
    )
}

export default ComplainPage