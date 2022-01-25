class LocalStorageHandler {
    static storeNewLink(linkNo){
        let links = this.getLinks();
        links[linkNo] = linkNo;
        localStorage.setItem('links',JSON.stringify(links));
    }

    static getLinks(){
        let links = JSON.parse(localStorage.getItem('links'));
        if(links == undefined || links == null){
            links = {}
        }
        return links;
    }

    static deleteLink(linkNo){
        let links = this.getLinks();
        if(links.hasOwnProperty(linkNo)){
            delete links[linkNo];
        }
        localStorage.setItem('links',JSON.stringify(links));
        return links;
    }

}

export default LocalStorageHandler;