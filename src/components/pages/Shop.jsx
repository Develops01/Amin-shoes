import React from 'react';
import ShopList from '../ShopList';
import Layout from './../Layout';

function Shop(props) {
    return (
        <Layout description="خانه - فروشگاه">
            <ShopList />
        </Layout>
    );
}

export default Shop;