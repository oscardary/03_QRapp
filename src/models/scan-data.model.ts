export class ScanData {
    info:string;
    type:string;

    constructor(typeFile:string){

        this.type = "No definido";
        this.info = typeFile;

        if( typeFile.startsWith("http") ){
            this.type = "http";
        }
    }
}