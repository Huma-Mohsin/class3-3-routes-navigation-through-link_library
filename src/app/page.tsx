import Navbar from "../../components/navbar"
import Content from "../../components/content";

function Home(){
    return(
        <div>
            <Navbar/>

            <Content style={{color:"green",padding:"20px",textAlign:"center",margin:"2px",fontWeight:"bolder",fontSize:"20px"}} text="Welcome to Home Page"/>

        </div>
    )
}
export default Home