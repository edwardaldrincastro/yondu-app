
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { Home, Logo } from "../views"
const MainNavigator = createSwitchNavigator({
    Logo: Logo,
    Home: Home
    },
    {
        initialRouteName: 'Logo'
    })
  
const AppContainer = createAppContainer(MainNavigator)

export default AppContainer