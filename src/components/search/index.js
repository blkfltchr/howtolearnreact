import React, { Component } from 'react'
import {
    InstantSearch, SearchBox, PoweredBy
} from 'react-instantsearch-dom';
import SearchHits from './SearchHits'
 
 export default class Search extends Component {
   
    render() {
        return (
            <div>
                <InstantSearch indexName="POSTS" 
                    appId= "X04G7JBMWL"
                    apiKey= "68c9d4898f0eec12443ec67ddd0a1cda">
                    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"1rem"}}>
                    <SearchBox />
                    <PoweredBy />
                    </div>
                    <SearchHits/>
                </InstantSearch>
            </div>
        )
    }
} 