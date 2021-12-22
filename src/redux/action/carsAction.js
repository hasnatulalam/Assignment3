import axios from 'axios';

export const getAllCars=()=>async dispatch =>{
    dispatch({type:'LOADING',payload:true})
    try {
        const response =await axios.get('/api/cars/getallcars')
    } catch (error) {
        
    }
}