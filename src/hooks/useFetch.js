import { useState } from 'react';
import axios from 'axios'

const useFetch = ( baseUrl, callback ) => {
  
    const [infoApi, setInfoApi] = useState();

    /* ===========GET=========== */
    const getApi = ( path ) => {
    const url = `${baseUrl}${path}/`
      axios.get( url )
        .then( res => {
            setInfoApi( res.data)
        })
        .catch( err => console.log(err)) 
    }

    /*=========== POST============*/

    const postApi = ( path, data ) => {
    const url = `${baseUrl}${path}/`

       axios.post(url, data)
        .then( res => {
            setInfoApi( [ ...infoApi, res.data ] )
            callback(true)
        })
        .catch( err => console.log(err))
    }
    /*=========== DELETE============*/

    const deleteApi = ( path, id) => {
    const url = `${baseUrl}${path}/${id}/`
      axios.delete( url )
            .then( res => {
                console.log(res.data)
                const deleteId = infoApi.filter( item => item.id !== id )
                setInfoApi( deleteId )
            })
            .catch( err => console.log( err ) )
    }


    /*=========== PUT============*/

    const updateApi = ( path, id, data ) => {
    const url = `${baseUrl}${path}/${id}/`

        axios.put( url, data )
            .then( res => {
                const updateId = infoApi.map( element => {
                  return  element.id === id ? res.data : element 
                })
                setInfoApi( updateId )
                callback(true)
            })
            .catch( err => console.log( err ) )
    }

    return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch