import { useState } from "react";
import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import TextAreaWithWordLimit from './TextArea'

type FormValues = {
    programs: string;
    yearsOfExperience: string;
    leadershipLevel: string;
    workLinks: string;
    skillset: { skill: string }[];
    experienceDescription: string;
};


const MentorExperience = () => {
  const [localSkills, setLocalSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState<string>('');

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSkill(event.target.value);
  };
   const removeSkill = (index: number) => {
    const updatedSkills = [...localSkills];
    updatedSkills.splice(index, 1);
    setLocalSkills(updatedSkills);
  };  
  const addSkill = () => {
    if (currentSkill.trim() !== '') {
      setLocalSkills([...localSkills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };


    const {onHandleNext, onHandleBack, setFormData, formData} = useFormState();
    const {register, handleSubmit } = useForm<FormValues>({ defaultValues: formData});
    const onHandleFormSubmit = (data: FormValues) => {
        setFormData((prevFormData) => ({ ...prevFormData, ...data }))
        onHandleNext();
        onHandleBack();
    }


    const programOptions = ['Maths', 'NLP', 'Computer Vision', 'Robotics', 'STEM', 'Blockchain', 'FullStack Dev', 'Physics', 'IOT', 'AI (Machine Learning)'];
    const experienceOptions = ['No Experience', 'Beginner', 'Intermediate', 'Expert'];
    const leadershipOptions = ['No Experience', 'Beginner', 'Intermediate', 'Expert'];

    return (
    <section className=' flex flex-col md:px-[80px] px-[20px]'>
       <div className=' pt-44 '>
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
                    <h1 className=" text-[#d11f26] font-normal md:text-[54px] text-[36px] leading-[44px] md:leading-[66px]"> Mentor Experience</h1>
                </div>
                <form onSubmit={handleSubmit(onHandleFormSubmit)} >
                            <div className=" mt-8 flex gap-3">
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <div className="flex flex-col">
                                            <div className=" md:text-[16px] text-[14px] font-normal 
                                            leading-[34px] text-black" >Which program are you interested in?</div>
                                                <div className=" grid grid-cols-2  gap-x-3 md:mt-12 mt-4 gap-y-4">
                                                   {programOptions.map((program, index) => (
                                                    <div className="block relative  w-fit py-[10px] md:px-[30px] px-[40px] 
                                                 md:gap-4 gap-2 rounded-lg border-[0.4px] border-[#656565]" key={index}>
                                                     <label className=" md:text-base text-[14px] font-normal gap-[10px] text-black flex justify-center items-center">
                                                     <input 
                                                         type="radio"  
                                                         className=" outline-none opacity-0 w-[0px] h-[0px] absolute cursor-pointer " 
                                                         {...register('programs', { setValueAs: (value: string[]) => value[index] })}
                                                         onChange={(e) => setFormData((prevData) => ({ ...prevData, programs: e.target.value }))}
                                                         value={program}
                                                        />
                                                        <span className="checkmark cursor-pointer absolute top-[13px] left-2  h-[17px] w-[17px] border border-[#000] rounded-[50px]"></span>
                                                         <span className="">{program}</span>
                                                     </label>
                                                  </div>
                                                ))}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mt-8">
                                                    <div className=" md:text-[16px] text-[14px] font-normal 
                                                        leading-[34px] text-black" >
                                                            What is your professional experience level?</div>
                                                    <div className="md:flex grid grid-cols-2 gap-3 mt-4">
                                                        {experienceOptions.map((experience, index) => (
                                                            
                                                       <div className="block relative py-[10px] md:px-[30px] px-[40px]  gap-2 md:gap-4 
                                                       rounded-lg border-[0.4px] border-[#656565]" key={index}>
                                                          <label className=" md:text-base text-sm font-normal text-black flex justify-center items-center">
                                                           <input 
                                                               type="radio"  
                                                               className=" outline-none opacity-0 w-[0px] h-[0px] absolute cursor-pointer " 
                                                               {...register('yearsOfExperience', { setValueAs: (value: string) => value })}
                                                               value={experience}
                                                               onChange={(e) => setFormData((prevData) => ({ ...prevData, yearsOfExperience: e.target.value }))}
                                                           />
                                                           <span className="checkmark cursor-pointer absolute top-[13px] left-2  h-[17px] w-[17px] border border-[#000] rounded-[50px]"></span>
                                                               <span className="">{experience}</span>
                                                           </label>
                                                       </div>
                                                    ))}

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col mt-8">
                                                        <div className=" md:text-[16px] text-sm font-normal 
                                                            leading-[34px] text-black" >
                                                                What is your leadership/mentorship experience level?</div>
                                                        <div className="md:flex grid grid-cols-2 gap-3 mt-4">
                                                           {leadershipOptions.map((leadership, index) => (
                                                        <div className="flex justify-center items-center relative py-[10px] md:px-[30px] px-[40px]  gap-2 md:gap-4 
                                                       rounded-lg border-[0.4px] border-[#656565]" key={index}>
                                                               <label className=" md:text-base text-sm font-normal text-black flex items-center justify-center">
                                                            <input 
                                                                type="radio"  
                                                                
                                                                className=" outline-none opacity-0 w-[0px] h-[0px] absolute cursor-pointer" 
                                                                {...register('leadershipLevel', { setValueAs: (value: string) => value })}
                                                                onChange={(e) => setFormData((prevData) => ({ ...prevData, leadershipLevel: e.target.value }))}
                                                                value={leadership}
                                                            />
                                                                  <span className="checkmark cursor-pointer absolute top-[13px] left-2  h-[17px] w-[17px] border border-[#000] rounded-[50px]"></span>
                                                                <span className="">{leadership}</span>
                                                         </label>
                                                     </div>
                                                    ))}

                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col mt-8">
                                                            <div className=" md:text-[16px] text-sm font-normal 
                                                            leading-[34px] text-black" >What skills do you have?</div>
                                                                <div className="flex gap-3">
                                                                    <div className="flex justify-center items-center py-[10px] px-[30px] 
                                                                    mt-4 gap-4 rounded-lg border-[0.4px] border-[#656565] w-full h-[159px]">
                                                                    
                                                                        <input
                                                                        type="text"
                                                                        {...register('skillset')}
                                                                        onChange={handleSkillChange}                                      
                                                                        placeholder="Type here to add new Skills"
                                                                        className="outline-none rounded-lg text-sm w-2/6 h-full"
                                                                        
                                                                        />
                                                                         <ul className=" flex flex-wrap  gap-2 text-xs text-black font-normal w-10/12">
                                                                            {localSkills.map((skill, index) => (
                                                                            <li key={index} className=" px-[10px] py-[10px] border border-black bg-[#CECCFF]">{skill}  <button onClick={() => removeSkill(index)}>&times;</button></li>
                                                                            ))}
                                                                        </ul>
                                                                        <button className=" w-[100px] block bg-[#CECCFF] p-2 text-black  text-sm font-normal" onClick={addSkill}>Add Skill</button>
                                                                </div>  
                                                            </div>
                                                        </div>                                                     
                                                        <TextAreaWithWordLimit
                                                            label="Briefly describe your involvement in a project you are particularly proud of. What was your impact and the benefits of your contribution?"
                                                            name="experienceDescription"
                                                            maxLength={200}
                                                            placeholder="Please limit your response to 200 words"
                                                            onInputChange={(value) =>
                                                            setFormData((prevData) => ({ ...prevData, experienceDescription: value }))
                                                            }
                                                        />
                                                    <div className="flex flex-col mt-8">
                                                        <div className="  md:text-[16px] font-normal text-sm leading-7
                                                            md:leading-[34px] text-black w-10/12" >Please provide any direct links that showcase your work (i.e. blog, work portfolio).?</div>
                                                                <div className="flex gap-3">
                                                                    <div className="flex justify-center items-center 
                                                                    mt-4 gap-4 w-full ">
                                                                        <input
                                                                        type="url"
                                                                        {...register("workLinks")}
                                                                        onChange={(e) => setFormData((prevData) => ({ ...prevData, workLinks: e.target.value }))}
                                                                           
                                                                            className=" border-[0.4px]  text-sm border-[#656565] outline-none  py-[10px] px-[30px] rounded-lg w-full h-[60px]"  
                                                                        />
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="flex md:gap-4 gap-2 mt-4">
                                                <button  
                                                    
                                                    onClick={onHandleBack}
                                                    className=" h-[60px] border-[0.4px] text-[#4d59fa] mt-8 py-4 md:px-14 px-[14px] flex justify-center border-[#4d59fa] items-center bg-transparent md:gap-6 gap-3 shrink-0 text-base">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 12H2M2 12L12 22M2 12L12 2" stroke="#4D59FA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                            Previous
                                                </button>
                                                <button
                                                
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
export default MentorExperience