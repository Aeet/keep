import React, { SFC, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import NoteItem from './NoteItem';
import { Notes as NoteList } from './helper';
import { Note } from 'src/types/note';
import BottomTab from './BottomTab';
import SearchBar, { SearchBarDimensions } from './SearchBar';
const { height, offsetTop } = SearchBarDimensions;

const SEARCH_BAR_FULL_HEIGHT = height + offsetTop;

const Notes: SFC<any> = ({ navigation }) => {
  const [scrollAnim] = useState(new Animated.Value(0));
  const [clampedScroll] = useState(
    Animated.diffClamp(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      0,
      SEARCH_BAR_FULL_HEIGHT,
    ),
  );

  const goToNoteBuilder = (note: Note) =>
    navigation.navigate('NoteBuilder', { noteId: note?.id });

  const navbarTranslate = Animated.multiply(clampedScroll, -1);

  return (
    <View style={styles.notes}>
      <SearchBar style={{ transform: [{ translateY: navbarTranslate }] }} />
      <Animated.ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: true },
        )}
        alwaysBounceVertical={false}
      >
        {NoteList.map((note: Note) => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={() => goToNoteBuilder(note)}
          />
        ))}
      </Animated.ScrollView>
      <BottomTab />
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
    paddingTop: SEARCH_BAR_FULL_HEIGHT + 15, // 15 SearchBar marginBottom
    paddingBottom: 90,
  },
});
