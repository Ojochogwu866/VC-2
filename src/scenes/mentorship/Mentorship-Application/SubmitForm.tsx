import { useFormState } from "./FormContext";

type Item = {
    id:number,
    list: string,
}

const SubmitForm = () => {
      const { onHandleBack, formData, setFormData } = useFormState();
   const handleSubmit = async () => {
  try {
    const response = await fetch('https://nxen-api.onrender.com/api/v1/mentorship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone_number: "",
        date_of_birth: "",
        country_of_residence:"",
        preferred_time_zone:"",
        linkedin:"",  
        programs: "",
        workLinks:"",
        yearsOfExperience:"",
         experienceDescription: "",
        leadershipLevel:"",
        skillset: [],
        mentorsyearsOfExperience:"",
        mentee_expectation:"",
        mentees_number:"",
        other_info:"",
        countryOptions:[],
        timeZoneOptions:[]
      });
    } else {
      console.error('Failed to submit the form.');
    }
  } catch (error) {
    console.error('An error occurred during form submission:', error);
  }
};

    const item: Item[] = [
    {id: 1, list: '1. Application Review: Our team will carefully review your application and assess your eligibility based on the criteria mentioned.'},
    {id: 2, list: '2. Selection Process: Shortlisted candidates will be contacted for further evaluation, which may include interviews or additional assessments.'},
    {id: 3, list: '3. Program Confirmation: If selected, you will receive an email confirming your acceptance into the Mentorship Program and providing further details about the next steps'},
    {id: 4, list: '4. Cohort Assignment: Once accepted, you will be assigned to a cohort based on compatibility and mentee preferences.'},
    {id: 5, list: '5. Program Kick-off: The Mentorship Program will officially commence on August 1, 2023. You will receive all necessary information and instructions to begin your mentoring journey.'},
]

    return (
    <section className=' flex flex-col md:px-[80px] px-[20px] mx-auto'>
        <div className=' pt-44'>
            <p className=' text-[#9F9FA2] md:text-[16px] text-sm flex items-center gap-2 tracking-[3.2px]'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.9751 15.0586L2.91676 10.0003L7.9751 4.94193" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.0835 10L3.0585 10" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                GO BACK
                </p>
                <h1 className=' md:text-[70px] text-[44px] mt-4 font-bold text-[#000]'>Mentor Application</h1>
                <div className=" md:w-9/12 mx-auto mt-12">
                    <h1 className=" text-[#d11f26] font-normal md:text-[54px] pb-4 text-[36px] leading-[44px] md:leading-[66px]"> Application Complete</h1>
                        <span className=" text-[#828282] text-[14px] mt-12">
                            Thank you for taking the time to complete the NEXTGEN HUB Mentorship Program application.
                            We appreciate your interest in becoming a mentor and sharing your expertise with our community.
                        </span>
                        <div className=" mt-12">
                            <div className=" text-black font-semibold md:text-base text-sm md:leading-8">What Happens Next?</div>
                                <ul className=' space-y-4 mt-8'>
                                {item.map((item) => (
                                    <li className='flex items-center gap-3 text-sm leading-7 text-black' key={item.id}>{item.list}</li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <p className=" text-sm font-normal mt-2 text-black leading-7">
                                    Please note that due to the high volume of applications we receive, we may not be able to provide individual feedback on every application. We appreciate your understanding. Should you have any questions or need further assistance, 
                                    please don't hesitate to reach out to us at team@nextgen.com.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                                                 <button  
                                                    type="button"
                                                    onClick={onHandleBack}
                                                    className=" h-[60px] border-[0.4px] text-[#4d59fa] mt-8 py-4 md:px-14 px-[14px] flex justify-center border-[#4d59fa] items-center bg-transparent md:gap-6 gap-3 shrink-0 text-base">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 12H2M2 12L12 22M2 12L12 2" stroke="#4D59FA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                           Review Application
                                                </button>
                                                <button
                                                    onClick={handleSubmit}
                                                    type="submit"
                                                        className=" h-[60px] border-[0.4px] bg-[#4d59fa] mt-8 py-4 md:px-14 px-[14px] flex justify-center items-center text-white gap-6 shrink-0 text-base">
                                                                Submit Application
                                                </button>
                                            </div>
                    </div>
            </div>
    </section>
            )}
export default SubmitForm