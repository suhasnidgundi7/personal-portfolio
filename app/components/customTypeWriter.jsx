"use client"

import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const CustomTypeWriter = () => {
    return (
        <>

            <div class="sp-subtitle">
                <TypewriterComponent
                    options={
                        {
                            strings: [
                                "Web Developer",
                                "Frontend Developer"
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