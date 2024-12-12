import { User } from "./User";
import { Ticket } from "./Ticket";

export interface Customer extends User {


    ticket: Ticket[];
}