import React from 'react'
import Link from 'next/link'

type NavbarItem = {
    name: string,
    link: string
}

const Navbar = () => {
    const navbarItems: NavbarItem[] = [
        {
            name: "Product",
            link: "/"
        },
        {
            name: "Company",
            link: "/"
        },
        {
            name: "Pricing",
            link: "/"
        }
    ]

    return (
        <header className="fixed top-0 z-10 w-full">
            <nav className='h-28 w-full bg-darkest-bg flex items-center justify-center p-2'>
                <div className='flex items-center justify-between container gap-6 text-white font-para w-full'>
                    <div className='flex items-center gap-16'>
                        <div className='flex items-center text-4xl font-title font-bold'>
                            <Link href="/">VEXPERT</Link>
                        </div>
                        <div className='flex flex-row gap-6 items-center text-xl'>
                            {navbarItems.map((item, index) => (
                                <Link key={index} href={item.link} className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-400 after:ease-in-out after:left-0 after:bottom-[-2px] hover:after:w-full">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row h-full items-center'>
                        <Link href="/"  className='flex bg-transparent outline outline-1 text-2xl font-bold rounded-lg py-3 px-4 transition-colors duration-200 hover:bg-white hover:text-darkest-bg'>
                            Try For Free
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar