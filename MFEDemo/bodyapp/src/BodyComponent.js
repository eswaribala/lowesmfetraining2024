import React from 'react'
import BannerPath from './resources/images/lowesbanner.jpg'
import './BodyComponent.css'
export function BodyComponent(){

    return(
        <div>
            <img src={BannerPath} className="banner"/>
        </div>
    )
}