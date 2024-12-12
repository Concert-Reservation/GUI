import { Concert } from "./Concert";
import { User } from "./User";

export interface Ticket {

    id: number;
    user: User;
    concert: Concert;
    date: Date;
    nTickets: number;
    totalPrice: number;

}