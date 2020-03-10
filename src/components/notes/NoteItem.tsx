import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppText from '../common/text/AppText';
import { Note } from 'src/types/note';
import { Color } from './../../config';
const { width } = Dimensions.get('window');

export interface NoteItemProps {
  note: Note;
  editNote: Function;
  index: number;
  type: 'list' | 'grid';
}

export default class NoteItem extends Component<NoteItemProps, any> {
  static defaultProps = {
    type: 'list',
  };

  render() {
    const { title, content, color } = this.props.note;
    const { index, type } = this.props;

    const isOdd = index % 2 !== 0;
    const isGrid = type === 'grid';

    const style = {
      backgroundColor: color ?? 'none',
      borderWidth: !color || color === Color.SHARK.value ? 1 : 0,
    };

    return (
      <TouchableOpacity
        style={[
          styles.wrapper,
          style,
          isGrid && [styles.gridItem, isOdd && styles.itemSeparator],
        ]}
        onPress={() => this.props.editNote()}
      >
        {title && (
          <AppText
            fontWeight={Platform.OS === 'ios' ? '600' : 'bold'}
            fontSize={20}
            numberOfLines={2}
          >
            {title}
          </AppText>
        )}
        <AppText numberOfLines={10}>{content}</AppText>
      </TouchableOpacity>
    );
  }
}

const margin = 10;
const pourcentageMargin = (margin * 1.5 * 100) / width;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#5f6368',
    borderWidth: 1,
    padding: 16,
    margin,
    marginTop: 0,
    marginBottom: 8,
  },
  gridItem: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: `${50 - pourcentageMargin}%`,
  },
  itemSeparator: {
    marginLeft: 0,
  },
});
