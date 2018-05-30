//======================================================================================================================
// Style Theme
//======================================================================================================================
// Example of Usage
// color: ${props => props.theme.color_primary};
//======================================================================================================================

const theme = {
    // Colors
    color_primary: '#000000',
    color_girl: '#d5617f', //d5617f e59db0 //${props => props.theme.color_girl};
    color_boy: '#4a7f98', //4a7f98 74a4bb //${props => props.theme.color_boy};
    color_accent: '#138c85', //${props => props.theme.color_accent};
    color_purple: '#8887ca', //http://www.0to255.com/9493CF original: 9493CF ${props => props.theme.color_purple};

    // Fonts
    font_main: "'Muli', sans-serif",
    font_nixie: "'Nixie One', cursive", // 400 // ${props => props.theme.font_nixie};

    // Text Styles
    text_lineheight: '1.4rem'
};

export default theme;