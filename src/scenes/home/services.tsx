
import Cards from '@/shared/Services';
import Fertilization from '@/assets/Resources/3.png';
import FertilizationHover from '@/assets/Resources/se-1.png';
import Invitro from '@/assets/Resources/2.png';
import InvitroHover from '@/assets/Resources/se-2.png';
import Dental from '@/assets/Resources/1.png';
import DentalHover from '@/assets/Resources/se-3.png';
import Cardio from '@/assets/Resources/4.png';
import CardioHover from '@/assets/Resources/se-4.png';
import Vascular from '@/assets/Resources/6.png';
import VascularHover from '@/assets/Resources/se-5.png';
import Oncology from '@/assets/Resources/5.png';
import OncologyHover from '@/assets/Resources/se-6.png';

function services() {
    return (
        <section className="lg:px-[186px] px-[20px] flex flex-col justify-center items-center md:mt-[206px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#FF1723] mt-10 text-lg font-medium leading-[30px]">Our Services</h1>
                <p className="mt-[70px] lg:text-[68px] text-[30px] leading-9 lg:leading-[70px] text-center text-[#383838] font-black">Your Perfect Health<br /> is Our Obsession</p>
                <p className="mt-5 text-base text-center font-medium text-[#013919]">We have devoted much time and effort and in these areas and we are experts:</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center lg:grid grid-cols-3 gap-x-[1px] gap-y-[1px] mt-[100px]">
                <Cards
                    image={Fertilization}
                    hoverImage={FertilizationHover}
                    title='Fertility Clinic'
                />
                <Cards
                    image={Invitro}
                    hoverImage={InvitroHover}
                    title='In-Vitro Fertilization'
                />
                <Cards
                    image={Dental}
                    hoverImage={DentalHover}
                    title='Dental Care'
                />
                <Cards
                    image={Cardio}
                    hoverImage={CardioHover}
                    title='Cardiothoracic Surgery'
                />
                <Cards
                    image={Vascular}
                    hoverImage={VascularHover}
                    title='Vascular Surgery'
                />
                <Cards
                    image={Oncology}
                    hoverImage={OncologyHover}
                    title='Oncology Surgery'
                />
            </div>
        </section>
    )
}

export default services;

