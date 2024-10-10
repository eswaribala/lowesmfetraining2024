
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "./product.service";
import { Product } from "./product.schema";
import { ProductType } from "./product.type";
import { Int32 } from "typeorm";


@Resolver()
export class ProductResolver{
  constructor(private productService:ProductService) {
  }
  @Query(() => [ProductType])
  async products() {
    return this.productService.findAll();
  }

  @Mutation(() => ProductType)
  async createProduct(
    @Args('productId') productId: number,
    @Args('productName') productName: string,
    @Args('cost') cost: number,
  ) {
    return this.productService.create(productId,productName,cost);
  }


}