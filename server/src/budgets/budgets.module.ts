import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { BudgetsResolver } from "./budgets.resolver";
import { BudgetsService } from "./budgets.service";

@Module({
  providers: [BudgetsResolver, BudgetsService, DateScalar],
})
export class BudgetsModule {}
