export const initialState = {
  user: null,
  item: null,
  // set token to null after development
  //token: "BQD2ygmLjTECcFvIUimqLKH3ztbHgVrnvNMwYoswWo0bRTspfZn9wNbh4Ec6qW5C7f1rM9dMuTAfd5ilzKIX_YwTZxCbipV4NsuRw3MmhYgVE3jlbyLcbPrlxhIHiJC6WA_NoWdo9Xutag"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case 'SET_TOP_TRACKS_ALL_TIME':
      return {
        ...state,
        topTracks: action.topTracks
      }

    case 'SET_TOP_ARTISTS_ALL_TIME':
      return {
        ...state,
        topArtists: action.topArtists
      }

    default:
      return state;
  }
}

export default reducer;