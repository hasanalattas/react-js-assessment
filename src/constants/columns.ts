import { Column } from 'utils/types'

const columns: Column[] = [
  {
    id: 'applied',
    title: 'Applied',
    tasks: [
      {
        id: '1',
        name: 'Silvano Scally',
        location: 'New York',
        phone: '561 682 5290',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/1.jpg',
        status: 'new',
        isFollowed: false,
        rating: 4.0,
        priority: 'high'
      },
      {
        id: '2',
        name: 'Lamar Demet',
        location: 'Saint Augustine',
        phone: '282 645 1513',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
        status: 'new',
        isFollowed: false,
        rating: 5.0,
        priority: 'low'
      },
      {
        id: '3',
        name: 'Ramsey Jantzen',
        location: 'Rome',
        phone: '357 875 0394',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/76.jpg',
        status: 'rejected',
        isFollowed: false,
        rating: 5.0,
        priority: 'high'
      },
      {
        id: '4',
        name: 'Lorine Brailsford',
        location: 'Warsaw',
        phone: '282 645 1513',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/2.jpg',
        status: 'rejected',
        isFollowed: true,
        rating: 4.0,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'shortlisted',
    title: 'Shortlisted',
    tasks: [
      {
        id: '5',
        name: 'Lamar Demet',
        location: 'Saint Augustine',
        phone: '350 947 8496',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/70.jpg',
        status: 'new',
        isFollowed: false,
        rating: 5.0,
        priority: 'low'
      },
      {
        id: '6',
        name: 'Torey Courtes',
        location: 'Bogota',
        phone: '282 645 1513',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/60.jpg',
        status: 'new',
        isFollowed: false,
        rating: 3.0,
        priority: 'medium'
      },
      {
        id: '7',
        name: 'Pietra Mallinder',
        location: 'San Francisco',
        phone: '525 481 1324',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg',
        status: 'rejected',
        isFollowed: true,
        rating: 4.0,
        priority: 'medium'
      },
      {
        id: '8',
        name: 'Karilynn Instonssen',
        location: 'Stockholm',
        phone: '248 230 6575',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/55.jpg',
        status: 'rejected',
        isFollowed: false,
        rating: 5.0,
        priority: 'medium'
      }
    ]
  },
  {
    id: 'interview',
    title: 'Interview',
    tasks: [
      {
        id: '9',
        name: 'Davina Olkowicz',
        location: 'Dongpu',
        phone: '214 894 2712',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
        status: 'rejected',
        isFollowed: false,
        rating: 4.0,
        priority: 'low'
      },
      {
        id: '10',
        name: 'Ajay MacAllast',
        location: 'Tokyo',
        phone: '754 742 7248',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/57.jpg',
        status: 'new',
        isFollowed: false,
        rating: 5.0,
        priority: 'medium'
      },
      {
        id: '11',
        name: 'Blondy Leel',
        location: 'Berlin',
        phone: '526 481 134',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/56.jpg',
        status: 'rejected',
        isFollowed: false,
        rating: 4.0,
        priority: 'high'
      },
      {
        id: '12',
        name: 'Lorine Brailsford',
        location: 'Warsaw',
        phone: '282 645 1513',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/0.jpg',
        status: 'rejected',
        isFollowed: true,
        rating: 4.0,
        priority: 'medium'
      }
    ]
  }
]

export default columns
