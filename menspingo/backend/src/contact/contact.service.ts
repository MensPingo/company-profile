import { Injectable } from '@nestjs/common';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

type RequestMeta = {
  ip?: string;
  userAgent?: string;
};

@Injectable()
export class ContactService {
  async create(dto: CreateContactMessageDto, meta: RequestMeta): Promise<void> {
    const payload = {
      ...dto,
      meta,
      receivedAt: new Date().toISOString(),
    };

    // Intentionally minimal: wire this to email/CRM later.
    // eslint-disable-next-line no-console
    console.log('[contact] submission', payload);
  }
}
