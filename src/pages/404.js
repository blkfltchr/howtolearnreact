import React from "react";
import {Link} from 'gatsby'

const Error = () => {
    return ( 
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontFamily: "Monaco,Consolas,'Andale  Mono','DejaVu Sans Mono',monospace", fontSize: "168px", margin: "0px", color: "#a700ff", textTransform: "uppercase"}}>404</h1>
            <h2 style={{fontFamily: "Raleway, sans-serif", fontSize: "22px", fontWeight: "400", textTransform: "uppercase", color: "#222", margin: "0"}}>OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</h2>
            <br />
            <Link to="/search" style={{fontFamily: "Raleway, sans-serif", fontSize: "22px", fontWeight: "700", color: "#a700ff", margin: "0", textDecoration: "none"}}><div>Search <span role="img" aria-label="Search">&#128269;</span></div></Link>
            <br />
            <Link to="/" style={{color: "#62DAFC", fontFamily: "Raleway, sans-serif", display: "inline-block", fontWeight: "700", borderRadius: "15px", textDecoration: "none"}}>Return To Homepage</Link>
        </div>
     );
}
 
export default Error;
