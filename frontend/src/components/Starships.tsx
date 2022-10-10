import React, { useState, useEffect } from 'react';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './DataView.css';
import { getStarships, getCountStarships } from "../api/index";
import { Paginator } from 'primereact/paginator';
import img0 from '../images/starships/0.jpeg';
import img1 from '../images/starships/1.jpeg';
import img2 from '../images/starships/2.jpeg';
import img3 from '../images/starships/3.jpeg';
import img4 from '../images/starships/4.jpeg';
import img5 from '../images/starships/5.jpeg';
import img6 from '../images/starships/6.jpeg';
import img7 from '../images/starships/7.jpeg';
import "./spinner.css";
import LoadingSpinner from "./LoadingSpinner";
import { StarshipsData } from "../models";
import AuthContextElement from './authstatus';

const rndRaiting = () => {
    return (Math.floor(Math.random() * 7));
}

const generateRandImg = () => {
    
    if (Math.floor(Math.random() * 7) === 0 ) return img0;
    if (Math.floor(Math.random() * 7) === 1 ) return img1;
    if (Math.floor(Math.random() * 7) === 2 ) return img2;
    if (Math.floor(Math.random() * 7) === 3 ) return img3;
    if (Math.floor(Math.random() * 7) === 4 ) return img4;
    if (Math.floor(Math.random() * 7) === 5 ) return img5;
    if (Math.floor(Math.random() * 7) === 6 ) return img6;
    if (Math.floor(Math.random() * 7) === 7 ) return img7;
    return img0;

}

const DataView = () => {
    const [countItems, setCountItems] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(1);
    const onPageChange = (e: any) => {
        setFirst(e.first);
        setRows(e.rows);
    }

    useEffect(() => {
        setIsLoading(true);
        getStarships({ page: first+1 })
      .then((res) => {
         setData(res.data.results);
         setIsLoading(false);
        });
    }, [first]);

    useEffect(() => {
        getCountStarships().then((res)=>{ setCountItems(res.data.count / 10 - 1);
         });

        getStarships({ page: 1 })
      .then((res) => {
         setData(res.data.results);
        }).then(() => {
            setIsLoading(false);
        });
    }, []);

    const renderGridItem = (data: Array<StarshipsData> ) => {
            
        return (
            
            <div className=''>
                <AuthContextElement />
                {isLoading ? <LoadingSpinner /> : <></>}
                {  data.map((data: StarshipsData, key: number)=>{ 



                return (
                  
        <div className="col"  key={key}>
            
                <div className="card">
                    <div className="cardsize">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">Price {data.model}</span>
                        </div>
                        <span className={``}>{data.manufacturer}</span>
                    </div>

                    <div className="">
                    <img height={200} width={200} src={generateRandImg()} onError={(e) => console.log(`error`)}alt={data.name} />
                        <div className="">{data.name}</div>
                        <div className="">{data.crew}</div>
                        <Rating value={rndRaiting()} readOnly cancel={false}></Rating>
                    </div>
                    <div className="">
                        <Button icon="pi pi-shopping-cart" label="By" disabled={data.passengers === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
            
            );
            
        })
    }
    <Paginator first={first} rows={rows} totalRecords={countItems}  onPageChange={onPageChange}></Paginator>
     </div>
        );
    };
 
    return renderGridItem(data);
};

export default DataView;