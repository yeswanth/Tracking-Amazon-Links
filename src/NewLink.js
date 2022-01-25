import React from 'react';
import './App.css';
import LocalStorageHandler from './localStorageHandler';


class NewLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''}

    }


    onSubmitForm = (event) => {
        event.preventDefault();
        let value = this.state.value;
        LocalStorageHandler.storeNewLink(value);
        this.setState({value:''})
    }

    handleOnChange = (event) => {
        this.setState({value:event.target.value});
    }
    

    render() {
        return (
            <div className="NewLink-div">
                <h2>Add a new Tracking Link </h2>
                <h5>Just add the Amazon tracking number (eg. 78937923)</h5>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" value={this.state.value} name="link" onChange={this.handleOnChange}/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default NewLink;
