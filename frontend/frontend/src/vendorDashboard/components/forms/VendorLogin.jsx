import React, { useState } from 'react'

const VendorLogin = () => {
    return (
        <div className="">

            <form className='formSection' >
                <h3>Login</h3>
                <label>email</label>
                <input placeholder='enter name' type='text'></input>
                <br />
                <br />
                <label>password:</label>
                <input placeholder='Enter password' type='text'></input>
                <button >Login</button>
            </form>
        </div>
    )
}

export default VendorLogin
