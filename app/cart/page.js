import Link from 'next/link'
import Header from '../header/page'

export default function Cart() {
  return (
    <div>
      <Header />
      <div className="bg-white-background h-screen flex flex-col justify-center items-center">
        <p className="text-black">cart</p>
        <Link href="/">Go to Home</Link>
      </div>
    </div>
  )
}
