import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function MarketplaceHome() {
  const [listings, setListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('/api/listing/get?limit=3');
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next great deal at <span className='text-slate-500'>Drexel Marketplace</span>
        </h1>
        <p className='text-gray-400 text-xs sm:text-sm'>
          Explore a wide range of listings from Drexel students—buy and sell with ease.
        </p>
      </div>

      {/* Swiper */}
      <Swiper navigation></Swiper>

      {/* Listings */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        <h2 className='text-2xl font-semibold text-slate-600 text-center'>
          Browse Some of the Latest Listings
        </h2>
        {listings.length > 0 ? (
          <>
            <div className='flex flex-wrap gap-4'>
              {listings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
            <div className='text-center mt-5'>
              <Link to='/search' className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                Show More
              </Link>
            </div>
          </>
        ) : (
          <p className='text-center text-gray-500'>No listings available</p>
        )}
      </div>
    </div>
  );
}
