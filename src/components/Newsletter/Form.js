import React, { useState } from "react"
import Arrow from "../../images/submit-arrow.svg"

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

const Form = () => {
    const [ newsletterForm, setForm ] = useState({})

    React.useEffect(() => {
        console.log(newsletterForm)
    }, [newsletterForm])

    function handleChange(e) {
      setForm({
        ...newsletterForm, 
        [e.target.name]: e.target.value
      })
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(newsletterForm)
      const form = e.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...newsletterForm
        })
      })
        // .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error));
    } 
    return (
        <form name="newsletterForm" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email Address" onChange={handleChange}/>
            <button><Arrow /></button>
        </form>
    )
}

export default Form;