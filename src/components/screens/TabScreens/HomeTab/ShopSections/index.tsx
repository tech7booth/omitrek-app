import ShoppingSection from '@app/components/shared/ShoppingSection';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

function ShopSections() {
  return (
    <ScrollView style={styles.container}>
      <ShoppingSection title="Best Deal" seeAllFn={() => {}} />
      <ShoppingSection title="Hot Deals" seeAllFn={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
});

export default ShopSections;
