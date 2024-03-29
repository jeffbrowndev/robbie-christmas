import { useContext, useState } from "react";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/testimonials.module.scss";
import { DataContext } from "@/context/DataContext";
import Image from "next/image";

import arrowLeft from "@/public/images/arrow-left.png";
import arrowRight from "@/public/images/arrow-right.png";

const Testimonials = () => {
  const { testimonials } = useContext(DataContext);
  const [index, setIndex] = useState(0)

  const handleClick = (index) => {
    if (index < 0) {
      setIndex(testimonials.length - 1);
    }
    else if (index === testimonials.length) {
      setIndex(0);
    }
    else {
      setIndex(index)
    }
  }

  return (
    <MaxWidthContainer>
      <div className={styles['testimonials-content']}>
        <div className={styles['testimonial']}>
          <div className={styles['text-and-arrows']}>
            <Image 
              id={styles['arrow-left']} 
              src={arrowLeft} 
              alt="arrow left"
              onClick={() => handleClick(index - 1)} />
            <p><span>&quot; </span>{testimonials[index].clientMessage}<span> &quot;</span></p>
            <Image 
              id={styles['arrow-right']} 
              src={arrowRight} 
              alt="arrow right"
              onClick={() => handleClick(index + 1)} /> 
          </div>
          <h4>- {testimonials[index].clientName}</h4>
        </div>
        <div className={styles['dots']}>
          {testimonials.map((t, i) => 
            <div 
              key={i}
              onClick={() => handleClick(i)}
              className={`${styles['dot']} ${i === index ? styles['active'] : ''}`} />)}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Testimonials;