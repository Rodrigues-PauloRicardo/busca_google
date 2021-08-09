import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Container =  styled.aside`
 background-color:  ${(props) => props.theme.colors.background};
 width: 360px;
 height: 100vh;
 overflow-y: scroll;
 `;
 
export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding:10px;
`;

export const Logo = styled.img`
margin-left: 10%;
`;

export const Map = styled.div`
background-color: red;
width: 100vw;
`;