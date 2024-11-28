using {mydb} from '../db/schema';

 service Nautical{
    entity Voyage as projection on mydb.Voyage;
 }
 
 