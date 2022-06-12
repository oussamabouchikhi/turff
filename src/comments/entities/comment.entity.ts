import { Ticket } from 'src/tickets/entities/ticket.entity';
// import { User } from 'src/users/entities/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.comments)
  ticket_id: Ticket;

  //   @ManyToOne(() => User, (user) => user.comments)
  //   user_id: User;
  @Column()
  user_id: number;

  @Column()
  text: string;
}
