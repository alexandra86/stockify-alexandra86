import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
     
}

body,
html {
  overflow-x: hidden !important;
  background-color: var(--bg-gray-4);

  ::-webkit-scrollbar {
    width: 0.5rem;

  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--bg-blue-3);
    
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--bg-blue-3);
  }  
}

ul, ol, li{
    list-style: none;
}

a{
    text-decoration:none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}

html, body, #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }

:root{
    
    //Fontes:
    --family-1: "Roboto", sans-serif;
    --family-2: "Brygada 1918", sans-serif;
    
    
    //Escala de cinzas:
    --bg-gray-1: #2c3e50;
    --bg-gray-2: #aab7b8;
    --bg-gray-3: #d6dbdf;
    --bg-gray-4: #f4f4f4;
    --bg-gray-5: #F2F3F5;

    //Escala de azuis:
    --bg-blue-1:#0D3C72;
    --bg-blue-2:#154A8A;
    --bg-blue-3:#1F3A93;
    --bg-blue-4:#3A85AC;
    --bg-blue-5:#4AA0C8;
    --bg-blue-6:#5DADE2;
    
    
    //Outras Cores:
    --bg-white: #FFFFFF;
    --bg-yellow:#FFC107;
    --bg-green: #28A745;
    --bg-ligth-green:#bccf9d;
    --bg-red: #C82333; 
    --bg-purple: #191970;
    --bg-ligth-purple:#8698D9;
    --bg-black:#000000;
   
    //Incolor:
    --bg-none:none;
}
`;
