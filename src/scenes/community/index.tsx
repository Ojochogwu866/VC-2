import Navbar from '@/scenes/navbar'
import Stack from './stack'
import Footer from '@/scenes/footer'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'

function EventsPage() {
    const [selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
    <div>
        <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage} 
        setSelectedPage = {setSelectedPage} />
            <Stack/>
        <Footer/>
    </div>
    )
}
export default EventsPage
