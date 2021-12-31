import { useState } from 'react';
import React from 'react';
import { HeroContainer,HeroBg,VideoBg ,HeroContent,HeroH1,HeroP, HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';
import Video from '../../videos/backVideo.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, sethover] = useState(false);
    const onHover = ()=>{
        sethover(!hover);
    }

    return (
        <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Go Green Kattike Resort and Homestay</HeroH1>
                <HeroP>
                    Feels like home along with the beauty of nature and greenery
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/'  primary = 'true' dark = 'true'onMouseEnter = {onHover}  onMouseLeave={onHover}>Make Reservation{hover?<ArrowForward/>:<ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    );
}

export default HeroSection;
    