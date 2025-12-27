import {Link} from "react-router-dom";
import "./Header.css"

export function Header(){
    return(
        <div className="header-container">
            <header className="site-header">
                <h1 className="link-container">
                    <Link to="/" className="site-title-link">
                        Estate Agent
                    </Link>
                </h1>
            </header>
        </div>
    )
}