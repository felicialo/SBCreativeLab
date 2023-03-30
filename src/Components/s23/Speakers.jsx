import React from 'react'
import './Speakers.css'
import useWindowDimensions from '../../utils/useWindowDimensions'

import speakersHeaderDeco from '../../images/s23_images/speakers-header-deco.svg'
import speakersHeader from '../../images/s23_images/speakers-header.svg'
import cardona from '../../images/s23_images/speakers/cardona.png'
import xue from '../../images/s23_images/speakers/xue.png'
import vo from '../../images/s23_images/speakers/vo.png'
import jahng from '../../images/s23_images/speakers/jahng.png'
import bours from '../../images/s23_images/speakers/bours.png'

function SpeakersCell(props) {
    return (
        <div className='speakers-cell'>
            <img src={props.img} alt={props.name} />
            <div className='speakers-desc'>
                <strong>{props.name}</strong>
                {props.company ?
                    <p>
                        [{props.position}<br/>
                        @ {props.company}]
                    </p>
                    :
                    <p>
                        [{props.position}]
                    </p>
                }
            </div>
        </div>
    )
}

export default function Speakers() {
    return (
        <div className='speakers'>
            <div className='speakers-background'/>
            <div className='speakers-frame'>
                <div className='speakers-header'>
                    <img src={speakersHeaderDeco} alt='' />
                    <img src={speakersHeader} style={{ left: '1px' }} alt='speakers' />
                </div>
                <div className='speakers-grid speakers-grid-1'>
                    <SpeakersCell company='Figma' img={cardona} name='Miguel Cardona' position='Designer Advocate for Education'/>
                    <SpeakersCell company='Riot Games' img={xue} name='Janny Xue' position='User Experience Designer'/>
                    <SpeakersCell company='Gaucho Creative Marketing Group' img={vo} name='Van Vo' position='Director of Design'/>
                </div>
                <div className='speakers-grid speakers-grid-2'>
                    <SpeakersCell company='Pitchbook Data' img={jahng} name='Christine Jahng' position='Product Designer'/>
                    <SpeakersCell img={bours} name='Enya Bours' position='Freelance Product Designer'/>
                </div>
            </div>
        </div>
    )
}