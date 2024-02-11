import { motion } from 'framer-motion'

const Stories = () => {

return (
    <motion.section className=' mt-7 flex flex-col justify-center items-center'>
        <div className=' bg-stories bg-center object-cover bg-cover h-[552px] w-full flex justify-center items-center'>
            <div className='flex justify-center items-center gap-6'>
                <p className=' font-medium text-base text-white leading-7'>Ralph Waldo Emerson</p>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" fill="#02AD4D"/>
                    <path d="M37.6566 31.232C37.6566 41.6127 44.5771 49.6454 54.4635 50.8812V44.9494C49.1495 43.9607 45.3186 40.6241 45.3186 36.2988C46.3072 36.6695 47.4194 36.9167 48.7788 36.9167C53.2277 36.9167 56.8115 33.8271 56.8115 28.3896C56.8115 22.9521 53.1041 19.1211 47.6666 19.1211C41.8583 19.1211 37.6566 23.8171 37.6566 31.232ZM13.1877 31.232C13.1877 41.6127 20.1082 49.6454 29.9946 50.8812V44.9494C24.6807 43.9607 20.9733 40.6241 20.9733 36.2988C21.9619 36.6695 23.0741 36.9167 24.4335 36.9167C28.8824 36.9167 32.3426 33.8271 32.3426 28.3896C32.3426 22.9521 28.6352 19.1211 23.1977 19.1211C17.3894 19.1211 13.1877 23.8171 13.1877 31.232Z" fill="white"/>
                </svg>
                <p className=' text-[38px] leading-[51px] font-medium text-white'>
                    The First Wealth is Health
                </p>
            </div>
        </div>
        <div className='after:bg-card w-[639px] h-[836px] 
        bg-cardBg bg-no-repeat -mt-[100px] relative flex flex-col justify-center items-center'>         
            <div className=' w-full h-1/2 bg-card shadow-card absolute bottom-0 '/>
            <div className='flex flex-col justify-center items-center'>
                <p className=' text-white text-sm font-medium'>11 Minutes Read</p>
                <h1 className=' font-bold mt-5 md:text-[72px] text-white leading-[97px]'>Ngozi's Story</h1>
                <p className=' mt-5 text-white font-medium text-[21px] leading-[22px]'>
                    A heart beat that smile
                </p>
                <div className=' flex gap-10 mt-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4501 1.01562L11.0197 3.23061L11.5893 1.01562H10.4501ZM12.7555 3.83634L14.1297 1.93778L13.0629 1.57615L12.7555 3.83634ZM7.93682 1.92874L9.31101 3.83634L9.00363 1.57615L7.93682 1.93778V1.92874ZM16.9143 17.3703C16.2938 18.0413 15.4535 18.4678 14.5456 18.5727L14.9163 18.2382C17.077 16.0685 17.5019 13.7631 16.182 11.3402L15.3593 9.89363L14.636 8.38383C14.41 7.87755 14.4642 7.49784 14.8259 7.21757C14.896 7.1645 14.9765 7.12663 15.0621 7.1064C15.1477 7.08616 15.2366 7.084 15.3231 7.10004C15.5762 7.14525 15.8113 7.30798 15.974 7.55208L18.1167 11.313C18.9936 12.7776 19.1473 15.1373 16.9143 17.3703ZM6.96946 16.9725L3.21755 13.2206C3.09536 13.077 3.03172 12.8926 3.0393 12.7042C3.04689 12.5158 3.12514 12.3371 3.25848 12.2038C3.39182 12.0704 3.57048 11.9922 3.7589 11.9846C3.94732 11.977 4.13169 12.0407 4.27532 12.1629L6.22812 14.1157C6.29296 14.1598 6.37128 14.1798 6.44936 14.1721C6.52745 14.1644 6.60033 14.1295 6.65527 14.0734C6.71021 14.0174 6.74371 13.9439 6.74992 13.8656C6.75612 13.7874 6.73462 13.7095 6.6892 13.6455L4.74544 11.6927L3.42549 10.3909C3.30329 10.2472 3.23966 10.0629 3.24724 9.87446C3.25483 9.68604 3.33307 9.50738 3.46642 9.37404C3.59976 9.24069 3.77842 9.16245 3.96684 9.15486C4.15526 9.14728 4.33963 9.21091 4.48325 9.33311L7.58423 12.4431C7.61461 12.4748 7.6511 12.5001 7.6915 12.5173C7.73189 12.5346 7.77536 12.5435 7.81929 12.5435C7.86321 12.5435 7.90668 12.5346 7.94708 12.5173C7.98748 12.5001 8.02397 12.4748 8.05435 12.4431C8.08607 12.4127 8.11132 12.3763 8.12856 12.3359C8.14581 12.2955 8.1547 12.252 8.1547 12.2081C8.1547 12.1641 8.14581 12.1207 8.12856 12.0803C8.11132 12.0399 8.08607 12.0034 8.05435 11.973L4.95337 8.86299L4.07642 7.98604C3.93947 7.84585 3.8628 7.65765 3.8628 7.46167C3.8628 7.2657 3.93947 7.0775 4.07642 6.93731C4.21813 6.79979 4.40783 6.72287 4.6053 6.72287C4.80277 6.72287 4.99248 6.79979 5.13419 6.93731L6.01114 7.81426L9.12116 10.9152C9.15139 10.9456 9.18732 10.9697 9.22688 10.9861C9.26644 11.0025 9.30886 11.011 9.35169 11.011C9.39453 11.011 9.43695 11.0025 9.47651 10.9861C9.51607 10.9697 9.552 10.9456 9.58223 10.9152C9.64407 10.8526 9.67874 10.7682 9.67874 10.6802C9.67874 10.5922 9.64407 10.5077 9.58223 10.4451L6.48126 7.34414C6.37608 7.24021 6.30439 7.1072 6.27539 6.96221C6.24639 6.81722 6.26141 6.66687 6.31853 6.53048C6.37425 6.39403 6.46937 6.27728 6.59176 6.19516C6.71415 6.11303 6.85823 6.06925 7.00562 6.0694C7.20452 6.0694 7.39437 6.15077 7.52999 6.28638L12.7736 11.521C12.8308 11.568 12.9019 11.5948 12.9759 11.5972C13.0499 11.5995 13.1226 11.5772 13.1825 11.5337C13.2425 11.4903 13.2864 11.4282 13.3073 11.3572C13.3281 11.2862 13.3249 11.2102 13.298 11.1413L12.2854 9.00764C12.0504 8.50136 12.1046 8.12165 12.4662 7.84139C12.5364 7.78831 12.6168 7.75044 12.7025 7.73021C12.7881 7.70997 12.877 7.70781 12.9635 7.72386C13.2166 7.76906 13.4607 7.93179 13.6234 8.17589L15.6124 11.6656C16.7877 13.8173 16.399 15.8153 14.4462 17.7681C13.9665 18.2718 13.3693 18.6487 12.7082 18.8648C12.0471 19.081 11.3427 19.1297 10.6581 19.0067C9.25183 18.7224 7.96715 18.0122 6.9785 16.9725H6.96946ZM9.88962 5.67161L11.8063 7.5792C11.4356 8.03124 11.3813 8.63697 11.6887 9.29694L11.8876 9.71282L8.70528 6.52144C8.65019 6.42148 8.61924 6.31002 8.61487 6.19597C8.61487 5.98803 8.69624 5.80722 8.83185 5.66257C8.97463 5.52712 9.16393 5.45161 9.36074 5.45161C9.55754 5.45161 9.74684 5.52712 9.88962 5.66257V5.67161ZM16.5436 7.20853C16.4206 7.01216 16.2583 6.84334 16.0669 6.71265C15.8756 6.58197 15.6593 6.49224 15.4316 6.44911C15.2551 6.41791 15.0741 6.42348 14.8998 6.46549C14.7256 6.50749 14.5619 6.58502 14.419 6.69321C14.1478 6.91019 13.967 7.19045 13.8947 7.49784C13.6687 7.27182 13.3793 7.13621 13.072 7.07292C12.8188 7.03676 12.5657 7.07292 12.3306 7.16333L10.3597 5.19245C10.0955 4.92966 9.73794 4.78215 9.36526 4.78215C8.99257 4.78215 8.63504 4.92966 8.37077 5.19245C8.18996 5.37326 8.07243 5.59024 8.00914 5.8253C7.83144 5.64564 7.60872 5.51703 7.36429 5.45291C7.11985 5.38879 6.86268 5.39153 6.61967 5.46083C6.37665 5.53013 6.15672 5.66345 5.98287 5.84685C5.80903 6.03025 5.68765 6.25699 5.63143 6.50336C5.36618 6.23612 5.00719 6.08285 4.63073 6.0761C4.25426 6.06934 3.89 6.20965 3.61534 6.46719C3.35255 6.73146 3.20504 7.08899 3.20504 7.46167C3.20504 7.83436 3.35255 8.19189 3.61534 8.45616C3.39836 8.54656 3.16331 8.67313 2.96441 8.86299C2.70162 9.12725 2.55411 9.48479 2.55411 9.85747C2.55411 10.2302 2.70162 10.5877 2.96441 10.852L3.43453 11.3221C3.19172 11.3802 2.96869 11.5017 2.78823 11.6743C2.60777 11.8468 2.47635 12.0642 2.40739 12.3042C2.33844 12.5441 2.33442 12.7981 2.39575 13.0401C2.45708 13.2821 2.58156 13.5035 2.75647 13.6817L6.49934 17.4427C7.58907 18.5805 9.0036 19.3541 10.5496 19.6576C11.5842 19.8527 12.6543 19.6934 13.5873 19.2056C14.2831 19.2957 14.9904 19.2189 15.6507 18.9815C16.3109 18.7441 16.9052 18.353 17.3844 17.8404C19.8706 15.3362 19.6807 12.6511 18.6772 10.9785L16.5346 7.20853H16.5436Z" fill="white"/>
                        </svg>
                        <span className=' text-white text-xs'>3.2k</span>
                    </div>
                    <div className=' flex gap-2 justify-center items-center'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3387 15.455C16.9924 14.8384 17.5102 14.0921 17.859 13.2639C18.2077 12.4357 18.3796 11.5438 18.3638 10.6453C18.3638 6.9205 15.1724 3.88281 11.086 3.88281C6.99959 3.88281 3.68164 6.9205 3.68164 10.6453C3.68164 14.3791 6.99959 17.4078 11.095 17.4078C11.8221 17.409 12.5459 17.3117 13.2467 17.1185C13.4547 17.2993 13.6807 17.4711 13.9248 17.6247C14.8831 18.2486 15.9138 18.565 16.9987 18.565C17.1976 18.565 17.3603 18.4655 17.4326 18.3028C17.4704 18.2287 17.4871 18.1456 17.4807 18.0627C17.4743 17.9797 17.4452 17.9001 17.3964 17.8327C16.8686 17.1246 16.5099 16.3051 16.3477 15.4369V15.455H16.3387ZM13.518 16.4133L13.4637 16.2144L13.1744 16.3048C12.4995 16.5049 11.799 16.6054 11.095 16.6031C7.45163 16.6031 4.49531 13.9271 4.49531 10.6453C4.49531 7.3635 7.45163 4.69648 11.095 4.69648C14.7113 4.69648 17.514 7.37254 17.514 10.6634C17.514 12.2907 16.9715 13.8005 15.6877 14.9306L15.5069 15.0753V15.3103L15.525 15.5815C15.6494 16.3489 15.9194 17.0854 16.3206 17.7513C15.6168 17.642 14.9464 17.3764 14.3588 16.9738C14.1056 16.8201 13.7078 16.6303 13.5089 16.4404L13.518 16.4223V16.4133Z" fill="white"/>
                        </svg>
                        <span className='text-white text-xs'>18</span>
                        </div>
                </div>
            </div>
                <div className=" w-full h-[280px] bg-[#373736] flex justify-center items-center flex-col absolute bottom-0 -mt-4">
                    <p className=' w-4/5 mx-auto flex text-center text-white'>Our virtues and values uphold the health of our patients, and doing everything possible to give them the best care and ensure they receive maximal and adequate service.</p>
                    <div className=' flex gap-4 justify-center items-center mt-4 '>
                        <div className=' py-[20px] px-[20px] rounded-[15px] text-base text-white bg-[#02AD4D]'>
                            Read the Story
                        </div>
                        <div className=' border-[#02714D] border-[2px] py-[20px] px-[20px] rounded-[15px] text-white text-base'>
                            See More Stories
                        </div>
                    </div>
                </div>
        </div>
    </motion.section>
    )
}
export default Stories;
