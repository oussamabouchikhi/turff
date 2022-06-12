import { Ticket } from './entities/ticket.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/request/create-ticket.dto';
import { UpdateTicketDto } from './dto/request/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketsRepository.create(createTicketDto);
    return this.ticketsRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketsRepository.find();
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketsRepository.findOne({
      where: {
        id: +id,
      },
    });
    return ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketsRepository.findOne({
      where: {
        id: +id,
      },
    });
    console.log({ ticket });
    if (!ticket) {
      throw new NotFoundException('ticket not found');
    }
    Object.assign(ticket, updateTicketDto);
    return this.ticketsRepository.save(ticket);
  }

  async remove(id: string): Promise<void> {
    await this.ticketsRepository.delete(id);
  }
}
