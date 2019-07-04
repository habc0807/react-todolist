import React from 'react'

import { throttle } from 'lodash';

class Autocomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            data: [
                'sdsd',
                'sdfsdf'
            ]
        }
       this.handleInputThrottled = throttle(this.handleInput, 100)
    }
    handleInput = evt => {
        const value = evt.target.value
        let { data } = this.state 
        const filteredRes = data.filter((item)=> {
            console.log(item)
            return item 
            // algorithm to search through the `data` array
        })
        this.setState({ results: filteredRes })
    }
    render() {
        let { results } = this.state;
        return (
            <div className='autocomp_wrapper'>
                <input placeholder="Enter your search.." onChange={this.handleInputThrottled} />
                <div>
                    {/* {results.map(result=>{result})} */}
                </div>
            </div>
        );
    }
}

export default Autocomp