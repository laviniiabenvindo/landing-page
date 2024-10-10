import { GridContainer } from "../GridContainer";
import Image from "next/image";

export function SectionCompanies() {
 return (
  <section className="pt-24">
   <GridContainer>
    <p className="text-center text-gray-600 font-medium mb-8">Join 4,000+ companies already growing</p>
    <div className="flex items-center justify-between ">
     <Image
     src="/Layers.svg"
     width={146}
     height={48}
     alt="Layers"
     />
     <Image
     src="/Sisyphus.svg"
     width={169}
     height={48}
     alt="Sisyphus"
     />
     <Image
     src="/Circooles.svg"
     width={183}
     height={44}
     alt="Circooles"
     />
     <Image
     src="/Catalog.svg"
     width={160}
     height={48}
     alt="Catalog"
     />
     <Image
     src="/Quatient.svg"
     width={187}
     height={44}
     alt="Quatient"
     />
    </div>
    <hr className="mt-24 border-gray-200"/>
   </GridContainer>
  </section>
 )
}