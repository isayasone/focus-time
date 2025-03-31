import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  // if(!history || !history.length) return
  const renderItem = ({ item }) => <Text style={styles.item}>- {item} </Text>;
  return (
    <View style={styles.container}>
      {!history || !history.length ? (
        <Text style={styles.title}> Have not foucused on anything yet.</Text>
      ) : (
        <>
          {' '}
          <Text style={styles.title}> Things i have foucused on </Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});
