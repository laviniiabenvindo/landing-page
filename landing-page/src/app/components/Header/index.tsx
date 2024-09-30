import Image from "next/image"
import { ItemMenu } from "./itemMenu"
import { GridContainer } from "../GridContainer"


const menuItem = [
 {
  url: "/",
  title: 'Home',
  dropdown: false
 }, {
  url: '/products',
  title: 'Products',
  dropdown: true
 }, {
  url: '/resource',
  title: 'Resource',
  dropdown: true
 }, {
  url: '/pricing',
  title: 'Pricing',
  dropdown: false
 }
]

export function Header() {
 return (
  <header className="sticky top-0 w-full h-[80px] z-50 bg-white border-b-gray-100  flex items-center">
   <GridContainer className="flex items-center justify-between">
    <div className="flex items-center gap-10">
     <Image
      src="/Logo.svg"
      width={142}
      height={32}
      alt="Logo Untitle UI"
     />

     <nav className="flex items-center gap-8">
      {
       menuItem.map(({ url, title, dropdown }, index) => (
        <ItemMenu
         key={index}
         url={url}
         title={title}
         hasDropdown={dropdown}
        />
       ))
      }
     </nav>
    </div>
    <div>
     <Image
     src="/avatar.jpg"
     width={40}
     height={40}
     alt="Avatar"
     />
    </div>
   </GridContainer>
  </header>
 )
}