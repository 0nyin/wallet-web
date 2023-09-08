import {useRef} from "react"
import emailjs from '@emailjs/browser';
import "./getin.css"


export default function GetInTouch() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nsfyk6k', 'template_n63453f', form.current, 'XS3vO9PXYO4xV5fb9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    

  return (
    <>    
          
      <div class="getin-container">
          
        <div class="getin">
         <div className="form-box">
          <form ref={form} onSubmit={sendEmail}>
            <h4 className="form-title">Get in touch with us</h4>
              <div className="form-fields">
                <div className="form-group">
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
              <div className="form-group">
                  <input type="email" name="user_email" placeholder="Your Email"  required/>
              </div>
                        
                <label> 
                <textarea 
                  name="message" 
                  rows="6"
                  className="form-group" 
                  placeholder="Your Message" 
                  required
                />
                </label>


              </div>
              <input type="submit" value="Send" className="submit-button" />
            </form>
          </div>  
        </div> 
        

      </div>
               
    </>
       
  )
}
