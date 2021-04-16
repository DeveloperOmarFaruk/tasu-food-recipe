import React from 'react'
import './Social.css'
import { SiFacebook } from 'react-icons/si'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const Social = () => {
    return (
        <>
            <div class="float-sm">
            <div class="fl-fl float-fb">
            <a href="https://www.facebook.com/groups/indianfoodrecipess" target="_blank">
                <SiFacebook className="social-icon"/> Facebook</a>
            </div>

            <div class="fl-fl float-tw">
            <a href="https://twitter.com/IndianFoodRecpe" target="_blank">
                <AiFillTwitterCircle className="social-icon"/>Twitter</a>
            </div>

            <div class="fl-fl float-gp">
            <a href="https://www.instagram.com/indian.food.recipe/?hl=en" target="_blank">
                <AiFillInstagram className="social-icon"/>Instagram</a>
            </div>

            <div class="fl-fl float-rs">
            <a href="https://www.linkedin.com/company/recipes-spot/about/" target="_blank">
                <AiFillLinkedin className="social-icon"/>LinkerIn</a>
            </div>

            <div class="fl-fl float-ig">
            <a href="https://youtu.be/-xqaVsLUzOM" target="_blank">
                <AiFillYoutube className="social-icon"/>YouTube</a>
            </div>

            </div>
        </>
    )
}

export default Social
