export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [PingControllerService, UserControllerService];
