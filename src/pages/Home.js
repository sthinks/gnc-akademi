import React from 'react'
import Slider from 'react-slick';
import SlideImage from "../assets/images/slide1.png";
import SlideIcon from "../assets/images/slide-icon.png";
import ReqForm from '../components/ReqForm';
import MyCalendar from '../components/MyCalendar';
import { Helmet } from 'react-helmet';
import SatisTorna from "../assets/images/satis-torna-egitimi.png";
import SatisIsleme from "../assets/images/satis-isleme-merkezi.png";
import EventImage from "../assets/images/event1.png";
import { BsCalendarWeek } from "react-icons/bs"

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='relative'>
            <Helmet>
                <title>GNC Akademi</title>
            </Helmet>
            <ReqForm />
            <Slider {...settings} className="overflow-hidden">
                <div>
                    <div className='relative flex items-center'>
                        <img src={SlideIcon} className="absolute right-0 top-0 z-10" />
                        <div className='bg-black absolute h-full w-full opacity-[0.5]' />
                        <div className='absolute left-1/4'>
                            <h1 className='text-white'>CNC Torna / CNC İşleme Merkezi <br /> Operatörü olmak ister misiniz?</h1>
                            <div className='bg-[#D73636] inline-block py-1 px-5 text-white rounded-full font-semibold mt-3'>Bilgi Al</div>
                        </div>
                        <img src={SlideImage} className="w-full h-auto" />
                    </div>
                </div>
            </Slider>
            <div>
                <div className='text-center mt-5 mb-10'>
                    <h2 className='font-bold'>Eğitim Takvimi</h2>
                    <p>2023 yılı güncel eğitimlerimiz hakkında bilgi almak için eğitim takvimimizi inceleyebilirsiniz.</p>
                </div>
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='flex flex-col text-center'>
                            <img src={EventImage} />
                            <h5 className='font-bold py-3 shadow-md'>Yaklaşan Eğitimler</h5>
                        </div>
                        <div>
                            <div className='p-5'>
                                <div className='flex justify-between items-center '>
                                    <h5 className='font-bold'>Satış İşleme Merkezi Eğitimi</h5>
                                    <BsCalendarWeek className='text-2xl' />
                                </div>
                                <div className='mt-3'>
                                    <p>
                                        Talaşlı imalat yöntemleri, ölçme kontrol ve malzeme
                                        bilgisini aktararak, katılımcıları hızla CNC teknolojisi
                                        ile tanıştırmaktır.Katılımcılar teknik resim hakkında
                                        bilgi edinerek ölçme ve kontrol aletlerini okuyup
                                        kullanabilecek, İşleme Merkezine parça bağlayabilecek,
                                        tezgâha ait kesicileri ve aparatları tanıyacak,
                                        CNC dik işlem tezgahında sıfır noktasını bularak
                                        start verebilecek aynı zamanda G ve M kodları
                                        ile makineyi programlayabileceklerdir.
                                    </p>
                                </div>
                                <div className='mt-3'>
                                    <p>14.02.2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-[2_2_0]'>
                        <MyCalendar />
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center mt-5 mb-10'>
                    <h2 className='font-bold'>Eğitim Kategorilerimiz</h2>
                    <p>2023 yılı güncel eğitimlerimiz hakkında bilgi almak için eğitim takvimimizi inceleyebilirsiniz.</p>
                </div>
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='relative flex items-center justify-center mr-1'>
                            <div className='absolute w-full h-full bg-[#D73636] opacity-[0.4]' />
                            <div className='absolute'>
                                <h3 className='text-white text-center font-bold'>Satış <br /> Torna Eğitimi</h3>
                            </div>
                            <img src={SatisTorna} className="w-full h-auto" />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='relative flex items-center justify-center ml-1'>
                            <div className='absolute w-full h-full bg-black opacity-[0.4]' />
                            <div className='absolute'>
                                <h3 className='text-white text-center font-bold'>Satış İşleme<br /> Merkezi Eğitimi</h3>
                            </div>
                            <img src={SatisIsleme} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-10 mb-10'>
                    <div className='bg-[#3D4543] text-white py-1 px-5 inline-block rounded-full'>Tüm Eğitim İçeriğini Gör!</div>
                </div>
            </div>
        </div>
    )
}

export default Home