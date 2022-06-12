import { Expose } from 'class-transformer';

export class GetTicketDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description: string;
}
