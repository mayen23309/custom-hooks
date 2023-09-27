import { useEffect, useState } from "react"


export const useFetch = ( url,apiKey ) => {

    const [state, setState] = useState({
        data:null,
        iLoading:true,
        hasError: null,
    })
  
    const getFetch = async () =>{

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url, {
            headers: {
              'X-Api-Key': apiKey,
            },
        });
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }
    
    useEffect(() => {
      
        getFetch();
    
    }, [url,apiKey])
    
    const getNextQuote = async () => {
        await getFetch();
      };
    
  

    return{
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
        getNextQuote,
    };
  


}
