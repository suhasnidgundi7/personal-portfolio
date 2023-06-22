"use client"

import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const CustomTypeWriter = () => {
    return (
        <>

            <div className="sp-subtitle">
                <TypewriterComponent
                    options={
                        {
                            strings: [
                                "Web Developer",
                                "Frontend Developer",
                                "Software Engineering"
                            ],
                            autoStart: true,
                            loop: true
                        }
                    }
                />
            </div>

        </>
    )
}

export default CustomTypeWriter