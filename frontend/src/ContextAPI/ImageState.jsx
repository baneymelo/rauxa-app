import React, { useEffect, useState } from 'react'
import axios from '../axios';
import ImageContext from './ImageContext'

const initialDesc = {
    name: null, 
    email: null, 
    phone: null, 
}

const initialErrInput = {
    email: null, 
    phone: null, 
}


function ImageState({children}) {
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(initialDesc);
    const [errInput, setErrInput] = useState(initialErrInput);
    const [formImage, setFormImage] = useState(null);

    const [itemData, setItemData] = useState(null)

    const getImages = async () => {
        const { data } = await axios.get('/gallery')
        setItemData(data.data)
    }

    useEffect(()=>{
        getImages()
    },[])

    return (
        <ImageContext.Provider value={{
            preview,
            setPreview,
            file,
            setFile,
            description,
            setDescription,
            errInput,
            setErrInput,
            formImage,
            setFormImage,
            itemData,
            setItemData,

            initialDesc,
            initialErrInput
        }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageState
