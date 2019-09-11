const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://pbs.twimg.com/media/BZhx1j0IEAAfLH5.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl:
        'https://russiafashionweeklive.com/wp-content/uploads/2019/02/Mens-Fashion-Clothing.jpeg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
    {
      title: 'hats',
      imageUrl:
        'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/10/p-1-this-company-makes-hats-for-hurricane-relief.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
