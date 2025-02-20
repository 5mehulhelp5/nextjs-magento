import {gql} from 'graphql-request';

export const getProductDetails = (sku: string) => {
  const productDetailsQuery = gql`
  query{
  products(filter: { sku: { eq: "${sku}" } }) {
    items {
      uid
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
      stock_status
      media_gallery {
        url
        label
      }
      categories {
        uid
        name
        url_key
      }
      related_products {
        uid
        name
        sku
      }
      upsell_products {
        uid
        name
        sku
      }
      crosssell_products {
        uid
        name
        sku
      }
      ... on ConfigurableProduct {
        configurable_options {
          attribute_uid
          attribute_code
          label
          values {
            uid
            label
          }
        }
        variants {
          product {
            uid
            name
            sku
            stock_status
            price_range {
              minimum_price {
                regular_price {
                  value
                  currency
                }
                final_price {
                  value
                  currency
                }
                discount {
                  amount_off
                  percent_off
                }
              }
            }
            media_gallery {
              url
              label
            }
          }
          attributes {
            code
            value_index
            label
          }
        }
       
      }
      custom_attributesV2(filters: {is_comparable: true})
            {
                items
                {
                    code
                    ... on AttributeValue {
                        value
                    }
                    ... on AttributeSelectedOptions {
                        selected_options {
                            label
                            value
                        }
                    }
                },
                errors {
                    type
                    message
                }
            }
        }

  }
}



`;

  return productDetailsQuery;
};

export type PRODUCT_DETAILS_QUERY_RESPONSE_TYPE = {
  products: {
    items: ProductType[];
  };
};

export type ProductType = {
  uid: string;
  name: string;
  sku: string;
  price_range: PriceRangeType;
  stock_status: string;
  media_gallery: MediaGalleryType[];
  categories: CategoryType[];
  related_products: RelatedProductType[];
  upsell_products: UpsellProductType[];
  crosssell_products: CrosssellProductType[];
  configurable_options?: ConfigurableOptionType[];
  variants?: VariantType[];
  custom_attributesV2?: CustomAttributesV2Type;
};

type PriceRangeType = {
  minimum_price: MinimumPriceType;
};

type MinimumPriceType = {
  regular_price: PriceType;
  final_price: PriceType;
  discount: DiscountType;
};

type PriceType = {
  value: number;
  currency: string;
};

type DiscountType = {
  amount_off: number;
  percent_off: number;
};

export type MediaGalleryType = {
  url: string;
  label: string;
};

type CategoryType = {
  uid: string;
  name: string;
  url_key: string;
};

type RelatedProductType = {
  uid: string;
  name: string;
  sku: string;
};

type UpsellProductType = {
  uid: string;
  name: string;
  sku: string;
};

type CrosssellProductType = {
  uid: string;
  name: string;
  sku: string;
};

type ConfigurableOptionType = {
  attribute_uid: string;
  attribute_code: string;
  label: string;
  values: ConfigurableOptionValueType[];
};

type ConfigurableOptionValueType = {
  uid: string;
  label: string;
};

export type VariantType = {
  product: VariantProductType;
  attributes: VariantAttributeType[];
};

type VariantProductType = {
  uid: string;
  name: string;
  sku: string;
  stock_status: string;
  price_range: PriceRangeType;
  media_gallery: MediaGalleryType[];
};

type VariantAttributeType = {
  code: string;
  value_index: number;
  label: string;
};

type CustomAttributesV2Type = {
  items: CustomAttributeItemType[];
  errors: CustomAttributeErrorType[];
};

type CustomAttributeItemType = {
  code: CustomAttributeItemCodesTypes;
  value?: string;
  selected_options?: SelectedOptionType[];
};

type CustomAttributeItemCodesTypes =
  | 'description'
  | 'short_description'
  | 'cechy'
  | 'sklad';
type SelectedOptionType = {
  label: string;
  value: string;
};

type CustomAttributeErrorType = {
  type: string;
  message: string;
};
