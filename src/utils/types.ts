 export type Quote = {
    [x: string]: string;
    id: string 
    text: string 
    author:string 
}


export type Proverbs={
    id: string |undefined
    text: string | undefined
    origin:string |undefined
}

 export type Dialogue= {
    id: number |undefined
    text: string | undefined
    series: string | undefined
    character: string |undefined
}
