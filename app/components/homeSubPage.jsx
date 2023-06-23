"use client"

import React, { useEffect } from 'react'
import CustomTypeWriter from './customTypeWriter'

const HomeSubPage = () => {
    return (
        <>
            {/* Home Subpage */}
            <div className="section-content vcentered">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="title-block">
                            <h2>Suhas Nidgundi</h2>
                            <div className="">
                                <div className="item">
                                    <CustomTypeWriter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* End of Home Subpage */}
        </>
    )
}

export default HomeSubPage