import React from 'react';
import ReactStars from "react-rating-stars-component";

import Restaurante from '../../components/teste.png';



import { Restaurant, RestauranteInfo, Title, Address, RestaurantPhoto } from './styles';

const RestauranteCard = () => (
<Restaurant>
    <RestauranteInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf value={4} edit={false} active-color="#e7711c" />
        <Address>Endereço</Address>        
    </RestauranteInfo>
    <RestaurantPhoto img src={Restaurante} alt="Foto do Restaurante"/>
</Restaurant>
);
export default RestauranteCard;


