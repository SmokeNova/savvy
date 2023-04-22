import Link from "next/link"

function Header() {
  return (
    <header className='bg-transparent flex justify-between max-w-[1120px] mx-3 xl:mx-auto pt-7 pb-6 border-b-slate-400 border-b'>
      <Link href="/" className='Exo text-white text-2xl md:text-4xl font-extrabold tracking-wider'>
        Savvy
      </Link>
      <ul className='flex gap-7 text-white Ubuntu font-bold tracking-widest mt-2'>
        <li className='relative hover:-translate-y-1 transition-all duration-300'><Link href="/">Home</Link></li>
        <li className='relative hover:-translate-y-1 transition-all duration-300'><Link href="/articles/">Articles</Link></li>
      </ul>
    </header>
  )
}

export default Header