import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import { Color } from './../../../config';

export default class NoteBuilder extends Component<any, any> {
  private wrapperContent: any;
  private wrapperTitle: any;

  constructor(props: any) {
    super(props);
    this.state = { title: 'Hello world', content: '', color: Color.SHARK };
    this.wrapperTitle = React.createRef();
    this.wrapperContent = React.createRef();
  }

  handleTitleChange = (title: string) => this.setState({ title });
  handleContentChange = (content: string) => this.setState({ content });
  handleSubmit = () => this.wrapperContent.current.focus();

  render() {
    const { title, content } = this.state;

    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.wrapper}>
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
          />
        </View>
        <View style={styles.actions}>
          <Text>Edited 15:48</Text>
          <Text>Edited 15:48</Text>
          <Text>Edited 15:48</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  wrapper: {
    marginTop: 16,
    marginBottom: 20,
    alignContent: 'stretch',
    flex: 1,
  },
  textInput: {
    color: Color.ATHENS_GRAY.value,
    margin: 8,
    padding: 4,
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  titleText: {
    marginTop: 16,
    fontSize: 45,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
  contentText: {
    flex: 1,
    textAlignVertical: 'top',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'red',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
