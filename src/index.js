import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app/';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
            
//         }
            //Способы использовать функцию как обраб-к события
        // this.nextYear = this.nextYear.bind(this); //1 Cпособ привязать
        // this.nextYear = () => {  //2 Способ
        //     this.setState(state => ({
        //         years: ++state.years
        //     }))
        // }
    // }                                                  
        // nextYear = () => {                           
        // this.setState(state => ({
        //     years: ++state.years
        // }))
 
        

    
    // }
    // state = { //ES 9 Для ClassField
    //     years: 26
    // }
    // nextYear() {
    //     this.setState(state => ({
    //         years: ++state.years

    //     }))
    // }
//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <>  
//                 <button onClick={this.nextYear} >++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href ={link}>My profile</a>
//             </>
            
//         )

//     }
// }


// const All = () => {
//     return (
//         <>
//             <WhoAmI name="John" surname="Smith" link="google.com" />
//             <WhoAmI name="Jane" surname="Smith" link="vk.com" />
//             <WhoAmI name="Alex" surname="Twitch" link="google.com" />
//         </>
//     )
// }

ReactDOM.render(<App/> ,document.getElementById('root'));

