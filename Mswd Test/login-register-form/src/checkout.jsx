export default function Checkout(props)
{
    return(
        <div style={{display:"flex"}}>
            <p style={{textAlign:"left"}}>
                checkout
            </p>
            <div border="20 10 grey" style={{borderRadius:"5px", display:"flex", textAlign:"left", alignItems:"center",flexDirection:"column"}}>
                
                <input required type="name" name="Fn" id="fn" placeholder="firstname*"></input>
                
                <input required type="name" name="ln" id="ln" placeholder="Lastname*"></input>
                
                <input required type="number" name="phno" id="phno" placeholder="phone number*"></input>
                
                <input required type="text" name="addline1" id="addline1" placeholder="Addressline1*"></input>
            
                <input type="text" name="addline2" id="addline2" placeholder="Addressline2*"></input>
                
                <input required type="text" name="city" id="city" placeholder="City*"></input>

                <input required type="text" name="zip" id="zip" placeholder="Zip/postal*"></input>
                
                <input requied type="text" name="state" id="state" placeholder="State*"></input>

                <input requirede type="text" name="Country" id="country" placeholder="Country*"></input>

                <button className="link-btn" style={{color:"#7439db"}} onClick={()=>props.onFormSwitch('pay')}>Payment</button>
                

            </div>
        </div>
    );
}