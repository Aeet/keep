import React, { SFC } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import NoteItem from './NoteItem';
import { Notes as NoteList } from './helper';
import { Note } from 'src/types/note';
import BottomBar from './BottomBar';

const Notes: SFC<any> = ({ navigation }) => {
  const goToNoteBuilder = (note: Note) =>
    navigation.navigate('NoteBuilder', { noteId: note?.id });

  return (
    <View style={styles.notes}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {NoteList.map((note: Note) => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={() => goToNoteBuilder(note)}
          />
        ))}
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  notes: {
    flex: 1,
  },
  container: {
    height: '100%',
    backgroundColor: '#202124',
  },
  content: {
    paddingBottom: 90,
  },
});
