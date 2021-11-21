import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { NewBudgetInput } from "./dto/new-budget.input";
import { BudgetsArgs } from "./dto/budgets.args";
import { Budget } from "./models/budget.model";
import { BudgetsService } from "./budgets.service";

const pubSub = new PubSub();

@Resolver((of) => Budget)
export class BudgetsResolver {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Query((returns) => Budget)
  async budget(@Args("id") id: string): Promise<Budget> {
    const budget = await this.budgetsService.findOneById(id);
    if (!budget) {
      throw new NotFoundException(id);
    }
    return budget;
  }

  @Query((returns) => [Budget])
  budgets(@Args() budgetsArgs: BudgetsArgs): Promise<Budget[]> {
    return this.budgetsService.findAll(budgetsArgs);
  }

  @Mutation((returns) => Budget)
  async addBudget(@Args("newBudgetData") newBudgetData: NewBudgetInput): Promise<Budget> {
    const budget = await this.budgetsService.create(newBudgetData);
    pubSub.publish("budgetAdded", { budgetAdded: budget });
    return budget;
  }

  @Mutation((returns) => Boolean)
  async removeBudget(@Args("id") id: string) {
    return this.budgetsService.remove(id);
  }

  @Subscription((returns) => Budget)
  budgetAdded() {
    return pubSub.asyncIterator("budgetAdded");
  }
}
