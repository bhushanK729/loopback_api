import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Product, Sale
} from '../models';
import {SaleRepository} from '../repositories';

export class SaleProductController {
  constructor(
    @repository(SaleRepository)
    public saleRepository: SaleRepository,
  ) { }

  //inner Join on two tables
  @get('/sales/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to Sale',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Product),
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.number('id') id: typeof Sale.prototype.id,
  ): Promise<Product> {
    return this.saleRepository.product(id);
  }
}
