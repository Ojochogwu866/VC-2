import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import TextAreaWithWordLimit from './TextArea'

type FormValues = {
    mentorsyearsOfExperience: string;
    mentee_expectation: string;
    mentees_number: string;
    other_info: string;
};

const MentorMatching = () => {
    const {onHandleNext, onHandleBack, setFormData, formData} = useFormState();
    const {register, handleSubmit } = useForm<FormValues>({ defaultValues: formData});
    const onHandleFormSubmit = (data: FormValues) => {
        setFormData((prevFormData) => ({ ...prevFormData, ...data }))
        onHandleNext();
        onHandleBack();
    }
    const experienceOptions = ['0-1 year', '2-4 years', '5-7 years', '8 years and more'];

    return (
    <section className=' flex flex-col md:px-[80px] px-[20px] mx-auto'>
        <div className=' pt-44'>
             <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] 
            flex items-center gap-2 tracking-[3.2px]' > 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.9751 15.0586L2.91676 10.0003L7.9751 4.94193" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.0835 10L3.0585 10" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    GO BACK
            </p>
             <h1 className=' md:text-[70px] text-[44px] mt-4 font-bold text-[#000]'>Mentor Application</h1>
            <div className=" md:mt-20 mt-4 md:w-9/12 mx-auto">
            <div className="">
                    <h1 className=" text-[#d11f26] font-normal md:text-[54px] text-[36px] leading-[44px] md:leading-[66px]"> Mentor Mentee Matching</h1>
                        <p className=" mt-8 text-sm font-normal text-black">
                            We'd like to get to know you a bit more so that we can best match our mentees 
                            with mentors.
                        </p>
                </div> 
                        <form onSubmit={handleSubmit(onHandleFormSubmit)}>                  
                            <div className=" mt-8 flex gap-3">
                                <div className="flex flex-col">
                                    <div className="flex flex-col text-black">
                                        <div className="flex flex-col mt-8">
                                            <div className=" md:text-[16px] text-sm font-normal 
                                            leading-[34px] text-black" >
                                                How many years of Mentoring Experience do you have?
                                            </div>
                                           <div className="md:flex grid grid-cols-2 gap-3 mt-4">
  {experienceOptions.map((experience, index) => (
                   <div className="block relative  w-fit py-[10px] md:px-[30px] px-[40px] 
                                                 md:gap-4 gap-2 rounded-lg border-[0.4px] border-[#656565]" key={index}>
                                                     <label className=" md:text-base text-[14px] font-normal gap-[10px] text-black flex justify-center items-center">
      <input 
        type="radio"  
        className= "outline-none opacity-0 w-[0px] h-[0px] absolute cursor-pointer" 
        {...register('mentorsyearsOfExperience')}
        onChange={(e) => setFormData((prevData) => ({ ...prevData, mentorsyearsOfExperience: e.target.value }))}
        value={experience}
        id={`experience-${index}`} // Added an id for the label to reference
      />
       <span className="checkmark cursor-pointer absolute top-[13px] left-2  h-[17px] w-[17px] border border-[#000] rounded-[50px]"></span>
                                                         <span className="">{experience}</span>
      </label>
    </div>
  ))}
</div>

                                            </div>
                                              <TextAreaWithWordLimit
                                                            label="Describe what impact you hope to have on your mentee(s)
                                                    through this program Please limit your response to 200 words?."
                                                            name="mentee_expectation"
                                                            maxLength={200}
                                                            placeholder="Please limit your response to 200 words"
                                                            onInputChange={(value) =>
                                                            setFormData((prevData) => ({ ...prevData, mentee_expectation: value }))
                                                            }
                                                        />

                                        <div className="flex flex-col mt-8">
                                            <div className=" md:text-[16px] text-sm font-normal 
                                                md:leading-[34px] text-black w-10/12 leading-7" >How many mentees are you comfortable with mentoring at a time (Max 3)?</div>
                                                    <div className="flex gap-3">
                                                        <div className="flex justify-center items-center mt-4 gap-4 w-full md:w-[250px] ">
                                                            <select
                                                            {...register("mentees_number")}
                                                            onChange={(e) => setFormData((prevData) => ({ ...prevData, mentees_number: e.target.value }))}
                                                                title="select"    
                                                                className=" border-[0.4px] border-[#656565] outline-none  py-[10px] px-[30px] rounded-lg w-full h-[60px]"  
                                                            >
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                            </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <p className=" mt-8 text-sm font-normal md:leading-8 leading-7 text-black">
                                                            As a mentor, you will have the chance to make a positive impact on the program by guiding mentees through selected projects, sharing your expertise, providing career advice,
                                                            and cultivating long-lasting relationships. We are excited to review your application.
                                                        </p>
                                        </div>

                                         <TextAreaWithWordLimit
                                                            label="Is there anything else you would like us to know about you? 
                                                Please limit your response to 200 words."
                                                            name="other_info"
                                                            maxLength={200}
                                                            placeholder="Please limit your response to 200 words"
                                                            onInputChange={(value) =>
                                                            setFormData((prevData) => ({ ...prevData, other_info: value }))
                                                            }
                                                        />
                                      
                                        </div>
                                    </div>
                                </div>
                               <div className="flex md:gap-4 gap-2 mt-4">
                                                <button  
                                                    type="button"
                                                    onClick={onHandleBack}
                                                    className=" h-[60px] border-[0.4px] text-[#4d59fa] mt-8 py-4 md:px-14 px-[14px] flex justify-center border-[#4d59fa] items-center bg-transparent md:gap-6 gap-3 shrink-0 text-base">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 12H2M2 12L12 22M2 12L12 2" stroke="#4D59FA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                            Previous
                                                </button>
                                                <button
                                                    type="button"
                                                        onClick={onHandleNext}
                                                        className=" h-[60px] border-[0.4px] bg-[#4d59fa] mt-8 py-4 px-14 flex justify-center items-center text-white md:gap-6 gap-3 shrink-0 text-base">
                                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.5 12L22.5 12M22.5 12L12.5 2M22.5 12L12.5 22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                                Next
                                                </button>
                                            </div>
                            </form>
            </div>
        </div>
    </section>
            )}
export default MentorMatching