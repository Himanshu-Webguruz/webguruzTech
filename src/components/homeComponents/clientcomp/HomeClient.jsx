// "use client";
import React from "react";
// import validator from "validator";
// import { useRouter } from "next/navigation";

// const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const HomeClient = () => {
  // const [website, setWebsite] = useState("");
  // const [email, setEmail] = useState("");
  // const [errors, setErrors] = useState({ website: "", email: "" });
  // const [serverMessage, setServerMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  
  // const websiteRef = useRef(null);
  // const emailRef = useRef(null);
  // const router = useRouter();

  // const handleWebsiteChange = (e) => {
  //   setWebsite(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleButtonClick = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
    
  //   const trimmedWebsite = website.trim();
  //   const trimmedEmail = email.trim();
  //   let websiteError = "";
  //   let emailError = "";

  //   const formattedWebsite =
  //     !trimmedWebsite.startsWith("http://") &&
  //     !trimmedWebsite.startsWith("https://")
  //       ? "http://" + trimmedWebsite
  //       : trimmedWebsite;

  //   if (!validator.isURL(formattedWebsite, { require_protocol: true })) {
  //     websiteError = "Enter a valid URL";
  //   }
  //   if (formattedWebsite.includes("@")) {
  //     websiteError = "Enter a valid URL";
  //   }

  //   if (!validator.isEmail(trimmedEmail)) {
  //     emailError = "Enter a valid email address";
  //   }

  //   if (websiteError || emailError) {
  //     setErrors({ website: websiteError, email: emailError });
  //     if (websiteError && websiteRef.current) websiteRef.current.focus();
  //     else if (emailError && emailRef.current) emailRef.current.focus();
  //     setLoading(false);
  //     return;
  //   }

  //   setErrors({ website: "", email: "" });
  //   setServerMessage(""); // Reset server message

  //   try {
  //     const formdata = new FormData();
  //     formdata.append("website", formattedWebsite);
  //     formdata.append("your-email", trimmedEmail);
  //     formdata.append("_wpcf7_unit_tag", "wpcf7-f232-p5-o5");

  //     const requestOptions = {
  //       method: "POST",
  //       body: formdata,
  //       redirect: "follow",
  //     };

  //     const response = await fetch(
  //       `${BASE_URL_API}/wp-json/contact-form-7/v1/contact-forms/232/feedback`,
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();
  //     console.log("Response from server:", result);

  //     if (result.status === "mail_failed" || result.status === "spam") {
  //       setServerMessage(result.message);
  //     } else if (result.status === "mail_sent") {
  //       setServerMessage(result.message);
  //       router.push("/thank-you");
  //     }
  //   } catch (error) {
  //     console.error("Error posting website and email:", error);
  //     setServerMessage("Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleButtonClick(e);
  // };

  return (
    <></>
    // <form className="website-label tpfrmbnr" onSubmit={handleSubmit}>
    //   <div className="label-maerge">
    //     <div className="topfrmwbst">
    //       <input
    //         type="text"
    //         placeholder="Enter your Website"
    //         value={website}
    //         onChange={handleWebsiteChange}
    //         ref={websiteRef}
    //       />
    //       {errors.website && <p style={{ color: "red" }}>{errors.website}</p>}
    //     </div>
    //     <div className="topfrmeml">
    //       <input
    //         type="email"
    //         placeholder="Enter your Email"
    //         value={email}
    //         onChange={handleEmailChange}
    //         ref={emailRef}
    //       />
    //       {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
    //     </div>
    //   </div>
    //   <button type="submit" className="btn-submit" disabled={loading}>
    //     {loading ? "Sending..." : "Send me a proposal"}
    //   </button>
    //   {serverMessage && (
    //     <p
    //       style={{
    //         color: serverMessage.includes("error") ? "red" : "green",
    //       }}
    //       className="error-msg"
    //     >
    //       {serverMessage}
    //     </p>
    //   )}
    // </form>
  );
};

export default HomeClient;
