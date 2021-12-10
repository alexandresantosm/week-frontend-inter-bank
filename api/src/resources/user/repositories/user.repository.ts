import { User } from 'entity';
import { getRepository } from 'typeorm';

export const UserRepository = getRepository(User);
