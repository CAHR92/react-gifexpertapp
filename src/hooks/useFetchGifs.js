import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs=(nombres)=>{

    const [state, setState] = useState({
        data:[],
        loading: true

    });
    useEffect(()=>{
        getGifs(nombres)
        .then(imgs=>{
            

            
            console.log(imgs)
            setState({
                data: imgs,
                loading: false
            });
                
           
            


        })
    },[nombres])



    return state;
}