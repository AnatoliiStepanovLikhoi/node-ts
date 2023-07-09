import { JsonController, Get, Post, Body } from "routing-controllers";
import { App } from "infra/app";

interface IPerson {
  id: number;
  name: string;
}

@JsonController("/person")
export default class Person {
  public app = new App();

  @Get("/getHello")
  async getHello() {
    return "Hello!";
  }

  @Post()
  async setPerson(@Body() body: IPerson) {
    return body;
  }
}
