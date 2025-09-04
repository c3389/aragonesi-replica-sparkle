import { Room } from './types';

export const HERO_IMAGES: string[] = [
  'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920-servizi2.jpg',
  'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920-relais5.jpg',
  'https://cdn.blastness.biz/media/1407/gallery/thumbs/full/1024-relais5.jpg'
];

export const ROOMS_DATA: Room[] = [
  { id: 1, image: 'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920_camera-classic-giardino.jpg', title: 'Camera Classic vista Giardino' },
  { id: 2, image: 'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920_superior-vista-piazza.jpg', title: 'Camera Superior vista Piazza' },
  { id: 3, image: 'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920_deluxe-con-jacuzzi.jpg', title: 'Camera Deluxe con Jacuzzi' },
  { id: 4, image: 'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920_junior-suite.jpg', title: 'Junior Suite vista Piazza' },
  { id: 5, image: 'https://cdn.blastness.biz/media/1407/top/thumbs/full/1920_suite2.jpg', title: 'Suite con Terrazzino' },
];

export const GARDEN_IMAGES: {id: number, src: string}[] = [
    { id: 1, src: 'https://cdn.blastness.biz/media/1407/gallery/thumbs/full/768_garden-space1.jpg'},
    { id: 2, src: 'https://cdn.blastness.biz/media/1407/gallery/thumbs/full/768_garden-space4.jpg'},
    { id: 3, src: 'https://cdn.blastness.biz/media/1407/gallery/thumbs/full/1024_garden-space2.jpg'},
];