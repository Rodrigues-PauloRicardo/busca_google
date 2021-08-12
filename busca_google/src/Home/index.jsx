import React, { useState} from 'react';

import { useSelector } from 'react-redux';

import Slider from "react-slick";


import TextField, {Input} from '@material/react-text-field';

import MaterialIcon from '@material/react-material-icon';

import logo from '../assets/logo1.png';

import restaurante from '../assets/bb.png';

import { Card, RestauranteCard, Modal, Map} from '../assets/components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';
import { Restaurant } from '../assets/components/RestauranteCard/styles';


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);  
    const {restaurants} = useSelector((state) => state.restaurants);


    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      function handleKeyPress(e){
          if (e.key === 'Enter'){
              setQuery(inputValue);
          }
      }

return (
       <Wrapper>
           <Container>
    <Search>
        <Logo src={logo} width= '80%' alt="logo do restaurante" />
        <TextField
          label='pesquisar'
          outlined
         trailingIcon={<MaterialIcon role="button" icon="search"/>}>
        <Input value={inputValue} onkeyPress={handleKeyPress}
         onChange={(e) => setInputValue(e.target.value)} />
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
    {restaurants.map((restaurant) => (
    <RestauranteCard restaurant={restaurant} />
))}
</Container>
<Map query={query}/>
{/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />*/}
</Wrapper>
);
}

       
export default Home;
