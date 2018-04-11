import React , {Component} from 'react';
import * as firebase from 'firebase';

export default class Upload extends Component {
    
    constructor(props){
        super(props);
        this.state = {value:0};
        this.upload = this.upload.bind(this);
        this.update = this.update.bind(this);
    }
    
    update(snapshot){
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        this.setState({
            value: percentage
        })
    }
    
    upload(e){
        e.preventDefault();
        const target = e.target
        console.log("process started");
        console.log(target.fileButton.files[0]);
        var file = target.fileButton.files[0];
        this.setState({
            value: 100
        })
        // StorageRef
        const tagID = target.tagID.value;
        var storageRef = firebase.storage().ref(tagID+'/'+file.name);
        
        //Upload File  : 
        var task  = storageRef.put(file);
        
        task.on('state_changed',snapshot => {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            this.setState({value : percentage})
            console.log(percentage);
            if(percentage===100){
                alert('Your File Uploaded');
            }
        })
    
        
        e.preventDefault();
    }
    
    render(){
        return(
            <div>
            <p>hello everyone</p>
            <form onSubmit={this.upload}>
            <p>{this.state.value}</p>
            <input type="text" name="tagID" />
            <input type="file"  name="fileButton"/>
            <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}