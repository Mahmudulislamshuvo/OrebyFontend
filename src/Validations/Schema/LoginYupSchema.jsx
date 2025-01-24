import * as Yup from "yup";

let mailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
let BdNumberFormat = /^(?:\+88|88)?01[3-9]\d{8}$/;

export const LoginYupSchema = Yup.object({
  emailorPhone: Yup.string()
    .matches(mailFormat, "Invalid email format")
    .required("Email Missing!!"),
  password: Yup.string()
    .matches(
      passwordFormat,
      "Password must contain at least 8 characters, one uppercase, one lowercase, and one special character",
    )
    .required("Password Missing"),
});

export const ContactusYupSchema = Yup.object({
  name: Yup.string().required("Name Missing"),
  email: Yup.string()
    .matches(mailFormat, "Invalid Email format")
    .required("Email Missing!!"),
  phone: Yup.string()
    .matches(BdNumberFormat, "Your Number is Invalid")
    .required("Phone Number Missing!!"),
  message: Yup.string().required("Text required for contact us"),
});

export const SignUpSchema = Yup.object({
  firstName: Yup.string().required("Your Name Missing!!"),
  email: Yup.string()
    .matches(mailFormat, "Email format Invalid")
    .required("Email Missing!!"),
  mobile: Yup.string()
    .matches(BdNumberFormat, "Mobile number format Invalid")
    .required("Mobile number Missing!!"),
  password: Yup.string()
    .matches(passwordFormat, "Password format invalid")
    .required("Password Missing!!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords mismatched")
    .required("Please confirm your password"),
  agree: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must accept the terms and conditions."),
});
