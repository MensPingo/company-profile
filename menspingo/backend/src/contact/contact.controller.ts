import { Body, Controller, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { ContactService } from './contact.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(
    @Body() body: CreateContactMessageDto,
    @Req() req: Request,
  ): Promise<{ ok: true }> {
    await this.contactService.create(body, {
      ip: req.ip,
      userAgent: req.get('user-agent') ?? undefined,
    });
    return { ok: true };
  }
}
