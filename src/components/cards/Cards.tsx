import React, { useState, useEffect } from "react";
import Styles from "./style"

// CSS-in-JS
interface CharacterProps {
  map(arg0: ({ id, image, name, gender }: { id: number; image: string; name: string; gender: string; }) => JSX.Element): React.ReactNode;
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState<CharacterProps>();
  const { flex, cardSize, imageSize,padding, font,switchColor } = Styles();

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <h2>Algunos personajes de la serie</h2>
      <section className={`${flex}`}>
     
        {character && character.map(({ id, image, name, gender }) => {
          return (
            
            <article key={id} className={`${cardSize} ${switchColor(name)}`}>
            
              <img src={image} alt={name} className={`${imageSize}`} />
              <div className={`${padding}`}>
                <h3 className={`${font}`}>{name}</h3>
                <h3 className={`${font}`}>{gender}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Character;
