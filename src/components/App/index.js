import './App.css';

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AuthContext} from '../../AuthContext';

import Header from '../Header';
import Footer from '../Footer';
import HomePage from '../../pages/Home';
import AboutPage from '../../pages/About';
import FeedbackPage from '../../pages/Feedback';
import OurworksPage from '../../pages/Ourworks';
import MenuEditorPage from '../../pages/Ourworks/menu-editor';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount () {
        
    }

    componentWillUnmount() {

    }

    setUser = (user) => {
        console.log('user from app', user);
        this.setState({user});
    }

    render() {
        return (
            <AuthContext.Provider value={{
                setUser: this.setUser,
                user: this.state.user
            }}>
                <div className='app'>
                    <Header />
                    <div className="layout-body">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/feedback" element={<FeedbackPage />} />
                            <Route path="/ourworks" element={<OurworksPage />} />=
                                {/* <Route path="/menu-editor" element={<MenuEditorPage />}> */}
                            {/* </Route> */}
                            <Route path="/not-allowed" element={<OurworksPage />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </AuthContext.Provider>
        );
    }
}

// function App() {
//   return (
//       <div className='app'>
//           <Header />
//           <div className="body">
//               <h1>Привет мир!</h1>
//               <div className="list">
//                   {cars.map(car => (
//                       <Card data={car} />
//                   ))}
//               </div>
//           </div>
//           <Footer />
//       </div>
//   );
// }

export default App;

// class Animal {

//     name;
//     size;

//     constructor (name, size) {
//         this.name = name;
//         this.size = size
//     }

//     run() {
//         console.log('Run');
//     }
// }

// class Dog extends Animal {

//     constructor(name, size, age) {
//         super(name, size);
//         this.age = age;
//     }

//     run() {
//         super.run();
//         console.log('Run fast');
//     }

//     gav() {

//     }

// }

// class Cat extends Animal {

//     meow() {
        
//     }

// }

// class Cat2 extends Cat {

    

// }

// let a = new Dog('Bobik', 'big', 5);
// let b = new Cat('Dog', 'small', 2);

// a.run();
// a.gav();


// b.run()
// b.meow()