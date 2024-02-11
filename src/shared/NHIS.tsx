
interface CardProps {
    image: string;
}

const Nhis: React.FC<CardProps> = ({ image }) => {
    return (
        <div className="flex">
        <div className=" max-w-[245px] min-w-[200px] h-[245px] bg-white 
        justify-center items-center flex flex-col text-sm ">
            <img className=" w-[82px] h-[40px]" src={image} alt="" />
        </div>
        </div>
    );
};

export default Nhis