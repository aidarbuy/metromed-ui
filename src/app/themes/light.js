import * as Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color:      Colors.cyan500,
    primary2Color:      Colors.cyan700,
    primary3Color:      Colors.grey400,

    accent1Color:       Colors.pink500,
    accent2Color:       Colors.grey100,
    accent3Color:       Colors.grey500,

    textColor:          Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor:        Colors.white,
    borderColor:        Colors.grey300,
    disabledColor:      ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor:  Colors.cyan500,
    clockCircleColor:   ColorManipulator.fade(Colors.darkBlack, 0.07),
    shadowColor:        Colors.fullBlack,
  },
};