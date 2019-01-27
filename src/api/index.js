import React from 'react';

export const spellsEnd = () => {
  fetch(`${process.env.BASE_URL}/spells`)
    .then(res => res.json())
    .then(res => res.results);
};
export const allClasses = () => {
  fetch(`${process.env.BASE_URL}/classes`)
    .then(res => res.json())
    .then(res => res.results);
};
export const magicClass = () => {
  spellsEnd();
};
