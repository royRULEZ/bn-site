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
    color_lightgrey: '#888',

    // Fonts
    font_main: "'Muli', sans-serif",
    font_nixie: "'Nixie One', cursive", // 400 // ${props => props.theme.font_nixie};
    font_bitter: "'Bitter', serif", // 700 // ${props => props.theme.font_nixie};

    // Text Styles
    text_lineheight: '1.4rem',

    // Media Queries
    phone: '414px',
    big_phone: '600px',
    tablet: '768px',
    big_tablet: '1024px',
    big: '1280px'
};

export default theme;

/* 

General Information:
Large Image: 1100 x 500
Medium Image: 385 x 195
Profiles: 600 x 350
Infographic (Pinterest): 600 x 900

*/