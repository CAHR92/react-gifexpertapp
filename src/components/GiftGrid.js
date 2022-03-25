import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({nombres}) => {

    const {data:images, loading}=useFetchGifs(nombres);
    //console.log(state)
    
   /* const [images, setImages] = useState([]);
   
   useEffect(() => {
       getGifs(nombres)
       .then(setImages);
   }, [nombres])*/
    
    
  
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { nombres } </h3>
            
            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='card-grid'>
        
                {
                images.map(img =>  (
                        <GifGridItem
                        key={ img.id } 
                        { ...img }
                        />
                    ))
                }
        
            
            </div>
        </>
  )
}
