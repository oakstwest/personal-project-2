import React, { Component } from 'react'
import { Switch, Route, } from 'react-router-dom';

import User_Main from './components/User_Main/User_Main';
import Clouds from './components/Clouds/Clouds';
import Crisis from './components/Crisis/Crisis';
import Sign_In from './components/Sign_In/Sign_In';
import Info_Entry from './components/Info_Entry/Info_Entry';
import Video from './components/Video/Render_Video';
import Quotes from './components/Quotes/Quotes';

export default (
    <Switch>
        <Route path='/' component={Sign_In} exact />
        <Route path='/User_Main' component={User_Main} /> 
        <Route path='/Clouds' component={Clouds} />
        <Route path='/Crisis' component={Crisis} />
        <Route path='/Info' component={Info_Entry} />
        <Route path='/Video' component={Video}/>
        <Route path='/Quotes' component={Quotes}/>
        
    </Switch>

);


