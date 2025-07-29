import React from 'react'

const VendorRegister = () => {
    return (
        <div className='registerSection'>
            <form className='formSection'>
                <h3>Register Form</h3>
                <label>username</label>
                <input placeholder='Enter username'></input>
                <label>email</label>
                <input placeholder='Enter email'></input>
                <lable>password</lable>
                <input placeholder='Enter password'></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default VendorRegister
