import { CatalogService } from "./catalog.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Catalog } from "./catalog.schema";
import { CatalogType } from "./catalog.type";


@Resolver()
export class CatalogResolver{
  constructor(private catalogService:CatalogService) {
  }
  @Query(() => [CatalogType])
  async catalogs() {
    return this.catalogService.findAll();
  }

  @Mutation(() => CatalogType)
  async createCatalog(
    @Args('catalogId') catalogId: number,
    @Args('catalogName') catalogName: string,
  ) {
    return this.catalogService.create(catalogId,catalogName);
  }


}