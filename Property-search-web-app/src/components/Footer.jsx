// Site footer component displaying copyright information
import "./Footer.css"

export function Footer(){
    return(
        <footer className="site-footer">
            {/* Dynamic copyright year */}
            <p>©{new Date().getFullYear()} Estate Agent</p>
        </footer>
    );
}