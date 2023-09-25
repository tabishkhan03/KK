import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context';
import CardContainer from '../../Components/Card/CardContainer'
import Sidebar from '../../Components/SideBar/Sidebar'

const Search = () => {

    const { products, lowToHigh, highToLow } = useContext(AppContext);

    return (
        <div className='d-flex'>
            <Sidebar lowToHigh={lowToHigh} highToLow={highToLow} />
            <CardContainer products={products} />
        </div>
    )
}

export default Search