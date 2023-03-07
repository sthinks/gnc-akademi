import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-[#D73636]'>
            <div className='lg:max-w-7xl mx-auto'>
                <div className='py-16'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <ul className='text-white'>
                                <h5>Kurumsal</h5>
                                <li className='font-thin'>
                                    <Link to="/hakkimizda">
                                        Hakkımızda
                                    </Link>
                                </li>
                                <li className='font-thin'>
                                    <Link to="/kvkk">
                                        KVKK
                                    </Link>
                                </li>
                                <li className='font-thin'>
                                    <Link to="/vizyon-misyon">
                                        Vizyon & Misyon
                                    </Link>
                                </li>
                            </ul>
                            <ul className='text-white ml-10'>
                                <h5>Eğitim</h5>
                                <li className='font-thin'>
                                    <Link to="/egitimlerimiz">
                                        Eğitimlerimiz
                                    </Link>
                                </li>
                            </ul>
                            <ul className='text-white ml-10'>
                                <h5>
                                    <Link to="/iletisim">
                                        İletişim
                                    </Link>
                                </h5>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-white text-center'>Bizi Takip Et!</h5>
                            <div className='flex mt-2'>
                                <FaFacebook className='bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1' />
                                <FaInstagram className='bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1' />
                                <FaTwitter className='bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1' />
                                <FaLinkedin className='bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1' />
                                <FaYoutube className='bg-[#4D4E50] text-white text-2xl rounded-full p-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer