import React, { Component } from 'react'

class SinglePost extends Component {
    constructor(props) {


        super(props)
    }

    state = {}


    componentDidMount() {
        let postName = '';



    }

    componentDidUpdate() {
        console.log(this.props.match.params.id)

    }
    render() {
        return (<>
            <div>{this.props.match.params.id}</div>
            <div>Single Post</div>
        </>);
    }
}

export default SinglePost;