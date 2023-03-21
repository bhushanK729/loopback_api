import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';

@model()
export class Sale extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  product_id: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  total_price: number;

  @property({
    type: 'date',
    required: true,
  })
  sale_date: string;

  @belongsTo(() => Product)
  productId: number;

  constructor(data?: Partial<Sale>) {
    super(data);
  }
}

export interface SaleRelations {
  // describe navigational properties here
}

export type SaleWithRelations = Sale & SaleRelations;
