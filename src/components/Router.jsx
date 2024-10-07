import { Routes, Route } from "react-router-dom"



function RouterLinks(){
    return(
    <BrowserRouter>
        <Routes>
            `<Route
            path='/movies'
            element={<Movies/>}
            />
            <Route
            path={`/movie/${id}`}
            element={<Character/>}
            />
            <Route
            path='*'
            element={<Error/>}
            />
    
        </Routes>
    </BrowserRouter>
    )
}