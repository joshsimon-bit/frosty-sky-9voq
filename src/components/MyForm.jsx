import React, { Component } from "react";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }


render() {
    const { message } = this.state;
    return (
        <>
            <p> {message} </p>
            <form>
            <input type="text" placeholder="type a message" value={ message }/>
            <button type="submit">Send Message</button>
            </form>
            </>
    )
    }
}

export default MyForm;