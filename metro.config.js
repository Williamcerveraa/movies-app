// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require( "expo/metro-config" );
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
// const { withNativeWind } = require( 'nativewind/metro' );

const config = getDefaultConfig( __dirname );

// module.exports = withNativeWind( config, { input: './app/global.css' } );
module.exports = wrapWithReanimatedMetroConfig(config);