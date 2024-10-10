import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { join } from 'path';
import * as process from "process";
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommercedb'),
    GraphQLModule.forRoot({
      driver: ApolloDriver,  // Specify ApolloDriver here
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    })
  ],
  controllers: [],
  providers: [AppService,AppResolver],
})
export class AppModule {}
