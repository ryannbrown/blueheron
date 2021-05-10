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
  

componentDidUpdate(){
console.log('updated context', this.state)
}

loginUser = () => {
    console.log("Let's log in!")
    this.setState({
        userLoggedIn:true
    })
    
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
