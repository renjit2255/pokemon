const getPokemonImage = data => {
  const image = data
    && data.sprites
    && data.sprites.other
    && data.sprites.other['official-artwork']
    && data.sprites.other['official-artwork'].front_default
  return image || null
}

// eslint-disable-next-line import/prefer-default-export
export { getPokemonImage }
