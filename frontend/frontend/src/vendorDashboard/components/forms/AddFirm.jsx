import React from 'react'

const AddFirm = () => {
    return (
        <div className='addFormSection'>
            <form className='formSection'>
                <label>firmName</label><input placeholder='enter firmName'></input>
                <label>area</label><input placeholder='enter area'></input>
                <label>category</label> <label>Veg</label><input type='checkbox'></input>
                <label>Veg</label> <input type='checkbox'></input>
                <label>offer</label><input placeholder='enter offer'></input>
                <label>image</label> <input type='file' />
            </form>
        </div>
    )
}

export default AddFirm
