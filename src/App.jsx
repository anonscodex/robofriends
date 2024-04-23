import React, { Component } from "react";
import {portfolio} from './Portfolio.jsx'
import CardList from './CardList.jsx'
import Header from "./Header.jsx";
import Footer from "./footer.jsx";



class App extends Component {
    constructor() {
        super() 
        this.state = {
            portfolio: portfolio,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredPortfolio = this.state.portfolio.filter(portfolio => {
            return (
                
                    portfolio.stack.toLowerCase().includes(this.state.searchfield.toLowerCase())
                    
                
                
            ) 
        }) 
        
        return (
                <div>
                    <Header searchChange={this.onSearchChange}/>
                    
                    <CardList portfolio ={filteredPortfolio}/>
                    
                    <Footer />
                </div>
        )
} 
}

export default App