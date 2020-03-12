import React, { useState, SFC } from 'react';
import { Dimensions, Animated, Easing } from 'react-native';
import SearchSection from './SearchSection';
import searchStyles from './styles';

const deviceWidth = Dimensions.get('window').width;
const separatorWidth = 4;

interface SearchGridButtonsProps {
  title: string;
  renderItem: Function;
  data: Array<any>;
  itemOnRow?: number;
}

const SearchGrid: SFC<SearchGridButtonsProps> = ({
  title,
  renderItem,
  data,
  itemOnRow = 3,
}) => {
  const itemWrapperSize = deviceWidth / itemOnRow;
  const initialHeight = itemWrapperSize;
  const fullHeight = Math.ceil(data.length / itemOnRow) * itemWrapperSize;
  const itemSize = (deviceWidth - (itemOnRow - 1) * separatorWidth) / itemOnRow;
  const itemStyle = { width: itemSize, height: itemSize };

  const [expanded, setExpanded] = useState(false);
  const [contentHeight] = useState(new Animated.Value(initialHeight));

  const contentStyle = {
    height: contentHeight,
  };

  const opacity = contentHeight.interpolate({
    inputRange: [initialHeight, fullHeight],
    outputRange: [0.01, 1],
    extrapolate: 'clamp',
  });

  const handleShowMore = (show: boolean) => {
    Animated.timing(contentHeight, {
      toValue: show ? fullHeight : initialHeight,
      duration: 300,
      easing: Easing.ease,
      // useNativeDriver: true, // height not supported
    }).start();

    setExpanded(show);
  };

  const renderLocalItem = (item: any, index: any, withOpacity = false) => (
    <Animated.View
      key={item.key}
      style={[
        itemStyle,
        searchStyles.sectionItem,
        withOpacity && { opacity },
        index % itemOnRow !== 0 && { marginLeft: separatorWidth },
      ]}
    >
      {renderItem(item.item)}
    </Animated.View>
  );

  const renderBasicItem = (item: any, index: any) =>
    renderLocalItem(item, index);

  const renderOtherItem = (item: any, index: any) =>
    renderLocalItem(item, index, true);

  const items = data.slice(0, itemOnRow);
  const extraItems = data.slice(itemOnRow);

  return (
    <SearchSection
      title={title}
      onPress={() => handleShowMore(!expanded)}
      actionLabel={expanded ? 'LESS' : 'MORE'}
      showAction={data.length > itemOnRow}
    >
      <Animated.View style={[searchStyles.sectionContent, contentStyle]}>
        {items.map(renderBasicItem)}
        {extraItems.map(renderOtherItem)}
      </Animated.View>
    </SearchSection>
  );
};

export default SearchGrid;
