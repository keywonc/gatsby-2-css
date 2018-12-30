import Typography from "typography";
import wikipediaTheme from "typography-theme-wikipedia";

const typography = new Typography(wikipediaTheme);

// Next line doesn't seem to change anything. Why?
wikipediaTheme.baseFontSize = "58px";

export default typography;
