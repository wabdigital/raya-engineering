export type PageType =
  | 'home'
  | 'about'
  | 'products-iblox'
  | 'products-facade'
  | 'why-clc'
  | 'technical'
  | 'applications'
  | 'submittal'
  | 'contact';

export interface Project {
  id: string;
  name: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Industrial' | 'High-Rise';
  productsUsed: string[];
  description: string;
  imageUrl: string;
}

export interface BlockSize {
  width: number;
  height: number;
  length: number;
  weightPerBlock: number;
  weightPerSqm: number;
}
