import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Card from "../../shared/Card";
import SuccessModal from "@/shared/Modal";
import { useParams } from "react-router-dom";

type FormValues = {

    firstname: string,
    lastname: string,
    email: string, 
    phone_number: string
 
}

export const Form = () => {

const gradientColors = [
  'linear-gradient(162deg, #51FF77 0%, #087F87 100%)',
  'var(--Second-Gradient, linear-gradient(162deg, #5162FF 0%, #413DEB 100%))',
  'linear-gradient(162deg, #FF7B51 0%, #C51051 100%)',
];

let currentIndex = 0;

const getRandomGradient = () => {
  const currentGradient = gradientColors[currentIndex];
  currentIndex = (currentIndex + 1) % gradientColors.length; // Cycle to the next index
  return currentGradient;
};

  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({
    stack:'',
    title: '',
    event: '',
    date:'',
    platform:'',
    location:'',
  });

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`https://nxen-api.onrender.com/api/v1/events/${eventId}`);
        const data = await response.json();
        // Log the response and data for debugging
        console.log('API Response:', response);
        console.log('Fetched Event Details:', data);
        setEventDetails(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);
  const form = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://nxen-api.onrender.com/api/v1/events/${eventId}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
         setIsSuccess(true);
        reset();
      } else {
        console.error("Error submitting form:", await response.json());
        setIsSuccess(false);
      }
    setShowModal(true);
    } catch (error) {
      setIsSuccess(false);
      setShowModal(true);
      console.error("An error occurred:", error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
   const handleCloseModal = () => {
    setShowModal(false);
  };

    return(
        <div className=" md:px-[80px] px-[20px] mx-auto ">  
          <SuccessModal isOpen={showModal} onClose={handleCloseModal} isSuccess={isSuccess} />
                <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px] pt-44' > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.9751 15.0586L2.91676 10.0003L7.9751 4.94193" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.0835 10L3.0585 10" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    GO BACK
                </p>
                    <h1 className=' md:text-[70px] text-[44px] font-semibold text-[#000]'>Registration</h1>
            <div className="flex lg:flex-row flex-col justify-between ">
                <div className=" mt-44">
                <div className=" lg:w-[500px] flex justify-center items-center h-[472px] bg-black relative">
                    <div className=" -mt-44">
                    <Card
                         
              gradientColor={getRandomGradient()}
              title={eventDetails.title}
              event={eventDetails.event}
              stack={eventDetails.stack}
              titleplatform={eventDetails.platform}
              titledate={eventDetails.date}
              titlelocation={eventDetails.location}
      
                    />
                </div>
                </div>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="lg:w-auto w-[90%] lg:pl-5 mx-auto lg:mt-14">
                <p className=" text-[rgb(48,48,48)] mt-8 font-semibold">Fill in the form below to complete your registration</p>
                <div className=" flex flex-col">
                    <div className=" flex xl:flex-row flex-col gap-3 mt-14">
                    <div className="flex flex-col">
                        <label className=" font-normal text-[16px] text-black leading-8" htmlFor="name">First Name</label>
                        <input  
                            type="text" 
                            id="firstname" 
                            className=" xl:w-[293px] w-full h-[60px] rounded-lg border-[0.4px] border-[#656565] p-4"
                            {...register("firstname", {
                                required: {
                                    value: true,
                                    message: 'First name is required'
                                }
                            })}
                        />
                        <p className=" mt-1 text-xs text-red-700">{errors.firstname?.message}</p>
                    </div>
                    <div className="flex flex-col">
                    <label className=" font-normal text-[16px] text-black leading-8" htmlFor="name">Last Name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        className=" xl:w-[293px] w-full h-[60px] rounded-lg border-[0.4px] border-[#656565] p-4"
                        {...register("lastname", {
                            required: {
                                value: true,
                                message: 'Lastname is required'
                            }
                        })}
                    />
                    <p className=" mt-1 text-xs text-red-700">{errors.lastname?.message}</p>
                    </div>
                    </div>
                    <div className="flex flex-col mt-6">
                    <label className=" font-normal text-[16px] text-black leading-8"  htmlFor="name">Email </label>
                    <input 
                        type="text"
                        
                        id="email" 
                        className=" h-[60px] rounded-lg border-[0.4px] border-[#656565] p-4"
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                message: 'Invalid email address',
                            },
                            validate: {
                                notAdmin : (fieldValue) => {
                                    return ( 
                                    fieldValue !== "admin@example.com" || 
                                    "Enter a different email address"
                                    )
                                },
                            },
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })}
                    />
                    <p className=" mt-1 text-xs text-red-700">{errors.email?.message}</p>
                    <div className="flex flex-col mt-6">
                    <label className=" font-normal text-[16px] text-black leading-8" htmlFor="name">Phone Number</label>
                    <input 
                        type="text" 
                        id="phonenumber" 
                        className=" h-[60px] rounded-lg border-[0.4px] border-[#656565] p-4"
                        {...register("phone_number", {
                            required: {
                                value: true,
                                message: 'Phone Number is required'
                            }
                        })}
                    />
                    <p className=" mt-1 text-xs text-red-700">{errors.phone_number?.message}</p>
                    </div>
                    </div>
                </div>
                <div className=" flex text-sm items-center gap-3 mt-12">
                <input className=" w-[27px] h-[27px]" type="checkbox"/> <p>Yes, I want to receive update about events like this</p></div>
                <button disabled={isLoading}  className=" h-[60px] rounded-lg border-[0.4px] bg-[#4d59fa]
                mt-8 p-4 flex justify-center items-center text-white w-full">{isLoading ? "Registering..." : "Register"}</button>
            </form>
            </div>

        </div>
    )
}