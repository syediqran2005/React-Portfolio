import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'
import Gallery from '../gallery/Gallery';
import SkillCard from '../skillsCard/SkillCard';
import galleryoneimage from '../../assets/images/galleryoneimage.webp';
import gallerytwoimage from '../../assets/images/gallerytwoimage.webp';

const textOne = "I love making cool things and <br/> solving complex problems for <br/> people — like you."
const textTwo = "I deliver impactful results  <br/> through strategic thinking and <br/> data-driven insights."

const cardObject = {
    index : `(01)`,
    title : 'Discovery',
    text : 'The first part of my process is about learning all about your industry.'
}
function Content() {
    return (
        <>
            <div className='contentStyle'>
                <h2 className='titleStyle'>
                    SENIOR <br />
                    EXPERIENCE <br />
                    DESIGNER©
                </h2>
                <h5 className='textStyle'>
                CURRENTLY CRAFTING <br /> EXPERIENCES AT CROSBY
                </h5>
                <h5 className='yearStyle'>
                (2021 – PRESENT)
                </h5>
                <div className='imageContainer'>
                <Gallery src={gallerytwoimage} text={textOne}/>
                <Gallery src={galleryoneimage} text={textTwo}/>
                </div> <br /><br /><br /><br /><br /><br />
                <div className="skillsContainer">
                    <h3 className='skillStyle'>My tried-and-true <br /> design process</h3> <br /><br /><br />
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                    <SkillCard index={cardObject.index} title={cardObject.title} text={cardObject.text}/>
                </div>

            </div>

        </>
    )
}

export default Content