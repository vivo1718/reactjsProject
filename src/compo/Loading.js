import React from 'react'
import Loader from 'react-loader-spinner'
function Loading() {
    return (
        <div className='container3'>
            
            <Loader type='TailSpin' width={40} height={40} />
            <br/>
            
        </div>
    )
}

export default Loading
