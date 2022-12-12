import React,{createContext,useState} from 'react';
export const MovieContext = createContext();
export const MovieProvider = (props) => {
    const[movies, setMovies] = useState([
        {
            name : "Thanivu",
            price :"Rs .250",
            id : "002",
        },
        {
            name : "Varisu",
            price :"Rs .550",
            id : "002",
        },
        {
            name : "VTK1",
            price :"Rs .250",
            id : "003",
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
{props.children}
        </MovieContext.Provider>
    );
};