import React, { useCallback, SFC } from 'react';
import ColorPicker from '../common/menu/ColorPicker';
import { useNote } from '../../store/note';
import { setNote } from '../../store/note/actions';
import { useNavigation } from '@react-navigation/native';
import BottomMenuItem from '../common/menu/BottomMenuItem';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../config';

interface NoteSettingsProps {
  visible: boolean;
}

const NoteSettings: SFC<NoteSettingsProps> = ({ visible }): any => {
  const [noteState, dispatch] = useNote();
  const navigation = useNavigation();

  const setColor = useCallback(
    (color: string) => {
      dispatch(setNote({ ...noteState.note, color }));
      navigation.setParams({ backgroundColor: color });
    },
    [noteState.note],
  );

  return (
    visible && (
      <>
        <BottomMenuItem
          text="Delete"
          renderIcon={() => (
            <MIcon
              name="trash-can-outline"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          )}
        />
        <BottomMenuItem
          text="Make a copy"
          renderIcon={() => (
            <MIcon
              name="content-copy"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          )}
        />
        <BottomMenuItem
          text="Send"
          renderIcon={() => (
            <MIcon
              name="share-variant"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          )}
        />
        <BottomMenuItem
          text="Labels"
          renderIcon={() => (
            <MIcon
              name="label-outline"
              size={20}
              color={Color.SILVER_SAND.value}
            />
          )}
        />
        <ColorPicker onChangeColor={setColor} color={noteState.note.color} />
      </>
    )
  );
};

export default NoteSettings;
