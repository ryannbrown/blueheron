import React, { Component } from "react";
require('dotenv').config();
const { Provider, Consumer } = React.createContext();

 class ThemeContextProvider extends Component {
   constructor(props) {
    super(props);

    this.listener = null;
     this.state = {
       userLoggedIn: false
       
     };

   }
  
   componentDidMount() {

    let userStorageEmail = sessionStorage.getItem("isLoggedIn")

    if ( userStorageEmail) {
    
      this.setState({
        userLoggedIn: true
      })
    }
    

   }


loginUser = () => {
    console.log("Let's log in!")
    this.setState({
        userLoggedIn:true
    })
    window.sessionStorage.setItem('isLoggedIn', true);
    
}



  render() {
    return (
      <Provider
        value={{ 
         loginUser: this.loginUser,
            userLoggedIn: this.state.userLoggedIn,
           }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
