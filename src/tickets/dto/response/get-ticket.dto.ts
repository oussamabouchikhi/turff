import { Expose } from 'class-transformer';

export class GetTicketDto {
  @Expose()
  title: string;

  @Expose()
  description: string;
}
