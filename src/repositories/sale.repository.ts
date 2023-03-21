import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {SaleDbDataSource} from '../datasources';
import {Sale, SaleRelations, Product} from '../models';
import {ProductRepository} from './product.repository';

export class SaleRepository extends DefaultCrudRepository<
  Sale,
  typeof Sale.prototype.id,
  SaleRelations
> {

  public readonly product: BelongsToAccessor<Product, typeof Sale.prototype.id>;

  constructor(
    @inject('datasources.saleDB') dataSource: SaleDbDataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(Sale, dataSource);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
