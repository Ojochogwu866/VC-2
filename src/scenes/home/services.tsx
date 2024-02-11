import Cards from '@/shared/Services'
import Fertilization from '@/assets/Resources/3.png'
import Invitro from '@/assets/Resources/2.png'
import Dental from '@/assets/Resources/1.png'
import Cardio from '@/assets/Resources/4.png'
import Vascular from '@/assets/Resources/6.png'
import Oncology from '@/assets/Resources/5.png'

function services() {
  return (
    <section className=" px-[186px] flex flex-col justify-center items-center md:mt-[206px]">
        <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-[#FF1723] text-lg font-medium leading-[30px]">Our Services</h1>
            <p className=" mt-[70px] text-[68px] leading-[70px] text-center text-[#383838] font-black">Your Perfect Health<br/> is Our Obsession</p>
            <p className=" mt-5 text-base text-center font-medium text-[#013919]">We have devoted much time and effort and in these areas and we are experts:</p>
        </div>
        <div className=" grid grid-cols-3 gap-x-[1px] gap-y-[1px] mt-[100px]">
            <Cards
                image={Fertilization}
                title='Fertility Clinic'
            />
            <Cards
                image={Invitro}
                title='In-Vitro Fertilization'
            />
            <Cards
                image={Dental}
                title='Dental Care'
            />
            <Cards
                image={Cardio}
                title='Cardiothoracic Surgery'
            />
            <Cards
                image={Vascular}
                title='Vascular Surgery'
            />
            <Cards
                image={Oncology}
                title='Oncology Surgery'
            />
        </div>
    </section>
  )
}

export default services
