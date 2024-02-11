
import Slide from '@/assets/Resources/slide-1.png'
import styles from '@/styles/styles'

const Hero = () => {

  return (
  <section className=' flex flex-col'>
    <div className=' h-[800px] w-full'>
      <img src={Slide} alt="" className=' w-full h-full'/>
    </div>
    <div className=' md:-mt-[250px] flex justify-center items-center'>
      <div className=' min-w-[426px] w-[426px] h-[562px] bg-white shadow-form p-10 rounded-3xl flex justify-start items-center'>
        <form className='flex flex-col'>
          <h1 className=' font-bold text-[#013919] text-[20px]'>Book Appointment Now</h1>
          <div className=' flex flex-col mt-[35px]'>
            <label className=' text-sm font-medium text-[#2F4E44] pr-2 gap-2 leading-[18px]'><input className='mr-2' type='radio'/>Book with Phone Number</label>
            <label className=' text-sm font-medium text-[#2F4E44] pr-2 gap-2 leading-[18px]'><input className=' mr-2 mt-3' type='radio'/>Book with Email</label>
          </div>
          <div className=' mt-[26px]'>
            <input className={`${styles.formInput}`} placeholder='Full Name' />
            <select title='select'
            className={`${styles.formInput}`}>
              <option value="" disabled>Select Department</option>
            </select>
            <input type='date' className={`${styles.formInput}`} placeholder='Date' />
            <input className={`${styles.formInput}`} placeholder='Phone No_' />
          </div>
          <button className=' bg-[#02AD4D] h-[52px] w-full rounded-[15px] text-white flex justify-center items-center text-base mt-[41px]'>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}
export default Hero