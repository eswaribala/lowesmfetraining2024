import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { Catalog,CatalogSchema } from "./catalog.schema";
import { CatalogService } from "./catalog.service";
import { CatalogResolver } from "./catalog.resolver";


@Module({
  imports: [MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }])

  ],
  providers: [CatalogService, CatalogResolver],
})
export class CatalogModule {


}
