import React, { SFC, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import NoteItem from './NoteItem';
import { Note } from '../../store/types';
import BottomTab from './BottomTab';
import SearchBar, { SearchBarDimensions } from './search-bar/SearchBar';
import { useNote } from '../../store/note';
const { height, offsetTop } = SearchBarDimensions;

const SEARCH_BAR_FULL_HEIGHT = height + offsetTop;

const Notes: SFC<any> = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [noteState] = useNote();
  let navbarTranslateValue = 0;
  const [isGridView] = useState(false);
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
  const navbarTranslate = Animated.multiply(clampedScroll, -1);

  (clampedScroll as any).addListener(({ value }: any) => {
    navbarTranslateValue = value;
  });

  const goToNoteBuilder = (note: Note) =>
    navigation.navigate('NoteBuilder', { noteId: note?.id });

  const handleMomentumScrollEnd = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = SEARCH_BAR_FULL_HEIGHT - navbarTranslateValue;
    const scrollViewNode = (scrollViewRef?.current as any)?.getNode();

    if (
      // y < 60 ||
      [0, SEARCH_BAR_FULL_HEIGHT].indexOf(navbarTranslateValue) !== -1 ||
      !scrollViewNode
    ) {
      return;
    }

    /** completly hide/show the search bar, if it's stuck in the middle(+-) */
    if (navbarTranslateValue > SEARCH_BAR_FULL_HEIGHT / 2) {
      scrollViewNode.scrollTo({ y: y + offset });
    } else {
      scrollViewNode.scrollTo({ y: y - offset });
    }
  };

  return (
    <View style={styles.notes}>
      <SearchBar style={{ transform: [{ translateY: navbarTranslate }] }} />
      <Animated.ScrollView
        ref={scrollViewRef}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={[styles.content, isGridView && styles.gridList]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: true },
        )}
        alwaysBounceVertical={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {noteState.items.map((note: Note, index: number) => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={() => goToNoteBuilder(note)}
            index={index}
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
  gridList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
});
