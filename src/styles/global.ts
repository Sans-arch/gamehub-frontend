import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    body {
        background-color: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font: 400 1rem "DM Sans", sans-serif;
    }
`;
