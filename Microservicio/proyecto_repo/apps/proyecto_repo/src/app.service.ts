import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { mock } from 'node:test';                           

@Injectable()
export class AppService {

  constructor(  @Inject('danservice')private clientMicro:ClientProxy){}

  getHello(): string {
    return 'Proyecto Monorepo!';
  }
  newUser(user:any){
    this.clientMicro.emit('new_micro', user)
    return 'Retorno exitoso Dan'
  }
}
