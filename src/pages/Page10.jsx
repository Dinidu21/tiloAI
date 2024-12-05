import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Page2 = () => {
    const [imgSrc, setImgSrc] = useState('public/mainLogo.png');
    const handleClick = () => {
        if (imgSrc === 'public/mainLogo.png') {
            setImgSrc('public/Property 1=Variant3.png');
        } else {
            setImgSrc('public/mainLogo.png');
        }
    };
    return (
        <motion.div
            className="wrapper animated-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className="wrapper" style={{opacity:0.8, backgroundColor:"black"}}>
                <div>
                    <img
                        src='/close.png'
                        height={120}
                        width={120}
                        className={"history-btn"}
                    />
                </div>
                <div>
                    <img
                        src='/profile.png'
                        className={"profile-btn"}
                    />
                </div>
                <div className={"v-box"}>
                    <img
                        src='/Rectangle%2017.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/Rectangle%2018.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/Rectangle%2019.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/Rectangle%2020.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                    <img
                        src='/Rectangle%2021.png'
                        height={120}
                        width={120}
                        className={"v-box-item"}
                    />
                </div>
                <div>
                    <img
                        src='/Ellipse4.png'

                        className={"black-mask-3"}
                    />
                </div>
                <div>
                    <img
                        src='/Rectangle%207.png'
                        className={"black-mask-2"}
                    />
                </div>
                <div>
                    <img
                        src={imgSrc}
                        onClick={handleClick}
                        height={120}
                        width={120}
                        className={"main-logo"}
                    />
                </div>
                <div className={"center-element foote-All-rights-reserved"}>@2024 TILO All rights reserved.</div>
            </div>
        </motion.div>
    )
}

export default Page2