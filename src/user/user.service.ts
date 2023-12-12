import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{
    getuser(){
        return "user form UserList"
       }
 
       addUser(body:any){
        return `user Added ${body.ram}`
       }

      findOne(id: string) {
        return `This API returns a #${id} user`;
      }

      update(id: string, body: any) {
        return `This API updates a #${id} user`;
      }

      remove(id: string) {
        return `This API removes a #${id} user`;
      }
}