import { Users } from './users';
import { Input } from '@angular/core';

export class Repository {
  constructor(
    public id: number,
    public name: string,
    public owner: Users,
    public description: string,
  ) {}
}
