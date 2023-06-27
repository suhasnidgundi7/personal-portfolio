import React from 'react'

const loading = () => {
    return (
        <>
            {/* <!-- Loading animation --> */}
            <div className="preloader">
                <div className="preloader-animation">
                    <div className="preloader-spinner">
                    </div>
                </div>
            </div>
            {/* <!-- /Loading animation --> */}
        </>
    )
}

export default loading