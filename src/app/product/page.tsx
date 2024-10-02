import Navbar from "../../../components/navbar";
import Content from "../../../components/content"

function Product(){
    return(
        <div>
            <Navbar/>

            <Content style={{color:"Blue",textAlign:"center",padding:"20px",margin:"2px",fontWeight:"bolder",fontSize:"20px"}} text="Welcome to Product Page"/>

        </div>
    )
}
export default Product