import Footer from "@/components/Footer"
import Header1 from "../components/Header1"
import Header2 from "@/components/Header2"
import Header3 from "@/components/Header3"
import Header4 from "@/components/Header4"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"


const Home = () => {
  return (
    <div>
    <Head>
      <title>
        UrbanHotels:India's best online hotel booking site
      </title>
      <link rel="icon" href='/icon.png'></link>
    </Head>
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">

      <div className=" my-10">
        <Image 
        src={'/banner1.avif'} 
        width={200} 
        height={200} 
        className='h-65 w-full'
        />
      </div>
      <div className="mb-14">
      <Image 
        src={'/banner2.avif'} 
        width={200} 
        height={200} 
        className='h-40 w-full'
        />
      </div>
      <Header4/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
