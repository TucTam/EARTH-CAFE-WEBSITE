import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const LayoutHeader = ({ className }: { className?: string }) => {
    return (
        <header className={`bg-[#543521] h-header-height drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]  w-full grid grid-cols-2 grid-rows-1 items-center p-5 text-white ${className}`}>
            <section className='flex flex-row items-center justify-start gap-10'>
                <Link href={'/'}>
                    <Image className='rotate-35 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]' src="/EARTH white bg and brown logo rotated (1).png" width={100} height={100} alt="Earth Cafe Logo" loading="eager">
                    </Image>
                </Link>
                <nav className='flex flex-row gap-5 justify-start'>
                    <Link href={'about'}>ABOUT</Link>
                    <Link href={'about'}>CONTACT</Link>
                    <Link href={'about'}>JOIN US</Link>
                </nav>
            </section>
            <nav className='flex flex-row gap-5 justify-end items-center'>
                <Link className='min-w-20 border-2 border-white hover:bg-[#432a19] rounded-[5px] p-3 flex flex-row items-center gap-3 justify-between' href={'locations'}>
                    <Image src="/Location Icon White.png" width={20} height={20} alt='Location Icon White'></Image>
                    FIND YOUR EARTH
                    <Image src="/arrow down white.png" width={10} height={10} alt="arrow down white"></Image></Link>
                <Link href={'about'}>COUPONS</Link>
                <Link href={'about'}>AFFILIATE</Link>

            </nav>
        </header>
    )
}

export default LayoutHeader