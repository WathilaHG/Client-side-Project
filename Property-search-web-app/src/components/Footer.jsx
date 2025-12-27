import "./Footer.css"

export function Footer(){
    return(
        <footer className="site-footer">
            <p>©{new Date().getFullYear()} Estate Agent</p>
        </footer>
    );
}