import IResource from './IResource';

export default interface IDeparture extends IResource {
    departures: string[],
    sunday: boolean,
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,

}