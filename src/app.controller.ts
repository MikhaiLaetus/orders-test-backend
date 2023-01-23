import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { RetailService } from './retail_api/retail.service'
import { Order, RetailPagination } from './retail_api/types'

@Controller('/graphql')
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly retailService: RetailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  // @Get('/orders')
  // getOrders(): Promise<[Order[], RetailPagination]> {
  //   return this.retailService.orders()
  // }
}
