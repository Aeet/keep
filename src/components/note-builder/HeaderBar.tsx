import React, { useLayoutEffect } from 'react';
import { RightActionsContainer, HeaderButton } from '../navigation/header';
import FIcon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../config';

const HeaderBar = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RightActionsContainer>
          <HeaderButton>
            <MCIcon
              name="pin-outline" // render pin when note is pinned
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </HeaderButton>
          <HeaderButton>
            <MCIcon
              name="bell-plus-outline"
              size={22}
              color={Color.SILVER_SAND.value}
            />
          </HeaderButton>
          <HeaderButton>
            <FIcon name="archive" size={22} color={Color.SILVER_SAND.value} />
          </HeaderButton>
        </RightActionsContainer>
      ),
    });
  }, [navigation]);

  return null;
};

export default HeaderBar;
