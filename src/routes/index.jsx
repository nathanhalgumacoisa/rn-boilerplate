import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tabs.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
       <TabRoutes /> 
      {/* <DrawerRoutes /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}