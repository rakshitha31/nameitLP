import React from 'react';
import './App.css';
import '../Header/header.jsx';
import Header from '../Header/header.jsx';
import SearchBox from '../SearchBox/searchbox.jsx';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component{

    /* state is used to hold any data that changes at any instant in the app by logic or any other means
    state is a predefined keyword in React and only that can be used
    */
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        
        this.setState({
            headerExpanded: !inputText, 
            suggestedNames : inputText ? name(inputText):[],
        })
        
    }
/**
 * Data cannot be directly passed between child components. It must be passed from parent component i.e App to its children
 * For instance, the state of header (expanded or contracted) is passed as a prop below
 * A whole function can also be passed as a prop!! here, handleInputChanges is a function passed as a prop
 */

    render(){
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
            </div>
        )
    }
}


export default App;