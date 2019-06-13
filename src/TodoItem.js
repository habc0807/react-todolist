import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content, index, test} = this.props 
        return (
            <li
                key={index}
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{ __html: content + test }}
            />
        );
    }

    handleClick() {
        const { deleteItem, index } = this.props 
        deleteItem(index)
    }
}

TodoItem.PropTypes = {
    test: PropTypes.string,
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;
