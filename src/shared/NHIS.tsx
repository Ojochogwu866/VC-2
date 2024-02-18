
interface CardProps {
    image: string;
}

const Nhis: React.FC<CardProps> = ({ image }) => {
    return (
        <div className="flex">
        <div className=" max-w-[245px] min-w-[150px] min-h-[150px] h-[245px] bg-white 
        justify-center items-center flex flex-col text-sm ">
            <img className=" md:w-[82px] w-[60px] h-[40px]" src={image} alt="" />
        </div>
        </div>
    );
};

export default Nhis