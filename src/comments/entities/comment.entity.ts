import { User } from 'src/users/entities/user.entity';
import { Ticket } from '../../tickets/entities/ticket.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.comments)
  ticket_id: Ticket;

  @ManyToOne(() => User, (user) => user.comments)
  user_id: User;

  @Column()
  text: string;
}
