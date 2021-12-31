import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {
        term:''
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // Callback From Parent
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
          <>
          <form onSubmit={this.onFormSubmit}>
              <div className='form-group'>
              <input type="search" className='form-control' placeholder='Search Anything Here !!!!' value={this.state.term} onChange={this.onInputChange} />
              </div>
          </form>
          </>
        )
    }
}

export default SearchBar
