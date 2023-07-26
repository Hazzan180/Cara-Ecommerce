import '../../Style/productCard.css';

import ProductCard from '../UI/ProductCard'

const ProductList = ({data}) => {
  return (
    <section className='pro-container'>
      {
        data?.map((item, index) => (
            <ProductCard item={item} key={index}/>
        ))
      }
    </section>
  )
}

export default ProductList