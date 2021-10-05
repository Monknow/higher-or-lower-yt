import {createGlobalStyle} from "styled-components";
import "@assets/fonts/fonts.css";

export const EstilosGlobales = createGlobalStyle`
    *{
        margin:0px;
        padding: 0px;
    }

    html{
        font-size: clamp(8px, 2vw, 12px);
        font-family: "Open Sans Regular", sans-serif;
        color: #fff;

    } 

    body{
        background-color: #252422;
    }
`;
