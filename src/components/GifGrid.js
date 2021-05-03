import React from 'react'

export const GifGrid = ({category}) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=N4Bf46QstVAWfFAO7X19XK9mLOaB7WDI&limit=10&q=Matrix`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}
