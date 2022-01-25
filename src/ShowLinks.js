import axios from 'axios';
import React from 'react';
import './App.css';
import LocalStorageHandler from './localStorageHandler';


class ShowLinks extends React.Component {
    constructor(props){
        super(props);
        const links = LocalStorageHandler.getLinks();
        const linksStatus = {}
        this.state = {links,linksStatus}

    }

    componentDidMount(){
        Object.keys(this.state.links).forEach((link) => {
            this.getUpdate(link);
        })
    }

    getFullLink = (link) => {
        const fullLink = 'https://track.amazon.in/tracking/' + link  + '?trackingId='+link;
        return fullLink;
    }

    getUpdate = async (link) => {
        const fullLink = "https://track.amazon.in/api/tracker/" + link;
        let linksStatus = this.state.links;
        return await axios.get(fullLink).then((response) => {
            const tracker = response.data.progressTracker;
            const parsedTracker = JSON.parse(tracker);
            const status = parsedTracker.summary.status;
            linksStatus[link] = status
            this.setState({linksStatus});
        })
    }


    deleteLink = (link) => {
        const links = LocalStorageHandler.deleteLink(link);
        this.setState({links});
    }

    renderLink = (link) => {
        console.log(this.state);
        let fullLink = this.getFullLink(link);
        // let status = this.getUpdate(link);

        return (<tr>
            <td><a href={fullLink} target='_blank' rel="noreferrer">{link}</a></td>
            <td><h6>{this.state.linksStatus[link]}</h6></td>
            <td><button type="button" onClick={this.deleteLink.bind(this,link)}> Delete </button></td>
        </tr>)
    }
    

    render() {
        return (
            <div className="NewLink-div">
               Find Your Tracked Links below: 
               <table>
               {Object.keys(this.state.links).map(link => (
                   this.renderLink(link)
               ))}
               </table>
            </div>
        );
    }
}

export default ShowLinks;
