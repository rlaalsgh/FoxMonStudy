import './PremierPage.css';
import Item from '../components/Item';
import {ItemData} from '../data/ItemData';

const PremierPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>

            <div className = "premier_grid">
                {itemDatas[0].map((premierDatas) => <Item
                    key = {cnt++} 
                    _id = {premierDatas._id}
                    name = {premierDatas.name}
                    price = {premierDatas.price}
                    img = {premierDatas.img}
                    detail = {premierDatas.details}
                    />)}
            </div>
        </>
    )
};

export default PremierPage;