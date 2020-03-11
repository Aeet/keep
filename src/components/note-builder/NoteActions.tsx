import React, { SFC } from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomMenuItem from '../common/menu/BottomMenuItem';
import { Color } from '../../config';

interface NoteActionsProps {
  visible: boolean;
}

const NoteActions: SFC<NoteActionsProps> = ({ visible }): any => {
  return (
    visible && (
      <>
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
      </>
    )
  );
};

export default NoteActions;
