import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NoteItem from './NoteItem';
import { Note1, Note2, getNote } from './helper';

export default class Notes extends Component {
  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <View style={styles.wrapper}>
          <NoteItem note={Note1} />
          <NoteItem note={getNote(true)} />
          <NoteItem note={getNote()} />
          <NoteItem note={getNote(true)} />
          <NoteItem note={Note2} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#202124',
  },
  wrapper: {
    marginTop: 16,
    marginBottom: 20,
  },
});
