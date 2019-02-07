import React, { Component, createRef } from 'react';
import slideText from './slideText';
import Counter from './Counter';
import IndicatorsList from './IndicatorsList';
import Line from './Line';
import SliderButton from './SliderButton';
import SlidesList from './SlidesList';
import { sliderStyles, slideWrapperStyles } from './slider-styles';

class Slider extends Component {
  state = {
    slideText,
    currentSlideIndex: 0,
    translateValue: 0,
    height: 450,
    interval: 4000,
  };

  slideRef = createRef();

  componentDidMount() {
    this.slideshowTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.state.interval);
  }

  componentWillUnmount() {
    window.clearInterval(this.slideshowTimer);
  }

  slideWidth = () => {
    return this.slideRef.current.clientWidth;
  };

  nextSlide = () => {
    const { slideText, currentSlideIndex } = this.state;
    if (currentSlideIndex === slideText.length - 1) {
      this.setState({
        translateValue: 0,
        currentSlideIndex: 0,
      });
      return;
    }
    this.setState(state => ({
      translateValue: state.translateValue - this.slideWidth(),
      currentSlideIndex: state.currentSlideIndex + 1,
    }));
  };

  prevSlide = () => {
    const { currentSlideIndex } = this.state;
    if (currentSlideIndex === 0) return;
    this.setState(state => ({
      translateValue: state.translateValue + this.slideWidth(),
      currentSlideIndex: state.currentSlideIndex - 1,
    }));
  };

  render() {
    return (
      <div css={sliderStyles}>
        <div
          css={slideWrapperStyles}
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
          }}
        >
          <SlidesList slides={this.state.slideText} slideRef={this.slideRef} />
        </div>
        <IndicatorsList
          current={this.state.currentSlideIndex}
          indicatorsCount={this.state.slideText.length}
        />
        <Line />
        <Counter
          current={this.state.currentSlideIndex + 1}
          total={this.state.slideText.length}
        />
        <SliderButton
          className="top-arrow"
          text="Next"
          imgSrc="/static/nxt.png"
          onClick={this.nextSlide}
        />
        <SliderButton
          className="bottom-arrow"
          text="Prev"
          imgSrc="/static/pvs.png"
          onClick={this.prevSlide}
        />
      </div>
    );
  }
}

export default Slider;
