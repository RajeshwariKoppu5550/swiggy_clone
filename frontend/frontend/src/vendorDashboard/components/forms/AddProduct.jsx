import React from 'react';

const AddProduct = () => {
    return (
        <div className='addProductSection'>
            <form className='formSection'>
                <label>Product Name</label>
                <input type='text' name='productName' placeholder='Enter product name' />

                <label>Price</label>
                <input type='text' name='price' placeholder='Enter price' />

                <label>Category</label>
                <label>
                    Veg
                    <input type='checkbox' name='category' value='veg' />
                </label>
                <label>
                    Non-Veg
                    <input type='checkbox' name='category' value='nonveg' />
                </label>

                <label>Bestseller</label>
                <input type='checkbox' name='bestseller' />

                <label>Description</label>
                <textarea name='description' placeholder='Enter description'></textarea>

                <label>Image</label>
                <input type='file' name='image' accept='image/*' />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
