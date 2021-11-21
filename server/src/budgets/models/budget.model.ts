import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "budget " })
export class Budget {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  amount: number;
}
