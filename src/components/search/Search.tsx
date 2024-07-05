import React from 'react';
import Button from '../button/Button';
import './search.scss';


class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <section className='search-sw'>
                <form className='search-sw__form'>
                    <input type='text' placeholder='Search...' className='search-input' name='search-sw'/>
                    <Button>Search</Button>
                </form>
            </section>
          )
    }
  
}
export default Search;