import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { Button, buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { Box, GithubIcon } from 'lucide-react'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <Box className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-sm font-medium md:block'>Neat Guides</p>
        </Link>

        {/* search bar */}
        {/* <SearchBar /> */}
        <Link href="categories">
          <Button variant="link">Categories</Button>
        </Link>
        {/* actions */}
        {/* <div className="flex"> */}
        {session?.user ? (
           <div className="flex items-center">
           <UserAccountNav user={session.user}/>
           <Link href="https://github.com/neatgang/guides" className="ml-4">
             <GithubIcon />
           </Link>
         </div>
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
