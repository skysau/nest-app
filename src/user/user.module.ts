import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { userService } from "./user.service";

@Module({
  providers :[userService],
  controllers:[userController],
  imports: []
})
export class userModule{}