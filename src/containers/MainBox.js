import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const pageMapper = {
  'profile': <Profile />,
  'photo': <Photos />,
  'cocktail': <Cocktails />,
  'pokemon': <Pokemon />
}

class MainBox extends React.Component {

  state = {
    detailsToDisplay: <Profile />,
    selected: 'profile'
  }

  handleClick = (e) => {
    this.setState({
      detailsToDisplay: pageMapper[e.target.id],
      selected: e.target.id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

        return (
      <div>
        <MenuBar handleClick={this.handleClick} selected={this.state.selected}/>
        {this.state.detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
