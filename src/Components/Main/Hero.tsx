import { ArrowRight, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
    <div className="layout min-h-[400px] py-6">
        <div className="space-y-10">
            <div className="text-center space-y-4">
                <h1 className="md:text-6xl max-[350px]:text-3xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-500">Effortless Logistics, 
                Seamless Deliveries</h1>
                <p>Experience a new era of logistics solutions tailored to your business needs. From pickup to drop-off, we've got you covered.</p>
            </div>

            <div className="flex justify-center items-center md:flex-row flex-col gap-4">
                <div className="flex items-center justify-between cursor-pointer bg-dark rounded-full md:w-[180px] w-[200px] border border-line p-2 pl-6">
                    <span className="font-medium text-white">Track Parcel</span>
                    <div className="h-10 w-10 center rounded-full bg-white text-dark">
                        <MapPin size={20}/>
                    </div>
                </div>
                <Link to="/account" className="btn border h-14 rounded-full px-4 font-medium border-line md:w-[180px] w-[200px]">Get Started <ArrowRight size={20}/> </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero