import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Infinite.css';

const Infinite = () =>{
    const [data,setData] = useState(Array.from({length : 10}));
    const [hasMore,setHasMore] = useState(true)
    
    const moreData = () => {
        setTimeout(() => {
            setData(data.concat(Array.from({length : 5})))
        },1500)
    }

    return(
        <div className="App">
            <InfiniteScroll dataLength={data.length} next={moreData} hasMore={hasMore} loader={<p style={{textAlign:"center"}}>Loading...</p>}>
                {
                    data.map((item,index) => {
                        return(
                            <div className="div1">
                                <p>This is an {index + 1} Line</p>
                            </div>
                        )
                    })
                }
            </InfiniteScroll>
        </div>
    )
}

export default Infinite;



