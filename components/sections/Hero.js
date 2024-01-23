import styles from '@/styles/hero.module.scss';
import MaxWidthContainer from '../layouts/MaxWidthContainer';

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <MaxWidthContainer>
        <div className={styles["hero-content"]}>
          
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Hero;