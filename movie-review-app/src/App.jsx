import React from 'react'
import './App.css'
import Header from './components/Header.jsx' // Header component
import Review from './components/Review.jsx' // Review component
 // ReviewForm component
import Footer from "./components/footer.jsx" // Footer component
import jokerImage from './assets/joker.jpg';
import interstellarImage from './assets/interstellar.jpg';

function App() {
  const reviews = [
    {
      name: "Joker",
      description: "A mentally troubled comedian who embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      image: jokerImage
    },
    {
      name: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: interstellarImage
    }
  ];

  return (
    <>
      <Header/>
      <div class="container">
        <div class="row justify-content-md-center">
    


          {reviews.map((review, index) => (
            <div class="card col-md-auto" key={index}>
              <Review 
                name={review.name} 
                description={review.description} 
                image={review.image} 
              />
            </div>
          ))}
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
