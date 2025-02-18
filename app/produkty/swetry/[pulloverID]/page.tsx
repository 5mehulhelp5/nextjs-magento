import GalleryProduct from '@/components/ProductDetails/GalleryProduct/GalleryProduct';
import graphQLClient from '@/graphQl/graphQLClient';
import {GET_PRODUCTS_TYPE} from '@/graphQl/queries';
import {
  getProductDetails,
  PRODUCT_DETAILS_QUERY_RESPONSE_TYPE,
} from '@/graphQl/queries/products/getProductDetails';
import styles from './productDetails.module.scss';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductTitle from '@/components/ProductDetails/ProductTitle/ProductTitle';
import Price from '@/components/ProductDetails/Price/Price';
import Description from '@/components/ProductDetails/Description/Description';
import ShortDescription from '@/components/ProductDetails/ShortDescription/ShortDescription';
import Features from '@/components/ProductDetails/Features/Features';
import Sizes from '@/components/ProductDetails/Sizes/Sizes';

const PulloverDetailsPage = async ({
  params,
}: {
  params: {pulloverID: string};
}) => {
  const sku = params.pulloverID;
  const productData: PRODUCT_DETAILS_QUERY_RESPONSE_TYPE =
    await graphQLClient.request(getProductDetails(sku));
  console.log(productData.products.items[0]);
  return (
    <div className={styles.container}>
      <div className={styles.rowBox}>
        <GalleryProduct images={productData.products.items[0].media_gallery} />
        <ProductDetails product={productData.products.items[0]}>
          <ProductTitle />
          <Price />
          <Sizes />
          <Description />
          <ShortDescription />
          <Features />
        </ProductDetails>
      </div>
    </div>
  );
};

export default PulloverDetailsPage;
