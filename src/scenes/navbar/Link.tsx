import React from 'react';
import { SelectedPage } from '@/shared/types';
import { NavLink } from 'react-router-dom';

type Props = {
  page: string;
  pagelink: string;
  selectedPage: SelectedPage;
  textStyles: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Page: React.FC<Props> = ({
  page,
  selectedPage,
  pagelink,
  setSelectedPage,
  textStyles,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  const scrollToBookAppointment = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById("book-appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedPage(lowerCasePage);
  };

  if (pagelink === '#book-appointment') {
    return (
      <NavLink
        to={`${pagelink}`}
        className={`${selectedPage === lowerCasePage ? "" : ""} font-medium text-[14px] text-[#013919] pb-[4px] ${textStyles}`}
        onClick={scrollToBookAppointment}
      >
        {({ isActive }) => (
          <span className={isActive ? "border-b-[1.5px] border-[#02AD4D] text-[#02AD4D] pb-2" : ""}>{page}</span>
        )}
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={`/${pagelink}`}
        className={`${selectedPage === lowerCasePage ? "" : ""} font-medium text-[14px] text-[#013919] pb-[4px] ${textStyles}`}
      >
        {({ isActive }) => (
          <span className={isActive ? "border-b-[1.5px] border-[#02AD4D] text-[#02AD4D] pb-2" : ""}>{page}</span>
        )}
      </NavLink>
    );
  }
};

export default Page;

