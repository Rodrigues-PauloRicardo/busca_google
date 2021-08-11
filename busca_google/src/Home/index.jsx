import React, { useState} from 'react';
import Slider from "react-slick";


import TextField, {Input} from '@material/react-text-field';

import MaterialIcon from '@material/react-material-icon';

import logo from '../assets/logo1.png';

import restaurante from '../assets/bb.png';

import { Card } from '../assets/components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';


const Home = () => {
    const [inputValue, setInputValue] = useState('');    

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

return (
       <Wrapper>
           <Container>
    <Search>
        <Logo src={logo} width= '80%' alt="logo do restaurante" />
        <TextField
          label='pesquisar'
          outlined
         trailingIcon={<MaterialIcon role="button" icon="search"/>}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarouselTitle>Na sua Área</CarouselTitle>
        <Carousel {...settings}>            
            <Card photo = {restaurante} title="restaurante 1"/>
            <Card photo = {restaurante} title="restaurante 1"/> 
            <Card photo = {restaurante} title="restaurante 1"/>
            <Card photo = {restaurante} title="restaurante 1"/>
            <Card photo = {restaurante} title="restaurante 1"/>
        </Carousel>
    </Search>
</Container>
<Map/>
</Wrapper>
);
}

       
export default Home;
