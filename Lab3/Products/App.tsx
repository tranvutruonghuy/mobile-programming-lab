/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import Product from './Product';
import Product_Add from './Product_Add';
import Product_Search from './Product_Search';
import Product_Detail from './Product_Detail';
import {BottomNavigation, Text} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Card, Icon} from 'react-native-paper';
export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Product', title: 'Products', focusedIcon: 'folder'},
    {key: 'Product_Add', title: 'Add', focusedIcon: 'folder'},
    {key: 'Product_Search', title: 'Search', focusedIcon: 'find'},
    {key: 'Product_Detail', title: 'Detail', focusedIcon: 'calendar'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Product: Product,
    Product_Add: Product_Add,
    Product_Search: Product_Search,
    Product_Detail: Product_Detail,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};
