import React, { Component } from 'react'
import {
    InstantSearch, SearchBox, PoweredBy
} from 'react-instantsearch-dom';
import SearchHits from './SearchHits'
import {SearchWrapper} from '../../styled/componentsStyled'
 
 export default class Search extends Component {
   
    render() {
        return (
            <div>
                <InstantSearch indexName="POSTS" 
                    appId="X04G7JBMWL"
                    apiKey="68c9d4898f0eec12443ec67ddd0a1cda">
                    <SearchWrapper>
                        <SearchBox />
                        <PoweredBy />
                    </SearchWrapper>
                    <SearchHits/>
                </InstantSearch>
            </div>
        )
    }
} 