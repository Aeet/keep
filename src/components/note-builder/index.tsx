import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
  StatusBar,
} from 'react-native';
import OIcon from 'react-native-vector-icons/Octicons';
import FIcon from 'react-native-vector-icons/Feather';
import { Color } from '../../config';
import AppText from '../common/text/AppText';
import HeaderBar from './HeaderBar';
import { withNote, NoteDispatch } from '../../store/note';
import { NoteState, Note } from '../../store/types';
import { setNote, updateNote } from '../../store/note/actions';
import NoteActions from './NoteActions';
import NoteSettings from './NoteSettings';
import { createNote } from '../../services/note';
import BottomMenuDrawer from '../common/menu/BottomMenuDrawer';

const MENU_OPTIONS = 'MENU_OPTIONS';
const MENU_SETTINGS = 'MENU_SETTINGS';
type drawerType = 'MENU_OPTIONS' | 'MENU_SETTINGS';
interface NoteBuilderProps {
  noteState: NoteState;
  noteDispatch: NoteDispatch;
  route: any;
  navigation: any;
}
interface NoteBuilderState {
  drawerMenu: drawerType | null;
}

class NoteBuilder extends Component<NoteBuilderProps, NoteBuilderState> {
  private wrapperContent: any;
  private wrapperTitle: any;

  constructor(props: any) {
    super(props);
    this.state = { drawerMenu: null };
    this.wrapperTitle = React.createRef();
    this.wrapperContent = React.createRef();
  }

  componentDidMount() {
    const { noteId } = this.props.route?.params ?? 0;
    this.setCurrentNote(noteId, this.props.noteState.items);
  }

  componentDidUpdate(prevProps: NoteBuilderProps) {
    const prevNoteId = prevProps.route?.params?.noteId ?? 0;
    const noteId = this.props.route?.params?.noteId ?? 0;

    if (prevNoteId !== noteId) {
      this.setCurrentNote(noteId, this.props.noteState.items);
    }
  }

  componentWillUnmount() {
    this.props.noteDispatch(updateNote(this.props.noteState.note));
  }

  setCurrentNote = (noteId: number | undefined, notes: Array<Note>) => {
    const note = notes.find(({ id }) => id === noteId) ?? createNote();
    this.props.noteDispatch(setNote(note));
    this.props.navigation.setParams({ backgroundColor: note.color });
  };

  handleShowOptions = () => this.handleOpenDrawer(MENU_OPTIONS);
  handleShowSettings = () => this.handleOpenDrawer(MENU_SETTINGS);

  handleOpenDrawer = (drawer: drawerType) => {
    Keyboard.dismiss();
    this.setState((prevState: any) => ({
      drawerMenu: prevState.drawerMenu !== drawer ? drawer : null,
    }));
  };
  handleHideDrawer = () => this.setState({ drawerMenu: null });

  handleTitleChange = (title: string) => {
    const { note } = this.props.noteState;
    this.props.noteDispatch(setNote({ ...note, title }));
  };
  handleContentChange = (content: string) => {
    const { note } = this.props.noteState;
    this.props.noteDispatch(setNote({ ...note, content }));
  };

  handleSubmit = () => this.wrapperContent.current.focus();

  getShadowStyle = () => {
    const { note } = this.props.noteState;

    return {
      ...Platform.select({
        ios: {
          backgroundColor: note.color,
          shadowColor: Color.getDarkColor(note.color),
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          borderTopWidth: 1,
          borderTopColor: Color.getDarkColor(note.color),
          elevation: 1,
        },
      }),
    };
  };

  render() {
    const { drawerMenu } = this.state;
    const { title, content, color } = this.props.noteState.note;
    const menuOptionsActive = drawerMenu === MENU_OPTIONS;
    const menuSettingsActive = drawerMenu === MENU_SETTINGS;

    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
          backgroundColor={color}
        />
        <HeaderBar />
        <ScrollView
          style={styles.wrapper}
          contentContainerStyle={styles.content}
          contentInsetAdjustmentBehavior="automatic"
        >
          <TextInput
            value={title}
            onChangeText={this.handleTitleChange}
            blurOnSubmit={true}
            onSubmitEditing={this.handleSubmit}
            ref={this.wrapperTitle}
            autoCorrect={false}
            multiline={true}
            style={[styles.textInput, styles.titleText]}
            placeholderTextColor={Color.OSLO_GRAY.value}
            placeholder="Title"
            onFocus={this.handleHideDrawer}
          />
          <TextInput
            value={content}
            onChangeText={this.handleContentChange}
            ref={this.wrapperContent}
            autoCorrect={false}
            multiline={true}
            style={[styles.textInput, styles.contentText]}
            placeholderTextColor={Color.OSLO_GRAY.value}
            placeholder="Note"
            onFocus={this.handleHideDrawer}
            scrollEnabled={false}
          />
        </ScrollView>
        <View
          style={[
            styles.actions,
            this.getShadowStyle(),
            { backgroundColor: color },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.iconWrapper,
              menuOptionsActive && {
                backgroundColor: Color.getDarkColor(color),
              },
            ]}
            onPress={this.handleShowOptions}
          >
            <OIcon
              name="diff-added"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          </TouchableOpacity>
          <AppText color={Color.SILVER_SAND.value}>Edited 15:48</AppText>
          <TouchableOpacity
            onPress={this.handleShowSettings}
            style={[
              styles.iconWrapper,
              menuSettingsActive && {
                backgroundColor: Color.getDarkColor(color),
              },
            ]}
          >
            <FIcon
              name="more-vertical"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          </TouchableOpacity>
        </View>
        <BottomMenuDrawer
          visible={menuOptionsActive || menuSettingsActive}
          style={[this.getShadowStyle()]}
          backgroundColor={color}
        >
          <NoteActions visible={menuOptionsActive} />
          <NoteSettings visible={menuSettingsActive} />
        </BottomMenuDrawer>
      </View>
    );
  }
}

export default withNote(NoteBuilder);

const actionsHeight = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  textInput: {
    color: Color.ATHENS_GRAY.value,
    margin: 8,
    padding: 4,
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  titleText: {
    marginTop: 16,
    fontSize: 25,
  },
  contentText: {
    flex: 1,
    textAlignVertical: 'top',
  },
  actions: {
    height: actionsHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.SHARK.value,
    zIndex: 10,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: actionsHeight,
    width: actionsHeight,
  },
});
