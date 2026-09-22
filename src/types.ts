export type Department = 'La Paz' | 'Cochabamba' | 'Tarija' | 'Santa Cruz' | 'Chuquisaca' | 'Oruro' | 'Potosí';

export type CategoryId =
  | 'todos'
  | 'arte-diseno'
  | 'alimentos'
  | 'artesanias'
  | 'cosmetica'
  | 'joyeria'
  | 'textiles'
  | 'mascotas'
  | 'reposteria'
  | 'accesorios';

export interface Product {
  id: string;
  name: string;
  storeName: string;
  price: number; // in Bs.
  category: CategoryId;
  categoryLabel: string;
  department: Department;
  image: string;
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  isExclusive?: boolean;
  description: string;
  materials?: string;
  artisanStory?: string;
  stock: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  userName: string;
  department: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
}

export interface ArtisanStore {
  id: string;
  name: string;
  owner: string;
  department: Department;
  category: string;
  bio: string;
  avatar: string;
  verified: boolean;
  productsCount: number;
  rating: number;
  whatsapp: string;
}

export type ActiveScreen = 'inicio' | 'nosotros' | 'tienda' | 'categorias' | 'vender';
