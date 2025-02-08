import Link from "next/link"


export default function HomePage() {
   return(
        <div className="bg-pink-500">
            <h1 className="flex  items-center  justify-center text-[42px] underline">Create a dynamic blogs</h1>
             <ul>


                 <li><Link href="/studentlist/Components1"><h1 className="text-[32px] underline ml-12">Kamran Tessori Journey</h1>
                 <p className="ml-12">My blog is kamran Tesori:</p>
                 </Link></li>


                 <li><Link href="/studentlist/Components2"><h1 className="text-[32px] mt-[6%] underline ml-12">Quaid-e-Azam Muhammad Ali Jinnah</h1>
                 <p className="ml-12">My blog is Quaid-e-Azam :</p>
                 </Link></li>
                
                <li><Link href="/studentlist/Components3"><h1 className="text-[32px]  mt-[6%] underline ml-12">Softwear Engineer</h1></Link></li> 
               <p className="ml-12">My blog is softwear engineer:</p>


                <li><Link href="/studentlist/Components4"><h1 className="text-[32px]  mt-[6%] underline ml-12">Start Carrer Softwear Developers</h1></Link></li> 
                <p className="ml-12">My blog is start career:</p>
            </ul>
            {/* <Footer /> */}
        </div>
    )
}
