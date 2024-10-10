import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { join } from 'path';
import * as process from "process";
import { CatalogModule } from "../catalog/catalog.module";
import { ProductModule } from "../product/product.module";
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommercedb'),
    GraphQLModule.forRoot({
      driver: ApolloDriver,  // Specify ApolloDriver here
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    }),
   CatalogModule,
  ProductModule],
  controllers: [],
  providers: [AppService,AppResolver],
})
export class AppModule {}
