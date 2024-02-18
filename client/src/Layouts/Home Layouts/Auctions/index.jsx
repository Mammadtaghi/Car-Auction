import React from 'react';
import style from './index.module.scss';
import { useProduct } from '../../../Context/productContext';
import ShopProduct from '../../../Components/Shop Components/Shop Product';

function Auctions() {

    const { Products, setProducts, isLoading } = useProduct()

    return (
        <>
            <div id={style.Auctions}>
                <div className={style.container}>
                    <h1 className={style.sectionTitle}>Auctions</h1>
                    <div className={style.products}>
                        {isLoading ? <span className={style.loader}></span> :
                            Products.slice(-8).map((product, i) => (
                                <div key={product._id} style={{ gridArea: `grid${i + 1}` }} className={style.productCon}>
                                    <ShopProduct item={product} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auctions