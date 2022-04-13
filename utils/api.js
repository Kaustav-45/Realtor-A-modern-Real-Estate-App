import axios from "axios";

export const url =   'https://bayut.p.rapidapi.com'
//'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  //  'X-RapidAPI-Key': '126aeb5793mshf8b8ea6189112b3p1eb63ajsnb97ab0c86e0c'

  export const api = async  (url)=>{

        const {data} = await axios.get((url),{
            headers: {
                  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                  'X-RapidAPI-Key': '126aeb5793mshf8b8ea6189112b3p1eb63ajsnb97ab0c86e0c'
                }
        })

        return data
      }
     
