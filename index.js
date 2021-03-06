
const backgroundColor = '#191B1F'
const foregroundColor = '#fcfefb'
const cursorColor = '#0066ff'
const borderColor = '#404449'

const colors = {
  black       : backgroundColor,
  red         : '#D3422E', // red
  green       : '#4BAE16', // green
  yellow      : '#F5BB12', // yellow
  blue        : '#0066ff', // blue
  magenta     : '#de347a', // pink
  cyan        : '#8cfff8', // cyan
  white       : '#BFD7DB', // light gray
  lightBlack  : '#97a0a0', // medium gray
  lightRed    : '#f25a55', // red
  lightGreen  : '#a2e185', // green
  lightYellow : '#FFC620', // yellow
  lightBlue   : '#00a0e2', // blue
  lightMagenta: '#fc6aca', // pink
  lightCyan   : '#7fd6fa', // cyan
  colorCubes  : '#fcfefb', // white
  grayscale   : foregroundColor
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        border-left-width: 2px;
        mix-blend-mode: screen;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        font-weight: 500;
        border-width: 0 0 0 1px;
        border-style: solid;
      }
      .tab_tab:first-of-type {
        border-left-width: 0;
      }
      .tab_tab.tab_active:first-of-type {
        border-left-width: 0;
      }
      .tab_tab:hover {
        color: rgba(157, 165, 180, 0.6);
        transition: none;
      }
      .tabs_title,
      .tab_tab.tab_active {
        font-weight: 500;
        color: #d7dae0;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active::before {
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: -1px;
        right: 0;
        height: inherit;
        border: 1px solid #181a1f;
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      }
      .tab_tab.tab_active:first-of-type::before {
        border-left-width: 0;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tab_icon {
        display: block;
        background: rgba(157, 165, 180, 0.6);
        -webkit-mask-image: url('${__dirname}/close.svg');
        mask-image: url('${__dirname}/close.svg');
        -webkit-mask-size: 7px;
        mask-size: 7px;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position-y: center;
        mask-position-y: center;
        -webkit-mask-position-x: 8px;
        mask-position-x: 8px;
        width: 26px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0);
        transition: transform .08s;
        opacity: 1;
        border-radius: 0;
        z-index: 2;
      }
      .tab_icon:hover {
        background: rgba(157, 165, 180, 0.6);
        opacity: .7;
      }
      .tab_tab.tab_active .tab_icon {
        background: #d7dae0;
      }
      .tab_tab.tab_active .tab_icon:hover {
        background: #d7dae0;
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
      }
      .tab_icon svg {
        display: none;
      }
      .tab_icon::after {
        display: none;
      }
    `
  })
}
