import { Args, Query, Resolver } from '@nestjs/graphql'
import { RetailService } from '../retail_api/retail.service'

@Resolver('Orders')
export class OrdersResolver {
  constructor(private retailService: RetailService) {}

  @Query()
  async order(@Args('number') id: string) {
    return await this.retailService.findOrder(id)
  }

  @Query() 
  async getOrders(@Args('page') page: number) {
    const res = await this.retailService.orders({ page });
    return {
      orders: res[0],
      pagination: res[1],
    };
  }
}
