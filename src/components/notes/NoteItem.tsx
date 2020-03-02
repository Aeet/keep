import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import AppText from '../common/text/AppText';
import { Note } from 'src/types/note';
import { Color } from './../../config';

export interface NoteItemProps {
  note: Note;
  editNote: Function;
}

export default class NoteItem extends Component<NoteItemProps, any> {
  render() {
    const { title, content, color } = this.props.note;

    const style = {
      backgroundColor: color ?? 'none',
      borderWidth: !color || color === Color.SHARK.value ? 1 : 0,
    };

    return (
      <TouchableOpacity
        style={[styles.wrapper, style]}
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

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#5f6368',
    borderWidth: 1,
    padding: 16,
    margin: 16,
    marginTop: 0,
    marginBottom: 8,
  },
});
