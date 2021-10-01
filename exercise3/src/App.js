import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import data from './ProductData.json'
import React from 'react';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      items: data.items, 
      productSearchString: ""
    }
  }
  

  onSearchFieldChange = (event) =>
  {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }
  

  render()
  {
      return (
      <>
        <div>
      
          <table>
              <tr>
                  <td colspan='3'> <Header/></td>
              </tr>

              <tr>
                 
                 <td> <LeftSideBar /> </td>
                

                 <td>
                  
                 <input type = "text" onChange = { this.onSearchFieldChange } value = {this.state.productSearchString }/> 

                  <MainPage items = { this.state.items.filter((item) => item.type.includes(this.state.productSearchString)
                    || item.brand.includes(this.state.productSearchString)
                    || item.color.includes(this.state.productSearchString)
                    || item.weight.includes(this.state.productSearchString)
                    ) }/>
                  
                </td>
                 <td> <RightSideBar/> </td>
              </tr>

          </table>

        </div>
        </>
      );
  }

}

export default App;
