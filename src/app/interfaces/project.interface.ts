export interface Project{
    title:string,
    image:string
    link:{github:string,web:string},
    description:string,
    objectives:string[],
    images:string[],
    technology:{nom:string,image:string}[],
    anectodes:string,
    favorite:boolean
}