import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'


const GifExpertApp=()=>{
    

    const [categories, setCategories] = useState(['Dragon Ball'])
    //const handleAdd=()=>{
      //  setCategories([...categories,'Digimon']);
   // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            

            <ol>
                {
                categories.map(nombres => < GiftGrid 
                        key={nombres}
                        nombres={nombres}
                    
                    />
                    
                )
                }
            </ol>
        
        </>
    )
}

export default GifExpertApp;