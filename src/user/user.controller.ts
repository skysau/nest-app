import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userService } from "./user.service";

@Controller("/user")
export class userController{
  constructor(private userService:userService){}

   @Get("/getUser")
   getuser(){
    //return "user form UserList"
    return this.userService.getuser();
   }

   @Post("/save")
   addUser(@Body() body:any){
    //return `user Added ${body.ram}`;
    return this.userService.addUser(body);
   }

   @Get(':id')
  findOne(@Param('id') id: string) {
    // `This API returns a #${id} user`;
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    //return `This API updates a #${id} user`;
    return this.userService.update(id,body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return `This API removes a #${id} user`;
    return this.userService.remove(id);
  }
}