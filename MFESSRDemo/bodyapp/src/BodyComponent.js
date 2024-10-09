import React from 'react'
import BannerPath from './resources/images/lowesbanner.jpg'
function bodyComponent() {
    return (
        <div>
            <img src={BannerPath} className="banner"/>
        </div>
    )
}

export default bodyComponent