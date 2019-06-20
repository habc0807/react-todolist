import React, {Component, Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: [

            ]
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    in={this.state.show}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color = 'blue'}}
                                    appear={true}
                                >
                                    <div key={item}>{item}{index}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                
                <div>hello</div>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment>
        )    
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item'+this.state.list.length]
            }
        })
    }
}

export default App 

