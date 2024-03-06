import React from 'react'
import LogoFooter from '../svg/LogoFooter'
import Socials from '../svg/Socials'
import { Separator } from '../ui/separator'

import Uk from '../svg/Uk'
import India from '../svg/India'


const Footer = () => {
    return (
        <div className='w-full hidden sm:flex flex-col text-white bg-black'>
            <div className='flex justify-between p-5'>
                <LogoFooter />
                <Socials />
            </div>
            <Separator />
            <div className='w-full p-3 flex justify-between px-20 text-left  space-x-10'>
                <div className='flex flex-col w-full justify-start start text-left space-y-3'>
                    <p className='text-[16px] text-left font-bold'>Crypto taxes for</p>
                    <p className='text-[15px] text-left font-normal'>Individuals and Accountants</p>
                    <p className='text-[15px] text-left font-normal'>Tax Professionals and Accountants</p>
                    <p className='text-[15px] text-left font-normal'>Exchanges and Web3 projectss</p>
                    <Uk />
                </div>
                <div className='flex flex-col w-full justify-start start text-left space-y-3'>
                    <p className='text-[16px] text-left font-bold'>Free tools</p>
                    <p className='text-[15px] text-left font-normal'>Crypto prices live</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Tax Calculator</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Converter</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Staking ROI Calculator</p>

                </div>
                <div className='flex flex-col w-full justify-start start text-left space-y-3'>
                    <p className='text-[16px] text-left font-bold'>Resource Center</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Tax Guides</p>
                    <p className='text-[15px] text-left font-normal'>Dumb Ways To Lose Money</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Tax Savings Guide </p>
                    <p className='text-[15px] text-left font-normal'>Blogs</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Buying Guides</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Staking Guides</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Mining Guides</p>
                    <p className='text-[15px] text-left font-normal'>Crypto Price Predictions</p>
                </div>
                <div className='flex flex-col w-full justify-start start text-left space-y-3'>
                    <p className='text-[16px] text-left font-bold'>Help and Suppourt</p>
                    <p className='text-[15px] text-left font-normal'>Product Guides</p>
                    <p className='text-[15px] text-left font-normal'>How to Guides</p>
                    <p className='text-[15px] text-left font-normal'>Templates</p>
                    <p className='text-[15px] text-left font-normal'>Contact us</p>
                </div>
                <div className='flex flex-col w-full justify-start start text-left space-y-3'>
                    <p className='text-[16px] text-left font-bold'>Company</p>
                    <p className='text-[15px] text-left font-normal'>Backed By</p>
                    <p className='text-[15px] text-left font-normal'>Media and Press</p>
                    <div className='text-[15px] text-left font-normal items-center start flex gap-x-2'>Careers <div className='bg-[#2997F9]/50 p-1'>{"We're Hiring"}</div> </div >
                    <p className='text-[15px] text-left font-normal'>Security</p>
                    <p className='text-[15px] text-left font-normal'>Refund Policy</p>
                    <p className='text-[15px] text-left font-normal'>Brand Assets</p>
                    <p className='text-[15px] text-left font-normal'>Terms of Use</p>
                    <p className='text-[15px] text-left font-normal'>Privacy Policy</p>
                </div>
            </div>
            <Separator />
            <div className='mt-[10px] flex p-5 justify-between'>
                <div className='font-normal'>© All rights reserved by Simplify Infotech Pvt. Ltd.</div>
                <div>
                    <div className='flex gap-x-2 justify-center items-center bg-[#1C2336] p-1 rounded-md'><India /> India</div>
                </div>
            </div>
        </div>
    )
}

export default Footer