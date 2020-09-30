import React from 'react'
import ReactDOM from 'react-dom'   
import _ from 'underscore'


class ReactExample extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log('ReactExample mounting...')
    }

    render() {
        return(<p>Hello {this.props.message}</p>)
    }
}

ReactDOM.render(
    <ReactExample message='from react!'/>,
    document.getElementById('example-react')
  );