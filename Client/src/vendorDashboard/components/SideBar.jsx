import React from 'react'

const SideBar = ({showAddFirmHandler,showAddProductsHandller, showAllProductsHandler}) => {
  return (
    <div className="sideBar-Section">
        <ul>
            <li onClick={showAddFirmHandler}>Add Firm</li>
            <li onClick={showAddProductsHandller}>Add Products</li>
            <li onClick={showAllProductsHandler}>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar