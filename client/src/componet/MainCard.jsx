import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function MainCard({ source, fetchURL }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    // Construct the dynamic URL using the feedURL parameter
    // const url = `https://rss-to-json-serverless-api.vercel.app/api?feedURL=${encodeURIComponent(fetchURL)}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://techfeed.vercel.app/api?url=${encodeURIComponent(fetchURL)}`);
        setData(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchURL]);


  // Take only the top 9 items from the data array
  const topNinePosts = data.slice(0, 9);

  return (
    <>
      <div className='source font-semibold text-[25px] mt-16 ml-6 mb-5 text-white'>{source}</div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center m-2 gap-x-1 gap-y-11'>
        {loading ? (
          // Skeleton Loading UI while data is being fetched
          Array.from({ length: 9 }, (_, index) => (
            <div key={index} className='animate-pulse w-[400px] h-[300px] bg-gray-300 rounded-2xl flex justify-between flex-col'>
                <div className=" bg-gray-100 h-[50px] w-[380px] mt-[18px] ml-[10px] rounded-2xl"></div>
                <div className='cat flex gap-3 pl-[10px] '>
               <span className='bg-gray-100 h-[40px] w-[100px] rounded-2xl'></span>
               <span className='bg-gray-100 h-[40px] w-[80px] rounded-2xl'></span>
                </div>
                <div className='bottom flex flex-col gap-3'>
                     <div className="author pl-[10px]"><div className='flex gap-2 items-center'><div className='rounded-full h-[35px] w-[35px] bg-gray-100 '></div> <p className=' bg-gray-100 h-[30px] w-[100px] rounded-2xl'></p></div></div>
                     <div className="copyright pl-[10px]"><div className='flex gap-2 items-center'><div className='rounded-full h-[35px] w-[35px] bg-gray-100 '></div> <p className=' bg-gray-100 h-[30px] w-[100px] rounded-2xl'></p></div></div>
                     <div className="cta pl-[10px] pb-[18px]"><button className='bg-gray-100 py-2 px-3 rounded-[25px] text-gray-100'>Read Now</button></div>
                </div>
            </div>
          ))
        ) : (
          // Render actual content once data is fetched
          topNinePosts.map((item, index) => (
            // Pass each item as props to Card component
            <Card key={index} title={item.title} creator={item.creator} link={item.link} source={source} cat={Array.isArray(item.categories) ? item.categories.slice(0, 2) : [item.categories]} />
          ))
        )}
      </div>
    </>
  );
}

export default MainCard;
