import React from 'react';

export const About = () => {
  return (
    <div className="bg-white">
      <section className="p-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-gray-800 pb-6 text-3xl font-bold">Acerca de:</h2>
          
          <img 
            src="/src/assets/images/cc.png" 
            alt="JF" 
            className="rounded-3xl mx-auto mb-6 w-60 h-auto object-cover"
          />
          
          <p className="text-gray-700 text-lg">
            Soy Cristian Calix, pasante de la carrera de Ingeniería en Ciencias de la Computación.
            Actualmente estoy cursando el 4 año de la carrera, ya próximo a hacer mi pasantía de práctica.
            A lo largo de la carrera se nos ha enseñado muchas ramas de esta misma, pero a mí lo que más me ha
            llamado la atención es lo relacionado a sistemas operativos y la administración de sistemas.
          </p>
        </div>
      </section>
    </div>
  );
};
