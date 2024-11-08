// "use client";
import React from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import validator from "validator";
// import { useRouter } from "next/navigation";
// const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const ContactClient = () => {
  // const initialFormData = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   projectDetails: "",
  // };

  // const [formData, setFormData] = useState(initialFormData);
  // const [errors, setErrors] = useState({});
  // const [serverMessage, setServerMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!validator.trim(formData.name))
  //     newErrors.name = "Full Name is required";
  //   if (!validator.isEmail(formData.email)) {
  //     newErrors.email = formData.email
  //       ? "Email is invalid"
  //       : "Business Email is required";
  //   }
  //   if (!validator.trim(formData.phone))
  //     newErrors.phone = "Phone Number is required";
  //   if (!validator.trim(formData.projectDetails))
  //     newErrors.projectDetails = "Project Details are required";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleChange = (field, value) => {
  //   setFormData({
  //     ...formData,
  //     [field]: value,
  //   });
  // };

  // const handleSubmit = async () => {
  //   if (validateForm()) {
  //     console.log("Form Submitted:", formData);
  //     setLoading(true);

  //     try {
  //       const formdata = new FormData();
  //       formdata.append("your-name", formData.name);
  //       formdata.append("your-email", formData.email);
  //       formdata.append("number", formData.phone);
  //       formdata.append("your-message", formData.projectDetails);
  //       formdata.append("_wpcf7_unit_tag", "wpcf7-f7908-p7932-o5");

  //       const requestOptions = {
  //         method: "POST",
  //         body: formdata,
  //         redirect: "follow",
  //       };

  //       const response = await fetch(
  //         `${BASE_URL_API}/wp-json/contact-form-7/v1/contact-forms/7908/feedback`,
  //         requestOptions
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       console.log("Response from server:", result);

  //       if (result.status === "mail_failed" || result.status === "spam") {
  //         setServerMessage(result.message);
  //       } else if (result.status === "mail_sent") {
  //         setServerMessage(result.message);
  //         router.push("/thank-you");
  //       }

  //       // Reset the form data to the initial state
  //       setFormData(initialFormData);
  //       setErrors({});
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //       setServerMessage("Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     console.log("Form has errors.");
  //   }
  // };

  return (
    <>
      {/* <div className="col-sm-6 col-xs-12">
        <form
          className="contact-right-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3>Got a Question? Fill in the details below.</h3>
          <label>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            <input
              type="text"
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            <PhoneInput
              country={"in"}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(phone) => handleChange("phone", phone)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <label>
            <textarea
              placeholder="About Project"
              value={formData.projectDetails}
              onChange={(e) => handleChange("projectDetails", e.target.value)}
            ></textarea>
            {errors.projectDetails && (
              <span className="error">{errors.projectDetails}</span>
            )}
          </label>
          <button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {serverMessage && (
            <p
              style={{
                color: serverMessage.includes("error") ? "red" : "green",
              }}
              className="error-msg"
            >
              {serverMessage}
            </p>
          )}
        </form>
      </div> */}
    </>
  );
};

export default ContactClient;
