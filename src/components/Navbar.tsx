import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { Button, buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { Box } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/DropdownMenu'

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p className="text-zinc-700">Categories</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/guides/dragonflight" className="text-zinc-700">
                <p>Dragonflight</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/guides/classic-hardcore" className="text-zinc-700">
                <p>Classic Hardcore</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/guides/wrath-classic" className="text-zinc-700">
                <p>Wrath Classic</p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* search bar */}
        {/* <SearchBar /> */}

        {/* actions */}
        {/* <div className="flex"> */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
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
