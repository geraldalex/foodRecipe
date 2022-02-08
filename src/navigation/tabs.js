import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import {TabIcon} from "../components"
import { COLORS, icons } from '../constants'



const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
          
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
               backgroundColor:COLORS.white,
               elevation:0,
               height:80,
               position:'absolute',
               bottom:0,
               left:0,
               right:0,
               borderTopColor:'transparent'
              

              
            }
        }}
        >
            <Tab.Screen
                name="Home1"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon
                    focused={focused} icon={icons.home}
                    />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon
                    focused={focused} icon={icons.search}
                    />
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon
                    focused={focused} icon={icons.bookmark}
                    />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon
                    focused={focused} icon={icons.settings}
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;