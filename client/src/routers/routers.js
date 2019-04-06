import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home/home';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';
import ServicePage from '../pages/service/service';
import ProductPage from '../pages/product/product';
import NailerPage from '../pages/nailer/nailer';
import SupportPage from '../pages/support/support';
import NailerPageNew from '../pages/nailer/nailer-new';
import NailerPageSocial from '../pages/nailer/nailer-social.js';
import SignUp from '../pages/signup/index'
import SignUpNailer from '../pages/SignUpNailer/SignUpNailer';
import Upproducts from '../pages/upproducts/upproducts';
import TronGoiPopUp from '../pages/service/ServicePopUp/TronGoiPopUp';
import BangGiaDichVu from '../pages/banggiadichvu/banggiadichvu';
import policyPage from '../pages/policy/policy';
import policy1Page from '../pages/policy/policy1';
import ProfileClient from '../pages/profileuser/profileuser'
import ChangePassword from '../components/ChangePassword/ChangePassword';
/*import CustomToggle from '../components/Dropdown/Dropdown';*/
const MainRoute = () => (
 <main>
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/home' component={HomePage}/>
     <Route path='/about' component={AboutPage}/>
     <Route path='/service' component={ServicePage}/>
     <Route path='/product/:id' component={ProductPage}/>
     <Route path='/nailer' component={NailerPage}/>
     <Route path='/support' component={SupportPage}/> 
     <Route path='/contact' component={ContactPage}/>
     <Route path='/nailer-new' component={NailerPageNew}/>
     <Route path='/nailer-social' component={NailerPageSocial}/>
     <Route path='/SignUp' component={SignUp}/>
     <Route path='/SignUpNailer' component ={SignUpNailer}/>
     <Route path='/upproducts' component ={Upproducts}/>
     <Route path='/TronGoiPopUp' component ={TronGoiPopUp}/>
     <Route path='/BangGiaDichVu' component ={BangGiaDichVu}/>
     <Route path='/policy' component={policyPage}/>
     <Route path='/policy1' component={policy1Page}/>
     <Route path='/ProfileClient' component={ProfileClient}/>
     <Route path='/ChangePassword' component={ChangePassword}/>
     {/*<Route path='/CustomToggle' component={CustomToggle}/>*/}
   </Switch>
 </main>
)

export default MainRoute;
