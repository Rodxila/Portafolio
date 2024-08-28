import React from 'react';

function Project() {
  return (
    <section className="App-project">
        <div className='fill'>
        <h2 className='h2'>Sobre mi</h2>
        <p className='p'>Desde 2020 hasta 2024 estudié la carrera de Comercio de la UCM, pero en 2022 me interesé por la tecnología y compaginé la carrera con un grado superior en Desarrollo de Aplicaciones Web</p>
        </div>
      <h2 className='h2'>Mi Trabajo</h2>
      <p className='p'>A continuación, puedes ver algunos de mis proyectos recientes:</p>
      <a className='projecto'
        href="https://motodxila.webcindario.com/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
      <a className='projecto'
        href="https://rodxilamusic.webcindario.com/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>
      <div className='CV'>
      <a className='linki' href="www.linkedin.com/in/rodrigo-martínez-ballesteros-a414b221a">Este es mi linkedin</a>
      </div>
    </section>
  );
}

export default Project;
