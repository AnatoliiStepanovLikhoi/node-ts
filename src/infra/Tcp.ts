import { IService } from "types/servers";
import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { controllers } from "../app/domain/index";

export class Tcp implements IService {
  private static instance: Tcp;

  private routePrefix = "/api";
  private server = express();

  constructor() {
    if (!Tcp.instance) {
      Tcp.instance = this;
    }

    return Tcp.instance;
  }

  async init() {
    const { server, routePrefix } = this;
    useExpressServer(server, {
      routePrefix,
      cors: true,
      defaultErrorHandler: true,
      controllers,
    });

    return new Promise((resolve): any => {
      server.listen(4001, () => {
        console.log("Tcp service started on port 4001");
        return resolve(true);
      });
    });

    console.log("TCP service started");
  }
}
