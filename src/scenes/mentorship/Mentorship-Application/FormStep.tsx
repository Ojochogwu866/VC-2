import { useFormState } from "./FormContext";
import MentorExperience from "./MentorExperienceForm";
import Mentorship from "./MentorshipForm";
import MentorMatching from "./Mentor-Mentee";
import SubmitForm from "./SubmitForm";

export function FormStep(){
    const { step } = useFormState();
    switch(step){
        case 1:
            return <Mentorship/>;
        case 2:
            return <MentorExperience/>;
        case 3:
            return <MentorMatching/>;
        case 4:
            return <SubmitForm/>;

            default:
                return null;
    }
}