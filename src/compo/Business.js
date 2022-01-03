import React from 'react'
import axios from "axios";
import Sports from './Sports';
import { useEffect,useState } from 'react';
import {Row,Button,Col,NavbarBrand,NavbarText} from 'reactstrap';

function Science() {
    const[business,setBusiness] = useState([]);
  useEffect(()=>{
    const loadNews = async()=>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c09ae939dc14d01947f836fe0f2c8e6");
      setBusiness(response.data.articles);
    };
    loadNews();
  },[]);
   console.log("business",business)
  
    return (
        <div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
      <div className='container'>
        <h4 style={{fontWeight:'bold',color:'#fff'}}>Business</h4>
        <h4 className='text-gray-500 text-bold' >All Your news are available on the Cards.To View Entire News of the Topic Click On Read More</h4>
        <img className="img_box" src="business.svg" alt="Image loading.."/>


    </div>
      {
        business && business.map((item,index)=>{
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.urlToImage} alt="Image loading.."/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">
            {item.description}
          </p>
        </div>
        <div className='container1'>
          <a  className='font-bold text-xl'  href={item.url}>ReadMore</a>
</div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
      </div>
          );
        })
      }

    </div>
        </div>
    )
}

export default Science
