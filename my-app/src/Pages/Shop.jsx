import React, {useState, useEffect} from 'react'

import '../Style/shop.css'
import CommonSection from '../Component/UI/commonSection'
import Helment from '../Component/Helment/Helment'

import ProductList from '../Component/UI/ProductList'
import Products from  '../assets/data/products'


import searchImg from '../assets/images/empty/searching.png'


const Shop = () => {
  const [productData, setProductData] = useState(Products)
  

  const handleFilter = e => {
    const filterValue = e.target.value

    if(filterValue === 'allCategories'){
      setProductData(Products)
     }

    if(filterValue === 'shirt'){
     const filteredProduct = Products.filter((item) => item.category === 'shirt')
     setProductData(filteredProduct)
    }

    if(filterValue === 'polo'){
      const filteredProduct = Products.filter((item) => item.category === 'polo')
      setProductData(filteredProduct)
    }

    if(filterValue === 'shoe'){
      const filteredProduct = Products.filter((item) => item.category === 'shoe')
      setProductData(filteredProduct)
    }

    if(filterValue === 'jersey'){
      const filteredProduct = Products.filter((item) => item.category === 'jersey')
      setProductData(filteredProduct)
    }

    if(filterValue === 'hoodie'){
      const filteredProduct = Products.filter((item) => item.category === 'hoodi')
      setProductData(filteredProduct)
    }

    if(filterValue === 'cap'){
      const filteredProduct = Products.filter((item) => item.category === 'cap')
      setProductData(filteredProduct)
    }

    if(filterValue === 'bag'){
      const filteredProduct = Products.filter((item) => item.category === 'bag')
      setProductData(filteredProduct)
    }

    if(filterValue === 'short'){
      const filteredProduct = Products.filter((item) => item.category === 'short')
      setProductData(filteredProduct)
    }

    if(filterValue === 'crocs'){
      const filteredProduct = Products.filter((item) => item.category === 'crocs')
      setProductData(filteredProduct)
    }

    if(filterValue === 'watch'){
      const filteredProduct = Products.filter((item) => item.category === 'watch')
      setProductData(filteredProduct)
    }

    if(filterValue === 'belt'){
      const filteredProduct = Products.filter((item) => item.category === 'belt')
      setProductData(filteredProduct)
    }

    if(filterValue === 'perfume'){
      const filteredProduct = Products.filter((item) => item.category === 'perfum')
      setProductData(filteredProduct)
    }
  }

  const  handleSearch = e => {
    const searchValue = e.target.value

    const searchProduct = Products.filter(item => item.productName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    setProductData(searchProduct)
  }

  return (
   <Helment title='Shop'>
    <CommonSection title='#stayhome' sumarry='Save more with coupons & up to 70% off!'/>

    <section className='filter-cat section-p1'>
      <div className='filter'>
        <select onChange={handleFilter}>
          <option>Filter By Category</option>
          <option value='allCategories'>All Categories</option>
          <option value='shirt'>T-Shirt </option>
          <option value='polo'>Polo-shirt</option>
          <option value='shoe'>Shoes</option>
          <option value='jersey'>Jersey</option>
          <option value='hoodie'>Hoodie</option>
          <option value='cap'>Cap</option>
          <option value='bag'>Bags</option>
          <option value='short'>Short</option>
          <option value='crocs'>Crocs</option>
          <option value='watch'>Watch</option>
          <option value='belt'>Belt</option>
          <option value='perfume'>Perfume</option>
        </select>
      </div>

      <div className='filter'>
      <select>
          <option>Sort By</option>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
      </div>

      <div className='search'>
        <input type='text' placeholder='search product' onChange={handleSearch}/>
        <span><i className="ri-search-line"></i></span>
      </div>
    </section>

    <section className='featuredPro section-p1'>
        {
          productData.length === 0 ? (
            <div className='notFound'>
              <img src={searchImg} />
              <h1>No Item Found</h1>
            </div>
          ) : (
            <ProductList data={productData}/>
          )
        }
    </section>
   </Helment>
  )
}

export default Shop  