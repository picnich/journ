import React, { useState } from "react"
import { navigate } from "gatsby"
import Arrow from "../../images/submit-arrow.svg"

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

const Form = () => {
    const [ newsletterForm, setForm ] = useState({})
    const [ emailLength, setEmailLength ] = useState(newsletterForm.email ? newsletterForm.email.length : 0)

    React.useEffect(() => {
      // console.log(newsletterForm)
      setEmailLength(newsletterForm.email ? newsletterForm.email.length : 0)
    }, [newsletterForm])

    function handleChange(e) {
      setForm({
        ...newsletterForm, 
        [e.target.name]: e.target.value
      })
    }

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   console.log(newsletterForm)
    //   const form = e.target;

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: {
    //       "api_key": "pk_606e971d417c43f5869bdb2aacdea0b2c4",
    //       "profiles": [JSON.stringify(newsletterForm)]
    //     }
    //   }
    //   const url = `https://a.klaviyo.com/api/v2/list/RTV3XL/members`
      
    //   fetch(url, requestOptions)
    //     .then((response) => response.json())
    //     .then(response => console.log)
    //     .catch((res) => console.log(res) )

    //     // .then( data => this)
    //   // fetch("/", {
    //   //   method: "POST",
    //   //   headers: { "Content-Type": "application/json" },
    //   //   body: encode({
    //   //     "form-name": form.getAttribute("name"),
    //   //     ...newsletterForm
    //   //   })
    //   // })
    //   //   // .then(() => navigate(form.getAttribute("action")))
    //   //   .catch(error => alert(error));
    // } 

    // async function handleNewsletter(e) {
    //   e.preventDefault();

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 
    //       "api_key": "pk_606e971d417c43f5869bdb2aacdea0b2c4",
    //       "Accept": 'application/json',
    //       "Content-Type": "application/json" 
    //     },
    //     body: JSON.stringify(newsletterForm)
    //   }
    //   const url = `https://a.klaviyo.com/api/v2/list/RTV3XL/members`

    //   let response = await fetch(url, requestOptions);
    //   let result = await response.json();
    //   alert(result.message);
    // }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(newsletterForm)
      const form = e.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...newsletterForm
        })
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error));
    } 



    return (
        <form name="newsletterForm" data-netlify="true" action="/success/" onSubmit={handleSubmit}>
            {/* <input type="hidden" name="bot-field" /> */}
            <input type="hidden" name="form-name" value="newsletterForm" />
            <input type="text" name="email" placeholder="Email Address" onChange={handleChange}/>
            <button disabled={emailLength === 0}><Arrow /></button>
        </form>
    )
}

export default Form;