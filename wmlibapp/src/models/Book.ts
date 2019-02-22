import LibraryItem from './LibraryItem';

abstract class Book extends LibraryItem {

    private authors: string;
    private publisher: string;
    private totalPages: number;


    protected constructor() {
        super('Book')
    }

    public getAuthors(): string {
        return this.authors;
    }

    public setAuthors(authors: string): void {
        this.authors = authors;
    }


    public getPublisher(): string {
        return this.publisher;
    }

    public setPublisher(publisher: string): void {
        this.publisher = publisher;
    }

    public getTotalPages(): number {
        return this.totalPages;
    }

    public setTotalPages(totalPages: number): void {
        this.totalPages = totalPages;
    }


}

export default Book