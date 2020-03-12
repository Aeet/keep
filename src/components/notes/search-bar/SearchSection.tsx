import React, { SFC } from 'react';
import { View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import AppText from '../../common/text/AppText';
import { Color } from '../../../config';
import searchStyles from './styles';

interface SearchSectionProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void | undefined;
  actionLabel?: string;
  showAction?: boolean;
}

const SearchSection: SFC<SearchSectionProps> = ({
  title,
  onPress,
  actionLabel,
  children,
  showAction = false,
}) => {
  return (
    <View>
      <View style={searchStyles.sectionHeader}>
        <AppText color={Color.SILVER_SAND.value} fontWeight="600" fontSize={12}>
          {title}
        </AppText>
        {showAction && (
          <TouchableOpacity onPress={onPress}>
            <AppText
              color={Color.MALIBU_DARKER.value}
              fontSize={12}
              fontWeight="600"
            >
              {actionLabel}
            </AppText>
          </TouchableOpacity>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default SearchSection;
