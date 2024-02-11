import React, { useState } from 'react';



interface TextAreaWithWordLimitProps {
  label: string;
  name: string;
  maxLength: number;
  placeholder: string;
  onInputChange: (value: string) => void;

}

const TextAreaWithWordLimit: React.FC<TextAreaWithWordLimitProps> = ({
  label,
  maxLength,
  placeholder,
  onInputChange,

}) => {
  const [wordCount, setWordCount] = useState(0);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const currentWordCount = inputValue.split(/\s+/).filter((word) => word !== '').length;

    if (currentWordCount <= maxLength) {
      onInputChange(inputValue);
      setWordCount(currentWordCount);
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="md:text-[16px] font-normal text-sm leading-7 md:leading-[34px] text-black">
        {label}
      </div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center py-[10px] px-[30px] mt-4 gap-4 rounded-lg border-[0.4px] border-[#656565] w-full h-[159px]">
          <textarea
          
            onChange={handleInputChange}
            placeholder={placeholder}
            className="outline-none rounded-lg text-sm w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <p className="text-[#4d59fa] text-sm font-semibold">{wordCount}/{maxLength}</p>
      </div>
    </div>
  );
};

export default TextAreaWithWordLimit;
