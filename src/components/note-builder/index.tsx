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
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../config';
import AppText from '../common/text/AppText';
import BottomMenuDrawer from '../common/menu/BottomMenuDrawer';
import BottomMenuItem from '../common/menu/BottomMenuItem';
import ColorPicker from '../common/menu/ColorPicker';
import { Notes } from '../notes/helper';
import HeaderBar from './HeaderBar';

const MENU_OPTIONS = 'MENU_OPTIONS';
const MENU_SETTINGS = 'MENU_SETTINGS';
type drawerType = 'MENU_OPTIONS' | 'MENU_SETTINGS';

export default class NoteBuilder extends Component<any, any> {
  private wrapperContent: any;
  private wrapperTitle: any;

  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      content: '',
      color: Color.SHARK.value,
      drawerMenu: false,
    };
    this.wrapperTitle = React.createRef();
    this.wrapperContent = React.createRef();
  }

  componentDidMount() {
    const { noteId } = this.props.route?.params ?? {};
    const note = Notes.find(({ id }) => id === noteId);

    if (note) {
      this.setState({
        title: note.title,
        content: note.content,
        color: note.color,
      });
      this.props.navigation.setParams({ backgroundColor: note.color });
    }
  }

  handleShowOptions = () => this.handleOpenDrawer(MENU_OPTIONS);
  handleShowSettings = () => this.handleOpenDrawer(MENU_SETTINGS);

  handleOpenDrawer = (drawer: drawerType) => {
    Keyboard.dismiss();
    this.setState((prevState: any) => ({
      drawerMenu: prevState.drawerMenu !== drawer ? drawer : null,
    }));
  };
  handleHideDrawer = () => this.setState({ drawerMenu: false });
  handleTitleChange = (title: string) => this.setState({ title });
  handleContentChange = (content: string) => this.setState({ content });
  handleSubmit = () => this.wrapperContent.current.focus();
  setColor = (color: string) => {
    this.props.navigation.setParams({ backgroundColor: color });
    this.setState({ color });
  };

  getShadowStyle = () => ({
    ...Platform.select({
      ios: {
        backgroundColor: this.state.color,
        shadowColor: Color.getDarkColor(this.state.color),
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        borderTopWidth: 1,
        borderTopColor: Color.getDarkColor(this.state.color),
        elevation: 1,
      },
    }),
  });

  render() {
    const { title, content, drawerMenu, color } = this.state;
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
        {/* TODO Mover BottomMenuDrawer to it's own componenet */}
        <BottomMenuDrawer
          visible={drawerMenu === MENU_OPTIONS}
          style={[{ backgroundColor: color }, this.getShadowStyle()]}
        >
          <BottomMenuItem
            text="Take photo"
            renderIcon={() => (
              <MIcon
                name="camera-outline"
                size={20}
                color={Color.SILVER_SAND.value}
              />
            )}
          />
          <BottomMenuItem
            text="Choose image"
            renderIcon={() => (
              <MIcon
                name="image-outline"
                size={20}
                color={Color.SILVER_SAND.value}
              />
            )}
          />
          <BottomMenuItem
            text="Drawing"
            renderIcon={() => (
              <MIcon name="brush" size={20} color={Color.SILVER_SAND.value} />
            )}
          />
          <BottomMenuItem
            text="Recording"
            renderIcon={() => (
              <MIcon
                name="microphone"
                size={20}
                color={Color.SILVER_SAND.value}
              />
            )}
          />
          <BottomMenuItem
            text="Checkboxes"
            renderIcon={() => (
              <MIcon
                name="checkbox-marked-outline"
                size={20}
                color={Color.SILVER_SAND.value}
              />
            )}
          />
          <ColorPicker onChangeColor={this.setColor} color={color} />
        </BottomMenuDrawer>
      </View>
    );
  }
}

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
  // iconActive: {
  //   backgroundColor: Color.SHARK_DARKER.value,
  // },
});
