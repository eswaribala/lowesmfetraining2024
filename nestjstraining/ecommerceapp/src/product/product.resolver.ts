
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "./product.service";
import { Product } from "./product.schema";


@Resolver
export class ProductResolver{
  constructor(private productService:ProductService) {
  }
  @Query(() => [Product])
  async catalogs() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createAuthor(
    @Args('productId') productId: bigint,
    @Args('productName') productName: string,
    @Args('cost') cost: bigint,
  ) {
    return this.productService.create(productId,productName,cost);
  }


}