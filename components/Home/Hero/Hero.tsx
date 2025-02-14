'use client';
import styles from './hero.module.scss';
import HeroImg from '@/public/assets/home/background.webp';

const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={HeroImg.src} />
    </div>
  );
};

export default Hero;
