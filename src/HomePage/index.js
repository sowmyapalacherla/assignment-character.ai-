import { Component } from "react";
import ForYou from "../ForYou";
import TryThese from '../TryThese'
import Featured from '../Featured'
import Category from '../Category'
import TrySaying from '../TrySaying';
import SideBar from '../SideBar';


import './index.css'

class HomePage extends Component{
    state ={
        searchInput:'',
    }

    onChangeInput = event =>{
        this.setState({searchInput:event.target.value})
    }

     render() {
        const {searchInput} = this.state 

        return(
            <div className="background" >
               <SideBar/>
                <div className="main-background">
                <h1 className="welcome">Welcome back,</h1>
                <div className="name-container">
                    <h1 className="name">SowmyaPalacherla</h1>
                    <div className="search-container">
                    <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="search icon"
              className="search-icon"
            />
                    <input 
                    type="search"
                    className="search-input"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    placeholder="Search For Characters"
                    />
                    
            </div>
                </div>

                <ForYou/>
                <TryThese/>
                <Featured/>
                <Category/>
                <TrySaying/>

                </div>
            </div>
        )
     }

}

export default HomePage