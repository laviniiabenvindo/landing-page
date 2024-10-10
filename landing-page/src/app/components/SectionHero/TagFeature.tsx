import { FiArrowRight } from "react-icons/fi";

export function TagFeature(){
 return(
  <div className="inline-flex items-center gap-3 p-1 pr-[10] bg-brand-50 rounded-2xl">
   <span className="bg-white inline-block h-6 px=[10] rounded-2xl text-sm font-medium text-brand-700">New feature</span>
   <a href="#" className="flex items-center gap-1 font-medium text-brand-700 hover:opacity-50 transition-opacity">Check out the team dashboard <FiArrowRight/></a>
  </div>
 )
}