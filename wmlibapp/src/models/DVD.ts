import LibraryItem from './LibraryItem';

abstract class DVD extends LibraryItem {

    private availablelanguages: string;
    private availablesubtitles: string;
    private producer: string;
    private actors: string;

    protected constructor() {
        super('DVD')
    }

    public getAvailableLanguages(): string {
        return this.availablelanguages;
    }

    public setAvailableLanguages(availablelanguages: string): void {
        this.availablelanguages = availablelanguages;
    }


    public getAvailableSubtitles(): string {
        return this.availablesubtitles;
    }

    public setAvailableSubtitles(availablesubtitles: string): void {
        this.availablesubtitles = availablesubtitles;
    }

    public getProducer(): string {
        return this.producer;
    }

    public setAroducer(producer: string): void {
        this.producer = this.producer;
    }


    public getActors(): string {
        return this.actors;
    }

    public setActorss(actors: string): void {
        this.actors = actors;
    }

  


}

export default DVD