
import React,{useEffect,useState} from "react";


const ContextApi = React.createContext();
//const API_URL=`http://www.omdbapi.com/?apikey=6f2c0823&thor`

//const API_URL=`http://www.omdbapi.com/?i=tt3896198&apikey=6f2c0823`
//const API_URL=`http://www.omdbapi.com/?s=${}&apikey=6f2c0823`
 export const API_URL=`http://www.omdbapi.com/?&apikey=6f2c0823`


// creating provider function

const Provider=({children}) =>{
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]= useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""});

    // for search state
    const [query,setQuery]=useState("thor");

    const getMovies=async (url)=>{
        setIsLoading(true);
        try{
            const res=await fetch(url) ;
            const data=await res.json();
            console.log(data);
            if(data.Response ==="True"){

                setIsLoading(false);

                setIsError({
                    show: false,
                    msg: "",

                   });
                
                setMovie(data.Search);
             }else{
                setIsError({
                 show:true,
                 msg: data.Error,
                });
             }
             
        }catch(error){
            console.log(error);
        }
    }

    //get api and search query
    useEffect(() => {
        let timeOut=setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);

        },500);
        return()=>clearTimeout(timeOut);
        
    
    }, [query]);


    return<ContextApi.Provider value={{isLoading,movie,isError,query,setQuery}}>
        {children}
    </ContextApi.Provider>

}

export { ContextApi,Provider}


