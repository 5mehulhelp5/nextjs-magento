'use client';
import {MediaGalleryType} from '@/graphQl/queries/products/getProductDetails';
import styles from './galleryProduct.module.scss';

export interface GalleryProductPropsType {
  images: MediaGalleryType[];
}
const GalleryProduct = ({images}: GalleryProductPropsType) => {
  const IMAGES = images.map((item, index) => {
    if (index > 1)
      return (
        <img
          key={'sm' + index}
          src={images[index].url}
          className={styles.imageSmallPc}
        />
      );
    return (
      <img
        key={'lg' + index}
        src={images[index].url}
        className={styles.imageLargePc}
      />
    );
  });
  return <div className={styles.container}>{IMAGES}</div>;
};
export default GalleryProduct;
