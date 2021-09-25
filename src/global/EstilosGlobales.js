import {createGlobalStyle} from "styled-components";
import "../assets/fonts/fonts.css";

const EstilosGlobales = createGlobalStyle`
    *{
        margin:0px;
        padding: 0px;
    }

    html{
        font-size: clamp(8px, 2vw, 14px);
        font-family: "Open Sans Regular", sans-serif;
        color: #fff;

    } 

    body{
        background-color: #252422;
    }
`;

export default EstilosGlobales;
