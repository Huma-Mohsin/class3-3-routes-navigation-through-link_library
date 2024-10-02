import Navbar from "../../../components/navbar";
import Content from "../../../components/content"

function About(){
    return(
        <div>
            <Navbar/>

            <Content style={{color:"Yellow",padding:"20px",margin:"2px",fontWeight:"bolder",fontSize:"20px",textAlign:"center"}} text="Welcome to About Page"/>

        </div>
    )
}
export default About