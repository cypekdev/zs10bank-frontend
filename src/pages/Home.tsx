import cat from "../assets/kot1.png"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./Home.module.css"
import 'swiper/swiper.css'
import ShinyText from "../components/ShinyText"

export default function Home() {
  return (
    <div className={styles.container}>

      <Swiper      
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles["carousel-item"]}>
            <img src={cat}/>
            <span>
              Naucz się korzystania z bankowości cyfrowej w 
              <ShinyText 
                text="bezpiecznym środowisku"
                disabled={false}
                speed={2}/> 
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["carousel-item"]}>
            <span>
              Zrozum jak odpowiedzialnie zarządzać swoimi pieniędzmi
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          Poznaj rolę technologii w codziennych decyzjach finansowych
        </SwiperSlide>
      </Swiper>
      
      <p>Oferujemy płatności zbliżeniowe</p>
    </div>
  )
}