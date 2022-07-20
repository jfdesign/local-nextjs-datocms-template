
export default function ContactForm() {
    
  return(
    <>
      <h2>Netlify Example</h2>
      
      <form name="contact" method="post" netlify-honeypot="bot-field" action="/contact-us/thanks" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">Name</label><br />
          <input type="text" id="name" name="name" /> 
        </p>

        <p>
          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" name="email" /> 
        </p>

        <p>
          <label htmlFor="messsage">Message</label><br />
          <textarea id="message" name="message"></textarea> 
        </p>


        <p>
          <button type="submit">Send</button>
        </p>
        

      </form>

      <style jsx global>{`
        .hidden { 
          display: none;
        }

      `}</style>
    </>

    
  )
}


