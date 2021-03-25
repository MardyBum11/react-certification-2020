import styled from 'styled-components'

export const Head = styled.header`
background: #117a65;
color: white;

top: 0;
height: auto;
position: absolute;
margin: 0;
padding:0;   
@media (min-width: 600px){
      flex-direction: row ;
      display: block;
      width: 100%;
    }
`;

export const Input = styled.input`
    float:left;
    alignItems: "stretch",
    display: "flex",
    flex-wrap: wrap;
    border: none;
    background-color: #074b3d;
    display: flex;
    size: normal;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: .75em ;
    margin: 1em;  
    color: white;
    opacity: 0.5;
    @media (min-width: 600px){
      width: 15%;
      flex-direction: row ;
    }
    ::placeholder {
      color: white;
    `;

  
   
    

    

    
