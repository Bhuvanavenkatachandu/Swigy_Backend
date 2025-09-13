import React from 'react'

const AddProducts = () => {
  return (
    <div className="firmSection">
      <form className="tableform">
        <h2>Add Products</h2>
        <label>Product Name</label>
        <input type="text" placeholder="Enter product name" />

        <label>Price</label>
        <input type="text" placeholder="Enter price"/>

        <div className="checkInp">
          <label>Category</label>
          <div className="inputsContainer">
            <div className="checkboxContainer">
            <label>Veg</label>
            <input type="checkbox" value="Veg" />
          </div>
          <div className="checkboxContainer">
            <label>Non-Veg</label>
            <input type="checkbox" value="Non-veg" />
          </div>
          </div>
        </div>

        <div className="radioInp">
          <label className="inputLabel">Bestseller</label>
            <div className="radioGroup">
              <label className="radioOption">
              <input type="radio" name="bestseller" value="Yes" />
              <span>Yes</span>
              </label>
              <label className="radioOption">
              <input type="radio" name="bestseller" value="No" />
              <span>No</span>
              </label>
            </div>
        </div>



        <label>Description</label>
        <input type="text" placeholder="Enter Description about the product"/>

        <label>Firm Image</label>
        <input type="file" />
        <br />
        
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProducts