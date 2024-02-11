import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";

type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
    country_of_residence: string;
    preferred_time_zone: string;
    linkedin: string,
    countryOptions: string[];
    timeZoneOptions: string[];
    agree: string
}
interface Country {
  name: {
    common: string;
  }
}

interface TimeZoneApiResponse {
  timeZoneId: string;
}

const Mentorship = () => {

  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit, formState } = useForm<FormValues>({ defaultValues: formData });
  const { errors } = formState;
  const onHandleFormSubmit = (data: FormValues) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    onHandleNext();
  };
useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      
      fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${userLatitude},${userLongitude}&timestamp=${Date.now() / 1000}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
        .then((response) => response.json())
        .then((data: TimeZoneApiResponse) => {
          const timeZoneOptions = [data.timeZoneId];
          setFormData((prevData) => ({ ...prevData, timeZoneOptions }));
        })
        .catch((error) => console.error("Error fetching time zones:", error));
    },
    (error) => {
      console.error("Error getting user location:", error);
    }
  );
}, []);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Country[]) => {
        const countryNames = data.map((country) => country.name.common);
        setFormData((prevData) => ({ ...prevData, countryOptions: countryNames }));
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);


return (
    <section className=' flex flex-col md:px-[80px] px-[20px] mx-auto'>
        <div className=' pt-44'>
            <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]' > 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.9751 15.0586L2.91676 10.0003L7.9751 4.94193" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.0835 10L3.0585 10" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    GO BACK
            </p>
             <h1 className=' md:text-[70px] text-[44px] mt-4 font-bold text-[#000]'>Mentor Application</h1>
                <div className=" md:mt-20 mt-4 md:w-9/12  mx-auto">
            <div className="">
                    <h1 className=" text-[#d11f26] font-normal md:text-[54px] text-[36px] leading-[44px] md:leading-[66px]">Welcome to the NEXTGEN HUB <br className="hidden md:flex"/> Mentorship Program</h1>
                        <span className=" text-[#828282] text-[14px]">Estimated time to complete: 15-20 minutes.</span>
                        <p className=" mt-8 text-sm font-normal text-black">
                            As a mentor, you will have the chance to make a positive impact on the program by guiding mentees through selected projects, sharing your expertise, providing career advice,
                            and cultivating long-lasting relationships. We are excited to review your application.
                        </p>
                </div>
                    <form onSubmit={handleSubmit(onHandleFormSubmit)} className="">
                        <div className=" font-semibold text-base text-black mt-8 ">Basic Information</div>
                            <div className=" mt-8 flex xl:flex-row flex-col gap-3 text-black">
                                <div className="flex flex-col">
                                    <div className="flex flex-col md:flex-row gap-3 w-full">
                                        <div className="flex flex-col w-full">
                                            <label className=" text-[16px]  font-normal 
                                            leading-[34px] text-black" htmlFor="First Name">First Name</label>
                                            <input 
                                                type="text"  
                                                className=" xl:w-[250px] w-full outline-none h-[60px] text-black
                                                rounded-lg border-[0.4px] border-[#656565] p-4" 
                                                {...register("firstname")}
                                              
                                                onChange={(e) => setFormData((prevData) => ({ ...prevData, firstname: e.target.value }))}
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="Last Name">Last Name</label>
                                            <input 
                                                type="text"  
                                                className=" xl:w-[250px] w-full outline-none h-[60px] 
                                                rounded-lg border-[0.4px] border-[#656565] p-4" 
                                                {...register("lastname")}
                                              
                                                onChange={(e) => setFormData((prevData) => ({ ...prevData, lastname: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-8">
                                        <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="Phone Number">Phone Number</label>
                                        <input 
                                            type="text" 
                                           
                                            className=" outline-none h-[60px] rounded-lg w-full
                                            border-[0.4px] border-[#656565] p-4" 
                                            {...register("phone_number")}
                                            onChange={(e) => setFormData((prevData) => ({ ...prevData, phone_number: e.target.value }))}
                                        />
                                        </div>
                                        <div className="flex gap-3 mt-8 w-full">
                                            <div className="flex flex-col w-full">
                                                <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="Country">Country of Residence</label>
                                                <select
                                                    className="xl:w-[250px] w-full outline-none bg-transparent h-[60px] rounded-lg border-[0.4px] border-[#656565] p-4"
                                                    {...register("country_of_residence")}
                                              
                                                    onChange={(e) => setFormData((prevData) => ({ ...prevData, country_of_residence: e.target.value }))}
                                                >
                                                <option value="" disabled>Select Country</option>
                                            {(formData.countryOptions ?? []).map((country, index) => (
                                                <option key={index} value={country}>
                                                {country}
                                                </option>
                                            ))}
                                                </select>
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="timezone">Preferred Time Zone</label>
                                                    <select  
                                                        className=" xl:w-[250px] w-full outline-none h-[60px] 
                                                        rounded-lg border-[0.4px] border-[#656565] p-4 bg-transparent"
                                                        {...register("preferred_time_zone")}
                                                      
                                                        onChange={(e) => setFormData((prevData) => ({ ...prevData, preferred_time_zone: e.target.value }))}
                                                        >
                                                            <option value="" disabled>Select Time Zone</option>
                                                                {(formData.timeZoneOptions ?? []).map((timeZone, index) => (
                                                                    <option key={index} value={timeZone}>
                                                                    {timeZone}
                                                                    </option>
                                                                ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex flex-col">
                                                    <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="Email">Email</label>
                                                    <input 
                                                        type="email"  
                                                      
                                                        className=" w-full outline-none h-[60px] 
                                                        rounded-lg border-[0.4px] border-[#656565] p-4"
                                                        {...register("email")}
                                                        onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
                                                    />
                                                </div>
                                                <div className="flex flex-col mt-5">
                                                    <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="DOB">Date of Birth</label>
                                                    <input 
                                                        type="date"
                                                     
                                                        className=" w-full outline-none h-[60px] 
                                                        rounded-lg border-[0.4px] border-[#656565] p-4"
                                                        {...register("date_of_birth")} 
                                                        onChange={(e) => setFormData((prevData) => ({ ...prevData, date_of_birth: e.target.value }))}
                                                    />
                                                </div>
                                                <div className="flex flex-col mt-5">
                                                    <label className=" text-[16px] font-normal leading-[34px] text-black" htmlFor="linkedin">LinkedIn Profile URL</label>
                                                    <input 
                                                        type="url" 
                                                     
                                                        className=" w-full outline-none h-[60px] 
                                                        rounded-lg border-[0.4px] border-[#656565] p-4"
                                                        {...register("linkedin")} 
                                                        onChange={(e) => setFormData((prevData) => ({ ...prevData, linkedin: e.target.value }))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className=" font-semibold text-base text-black">Application Agreement</div>
                                                <p className=" text-sm font-normal mt-2 text-black leading-7 ">
                                                    Application Agreement By voluntarily submitting your application information below, you allow NEXTGEN HUB to consider your application for the Mentorship Program and other related programs. You may be contacted regarding these programs. The personal and non-personal information collected in the application will be solely used for the purposes to which you agree below. The collected information 
                                                    includes your name, email, geographical location, and responses to specific questions about your experience.
                                                </p>
                                            </div>
                                            <div className=" flex text-sm items-center gap-3 mt-8">
                                                <label className=" text-black flex gap-3 items-center justify-center ">
                                                <input className=" w-[27px] h-[27px] " type="checkbox"
                                                  {...register("agree", {
                                                    required: {
                                                    value: true,
                                                    message: 'You cant proceed without checking this'
                                                    }
                                                })}
                                                />
                                                 I agree</label> 
                                                  
                                            </div>
                                            <p className=" mt-1 text-xs text-red-700">{errors.agree?.message}</p>
                                            <button  className=" h-[60px] border-[0.4px] bg-[#4d59fa] mt-8 py-4 px-14 flex justify-center items-center text-white gap-6 shrink-0 text-base">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.5 12L22.5 12M22.5 12L12.5 2M22.5 12L12.5 22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            Next</button>
                                    </form>
                            </div>
                        </div>
            </section>
            )}
export default Mentorship