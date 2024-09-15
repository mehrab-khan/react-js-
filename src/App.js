import './App.css';
import PropsTest1 from './Components/PropsTest1';
import ClipboardEvent from './Components/ClipboardEvent';
import Keyboard from './Components/Keyboard';
import OnFocus from './Components/OnFocus';
import Conditional from './Components/Conditional';
import Style from './Components/Style';
import Input from './Components/Input';
import SelectBox from './Components/SelectBox';
import DataTime from './Components/DataTime';
import TextArea from './Components/TextArea';
import Radio from './Components/Radio';
import CheckBox from './Components/Checkbox'
import Basic from './Components/Basic';
 
import { Switch , Link , BrowserRouter as Router , Route } from 'react-router-dom/cjs/react-router-dom.min';
import Parent from './Parent';
import Toggle from './Components/Toggle';
import UseEffectHook from './Components/UseEffectHook';
import UseEffectDependences from './Components/UseEffectDependences';
import FetchApi from './Components/FetchApi';
import FetchReturnData from './Components/FetchReturnData';
import ShowCustomHook from './Components/ShowCustomHook';
import ImgApi from './Components/ImgApi';
function App() {
  return (
   <div>
    <PropsTest1/>
     <ClipboardEvent/>
     <Keyboard/>
     <OnFocus/>
     <Conditional/>
     <Style/>
     <Input/>
     <SelectBox/>
     <DataTime/>
     <TextArea/>
     <Radio/>
     <Basic/>
      <CheckBox/>
      <Parent/>
      <Toggle/>
      <UseEffectHook/>
      <UseEffectDependences/>
      <FetchApi/>
       <ShowCustomHook/>
       <ImgApi/>
     {/*
     
     
     Link Tag Look Like This
      <Link to='c'>Link This Data Checkbox</Link>

      */}

{/************/}
      <Router>
      <Switch>
      <Route path='/c' component={CheckBox}></Route>
      {/*if this page not exist   go to this component*/}
      {/*<Route path='*' component={Error}></Route>*/}
      </Switch>
    </Router>
    
{/************/}


     {/*React Router Dom Structure

     -----In Terminal Type------ npm install react-router-dom@5

      import { Switch  , BrowserRouter as Router , Route } from 'react-router-dom/cjs/react-router-dom.min';
     <Router>
      <Switch>
        <Route exact path="/" component={MyComponent} />

        {if this page not exist   go to this component}
      <Route path='*' component={'Error'}></Route>
        <Route path="/other-page" component={OtherPage} />
      </Switch>
    </Router>
     
     
     */}
   </div>  
  );
}

export default App;
