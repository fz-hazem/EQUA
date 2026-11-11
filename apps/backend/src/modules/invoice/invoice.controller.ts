import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async createInvoice(@Body() body: { issuerWallet: string; amount: number }) {
    return this.invoiceService.createInvoice(body.issuerWallet, body.amount);
  }

  @Get('user/:wallet')
  async getUserInvoices(@Param('wallet') wallet: string) {
    return this.invoiceService.getUserInvoices(wallet);
  }
}
