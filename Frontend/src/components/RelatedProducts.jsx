import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category , subCategory}) => {

  // Fetch the global products array from the shop context
  const {products} = useContext(ShopContext);
  // Local state to store filtered relevant products
  const [related , setRelated] = useState([]);

  useEffect(()=>{
    if(products.length > 0){
      let productsCopy = products.slice();
      
      // Filter products that match the same primary category
      productsCopy = productsCopy.filter((item)=>
        category === item.category
      );
      
      // Further narrow down by matching sub-category
      productsCopy = productsCopy.filter((item)=>
        subCategory === item.subCategory
      );

      // Limit the display to a maximum of 5 related products
      setRelated(productsCopy.slice(0,5));
    }
  }, [products, category, subCategory]) // Included dependencies to ensure accurate filtering on data changes

  return (
    <div className='my-24'>
      {/* Component Section Title */}
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div> 
      
      {/* Responsive Grid Layout to display product items */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index)=>(
          <ProductItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts