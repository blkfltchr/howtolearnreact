import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  InstantSearch,
  // Index,
  Hits,
  Stats,
  connectStateResults,
} from 'react-instantsearch-dom'
import styled from 'styled-components'
import PostHit from './PostHit'
import SearchBox from './SearchBox'

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

const events = ['mousedown', 'touchstart']
const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits ? children : `No results for ${state.query}`
)

export default class Search extends Component {
  state = { 
      query: ``, 
      showHits: false 
    }

   updateState = state => this.setState(state)
   
   enableHits = () => { this.setState({ showHits: true }) }
   
   disableHits = () => { this.setState({ showHits: false }) }
   
   handleClickOutside = event => {
    const node = ReactDOM.findDOMNode(this.node)
    if (node && !node.contains(event.target)) {
      this.setState({ showHits: false })
    }
  }
   componentDidMount() {
    events.forEach(event =>
      document.addEventListener(event, this.handleClickOutside)
    )
  }
   componentWillUnmount() {
    events.forEach(event =>
      document.removeEventListener(event, this.handleClickOutside)
    )
  }
   render() {
    const { query, showHits } = this.state
    console.log(this.state)

    return (
      <InstantSearch
        appId="X04G7JBMWL"
        apiKey="d1b2d3210de2d87785ced9abd7ce66a64a4339d3c28fcee533956c74bb46ab88"
        indexName={"Posts"}
        onSearchStateChange={this.updateState}
        root={{ Root }}
        ref={node => (this.node = node)}
      >
        <SearchBox onFocus={this.enableHits} />
        <div show={query.length > 0 && showHits}>
          <Stats
            translations={{
              stats: n => `${n} Result${n !== 1 ? `s` : ``}`,
            }}
          />
          {/* {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={"Posts"}>
          {title && <h2>{title}</h2>} */}
              <Results>
                <Hits hitComponent={PostHit(this.disableHits)} />
              </Results>
            {/* </Index>
          ))} */}
          <div>
            Powered by{' '}
            <a href="https://www.algolia.com">
              Algolia
            </a>
          </div>
        </div>
      </InstantSearch>
    )
  }
}