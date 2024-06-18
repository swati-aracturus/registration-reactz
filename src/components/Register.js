import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const options = [
    { value: "Advisories", label: "Advisories" },
    { value: "Ecommerce", label: "Ecommerce" },
    { value: "IT", label: "IT" },
  ];
  
  const country = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo (Congo-Brazzaville)", label: "Congo (Congo-Brazzaville)" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czechia (Czech Republic)", label: "Czechia (Czech Republic)" },
    {
      value: "Democratic Republic of the Congo",
      label: "Democratic Republic of the Congo",
    },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    {
      value: "Eswatini (fmr. 'Swaziland')",
      label: "Eswatini (fmr. 'Swaziland')",
    },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Greece", label: "Greece" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Holy See", label: "Holy See" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mexico", label: "Mexico" },
    { value: "Micronesia", label: "Micronesia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar (formerly Burma)", label: "Myanmar (formerly Burma)" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "North Korea", label: "North Korea" },
    { value: "North Macedonia", label: "North Macedonia" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    { value: "Palestine State", label: "Palestine State" },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Qatar", label: "Qatar" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    {
      value: "Saint Vincent and the Grenadines",
      label: "Saint Vincent and the Grenadines",
    },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Korea", label: "South Korea" },
    { value: "South Sudan", label: "South Sudan" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syria", label: "Syria" },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States of America", label: "United States of America" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];
  
  const isd = [
    { value: "+93", label: " +93 " },
    { value: "+355", label: " +355 " },
    { value: "+213", label: " +213 " },
    { value: "+1-684", label: " +1-684 " },
    { value: "+376", label: " +376 " },
    { value: "+244", label: " +244 " },
    { value: "+1-264", label: " +1-264 " },
    { value: "+672", label: " +672 " },
    { value: "+1-268", label: " +1-268 " },
    { value: "+54", label: " +54 " },
    { value: "+374", label: " +374 " },
    { value: "+297", label: " +297 " },
    { value: "+61", label: " +61 " },
    { value: "+43", label: " +43 " },
    { value: "+994", label: " +994 " },
    { value: "+1-242", label: " +1-242 " },
    { value: "+973", label: " +973 " },
    { value: "+880", label: " +880 " },
    { value: "+1-246", label: " +1-246 " },
    { value: "+375", label: " +375 " },
    { value: "+32", label: " +32 " },
    { value: "+501", label: " +501" },
    { value: "+229", label: " +229 " },
    { value: "+1-441", label: " +1-441 " },
    { value: "+975", label: " +975 " },
    { value: "+591", label: " +591 " },
    { value: "+387", label: " +387 " },
    { value: "+267", label: " +267 " },
    { value: "+55", label: " +55 " },
    { value: "+246", label: " +246 " },
    { value: "+1-284", label: " +1-284 " },
    { value: "+673", label: " +673 " },
    { value: "+359", label: " +359 " },
    { value: "+226", label: " +226 " },
    { value: "+257", label: " +257 " },
    { value: "+855", label: " +855 " },
    { value: "+237", label: " +237 " },
    { value: "+1", label: " +1 " },
    { value: "+238", label: " +238 " },
    { value: "+1-345", label: " +1-345 " },
    { value: "+236", label: " +236 " },
    { value: "+235", label: " +235 " },
    { value: "+56", label: " +56 " },
    { value: "+86", label: " +86" },
    { value: "+61", label: " +61 " },
    { value: "+61", label: " +61 " },
    { value: "+57", label: " +57 " },
    { value: "+269", label: " +269 " },
    { value: "+682", label: " +682" },
    { value: "+506", label: " +506 " },
    { value: "+385", label: " +385 " },
    { value: "+53", label: " +53" },
    { value: "+599", label: " +599 " },
    { value: "+357", label: " +357 " },
    { value: "+420", label: " +420 " },
    { value: "+243", label: " +243 " },
    { value: "+45", label: " +45 " },
    { value: "+253", label: " +253 " },
    { value: "+1-767", label: " +1-767 " },
    { value: "+1-809", label: " +1-809 " },
    { value: "+670", label: " +670 " },
    { value: "+593", label: " +593 " },
    { value: "+20", label: " +20 " },
    { value: "+503", label: " +503 " },
    { value: "+240", label: " +240 " },
    { value: "+291", label: " +291 " },
    { value: "+372", label: " +372 " },
    { value: "+251", label: " +251 " },
    { value: "+500", label: " +500 " },
    { value: "+298", label: " +298" },
    { value: "+679", label: " +679 " },
    { value: "+358", label: " +358 " },
    { value: "+33", label: " +33 " },
    { value: "+689", label: " +689 " },
    { value: "+241", label: " +241 " },
    { value: "+220", label: " +220" },
    { value: "+995", label: " +995" },
    { value: "+49", label: " +49 " },
    { value: "+233", label: " +233" },
    { value: "+350", label: " +350 " },
    { value: "+30", label: " +30 " },
    { value: "+299", label: " +299 " },
    { value: "+1-473", label: " +1-473" },
    { value: "+1-671", label: " +1-671" },
    { value: "+502", label: " +502" },
    { value: "+44", label: " +44 " },
    { value: "+224", label: " +224 " },
    { value: "+245", label: " +245 " },
    { value: "+592", label: " +592 " },
    { value: "+509", label: " +509 " },
    { value: "+504", label: " +504 " },
    { value: "+852", label: " +852 " },
    { value: "+36", label: " +36 " },
    { value: "+354", label: " +354 " },
    { value: "+91", label: " +91 " },
    { value: "+62", label: " +62 " },
    { value: "+98", label: " +98 " },
    { value: "+964", label: " +964 " },
    { value: "+353", label: " +353 " },
    { value: "+44", label: " +44 " },
    { value: "+972", label: " +972 " },
    { value: "+39", label: " +39 " },
    { value: "+225", label: " +225 " },
    { value: "+1-876", label: " +1-876 " },
    { value: "+81", label: " +81 " },
    { value: "+44", label: " +44 " },
    { value: "+962", label: " +962 " },
    { value: "+7", label: " +7 " },
    { value: "+254", label: " +254 " },
    { value: "+686", label: " +686 " },
    { value: "+383", label: " +383 " },
    { value: "+965", label: " +965 " },
    { value: "+996", label: " +996 " },
    { value: "+856", label: " +856 " },
    { value: "+371", label: " +371 " },
    { value: "+961", label: " +961 " },
    { value: "+266", label: " +266 " },
    { value: "+231", label: " +231 " },
    { value: "+218", label: " +218 " },
    { value: "+423", label: " +423 " },
    { value: "+370", label: " +370 " },
    { value: "+352", label: " +352 " },
    { value: "+853", label: " +853 " },
    { value: "+389", label: " +389 " },
    { value: "+261", label: " +261 " },
    { value: "+265", label: " +265 " },
    { value: "+60", label: " +60 " },
    { value: "+960", label: " +960 " },
    { value: "+223", label: " +223 " },
    { value: "+356", label: " +356 " },
    { value: "+692", label: " +692 " },
    { value: "+222", label: " +222 " },
    { value: "+230", label: " +230 " },
    { value: "+262", label: " +262 " },
    { value: "+52", label: " +52 " },
    { value: "+691", label: " +691 " },
    { value: "+373", label: " +373 " },
    { value: "+377", label: " +377 " },
    { value: "+976", label: " +976 " },
    { value: "+382", label: " +382 " },
    { value: "+1-664", label: " +1-664 " },
    { value: "+212", label: " +212 " },
    { value: "+258", label: " +258 " },
    { value: "+95", label: " +95 " },
    { value: "+264", label: " +264 " },
    { value: "+674", label: " +674 " },
    { value: "+977", label: " +977 " },
    { value: "+31", label: " +31 " },
    { value: "+599", label: " +599 " },
    { value: "+687", label: " +687 " },
    { value: "+64", label: " +64 " },
    { value: "+505", label: " +505 " },
    { value: "+227", label: " +227 " },
    { value: "+234", label: " +234 " },
    { value: "+683", label: " +683 " },
    { value: "+850", label: " +850 " },
    { value: "+1-670", label: " +1-670 " },
    { value: "+47", label: " +47 " },
    { value: "+968", label: " +968 " },
    { value: "+92", label: " +92 " },
    { value: "+680", label: " +680 " },
    { value: "+970", label: " +970 " },
    { value: "+507", label: " +507 " },
    { value: "+675", label: " +675 " },
    { value: "+595", label: " +595 " },
    { value: "+51", label: " +51 " },
    { value: "+63", label: " +63 " },
    { value: "+870", label: " +870 " },
    { value: "+48", label: " +48 " },
    { value: "+351", label: " +351 " },
    { value: "+1-787", label: " +1-787 " },
    { value: "+1-939", label: " +1-939 " },
    { value: "+974", label: " +974 " },
    { value: "+242", label: " +242 " },
    { value: "+262", label: " +262 " },
    { value: "+40", label: " +40 " },
    { value: "+7", label: " +7 " },
    { value: "+250", label: " +250 " },
    { value: "+590", label: " +590 " },
    { value: "+290", label: " +290 " },
    { value: "+1-869", label: " +1-869 " },
    { value: "+1-758", label: " +1-758 " },
    { value: "+590", label: " +590" },
    { value: "+508", label: " +508 " },
    { value: "+1-784", label: " +1-784 " },
    { value: "+685", label: " +685 " },
    { value: "+378", label: " +378 " },
    { value: "+239", label: " +239 " },
    { value: "+966", label: " +966 " },
    { value: "+221", label: " +221 " },
    { value: "+381", label: " +381 " },
    { value: "+248", label: " +248 " },
    { value: "+232", label: " +232 " },
    { value: "+65", label: " +65 " },
    { value: "+1-721", label: " +1-721 " },
    { value: "+421", label: " +421 " },
    { value: "+386", label: " +386 " },
    { value: "+677", label: " +677 " },
    { value: "+252", label: " +252 " },
    { value: "+27", label: " +27 " },
    { value: "+82", label: " +82 " },
    { value: "+211", label: " +211 " },
    { value: "+34", label: " +34 " },
    { value: "+94", label: " +94 " },
    { value: "+249", label: " +249 " },
    { value: "+597", label: " +597" },
    { value: "+47", label: " +47 " },
    { value: "+268", label: " +268 " },
    { value: "+46", label: " +46 " },
    { value: "+41", label: " +41 " },
    { value: "+963", label: " +963 " },
    { value: "+886", label: " +886 " },
    { value: "+992", label: " +992 " },
    { value: "+255", label: " +255 " },
    { value: "+66", label: " +66 " },
    { value: "+228", label: " +228 " },
    { value: "+690", label: " +690 " },
    { value: "+676", label: " +676 " },
    { value: "+1-868", label: " +1-868 " },
    { value: "+216", label: " +216 " },
    { value: "+90", label: " +90 " },
    { value: "+993", label: " +993 " },
    { value: "+1-649", label: " +1-649 " },
    { value: "+688", label: " +688 " },
    { value: "+1-340", label: " +1-340 " },
    { value: "+256", label: " +256 " },
    { value: "+380", label: " +380 " },
    { value: "+971", label: " +971 " },
    { value: "+44", label: " +44 " },
    { value: "+1", label: " +1 " },
    { value: "+598", label: " +598 " },
    { value: "+998", label: " +998 " },
    { value: "+678", label: " +678 " },
    { value: "+379", label: " +379 " },
    { value: "+58", label: " +58 " },
    { value: "+84", label: " +84 " },
    { value: "+681", label: " +681 " },
    { value: "+212", label: " +212" },
    { value: "+967", label: " +967 " },
    { value: "+260", label: " +260 " },
    { value: "+263", label: " +263 " },
  ];

  export default function Register() {
    const notify = () => toast.success("Successfully Logged In!");
  
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [contry, setCountry] = useState("");
    const [Business, setBusiness] = useState("");
    const [Company, setCompany] = useState("");
    const [CompanyDomain, setCompanydomain] = useState("");
    // const [registrationToken, setRegistrationtoken] = useState("");
    const [Isdc, setIsdc] = useState("");
    const handleIsdc = (e) => {
      const value = e?.value;
      if (value !== null) {
        setIsdc(value);
      }
    };
  
    const handleCountrydomain = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setCompanydomain(value);
      }
    };
    const handleFname = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setFname(value);
      }
    };
  
    const handleLname = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setLname(value);
      }
    };
  
    const handleCountry = (e) => {
      const value = e?.value;
      if (value !== null) {
        setCountry(value);
      }
    };
  
    const handleEmail = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setEmail(value);
      }
    };
    const handleContact = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setContact(value);
      }
    };
    const handleBusiness = (e) => {
      const value = e?.value;
      if (value !== null) {
        setBusiness(value);
      }
    };
    // const handleCountrydomain =
  
    const handlePassword = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setPassword(value);
      }
    };
    const handleCompany = (e) => {
      const value = e?.target?.value;
      if (value !== null) {
        setCompany(value);
      }
    };
  
    const registerEvent = async () => {
      const data = {
        id: 11,
        firstName: fname,
        lastName: lname,
        userName: fname,
        phoneNumber: contact,
        countryCode: contry,
        email: email,
        password: password,
        registrationToken: "string",
        companyName: Company,
        companyDomain: CompanyDomain,
      };
      console.log(data)
      await axios
        .post("https://stratagem.igniculuss.com/api/Company/register", data)
        .then(function (response) {
          console.log(response.data?.token);
          console.log(response.data?.token !== "");
          if (response.data?.message === "Company registered successfully.") {
            sendotp(email);
          } else {
            toast.error(response.data.message);
            console.log(data, response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    const sendotp = async (emailid) => {
      const data = {
        email: emailid,
      };
      await axios
        .post("https://stratagem.igniculuss.com/api/Company/send/otp", data)
        .then(function (response) {
          if (response.data?.isSuccess === true) {
            toast.success(response.data.message);
         /*    route.push({
              pathname: "/verify",
              query: { name: email },
            }); */
          } else {
            toast.error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    const validateForm = () => {
      if (!fname.trim()) {
        toast.error("First name is required");
      } else if (!lname.trim()) {
        toast.error("Last name is required");
      } else if (!email.trim()) {
        toast.error("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Email is invalid");
      } else if (!password.trim()) {
        toast.error("Password is required");
      } else if (!Company.trim()) {
        toast.error("Company name is required");
      } else if (!CompanyDomain.trim()) {
        toast.error("Company domain is required");
      } else if (!contact.trim()) {
        toast.error("Phone number is required");
      } else if (!Isdc.trim()) {
        toast.error("Country is required");
      } else if (!Business.trim()) {
        toast.error("Business is required");
      } else {
        registerEvent();
      }
    }
  
    return (
      <>
        <div className="justify-center flex-center bg-gradient-to-r from-indigo-400 to-indigo-400 items-center  m-0 p-0">
          <div className="desktop justify-center flex-center">
            <div className="flex w-full min-h-screen  justify-center flex-center">
              <div className=" w-2/3 flex justify-center items-center ">
                <div className="rounded-lg bg-white w-2/3 p-8">
                  <div className="flex justify-center items-center">
                    <img
                      src="/image 1.png"
                      alt="My SVG"
                      width="100"
                      height="100"
                      className="pt-2"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img src="/image 41.png" width="500" height="250" />
                  </div>
                  <div className="flex justify-center items-center ">
                    <svg
                      width="36"
                      height="46"
                      viewBox="0 0 36 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 23C9.94113 23 18 12.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z"
                        fill="#02A7CC"
                      />
                    </svg>
                    &nbsp;
                    <div className="font-extrabold text-slate-900 text-4xl ">
                      Hello, Igniculuss
                    </div>
                    &nbsp;
                    <img src="/hand.png" width="70" />
                  </div>
                  <div className="flex justify-center">
                    <div className="text-center text-base leading-6 w-4/5 pb-4  text-slate-500">
                      Skip repetitive and manual sales-marketing tasks. Get highly
                      productive through automation and save tons of time!
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="w-1/3 lg:w-1/2 flex items-center bg-white justify-center py-6 my-0">
                <div className=" w-2/3 max-w-container ">
                  <a href="" className="my-12 lg:mb-8 flex items-center gap-1">
                    <svg
                      width="32"
                      height="40"
                      viewBox="0 0 32 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z"
                        fill="#282828"
                      />
                    </svg>
                    <span className="text-slate-950 font-bold text-2xl">
                      Create Your Account{" "}
                    </span>
                  </a>
  
                  <div className="mx-auto">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="grid space-y-6"
                    >
                      <label className="text-slate-500 pb-2 ">First Name</label>
                      <input
                        type="fname"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm focus:outline-none text-violet-600"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="First Name"
                        onChange={(e) => handleFname(e)}
                      />
                      <label className="text-slate-500 pb-2">Last Name</label>
                      <input
                        type="sname"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="Last Name"
                        onChange={(e) => handleLname(e)}
                      />
                      <label className="text-slate-500 pb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="123@gmail.com"
                        onChange={(e) => handleEmail(e)}
                      />
                      <label className="text-slate-500 pb-2">Password</label>
                      <input
                        type="password"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="password"
                        onChange={(e) => handlePassword(e)}
                      />
  
                      <label className="text-slate-500 pb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="Company Name"
                        onChange={(e) => handleCompany(e)}
                      />
                      <label className="text-slate-500 pb-2">
                        Company Domain
                      </label>
                      <input
                        type="text"
                        required
                        className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "1px solid #D5D5D5" }}
                        placeholder="Company Domain"
                        onChange={(e) => handleCountrydomain(e)}
                      />
                      <label
                        className="text-slate-500 pt-2"
                        style={{ marginBottom: "-15px" }}
                      >
                        {" "}
                        Contact Number
                      </label>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      >
                        <Select
                          options={isd}
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              margin: 0,
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (provided) => ({
                              ...provided,
                              color: "black",
                            }),
                          }}
                          onChange={(e) => handleIsdc(e)}
                        />
                        <input
                          type="text"
                          required
                          className="h-10 rounded-md px-3 py-2 border text-sm text-violet-600 focus:outline-none"
                          style={{ margin: 0, border: "none", boxShadow: "none" }}
                          placeholder="Phone Number"
                          onChange={(e) => handleContact(e)}
                        />
                      </div>
  
                      <label
                        className="text-slate-500 pt-2"
                        style={{ marginBottom: "-15px" }}
                      >
                        Country
                      </label>
                      <Select
                        options={country}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            margin: 0,
                            border: "1px solid #D5D5D5",
                          }),
                          option: (provided) => ({
                            ...provided,
                            color: "black",
                          }),
                        }}
                        onChange={(e) => handleCountry(e)}
                      />
  
                      <label
                        className="text-slate-500 pt-2"
                        style={{ marginBottom: "-15px" }}
                      >
                        Business
                      </label>
                      <Select
                        options={options}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            margin: 0,
                            border: "1px solid #D5D5D5",
                          }),
                          option: (provided) => ({
                            ...provided,
                            color: "black",
                          }),
                        }}
                        onChange={(e) => handleBusiness(e)}
                      />
  
                      <button
                        onClick={() => validateForm()}
                        className="h-11 w-full font-medium bg-indigo-500 hover:bg-indigo-500 text-gray-100 text-base rounded-md my-4"
                      >
                        Submit
                      </button>
                      <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                          // Define default options
                          className: "",
                          duration: 5000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
  
                          // Default options for specific types
                          success: {
                            duration: 3000,
                            theme: {
                              primary: "green",
                              secondary: "black",
                            },
                          },
                        }}
                      />
                      <div className="relative text-center py-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative inline-block px-4 bg-white text-slate-500">
                          Or log in with
                        </div>
                      </div>
                      <Link to="/Google">
                       <button
                          className="h-11 w-full flex items-center justify-center font-medium  text-gray-500 text-medium rounded-md"
                          style={{ border: "1px solid #D5D5D5" }}
                        >
                          <svg
                            width="16px"
                            viewBox="-3 0 262 262"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                              fill="#4285F4"
                            />
                            <path
                              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                              fill="#34A853"
                            />
                            <path
                              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                              fill="#FBBC05"
                            />
                            <path
                              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                              fill="#EB4335"
                            />
                          </svg>
                          &nbsp; Continue with Google
                        </button>
                      </Link>
                      <div className="text-center text-sm pb-12 text-gray-600">
                        Already have an Account?
                       <Link to={"/"}>
                          <a className="font-bold  text-sm text-indigo-400 no-underline">
                            {" "}
                            Log in
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mobile pb-8 m-0">
            <div className=" flex justify-center items-center pt-6 pb-2">
              <img
                src="/image2.svg"
                alt="My SVG"
                width={70}
                height={70}
                className="pt-4"
              />
            </div>
  
            <div className="rounded-lg bg-white mx-3 py-6 mb-0 ">
              <div className="px-4 sm:px-0 w-full max-w-container">
                <a href="" className="mb-6 lg:mb-8 flex items-center gap-1">
                  <span className="text-slate-950 font-bold text-2xl">
                    Log In{" "}
                  </span>
                </a>
  
                <div className="mx-auto">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid space-y-6"
                  >
                    <label className="text-slate-500 pb-2 ">First Name</label>
                    <input
                      type="fname"
                      className="h-10 rounded-md px-3 py-6 border text-sm focus:outline-none text-violet-600"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="First Name"
                      onChange={(e) => handleFname(e)}
                    />
                    <label className="text-slate-500 pb-2">Last Name</label>
                    <input
                      type="sname"
                      required
                      className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="Last Name"
                      onChange={(e) => handleLname(e)}
                    />
                    <label className="text-slate-500 pb-2">Email</label>
                    <input
                      required
                      type="email"
                      className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="123@gmail.com"
                      onChange={(e) => handleEmail(e)}
                    />
                    <label className="text-slate-500 pb-2">Password</label>
                    <input
                      required
                      type="password"
                      className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="password"
                      onChange={(e) => handlePassword(e)}
                    />
  
                    <label className="text-slate-500 pb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="Company Name"
                      onChange={(e) => handleCompany(e)}
                    />
                    <label className="text-slate-500 pb-2">Company Domain</label>
                    <input
                      type="text"
                      required
                      className="h-10 rounded-md px-3 py-6 border text-sm text-violet-600 focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="Company Domain"
                      onChange={(e) => handleCountrydomain(e)}
                    />
                    <label
                      className="text-slate-500 pt-2"
                      style={{ marginBottom: "-15px" }}
                    >
                      {" "}
                      Contact Number
                    </label>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Select
                        options={isd}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            margin: 0,
                            border: "none",
                            boxShadow: "none",
                          }),
                          option: (provided) => ({
                            ...provided,
                            color: "black",
                          }),
                        }}
                      /*  onChange={(e) => handleIsdc(e)}
                       */
                      />
                      <input
                        type="text"
                        required
                        className="h-10 rounded-md px-3 py-2 border text-sm text-violet-600 focus:outline-none"
                        style={{ margin: 0, border: "none", boxShadow: "none" }}
                        placeholder="Phone Number"
                        onChange={(e) => handleContact(e)}
                      />
                    </div>
  
                    <label
                      className="text-slate-500 pt-2"
                      style={{ marginBottom: "-15px" }}
                    >
                      Country
                    </label>
                    <Select
                      options={country}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          margin: 0,
                          border: "1px solid #D5D5D5",
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                      }}
                      onChange={(e) => handleCountry(e)}
                    />
  
                    <label
                      className="text-slate-500 pt-2"
                      style={{ marginBottom: "-15px" }}
                    >
                      Business
                    </label>
                    <Select
                      options={options}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          margin: 0,
                          border: "1px solid #D5D5D5",
                        }),
                        option: (provided) => ({
                          ...provided,
                          color: "black",
                        }),
                      }}
                      onChange={(e) => handleBusiness(e)}
                    />
  
                    <button
                      onClick={() => registerEvent()}
                      className="h-11 w-full font-medium bg-indigo-500 hover:bg-indigo-500 text-gray-100 text-base rounded-md my-4"
                    >
                      Submit
                    </button>
  
                    <div className="relative text-center py-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative inline-block px-4 bg-white text-slate-500">
                        Or log in with
                      </div>
                    </div>
                    <Link to={"/Google"}>
                       <button
                        className="h-11 w-full flex items-center justify-center font-medium  text-gray-500 text-medium rounded-md"
                        style={{ border: "1px solid #D5D5D5" }}
                      >
                        <svg
                          width="16px"
                          viewBox="-3 0 262 262"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid"
                        >
                          <path
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            fill="#4285F4"
                          />
                          <path
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            fill="#34A853"
                          />
                          <path
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            fill="#FBBC05"
                          />
                          <path
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            fill="#EB4335"
                          />
                        </svg>
                        &nbsp; Continue with Google
                      </button>
                    </Link>
                    <div className="text-center text-sm pb-12 text-gray-600">
                      Already have an Account?
                      <Link to={"/"}>
                        <a className="font-bold  text-sm text-indigo-400 no-underline">
                          {" "}
                          Log in
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  