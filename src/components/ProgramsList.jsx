import React, { useState } from "react";
import Card from "./Card";
import '../css/ProgramsList.css'

function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const props = {'image':'https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_960_720.jpg', "title":"title", "text":"      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni cum libero iusto ipsa vero, illo ratione delectus placeat eum, nulla nam ab quam reprehenderit architecto quaerat nesciunt sunt. Qui accusantium, enim ex neque corporis debitis suscipit? Non ullam earum rerum iure ut, voluptate praesentium consequatur perspiciatis consequuntur, labore culpa, tempora voluptatem eligendi. Aspernatur, veritatis animi? Similique, fugiat minima. Commodi dignissimos reprehenderit tempora maxime illum ducimus iure, exercitationem temporibus impedit dicta sint voluptatum dolorum. Hic laudantium quis sunt! Voluptatem praesentium ipsum ullam veritatis, ad magni id obcaecati sint? Nemo consequuntur aspernatur in id, temporibus reprehenderit animi obcaecati officia dolorem ea totam."};
  return (
    
    <div className="cards">
    { array.map( (number) => <Card {...props}/>) }
    </div>
  );
}

export default Home;
