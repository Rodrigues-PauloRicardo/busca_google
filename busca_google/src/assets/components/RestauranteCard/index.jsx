import React from 'react';
import ReactStars from "react-rating-stars-component";






import { Restaurant, RestauranteInfo, Title, Address, RestaurantPhoto } from './styles';

const RestauranteCard = ({restaurant}) => (
<Restaurant>
    <RestauranteInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} active-Color="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>        
    </RestauranteInfo>
    <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant} alt="Foto do Restaurante"/>
</Restaurant>
);
export default RestauranteCard;


