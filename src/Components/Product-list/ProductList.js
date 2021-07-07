import React, { Component } from 'react'
import axios from 'axios';
export default class product_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token : '',
            products:[]
        }
    }
    componentDidMount() {
        setTimeout(() => {
            //this.setState({favoritecolor: "yellow"})
            this.setState({
                token : this.props.token
            })
            console.log(this.props.token)
            let access_token = this.props.token;
            console.log(this.state.token)
            const headers = {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${access_token}`
                'Authorization': `Bearer ${access_token}`
                
            }
            axios.get('http://127.0.0.1:8000/api/AllProducts',{
                headers:headers
            })
            .then((res) => {
                console.log(res.data)
                //console.log(headers)
            })
            .catch((error) => {
                console.error(error)
            })
        }, 100)
        
    }
    /*HandleChangeToken = (event)=>{
        this.setState({ token : event.target.value})
        console.log(this.state.token);
    }*/
    /*
    componentDidMount() {
        this.setState({
            token : access_token
        })
        let access_token = this.props.token;
        console.log(access_token)
        console.log(this.state.token)
        this.setState({
            token : access_token
        })
        //'Bearer'+
        const headers = {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${access_token}`
            'Authorization': `Bearer ${access_token}`
            
        }
        console.log(headers)
        
        axios.get('http://127.0.0.1:8000/api/AllProducts',{
            headers:headers
        })
        .then((res) => {
            console.log(res.data)
            //console.log(headers)
        })
        .catch((error) => {
            console.error(error)
        })
        //this.HandleChangeToken();
        //onChange={this.HandleChangeToken}
    }*/
    /*handletest = (event) =>{
        this.setState({
            token : event.target.value
        })
        console.log(this.state.token)
    }*/
    /*componentDidMount() {
        //this.handletest();
        console.log(this.props.token)
    }*/
    //onChange={this.handletest}
    
    render() {
        //let testt = '';
        /*const test = ()=>{
            //console.log(this.props.token)
            if(this.props.token === null){
                return <p>nonse</p>
            }
        }*/
        return (
            <div>
                <h1>heloo Product_list</h1>
                props
                <p>{this.props.token}</p>
                state
                <p>{this.state.token}</p>
                
                
            </div>
        )
    }
}
