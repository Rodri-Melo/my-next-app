import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b-2 border-custom-grey p-5 flex  bg-custom-offWhite">
      <div className="w-full flex">
        <h1
          className="
          sm:text-2xl
          md:text-2xl 
          lg:text-3xl 
          text-custom-purple flex items-center justify-center"
          style={{ width: '35%', marginRight: '35%', marginLeft: '0%' }}
        >
          Dev Store
        </h1>
        <button
          className="text-red flex items-center justify-center"
          style={{ width: '10%' }}
        >
          <Link href="/cart">
          <BsCart3 className="sm:text-2xl md:text-3xl lg:text-4xl" />
          </Link>
        </button>
      </div>
    </header>
  )
}
