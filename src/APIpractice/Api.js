import React from 'react'
import Styled from 'styled-components'

class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            loading : true,
        }      
    }

    componentDidMount(){

        fetch('https://api.thecatapi.com/v1/images/search?')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    loading : false,
                    items : json,
                })
            })
            .catch(console.log('error'))

    };

    render(){
        var {items,loading} = this.state;

        if(loading){
            return <div>Loading</div>
        }else{
            return(
                <div name="Api">
                    <ul>
                        {
                            items.map(item => (
                                <li key={item.id}>
                                    <img src={item.url}/>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        
    }
}

export default Api

//fetch('').then(resp => resp.json())