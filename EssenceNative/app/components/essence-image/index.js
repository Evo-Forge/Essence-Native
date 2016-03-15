'use strict';

const React = require('react-native');

const {
  Component,
  Image,
  Dimensions,
  StyleSheet,
  PropTypes,
  View,
  Animated
} = React;

class UiImages extends React.Component {

  static propTypes = {
    source: PropTypes.any.isRequired,
    resizeMode: PropTypes.string,
    width: PropTypes.number,
    animated: PropTypes.bool,
    height: PropTypes.number,
    static: PropTypes.bool,
    lazyLoad: PropTypes.bool
  };

  static defaultProps = {
    lazyLoad: false,
    animated: false,
    resizeMode: 'cover'
  };
	constructor(props) {
        super(props);
        this.state = {
          width: null,
          height: null
        };
        this.isLazyLoaded = false;
        if (this.props.animated) {
          this.state.fade = new Animated.Value(0);
        }
    }

    setDimensions(width, height) {
      this.setState({
        width,
        height
      }, () => {
        this.isLazyLoaded = true;
      });
    }
    shouldComponentUpdate() {
      if (this.isLazyLoaded === true || this.props.static === true) return false;
      return true;
    }

    handleLoad() {
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: 200
      }).start();
    }

	render() {
    if (this.props.lazyLoad === true && (!this.state.width || !this.state.height)) {
      return <View style={{height: this.props.height, width: 10}}/>;
    }
    let imgSrc = this.props.source,
      source, imgStyle;

  /*  if (imgSrc.substr(0, 7) === 'assets/') {
      source === [imgSrc];                         // NEEDS OBJECT HERE
    } else {
      source = {
        uri: imgSrc
      };
    }
    if (imgSrc.substr(0, 10) === 'data:image' || imgSrc.indexOf('file:') !== -1) {
      source.isStatic = true;
    } */
    let imgWidth = this.state.width || this.props.width,
      imgHeight = this.state.height || this.props.height;
    if (source.isStatic || imgSrc.indexOf('http') === 0) {
      imgStyle = {
        width: imgWidth,
        height: imgHeigh
      };
    }
    if(!this.props.animated) {
      return (
        <Image
          reziseMode={this.props.reziseMode}
          height={imgHeight}
          width={imgWidth}
          source={source}
          style={[style.image, imgStyle, this.props.style]} />
      )
    }
    let animStyle = {
      opacity: this.state.fade
    };
    return (
      <Animated.View style={[styles.image, imgStyle, animStyle, this.props.style]}>
        <Image
          reziseMode={this.props.resizeMode}
          height={imgHeight}
          width={imgWidth}
          source={source}
          onLoad={this.handleLoad.bind(this)}
          style={[styles.image, imgStyle, this.props.style]} />
      </Animated.View>
    );
	}
}

module.exports = UiImages;
