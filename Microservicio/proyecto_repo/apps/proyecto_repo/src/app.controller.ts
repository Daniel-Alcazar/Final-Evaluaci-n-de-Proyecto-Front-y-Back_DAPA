import { Controller, Get, Inject, Post, Patch, Delete, Body ,Render, Redirect, Res, Req} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UptadeUserDto, UserDto } from './dto/user.dto';
import { IdDto } from './dto/id.dto';
/**

 * ESTA ES LA APP PRINCIPAL
 */
@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject('danservice') private userCrud: ClientProxy) {}

  @Get('usuarios')
  async getUsers() {
    const result = await this.userCrud.send('usuarios', {}).toPromise(); // Cambia 'obtener_todos' a 'usuarios'
    return result;
  }

  @Get('/index')
  @Render('index') 
  async hello() {
    const users = await this.getUsers();
    return { 
      users: users 
    };
  }

  @Get('/login')
  @Render('login') 
  async login() {
    return { message: 'Por favor, inicia sesión' };
  }

  @Post('login')
  async loginsession(@Body() body: { username: string; password: string }, @Res() res) {
    const simulatedUsers = [
      { username: 'daniel', password: 'daniel@unach.mx' },
      { username: 'daniel', password: 'daniel.prez2@unach.mx' },
    ];
    const user = simulatedUsers.find(user => user.username === body.username && user.password === body.password);
    if (user) {
      return res.redirect('/index');
    } else {
      return res.redirect('/login');
    }
  }

  @Post()
  async getUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    var result = this.userCrud.send('obtener', id);
    return result;
  }

  @Post('crear')
  async createUser(@Body() UserDto: UserDto) {

    var result = this.userCrud.send('crear', UserDto);
    return result;
  }

  @Patch('actualizar')
  async updateUser(@Body() updateUserDto: UptadeUserDto) {
    const result = await this.userCrud.send('actualizar', updateUserDto);
    return result;
  }

  @Delete('eliminar')
  async deleteUser(@Body() idDto: IdDto) {
    const { id } = idDto;
    var result = this.userCrud.send('eliminar', id);
    return result;
  }
}