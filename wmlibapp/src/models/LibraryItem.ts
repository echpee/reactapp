import Reader from './Reader';

abstract class LibraryItem {
  
    private  isbn : string;
    private title: string;
    private sector :string;
    private publicationDate:string;
    private borrowedOn :string;
    private borrowed:boolean=false;
    private reader:Reader;
    private itemType:string;
    
  
    protected constructor(itemType: string){ 
        this.itemType = itemType; 
    }
 
	public  getBorrowed():boolean {
		return this.borrowed;
	}

	public  setBorrowed( borrowed:boolean) :void{
		this.borrowed = borrowed;
	}

	public  getItemType() :string {
		return this.itemType;
	}

	public  setItemType( itemType: string):void {
		this.itemType = itemType;
	}


	public  getIsbn():string {
		return this.isbn;
	}

	public  setIsbn(isbn:string) :void{
		this.isbn = isbn;
	}

	public  getTitle() :string{
		return this.title;
	}

    public  setTitle(title:string ):void {
		this.title = title;
	}

	public  getSector() :string{
		return this.sector;
	}

	public  setSector(sector:string):void {
		this.sector = sector;
	}

	public  getPublicationDate():string {
		return this.publicationDate;
	}

	public  setPublicationDate(publicationDate:string) :void {
		this.publicationDate = publicationDate;
	}

	public  getBorrowedOn() :string{
		return this.borrowedOn;
	}

	public  setBorrowedOn(borrowedOn: string) :void{
		this.borrowedOn = borrowedOn;
	}


	public  getReader() : Reader{
		return this.reader;
	}

	public  setReader(reader:Reader) :void {
		this.reader = reader;
	}
	
}
 
export default LibraryItem