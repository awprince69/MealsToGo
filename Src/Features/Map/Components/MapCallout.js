import React from "react";
import { CompactRestaurantInfo } from "../../../Components/Restaurant/CompactRestaurant";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
