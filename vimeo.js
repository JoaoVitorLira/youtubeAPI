import axios from 'axios';

// const API_KEY = 'ac8ac8304db1b8b11d0dadcad57a911c';

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};