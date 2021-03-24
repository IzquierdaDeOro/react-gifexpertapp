import { useEffect, useState } from "react"
import getGifs from "../helpers/getGif"

export const useFetchGifs = (category) => {
    
    const [estado, setEstado] = useState({
        data: [],
        cargando: true
    })

    useEffect(()=>{

        getGifs(category)
            .then( imgs => (
                setEstado({
                        data: imgs,
                        cargando: false
                })
            ));

    },[category])

    return estado;

}
