import * as Yup from "yup";

let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

export const LoginYupSchema = Yup.object({
  emailorPhone: Yup.string()
    .matches("Invalid email format", mailFormat)
    .required("Email Missing!!"),
  password: Yup.string()
    .matches(
      passwordFormat,
      "Password must contain at least 8 characters, one uppercase, one lowercase, and one special character",
    )
    .required("Password Missing"),
});
