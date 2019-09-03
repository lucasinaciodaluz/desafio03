import { createAppContainer, createSwitchNavigator } from "react-navigation";

import signIn from "./pages/signIn";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      signIn
    },
    {
      headerLayoutPreset: "center"
    }
  )
);

export default Routes;
