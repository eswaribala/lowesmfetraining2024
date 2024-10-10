import { CatalogService } from "./catalog.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Catalog } from "./catalog.schema";

@Resolver
export class CatalogResolver{
  constructor(private catalogService:CatalogService) {
  }
  @Query(() => [Catalog])
  async catalogs() {
    return this.catalogService.findAll();
  }

  @Mutation(() => Catalog)
  async createAuthor(
    @Args('catalogId') catalogId: bigint,
    @Args('catalogName') catalogName: string,
  ) {
    return this.catalogService.create(catalogId,catalogName);
  }


}