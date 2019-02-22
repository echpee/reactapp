abstract class Reader {
  
    private  id : string;
    private name: string;
    private mobilenumber :string;
    private email:string;
  
      
    protected constructor(){ 

    }
 
	
	public  getId() :string {
		return this.id;
	}

	public  setId( id: string):void {
		this.id = id;
	}


	public  getName():string {
		return this.name;
	}

	public  setName(name:string) :void{
		this.name = name;
	}

	public  getMobileNumber() :string{
		return this.mobilenumber;
	}

    public  setMobileNumber(mobilenumber:string ):void {
		this.mobilenumber = mobilenumber;
	}

	public  getEmail() :string{
		return this.email;
	}

	public  setEmail(email:string):void {
		this.email = email;
	}
	
}
 
export default Reader