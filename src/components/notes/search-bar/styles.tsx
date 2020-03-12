import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  searchSection: {},
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    overflow: 'hidden',
  },
  sectionItem: {
    marginBottom: 4,
  },
});
