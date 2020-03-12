import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../common/text/AppText';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../../config';
import SearchGrid from './SearchGrid';
import SearchColor from './SearchColor';
import {
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const typesIconSize = 30;
const labelsIconSize = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.SHARK.value,
  },
  content: {
    paddingBottom: 16,
  },
  sectionItem: {
    flex: 1,
  },
  typesContainer: {
    flex: 1,
    backgroundColor: Color.MALIBU.value,
  },
  sectionItemBlock: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sectionIconWrapper: {
    overflow: 'visible',
    zIndex: 5,
  },
  typesIcon: {
    transform: [{ translateY: typesIconSize / 2 }],
  },
  labelsIcon: {
    transform: [{ translateY: labelsIconSize / 2 }],
  },
  sectionFooter: {
    paddingBottom: 12,
  },
});

const TYPES = [
  {
    key: 'types',
    item: {
      value: 'Lists',
      icon: (
        <MIcon
          name="checkbox-marked-outline"
          size={typesIconSize}
          color={Color.SHARK.value}
          style={styles.typesIcon}
        />
      ),
    },
  },
  {
    key: 'images',
    item: {
      value: 'Images',
      icon: (
        <MIcon
          name="image-outline"
          size={typesIconSize}
          color={Color.SHARK.value}
          style={styles.typesIcon}
        />
      ),
    },
  },
  {
    key: 'urls',
    item: {
      value: 'URLs',
      icon: (
        <MIcon
          name="link"
          size={typesIconSize}
          color={Color.SHARK.value}
          style={styles.typesIcon}
        />
      ),
    },
  },
];

// TODO move to store, when labels implemented
const LABELS = [
  { key: 'label1', item: { value: 'Label 1' } },
  { key: 'label2', item: { value: 'Label 2' } },
  { key: 'label3', item: { value: 'Label 3' } },
  { key: 'label4', item: { value: 'Label 4' } },
];

const SearchHome = () => {
  const renderTypes = (item: any) => {
    return (
      <TouchableHighlight
        onPress={() => {}}
        containerStyle={styles.typesContainer}
        style={styles.typesContainer}
        underlayColor="rgba(255,255,255, 0.3)"
      >
        <View style={styles.sectionItem}>
          <View style={[styles.sectionItemBlock, styles.sectionIconWrapper]}>
            {item.icon}
          </View>
          <View style={[styles.sectionItemBlock, styles.sectionFooter]}>
            <AppText color={Color.SHARK.value} fontSize={14}>
              {item.value}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const renderLabels = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        containerStyle={styles.sectionItem}
        style={styles.sectionItem}
      >
        <View style={styles.sectionItem}>
          <View style={[styles.sectionItemBlock, styles.sectionIconWrapper]}>
            <MIcon
              name="label-outline"
              size={labelsIconSize}
              color={Color.OSLO_GRAY.value}
              style={styles.labelsIcon}
            />
          </View>
          <View style={[styles.sectionItemBlock, styles.sectionFooter]}>
            <AppText color={Color.ATHENS_GRAY.value} fontSize={14}>
              {item.value}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SearchGrid
        title="TYPES"
        data={TYPES}
        renderItem={renderTypes}
        itemOnRow={3}
      />
      <SearchGrid
        title="LABELS"
        data={LABELS}
        renderItem={renderLabels}
        itemOnRow={3}
      />
      <SearchColor />
    </ScrollView>
  );
};

export default SearchHome;
