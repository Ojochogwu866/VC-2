import { createContext, ReactNode, useState, useContext, SetStateAction, Dispatch } from "react"

interface IProps {
    children:ReactNode
}

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
    country_of_residence: string;
    preferred_time_zone: string;
    linkedin: string  
    programs: string;
    yearsOfExperience: string;
    workLinks: string;
    leadershipLevel: string;
    skillset: { skill: string }[];
    mentorsyearsOfExperience: string;
    mentee_expectation: string;
    mentees_number: string;
    experienceDescription: string;
    other_info: string;   
    timeZoneOptions: string[];
    countryOptions: string[]
}

type IFormContext = {
    onHandleNext: () => void;
    onHandleBack: () => void;
    step:number,
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
}

const FormContext = createContext<IFormContext>({
    onHandleBack: () => {},
    onHandleNext: () => {},
    step: 1,
    formData:{
        firstname: "",
        lastname: "",
        email: "",
        phone_number: "",
        date_of_birth: "",
        country_of_residence:"",
        preferred_time_zone:"",
        linkedin:"",  
        workLinks:"",
        programs: "",
        yearsOfExperience:"",
        leadershipLevel:"",
        skillset: [],
        mentorsyearsOfExperience:"",
        mentee_expectation:"",
        mentees_number:"",
        experienceDescription: "",
        other_info:"",   
        countryOptions:[],
        timeZoneOptions:[]
    },
    setFormData: () => {},
});



export function FormProvider({children}: IProps){
    const [step, setStep ] = useState(1);
    const [formData, setFormData] = useState<FormData>({
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

    function onHandleNext(){
        setStep((prevValue) => prevValue + 1);
    }

        function onHandleBack(){
        setStep((prevValue) => prevValue - 1);
    }
    console.log({formData})
    return ( 
    <FormContext.Provider 
        value={{onHandleBack, onHandleNext, step, formData, setFormData}}>
        {children}
    </FormContext.Provider>
    )
}

export function useFormState() {
    return useContext(FormContext);
}