import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import AppText from '../common/text/AppText';
import { Note } from 'src/types/note';

export interface NoteItemProps {
  note: Note;
}

export default class NoteItem extends Component<NoteItemProps, any> {
  render() {
    const { title, content, color } = this.props.note;

    return (
      <View
        style={[styles.wrapper, { backgroundColor: color?.value ?? 'none' }]}
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
      </View>
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
