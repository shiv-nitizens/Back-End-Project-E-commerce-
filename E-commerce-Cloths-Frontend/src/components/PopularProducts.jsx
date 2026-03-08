import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import { Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper/modules'
import Item from './items'
const PopularProducts = () => {
  const [PopularProducts, setPopularProducts] = useState([])
  const { products } = useContext(ShopContext)
  useEffect(() => {
    const data = products.filter((item) => item.popular)
    setPopularProducts(data.slice(0, 6))
  }, [products])
  
  useEffect(() => {
     console.log(PopularProducts)
  },[PopularProducts])



  return (
    <section className='max-padd-container py-16'>
      <Title
        title1={"Popular"}
        title2={"Products"}
        titleStyles={"pb-10"}
      />
      {/*Container*/}
      {
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction:false
          }}
          breakpoints={{
            555: {
              slidesPerView: 2,
              spaceBetween:10
            },
            800: {
              slidesPerView: 3,
              spaceBetween:10
            },
            1150: {
              slidesPerView: 4,
              spaceBetween:10
            },
            1350: {
              slidesPerView: 5,
              spaceBetween:10
            }
          }}
          modules={[Autoplay]}
          className='min-h-[399px]'
        >
          {PopularProducts.map((products) => (
            <SwiperSlide key={products._id}>
                <Item product={products}/>
            </SwiperSlide>
          )
          )}
        </Swiper>
      }
    </section>
  )
}

export default PopularProducts