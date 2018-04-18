import * as React from 'react';
import Header from "./components/main/Header";

class App extends React.Component {
  constructor(props:any){
    super(props)
  }

  public delete = () =>{
    console.log("AA")
  }
  public render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
