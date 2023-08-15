
import Link from "next/link"


 const component =() => {
 return(
    <>
   
   <h2 className="header">
   <div className="logo">Sunday School</div>
    <Link href='/home'>Home</Link>
    <Link href='/about'>About</Link>
 <Link href='/contact'>contact</Link>
    </h2>
    </>
 )
}
export default component