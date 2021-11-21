import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BudgetsModule } from "./budgets/budgets.module";

@Module({
  imports: [
    BudgetsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.gql",
    }),
  ],
})
export class AppModule {}
