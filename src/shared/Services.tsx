
interface CardProps {
    image: string;
    title: string;
}

const Services: React.FC<CardProps> = ({ image, title }) => {
    return (
        <div className="flex">
        <div className=" max-w-[330px] min-w-[300px] h-[340px] bg-[#383838] justify-center items-center flex flex-col text-sm ">
            <img className=" w-[134px] h-[134px]" src={image} alt="" />
            <p className=" text-lg text-white mt-2">{title}</p>
        </div>
        </div>
    );
};

export default Services;