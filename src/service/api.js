import axios from "axios";

const getImages = async (term) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID OD_UU_iAoMkEdLu0p32fJ2Lzgw1bLFEDLOFubltL950',
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getImages; 