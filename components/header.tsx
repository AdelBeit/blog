import Link from 'next/link'
import { TypeWriter } from "./utils/TypeWriter"

const Header = () => {
  return (
    <h2 id="_header" className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 pt-8">
      <Link href="/" className="hover:underline">
        <TypeWriter content="Blog" />
      </Link>
    </h2>
  )
}

export default Header
