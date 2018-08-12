import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "058bf5c77a95b07d61cf768aa261dfc3";




class App extends Component {
    state = {
        recipes: [],
    };
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
        const data = await api_call.json();
        this.setState({recipes:data.recipes});
        console.log('here recipes is',this.state.recipes);
    };

    componentDidMount =()=> {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({recipes: recipes})
    };

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes", recipes);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">React API work</h1>
                </header>
                <Form getRecipe={this.getRecipe}/>
               <Recipes  recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default App;