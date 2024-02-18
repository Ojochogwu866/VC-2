import Nhis from "@/shared/NHIS"
import Axa from '@/assets/Resources/AXA.png'
import NHIS from '@/assets/Resources/NHIS.png'
function appointment() {
  return (
    <div className=" h-auto md:h-[787px] bg-[#02AD4D] w-full mt-[181px] py-[108px]">
      <div className=" flex flex-col justify-center items-center">
        <p className=" font-bold text-white text-[29px] leading-[41px] text-center">Just one step from your appointment</p>
        <div className=" mt-[50px] border-[1.5px] border-white text-white py-[16px] px-[20px] rounded-[15px]">Book Now</div>
      </div >
      <div className=" flex flex-wrap gap-[1px] justify-center items-center mt-[50px] md:mt-[150px]">
        <Nhis
          image={NHIS}
        />
        <Nhis
          image={Axa}
        />
        <Nhis
          image={NHIS}
        />
        <Nhis
          image={Axa}
        />
      </div>
    </div>
  )
}

export default appointment