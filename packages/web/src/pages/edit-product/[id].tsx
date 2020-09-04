import Layout from '@Organisms/layout';
import { withUrqlClient } from 'next-urql';

import ProductForm from '@Organisms/product-form';

import urqlConfig from '../../config/urql';

const EditProduct: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800">Edit Product</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <ProductForm edit />
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(urqlConfig, { ssr: true })(EditProduct);