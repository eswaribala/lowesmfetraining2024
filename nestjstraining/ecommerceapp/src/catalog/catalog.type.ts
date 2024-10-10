import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatalogType {
  @Field(() => ID)
  catalogId: number;

  @Field()
  catalogName: string;

}