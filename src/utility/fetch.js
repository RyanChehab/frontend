import axios from "axios";

const fetchData = async(url,method = 'POST', data = null, headers={})=>{
    try{
        const response = await axios({
            url,
            method,
            data,
            headers,
        });
        return response.data;

    }catch(error){
        console.error('API Fetch Error:', error);
        throw error;                                  
    }
}

export default fetchData;