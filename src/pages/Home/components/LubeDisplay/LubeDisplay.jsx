import React from 'react'
import bottles from '../../bottles.png'
import './index.css'

export default function LubeDisplay() {
    
    return (
        <div className='lube-display'>
            <div className='lube-display-image-container'>
                <img className='lube-display-image' src={bottles}/>
            </div>
            <div className='lube-display-description-container'>
                <div className='lube-display-description'>
                    <div>
                        Lube
                    </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio similique porro sint odit consequuntur. Recusandae id iure eius magnam perspiciatis, impedit ducimus maiores esse quia minima explicabo dignissimos fuga?
                    </div>
                </div>
            </div>
        </div>
    )
}