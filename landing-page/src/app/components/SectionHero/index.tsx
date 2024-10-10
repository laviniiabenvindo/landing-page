import { GridContainer } from "../GridContainer";
import { AreaCtas } from "./AreaCtas";
import { TagFeature } from "./TagFeature";
import Image from "next/image";
export function SectionHero() {
 return (
  <section className="pt-24">
   <GridContainer>
    <div className="text-center">
     <TagFeature />
     <h1 className="text-6xl font-semibold text-gray-900 mt-4 mb-6 ">Beautiful analytics to grow smarter</h1>
     <p className="text-xl/6 text-gray-600 mx-3xl mx-auto mb-12">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
     <AreaCtas />
    </div>
    <Image
    src={"/Content.png"}
    width={1216}
    height={480}
    alt="Content"
    />
    <hr className="border-gray-200"/>
   </GridContainer>
  </section>
 )
}