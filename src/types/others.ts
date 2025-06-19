export interface MenuState {
  isMenuToggled: boolean;
}

interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

export interface SliderTestimonialsSettings {
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: {
    [key: number]: BreakpointSettings;
  };
}