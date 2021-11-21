import { Injectable } from '@nestjs/common';
import { NewBudgetInput } from './dto/new-budget.input';
import { BudgetsArgs } from './dto/budgets.args';
import { Budget } from './models/budget.model';

@Injectable()
export class BudgetsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewBudgetInput): Promise<Budget> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Budget> {
    return {} as any;
  }

  async findAll(BudgetsArgs: BudgetsArgs): Promise<Budget[]> {
    return [] as Budget[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}