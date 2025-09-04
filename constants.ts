import { Room } from './types';
import { 
  hero1, hero2, hero3,
  roomClassic, roomSuperior, roomDeluxe, roomJuniorSuite, roomSuite,
  garden1, garden2, garden3
} from './src/assets/index';

// Optimized hero images with preloading hints
export const HERO_IMAGES: string[] = [hero1, hero2, hero3];

// Optimized rooms data with better structure
export const ROOMS_DATA: Room[] = [
  { id: 1, image: roomClassic, title: 'Camera Classic vista Giardino' },
  { id: 2, image: roomSuperior, title: 'Camera Superior vista Piazza' },
  { id: 3, image: roomDeluxe, title: 'Camera Deluxe con Jacuzzi' },
  { id: 4, image: roomJuniorSuite, title: 'Junior Suite vista Piazza' },
  { id: 5, image: roomSuite, title: 'Suite con Terrazzino' },
];

// Optimized garden images with consistent structure
export const GARDEN_IMAGES: {id: number, src: string}[] = [
  { id: 1, src: garden1 },
  { id: 2, src: garden2 },
  { id: 3, src: garden3 },
];