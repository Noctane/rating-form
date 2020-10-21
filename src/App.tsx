import React from 'react';
import RoundedBox from './components/RoundedBox';
import { RatingForm } from './components/RatingForm';

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto md:pt-16">
        <div className="flex justify-center">
          <RoundedBox className="sm:w-full md:w-1/2 border-t-4 border-green-500">
            <div className="py-4 px-6">
              <h2 className="text-2xl text-center">Donnez votre avis !</h2>
              <RatingForm />
            </div>
          </RoundedBox>
        </div>
      </div>
    </div>
  );
}

export default App;
