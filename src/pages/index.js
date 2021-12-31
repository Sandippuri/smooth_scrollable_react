import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = ()=>{
        setisOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>   
        <HeroSection/>
        <InfoSection/>
        </>
    )
}

export default Home
