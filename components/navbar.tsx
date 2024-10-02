import Link from "next/link"; //this reduce loading of page when navigate.
function Navbar(){
    return(
        <div>
            <h1 style={{color:"black", background:"lightgrey",fontSize:"20px",padding:"20px",margin:"2px",justifyContent:"center"}}>Navigation by Link Library In Next.js</h1>

            <ul>
                <li style={{color:"blue", fontSize:"15px"}} ><Link href="/">Home Page</Link></li >
                <li style={{color:"blue", fontSize:"15px"}}><Link href="/about">About Page</Link></li>
                <li style={{color:"blue", fontSize:"15px"}}><Link href="/product">Product Page</Link></li>
            </ul>
        </div>
    )
}
export default Navbar