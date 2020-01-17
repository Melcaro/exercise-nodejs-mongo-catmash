import axios from 'axios';

export function fetchCatsList() {
  //await axios.get('/api/v1/cats');
  const catsList = [
    {
      id: Date.now(),
      image:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
      wonMatches: 0,
      lostMatches: 0,
    },
    {
      id: Date.now(),
      image:
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      wonMatches: 0,
      lostMatches: 0,
    },
    {
      id: Date.now(),
      image:
        'https://images.unsplash.com/photo-1556582305-528bffcf7af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      wonMatches: 0,
      lostMatches: 0,
    },
    {
      id: Date.now(),
      image:
        'https://images.unsplash.com/photo-1566458226966-5d1efe19e4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      wonMatches: 0,
      lostMatches: 0,
    },
  ];
  return catsList;
}
