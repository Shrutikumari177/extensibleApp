namespace mydb;



entity Voyage {
    key voyageCode      : Integer;         
    voyageName          : String(100); 
    voyageType          : String(50);  
    vesselType          : String(50);  
    currency            : String(3);    
    fromPort            : String(100);   
    toPort              : String(100);  
    distanceBetweenPort : Decimal(10,2); 
    cargoSize           : Decimal(10,2);
}
