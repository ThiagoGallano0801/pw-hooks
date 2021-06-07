import './Content.css' 
import React from "react" 
import { Switch, Route } from 'react-router-dom' 
import Hooks from '../../views/contents/Hooks' 
import Usestate from '../../views/contents/UseState' 
import NaoEncontrado from '../../views/contents//NaoEncontrado' 

const Content = props => (
    <main className="Content"> 
        <Switch> 
            <Route exact path="/"> 
                <Hooks /> 
            </Route> 
            <Route path="/Usestate"> 
                <Usestate /> 
            </Route> 
            <Route path="*"> 
                <NaoEncontrado /> 
            </Route> 
        </Switch>
    </main>
)
export default Content