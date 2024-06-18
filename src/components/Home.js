import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect, useRef, useCallback } from "react";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import makeAnimated from "react-select/animated";
import { City, Country, State } from "country-state-city";
import { type } from "@testing-library/user-event/dist/type";
import Cropper from 'react-easy-crop';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slider } from '@material-ui/core';
import { getCroppedImg } from './cropUtils';
const Registration = () => {
  const animatedComponents = makeAnimated();
  const formdata = new FormData();
  const notify = () => toast.success("Successfully Registered In!");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);

  const handleFileChange2 = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 2) {
      alert("You can only upload a maximum of 2 files");
      return;
    }
    setFiles2(selectedFiles);
  };

  // login popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const [formattedDob, setFormattedDOB] = useState("");

  const handleDOB = (e) => {
    const selectedDate = new Date(e.target.value);

    setDob(e.target.value);

    console.log(e.target.value); // Log in yyyy-MM-dd format


    setFormattedDOB(e.target.value);
    calculateAge(selectedDate);

    // const selectedDate = new Date(e.target.value);
    // setDob(selectedDate);
    // console.log(selectedDate)
    // calculateAge(selectedDate);
  };
  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setAge(age);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);



  const [user, SetUser] = useState("");
  const [pass, SetPass] = useState("");

  const handleUser = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetUser(value);
  };

  const handlePass = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPass(value);
  };

  const validateForm2 = () => {
    if (!user.trim()) {
      toast.error("Username / Mobile No./ User ID is required");
    } else if (!pass.trim()) {
      toast.error("Password is required");
    } else {
      registerEvent2();
    }
  };

  const registerEvent2 = async () => {
    const data = {
      user: user,
      password: pass,
    };
    console.log(data);
    await axios
      .post("https://shreevct.com/api/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //ends here

  const Gender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  const manglik = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
    { value: "don’t know", label: "don’t know" },
  ];
  const matching = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const Reference = [
    { value: "Facebook", label: "Facebook" },
    { value: "Google", label: "Google" },
    { value: "Youtube", label: "Youtube" },
    { value: "Instagram", label: "Instagram" },
  ];

  const agefrom = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
  ];

  const ageto = [
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
    { value: "32", label: "32" },
    { value: "33", label: "33" },
    { value: "34", label: "34" },
    { value: "35", label: "35" },
    { value: "36", label: "36" },
    { value: "37", label: "37" },
    { value: "38", label: "38" },
  ];

  const optionstwo = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  const complexation = [
    { value: "Extremely fair skin", label: "Extremely fair skin" },
    { value: "Fair skin", label: "Fair skin" },
    { value: "Medium skin", label: "Medium skin" },
    { value: "Olive skin", label: "Olive skin" },
    { value: "Light brown skin", label: "Light brown skin" },
    { value: "Dark Brown skin", label: "Dark Brown skin" },
    { value: "Dark skin", label: "Dark skin" },
  ];
  const _education = [
    { value: "Doctorate", label: "Doctorate" },
    { value: "Master", label: "Master" },
    { value: "Bachelor/undergraduate", label: "Bachelor/undergraduate" },
    { value: "Associate/diploma", label: "Associate/diploma" },
    { value: "High school and below", label: "High school and below" },
    {
      value: "Doctor of Philosophy (PhD)",
      label: "Doctor of Philosophy (PhD)",
    },
    { value: "Doctor of Education (EdD)", label: "Doctor of Education (EdD)" },
    { value: "Doctor of Design (DDes)", label: "Doctor of Design (DDes)" },
    { value: "Doctor of Fine Arts (DFA)", label: "Doctor of Fine Arts (DFA)" },
    {
      value: "Doctor of Nursing Science (DNS)",
      label: "Doctor of Nursing Science (DNS)",
    },
    { value: "Doctor of Theology (ThD)", label: "Doctor of Theology (ThD)" },
    {
      value: "Doctor of Business Administration (DBA)",
      label: "Doctor of Business Administration (DBA)",
    },
    {
      value: "Doctor of Dental Surgery (DDS)",
      label: "Doctor of Dental Surgery (DDS)",
    },
    {
      value: "Doctor of Dental Medicine (DMD)",
      label: "Doctor of Dental Medicine (DMD)",
    },
    {
      value: "Doctor of Podiatric Medicine (DPM)",
      label: "Doctor of Podiatric Medicine (DPM)",
    },
    {
      value: "Doctor of Chiropractic (DC)",
      label: "Doctor of Chiropractic (DC)",
    },
    {
      value: "Doctor of Veterinary Medicine (DVM)",
      label: "Doctor of Veterinary Medicine (DVM)",
    },
    {
      value: "Doctor of Naturopathic Medicine (ND)",
      label: "Doctor of Naturopathic Medicine (ND)",
    },
    { value: "Other", label: "Other" },
    { value: "Master of Accountancy", label: "Master of Accountancy" },
    { value: "Master of Advanced Study", label: "Master of Advanced Study" },
    {
      value: "Masters of Agricultural Economics",
      label: "Masters of Agricultural Economics",
    },
    { value: "Master of Applied Finance", label: "Master of Applied Finance" },
    { value: "Master of Applied Science", label: "Master of Applied Science" },
    { value: "Master of Architecture", label: "Master of Architecture" },
    { value: "Master of Arts", label: "Master of Arts" },
    {
      value: "Master of Arts in Liberal Studies",
      label: "Master of Arts in Liberal Studies",
    },
    {
      value: "Master of Arts in Special Education",
      label: "Master of Arts in Special Education",
    },
    {
      value: "Master of Arts in Teaching",
      label: "Master of Arts in Teaching",
    },
    { value: "Master of Bioethics", label: "Master of Bioethics" },
    {
      value: "Master of Business Administration",
      label: "Master of Business Administration",
    },
    {
      value: "Master of Business, Entrepreneurship and Technology",
      label: "Master of Business, Entrepreneurship and Technology",
    },
    { value: "Master of Business", label: "Master of Business" },
    {
      value: "Master of Business Engineering",
      label: "Master of Business Engineering",
    },
    {
      value: "Master of Business Informatics",
      label: "Master of Business Informatics",
    },
    { value: "Master of Chemistry", label: "Master of Chemistry" },
    {
      value: "Master of Christian Education",
      label: "Master of Christian Education",
    },
    { value: "Master of City Planning", label: "Master of City Planning" },
    { value: "Master of Commerce", label: "Master of Commerce" },
    {
      value: "Master of Computational Finance",
      label: "Master of Computational Finance",
    },
    {
      value: "Master of Computer Applications",
      label: "Master of Computer Applications",
    },
    { value: "Master of Counselling", label: "Master of Counselling" },
    {
      value: "Master of Criminal Justice",
      label: "Master of Criminal Justice",
    },
    {
      value: "Master of Creative Technologies",
      label: "Master of Creative Technologies",
    },
    { value: "Master of Data Science", label: "Master of Data Science" },
    { value: "Master of Defence Studies", label: "Master of Defence Studies" },
    { value: "Master of Design", label: "Master of Design" },
    {
      value: "Masters of Development Economics",
      label: "Masters of Development Economics",
    },
    { value: "Master of Divinity", label: "Master of Divinity" },
    { value: "Master of Economics", label: "Master of Economics" },
    { value: "Master of Education", label: "Master of Education" },
    { value: "Master of Engineering", label: "Master of Engineering" },
    {
      value: "Master of Engineering Management",
      label: "Master of Engineering Management",
    },
    { value: "Master of Applied Science", label: "Master of Applied Science" },
    { value: "Master of Enterprise", label: "Master of Enterprise" },
    { value: "Master of European Law", label: "Master of European Law" },
    { value: "Master of Finance", label: "Master of Finance" },
    {
      value: "Master of Financial Economics",
      label: "Master of Financial Economics",
    },
    {
      value: "Master of Financial Engineering",
      label: "Master of Financial Engineering",
    },
    {
      value: "Master of Financial Mathematics",
      label: "Master of Financial Mathematics",
    },
    { value: "Master of Fine Arts", label: "Master of Fine Arts" },
    {
      value: "Master of Health Administration",
      label: "Master of Health Administration",
    },
    {
      value: "Master of Health Economics",
      label: "Master of Health Economics",
    },
    { value: "Master of Health Science", label: "Master of Health Science" },
    { value: "Master of Humanities", label: "Master of Humanities" },
    {
      value: "Master of Industrial and Labor Relations",
      label: "Master of Industrial and Labor Relations",
    },
    {
      value: "Master of International Affairs",
      label: "Master of International Affairs",
    },
    {
      value: "Master of International Business",
      label: "Master of International Business",
    },
    {
      value: "Masters of International Economics",
      label: "Masters of International Economics",
    },
    {
      value: "Master of International Studies",
      label: "Master of International Studies",
    },
    {
      value: "Master of Information and Cybersecurity",
      label: "Master of Information and Cybersecurity",
    },
    {
      value: "Master of Information and Data Science",
      label: "Master of Information and Data Science",
    },
    {
      value: "Master of Information Management",
      label: "Master of Information Management",
    },
    {
      value: "Master of Information System Management",
      label: "Master of Information System Management",
    },
    { value: "Master of Journalism", label: "Master of Journalism" },
    { value: "Master of Jurisprudence", label: "Master of Jurisprudence" },
    { value: "Master of Laws", label: "Master of Laws" },
    {
      value: "Master of Mass Communication",
      label: "Master of Mass Communication",
    },
    { value: "Master of Studies in Law", label: "Master of Studies in Law" },
    {
      value: "Master of Landscape Architecture",
      label: "Master of Landscape Architecture",
    },
    { value: "Master of Letters", label: "Master of Letters" },
    { value: "Master of Liberal Arts", label: "Master of Liberal Arts" },
    {
      value: "Master of Library and Information Science",
      label: "Master of Library and Information Science",
    },
    { value: "Master of Management", label: "Master of Management" },
    {
      value: "Master of Management of Innovation",
      label: "Master of Management of Innovation",
    },
    { value: "Master of Marketing", label: "Master of Marketing" },
    {
      value: "Master of Mathematical Finance",
      label: "Master of Mathematical Finance",
    },
    { value: "Master of Mathematics", label: "Master of Mathematics" },
    { value: "Master of Medical Science", label: "Master of Medical Science" },
    { value: "Master of Medicine", label: "Master of Medicine" },
    {
      value: "Masters of Military Art and Science",
      label: "Masters of Military Art and Science",
    },
    {
      value: "Master of Military Operational Art and Science",
      label: "Master of Military Operational Art and Science",
    },
    { value: "Master of Ministry", label: "Master of Ministry" },
    { value: "Master of Music", label: "Master of Music" },
    { value: "Master of Music Education", label: "Master of Music Education" },
    {
      value: "Master of Occupational Behaviour and Development",
      label: "Master of Occupational Behaviour and Development",
    },
    {
      value: "Master of Occupational Therapy",
      label: "Master of Occupational Therapy",
    },
    { value: "Master of Pharmacy", label: "Master of Pharmacy" },
    { value: "Master of Philosophy", label: "Master of Philosophy" },
    {
      value: "Master of Physician Assistant Studies",
      label: "Master of Physician Assistant Studies",
    },
    { value: "Master of Physics", label: "Master of Physics" },
    {
      value: "Master of Political Science",
      label: "Master of Political Science",
    },
    {
      value: "Master of Professional Studies",
      label: "Master of Professional Studies",
    },
    { value: "Master of Psychology", label: "Master of Psychology" },
    {
      value: "Master of Public Administration",
      label: "Master of Public Administration",
    },
    { value: "Master of Public Affairs", label: "Master of Public Affairs" },
    { value: "Master of Public Health", label: "Master of Public Health" },
    {
      value: "Master of Public Management",
      label: "Master of Public Management",
    },
    { value: "Master of Public Policy", label: "Master of Public Policy" },
    {
      value: "Master of Public Relations",
      label: "Master of Public Relations",
    },
    { value: "Master of Public Service", label: "Master of Public Service" },
    {
      value: "Master of Quantitative Finance",
      label: "Master of Quantitative Finance",
    },
    {
      value: "Master of Rabbinic Studies",
      label: "Master of Rabbinic Studies",
    },
    {
      value: "Master of Real Estate Development",
      label: "Master of Real Estate Development",
    },
    {
      value: "Master of Religious Education",
      label: "Master of Religious Education",
    },
    { value: "Master of Research", label: "Master of Research" },
    { value: "Master of Sacred Music", label: "Master of Sacred Music" },
    { value: "Master of Sacred Theology", label: "Master of Sacred Theology" },
    { value: "Master of Science", label: "Master of Science" },
    {
      value: "Master of Science in Administration",
      label: "Master of Science in Administration",
    },
    {
      value: "Master of Science in Archaeology",
      label: "Master of Science in Archaeology",
    },
    {
      value: "Master of Science in Biblical Archaeology",
      label: "Master of Science in Biblical Archaeology",
    },
    {
      value: "Master of Science in Bioinformatics",
      label: "Master of Science in Bioinformatics",
    },
    {
      value: "Master of Science in Computer Science",
      label: "Master of Science in Computer Science",
    },
    {
      value: "Master of Science in Counselling",
      label: "Master of Science in Counselling",
    },
    {
      value: "Master of Science in Cyber Security",
      label: "Master of Science in Cyber Security",
    },
    {
      value: "Master of Science in Engineering",
      label: "Master of Science in Engineering",
    },
    {
      value: "Master of Science in Development Administration",
      label: "Master of Science in Development Administration",
    },
    {
      value: "Master of Science in Finance",
      label: "Master of Science in Finance",
    },
    {
      value: "Master of Science in Health Informatics",
      label: "Master of Science in Health Informatics",
    },
    {
      value: "Master of Science in Human Resource Development",
      label: "Master of Science in Human Resource Development",
    },
    {
      value: "Master of Science in Information Assurance",
      label: "Master of Science in Information Assurance",
    },
    {
      value: "Master of Science in Information Systems",
      label: "Master of Science in Information Systems",
    },
    {
      value: "Master of Science in Information Technology",
      label: "Master of Science in Information Technology",
    },
    {
      value: "Master of Science in Leadership",
      label: "Master of Science in Leadership",
    },
    {
      value: "Master of Science in Management",
      label: "Master of Science in Management",
    },
    {
      value: "Master of Science in Nursing",
      label: "Master of Science in Nursing",
    },
    {
      value: "Master of Science in Project Management",
      label: "Master of Science in Project Management",
    },
    {
      value: "Master of Science in Supply Chain Management",
      label: "Master of Science in Supply Chain Management",
    },
    {
      value: "Master of Science in Teaching",
      label: "Master of Science in Teaching",
    },
    {
      value: "Master of Science in Taxation",
      label: "Master of Science in Taxation",
    },
    {
      value: "Master of Science in Yoga Therapy",
      label: "Master of Science in Yoga Therapy",
    },
    { value: "Master of Social Science", label: "Master of Social Science" },
    { value: "Master of Social Work", label: "Master of Social Work" },
    {
      value: "Master of Strategic Studies",
      label: "Master of Strategic Studies",
    },
    { value: "Master of Studies", label: "Master of Studies" },
    { value: "Master of Surgery", label: "Master of Surgery" },
    { value: "Master of Talmudic Law", label: "Master of Talmudic Law" },
    { value: "Master of Taxation", label: "Master of Taxation" },
    {
      value: "Master of Theological Studies",
      label: "Master of Theological Studies",
    },
    { value: "Master of Technology", label: "Master of Technology" },
    { value: "Master of Theology", label: "Master of Theology" },
    { value: "Master of Urban Planning", label: "Master of Urban Planning" },
    {
      value: "Master of Veterinary Science",
      label: "Master of Veterinary Science",
    },
    { value: "Other", label: "Other" },
    {
      value: "Bachelor of Business Administration (BBA)",
      label: "Bachelor of Business Administration (BBA)",
    },
    {
      value: "Bachelor of Management Science (BMS)",
      label: "Bachelor of Management Science (BMS)",
    },
    {
      value: "Bachelor of Fine Arts (BFA)",
      label: "Bachelor of Fine Arts (BFA)",
    },
    {
      value: "Bachelor of Event Management (BEM)",
      label: "Bachelor of Event Management (BEM)",
    },
    {
      value: "Integrated Law Course (BA + LL.B)",
      label: "Integrated Law Course (BA + LL.B)",
    },
    {
      value: "Bachelor of Journalism and Mass Communication (BJMC)",
      label: "Bachelor of Journalism and Mass Communication (BJMC)",
    },
    {
      value: "Bachelor of Fashion Designing (BFD)",
      label: "Bachelor of Fashion Designing (BFD)",
    },
    {
      value: "Bachelor of Social Work (BSW)",
      label: "Bachelor of Social Work (BSW)",
    },
    {
      value: "Bachelor of Business Studies (BBS)",
      label: "Bachelor of Business Studies (BBS)",
    },
    {
      value: "Bachelor of Travel and Tourism Management (BTTM)",
      label: "Bachelor of Travel and Tourism Management (BTTM)",
    },
    { value: "Aviation Courses", label: "Aviation Courses" },
    {
      value: "Bachelor of Science in Interior Design (B.Sc Interior Design)",
      label: "Bachelor of Science in Interior Design (B.Sc Interior Design)",
    },
    {
      value:
        "Bachelor of Science in Hospitality and Hotel Administration (B.Sc Hospitality and Hotel Administration)",
      label:
        "Bachelor of Science in Hospitality and Hotel Administration (B.Sc Hospitality and Hotel Administration)",
    },
    {
      value: "Bachelor of Design (B. Design)",
      label: "Bachelor of Design (B. Design)",
    },
    {
      value: "Bachelor of Performing Arts",
      label: "Bachelor of Performing Arts",
    },
    {
      value: "Bachelor of Arts in History (BA in History)",
      label: "Bachelor of Arts in History (BA in History)",
    },
    {
      value: "Bachelor of Technology (BE/B.Tech)",
      label: "Bachelor of Technology (BE/B.Tech)",
    },
    {
      value: "Bachelor of Architecture (B.Arch)",
      label: "Bachelor of Architecture (B.Arch)",
    },
    {
      value: "Bachelor of Computer Applications (BCA)",
      label: "Bachelor of Computer Applications (BCA)",
    },
    {
      value:
        "Bachelor of Science in Information Technology (B.Sc Information Technology)",
      label:
        "Bachelor of Science in Information Technology (B.Sc Information Technology)",
    },
    {
      value: "Bachelor of Science in Nursing (B.Sc Nursing)",
      label: "Bachelor of Science in Nursing (B.Sc Nursing)",
    },
    {
      value: "Bachelor of Pharmacy (BPharma)",
      label: "Bachelor of Pharmacy (BPharma)",
    },
    {
      value: "Bachelor of Dental Surgery (BDS)",
      label: "Bachelor of Dental Surgery (BDS)",
    },
    {
      value: "Animation, Graphics and Multimedia",
      label: "Animation, Graphics and Multimedia",
    },
    {
      value:
        "Bachelor of Science in Nutrition & Dietetics (B.Sc Nutrition & Dietetics)",
      label:
        "Bachelor of Science in Nutrition & Dietetics (B.Sc Nutrition & Dietetics)",
    },
    {
      value: "Bachelor of Physiotherapy (BPT)",
      label: "Bachelor of Physiotherapy (BPT)",
    },
    {
      value: "Bachelor of Science in Applied Geology (B.Sc Applied Geology)",
      label: "Bachelor of Science in Applied Geology (B.Sc Applied Geology)",
    },
    {
      value:
        "Bachelor of Arts/Bachelor of Science in Liberal Arts (BA/B.Sc Liberal Arts)",
      label:
        "Bachelor of Arts/Bachelor of Science in Liberal Arts (BA/B.Sc Liberal Arts)",
    },
    {
      value: "Bachelor of Science in Physics (B.Sc Physics)",
      label: "Bachelor of Science in Physics (B.Sc Physics)",
    },
    {
      value: "Bachelor of Science in Chemistry (B.Sc Chemistry)",
      label: "Bachelor of Science in Chemistry (B.Sc Chemistry)",
    },
    {
      value: "Bachelor of Science in Mathematics (B.Sc Mathematics)",
      label: "Bachelor of Science in Mathematics (B.Sc Mathematics)",
    },
    { value: "Aeronautical Engineering", label: "Aeronautical Engineering" },
    { value: "Automobile Engineering", label: "Automobile Engineering" },
    { value: "Civil Engineering", label: "Civil Engineering" },
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering",
    },
    { value: "Biotechnology Engineering", label: "Biotechnology Engineering" },
    {
      value: "Electrical and Electronics Engineering",
      label: "Electrical and Electronics Engineering",
    },
    {
      value: "Electronics and Communication Engineering",
      label: "Electronics and Communication Engineering",
    },
    { value: "Automation and Robotics", label: "Automation and Robotics" },
    { value: "Petroleum Engineering", label: "Petroleum Engineering" },
    {
      value: "Instrumentation Engineering",
      label: "Instrumentation Engineering",
    },
    { value: "Ceramic Engineering", label: "Ceramic Engineering" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Structural Engineering", label: "Structural Engineering" },
    {
      value: "Transportation Engineering",
      label: "Transportation Engineering",
    },
    { value: "Construction Engineering", label: "Construction Engineering" },
    { value: "Power Engineering", label: "Power Engineering" },
    { value: "Robotics Engineering", label: "Robotics Engineering" },
    { value: "Textile Engineering", label: "Textile Engineering" },
    {
      value: "Smart Manufacturing & Automation",
      label: "Smart Manufacturing & Automation",
    },
    {
      value: "Bachelor of Commerce (B.Com)",
      label: "Bachelor of Commerce (B.Com)",
    },
    {
      value: "Bachelor of Commerce (Honours) (B.Com (Hons.))",
      label: "Bachelor of Commerce (Honours) (B.Com (Hons.))",
    },
    {
      value:
        "Bachelor of Arts (Honours) in Economics (BA (Hons.) in Economics)",
      label:
        "Bachelor of Arts (Honours) in Economics (BA (Hons.) in Economics)",
    },
    {
      value: "Integrated Law Program (B.Com LL.B)",
      label: "Integrated Law Program (B.Com LL.B)",
    },
    {
      value: "Integrated Law Program (BBA LL.B)",
      label: "Integrated Law Program (BBA LL.B)",
    },
    {
      value: "Chartered Accountancy (CA)",
      label: "Chartered Accountancy (CA)",
    },
    { value: "Company Secretary (CS)", label: "Company Secretary (CS)" },
    {
      value:
        "Bachelor of Design in Accessory Design, Fashion Design, Ceramic Design, Leather Design, Graphic Design, Industrial Design, Jewellery Design",
      label:
        "Bachelor of Design in Accessory Design, Fashion Design, Ceramic Design, Leather Design, Graphic Design, Industrial Design, Jewellery Design",
    },
    {
      value: "Bachelor in Foreign Language",
      label: "Bachelor in Foreign Language",
    },
    { value: "Diploma Courses", label: "Diploma Courses" },
    { value: "Advanced Diploma Courses", label: "Advanced Diploma Courses" },
    { value: "Certificate Courses", label: "Certificate Courses" },
    { value: "Other", label: "Other" },
  ];

  const Family_Type = [
    { value: "Nuclear", label: "Nuclear" },
    { value: "Joint", label: "Joint" },
    { value: "single parent", label: "single parent" },
    { value: "Step parent", label: "Step parent" },
    { value: "Grandparent", label: "Grandparent" },
  ];

  const Family_Status = [
    { value: "middle class", label: "middle class" },
    { value: "upper middle Class", label: "upper middle Class" },
    { value: "upper class", label: "upper class" },
    { value: "Rich", label: "Rich" },
  ];

  const Family = [
    { value: "Traditional", label: "Traditional" },
    { value: "Modern", label: "Modern" },
    { value: "Western", label: "Western" },
  ];
  const Marital_status = [
    { value: "Unmarried", label: "Unmarried" },
    { value: "Married", label: "Married" },
    { value: "Widowed", label: "Widowed" },
    { value: "Divorced", label: "Divorced" },
    { value: "Separated", label: "Separated" },
    { value: "In certain cases", label: "In certain cases" },
    { value: "Registered partnership", label: "Registered partnership" },
  ];

  const Heights = [
    { value: "4 '", label: "4 '" },
    { value: "4 ' 1 \"", label: "4 ' 1 \"" },
    { value: "4 ' 2 \"", label: "4 ' 2 \"" },
    { value: "4 ' 3 \"", label: "4 ' 3 \"" },
    { value: "4 ' 4 \"", label: "4 ' 4 \"" },
    { value: "4 ' 5 \"", label: "4 ' 5 \"" },
    { value: "4 ' 6 \"", label: "4 ' 6 \"" },
    { value: "4 ' 7 \"", label: "4 ' 7 \"" },
    { value: "4 ' 8 \"", label: "4 ' 8 \"" },
    { value: "4 ' 9 \"", label: "4 ' 9 \"" },
    { value: "4 ' 10 \"", label: "4 ' 10 \"" },
    { value: "4 ' 11 \"", label: "4 ' 11 \"" },
    { value: "5 '", label: "5 '" },
    { value: "5 ' 1 \"", label: "5 ' 1 \"" },
    { value: "5 ' 2 \"", label: "5 ' 2 \"" },
    { value: "5 ' 3 \"", label: "5 ' 3 \"" },
    { value: "5 ' 4 \"", label: "5 ' 4 \"" },
    { value: "5 ' 5 \"", label: "5 ' 5 \"" },
    { value: "5 ' 6 \"", label: "5 ' 6 \"" },
    { value: "5 ' 7 \"", label: "5 ' 7 \"" },
    { value: "5 ' 8 \"", label: "5 ' 8 \"" },
    { value: "5 ' 9 \"", label: "5 ' 9 \"" },
    { value: "5 ' 10 \"", label: "5 ' 10 \"" },
    { value: "5 ' 11 \"", label: "5 ' 11 \"" },
    { value: "6 '", label: "6 '" },
    { value: "6 ' 1 \"", label: "6 ' 1 \"" },
    { value: "6 ' 2 \"", label: "6 ' 2 \"" },
    { value: "6 ' 3 \"", label: "6 ' 3 \"" },
    { value: "6 ' 4 \"", label: "6 ' 4 \"" },
    { value: "6 ' 5 \"", label: "6 ' 5 \"" },
    { value: "6 ' 6 \"", label: "6 ' 6 \"" },
    { value: "6 ' 7 \"", label: "6 ' 7 \"" },
    { value: "6 ' 8 \"", label: "6 ' 8 \"" },
    { value: "6 ' 9 \"", label: "6 ' 9 \"" },
    { value: "6 ' 10 \"", label: "6 ' 10 \"" },
    { value: "6 ' 11 \"", label: "6 ' 11 \"" },
    { value: "7 '", label: "7 '" },
    { value: "7 ' 1 \"", label: "7 ' 1 \"" },
    { value: "7 ' 2 \"", label: "7 ' 2 \"" },
    { value: "7 ' 3 \"", label: "7 ' 3 \"" },
    { value: "7 ' 4 \"", label: "7 ' 4 \"" },
    { value: "7 ' 5 \"", label: "7 ' 5 \"" },
    { value: "7 ' 6 \"", label: "7 ' 6 \"" },
    { value: "7 ' 7 \"", label: "7 ' 7 \"" },
    { value: "7 ' 8 \"", label: "7 ' 8 \"" },
    { value: "7 ' 9 \"", label: "7 ' 9 \"" },
    { value: "7 ' 10 \"", label: "7 ' 10 \"" },
    { value: "7 ' 11 \"", label: "7 ' 11 \"" },
    { value: "8 '", label: "8 '" },
  ];

  const Weights = [
    { value: "35 kg", label: "35 kg" },
    { value: "36 kg", label: "36 kg" },
    { value: "37 kg", label: "37 kg" },
    { value: "38 kg", label: "38 kg" },
    { value: "39 kg", label: "39 kg" },
    { value: "40 kg", label: "40 kg" },
    { value: "41 kg", label: "41 kg" },
    { value: "42 kg", label: "42 kg" },
    { value: "43 kg", label: "43 kg" },
    { value: "44 kg", label: "44 kg" },
    { value: "45 kg", label: "45 kg" },
    { value: "46 kg", label: "46 kg" },
    { value: "47 kg", label: "47 kg" },
    { value: "48 kg", label: "48 kg" },
    { value: "49 kg", label: "49 kg" },
    { value: "50 kg", label: "50 kg" },
    { value: "51 kg", label: "51 kg" },
    { value: "52 kg", label: "52 kg" },
    { value: "53 kg", label: "53 kg" },
    { value: "54 kg", label: "54 kg" },
    { value: "55 kg", label: "55 kg" },
    { value: "56 kg", label: "56 kg" },
    { value: "57 kg", label: "57 kg" },
    { value: "58 kg", label: "58 kg" },
    { value: "59 kg", label: "59 kg" },
    { value: "60 kg", label: "60 kg" },
    { value: "61 kg", label: "61 kg" },
    { value: "62 kg", label: "62 kg" },
    { value: "63 kg", label: "63 kg" },
    { value: "64 kg", label: "64 kg" },
    { value: "65 kg", label: "65 kg" },
    { value: "66 kg", label: "66 kg" },
    { value: "67 kg", label: "67 kg" },
    { value: "68 kg", label: "68 kg" },
    { value: "69 kg", label: "69 kg" },
    { value: "70 kg", label: "70 kg" },
    { value: "71 kg", label: "71 kg" },
    { value: "72 kg", label: "72 kg" },
    { value: "73 kg", label: "73 kg" },
    { value: "74 kg", label: "74 kg" },
    { value: "75 kg", label: "75 kg" },
    { value: "76 kg", label: "76 kg" },
    { value: "77 kg", label: "77 kg" },
    { value: "78 kg", label: "78 kg" },
    { value: "79 kg", label: "79 kg" },
    { value: "80 kg", label: "80 kg" },
    { value: "81 kg", label: "81 kg" },
    { value: "82 kg", label: "82 kg" },
    { value: "83 kg", label: "83 kg" },
    { value: "84 kg", label: "84 kg" },
    { value: "85 kg", label: "85 kg" },
    { value: "86 kg", label: "86 kg" },
    { value: "87 kg", label: "87 kg" },
    { value: "88 kg", label: "88 kg" },
    { value: "89 kg", label: "89 kg" },
    { value: "90 kg", label: "90 kg" },
    { value: "91 kg", label: "91 kg" },
    { value: "92 kg", label: "92 kg" },
    { value: "93 kg", label: "93 kg" },
    { value: "94 kg", label: "94 kg" },
    { value: "95 kg", label: "95 kg" },
    { value: "96 kg", label: "96 kg" },
    { value: "97 kg", label: "97 kg" },
    { value: "98 kg", label: "98 kg" },
    { value: "99 kg", label: "99 kg" },
    { value: "100 kg", label: "100 kg" },
    { value: "101 kg", label: "101 kg" },
    { value: "102 kg", label: "102 kg" },
    { value: "103 kg", label: "103 kg" },
    { value: "104 kg", label: "104 kg" },
    { value: "105 kg", label: "105 kg" },
    { value: "106 kg", label: "106 kg" },
    { value: "107 kg", label: "107 kg" },
    { value: "108 kg", label: "108 kg" },
    { value: "109 kg", label: "109 kg" },
    { value: "110 kg", label: "110 kg" },
    { value: "111 kg", label: "111 kg" },
    { value: "112 kg", label: "112 kg" },
    { value: "113 kg", label: "113 kg" },
    { value: "114 kg", label: "114 kg" },
    { value: "115 kg", label: "115 kg" },
    { value: "116 kg", label: "116 kg" },
    { value: "117 kg", label: "117 kg" },
    { value: "118 kg", label: "118 kg" },
    { value: "119 kg", label: "119 kg" },
    { value: "120 kg", label: "120 kg" },
    { value: "121 kg", label: "121 kg" },
    { value: "122 kg", label: "122 kg" },
    { value: "123 kg", label: "123 kg" },
    { value: "124 kg", label: "124 kg" },
    { value: "125 kg", label: "125 kg" },
    { value: "126 kg", label: "126 kg" },
    { value: "127 kg", label: "127 kg" },
    { value: "128 kg", label: "128 kg" },
    { value: "129 kg", label: "129 kg" },
    { value: "130 kg", label: "130 kg" },
    { value: "131 kg", label: "131 kg" },
    { value: "132 kg", label: "132 kg" },
    { value: "133 kg", label: "133 kg" },
    { value: "134 kg", label: "134 kg" },
    { value: "135 kg", label: "135 kg" },
    { value: "136 kg", label: "136 kg" },
    { value: "137 kg", label: "137 kg" },
    { value: "138 kg", label: "138 kg" },
    { value: "139 kg", label: "139 kg" },
    { value: "140 kg", label: "140 kg" },
    { value: "141 kg", label: "141 kg" },
    { value: "142 kg", label: "142 kg" },
    { value: "143 kg", label: "143 kg" },
    { value: "144 kg", label: "144 kg" },
    { value: "145 kg", label: "145 kg" },
    { value: "146 kg", label: "146 kg" },
    { value: "147 kg", label: "147 kg" },
    { value: "148 kg", label: "148 kg" },
    { value: "149 kg", label: "149 kg" },
    { value: "150 kg", label: "150 kg" },
    { value: "151 kg", label: "151 kg" },
    { value: "152 kg", label: "152 kg" },
    { value: "153 kg", label: "153 kg" },
    { value: "154 kg", label: "154 kg" },
    { value: "155 kg", label: "155 kg" },
    { value: "156 kg", label: "156 kg" },
    { value: "157 kg", label: "157 kg" },
    { value: "158 kg", label: "158 kg" },
    { value: "159 kg", label: "159 kg" },
    { value: "160 kg", label: "160 kg" },
    { value: "161 kg", label: "161 kg" },
    { value: "162 kg", label: "162 kg" },
    { value: "163 kg", label: "163 kg" },
    { value: "164 kg", label: "164 kg" },
    { value: "165 kg", label: "165 kg" },
    { value: "166 kg", label: "166 kg" },
    { value: "167 kg", label: "167 kg" },
    { value: "168 kg", label: "168 kg" },
    { value: "169 kg", label: "169 kg" },
    { value: "170 kg", label: "170 kg" },
    { value: "171 kg", label: "171 kg" },
    { value: "172 kg", label: "172 kg" },
    { value: "173 kg", label: "173 kg" },
    { value: "174 kg", label: "174 kg" },
    { value: "175 kg", label: "175 kg" },
    { value: "176 kg", label: "176 kg" },
    { value: "177 kg", label: "177 kg" },
    { value: "178 kg", label: "178 kg" },
    { value: "179 kg", label: "179 kg" },
    { value: "180 kg", label: "180 kg" },
    { value: "181 kg", label: "181 kg" },
    { value: "182 kg", label: "182 kg" },
    { value: "183 kg", label: "183 kg" },
    { value: "184 kg", label: "184 kg" },
    { value: "185 kg", label: "185 kg" },
    { value: "186 kg", label: "186 kg" },
    { value: "187 kg", label: "187 kg" },
    { value: "188 kg", label: "188 kg" },
    { value: "189 kg", label: "189 kg" },
    { value: "190 kg", label: "190 kg" },
    { value: "191 kg", label: "191 kg" },
    { value: "192 kg", label: "192 kg" },
    { value: "193 kg", label: "193 kg" },
    { value: "194 kg", label: "194 kg" },
    { value: "195 kg", label: "195 kg" },
    { value: "196 kg", label: "196 kg" },
    { value: "197 kg", label: "197 kg" },
    { value: "198 kg", label: "198 kg" },
    { value: "199 kg", label: "199 kg" },
    { value: "200 kg", label: "200 kg" },
  ];

  const Income = [
    { value: "1 - 2 L", label: "1 - 2 L" },
    { value: "2 - 3 L", label: "2 - 3 L" },
    { value: "3 - 4 L", label: "3 - 4 L" },
    { value: "4 - 5 L", label: "4 - 5 L" },
    { value: "5 - 10 L", label: "5 - 10 L" },
    { value: "10 - 15 L", label: "10 - 15 L" },
    { value: "15 - 20 L", label: "15 - 20 L" },
    { value: "20 - 25 L", label: "20 - 25 L" },
    { value: "25 - 30 L", label: "25 - 30 L" },
    { value: "30 - 45 L", label: "30 - 45 L" },
    { value: "45 - 50 L", label: "45 - 50 L" },
    { value: "50 - 75 L", label: "50 - 75 L" },
    { value: "75 L - 1 Cr", label: "75 L - 1 Cr" },
    { value: "1 - 2 Cr", label: "1 - 2 Cr" },
    { value: "2 - 3 Cr", label: "2 - 3 Cr" },
    { value: "3 - 5 Cr", label: "3 - 5 Cr" },
    { value: "5 - 10 Cr", label: "5 - 10 Cr" },
    { value: "10 - 15 Cr", label: "10 - 15 Cr" },
    { value: "15 - 100 Cr", label: "15 - 100 Cr" },
    { value: "100 - 200 Cr", label: "100 - 200 Cr" },
    { value: "200 - 500 Cr", label: "200 - 500 Cr" },
    { value: "500 Cr - 1B", label: "500 Cr - 1B" },
    { value: "1B and above", label: "1B and above" },
  ];

  const Profession = [
    {
      value: "Accounting, Banking & Finance",
      label: "Accounting, Banking & Finance",
    },
    { value: "Administration & HR", label: "Administration & HR" },
    {
      value: "Advertising, Media & Entertainment",
      label: "Advertising, Media & Entertainment",
    },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Airline & Aviation", label: "Airline & Aviation" },
    { value: "Architecture & Design", label: "Architecture & Design" },
    {
      value: "Artists, Animators & Web Designers",
      label: "Artists, Animators & Web Designers",
    },
    {
      value: "Beauty, Fashion & Jewellery Designers",
      label: "Beauty, Fashion & Jewellery Designers",
    },
    {
      value: "BPO, KPO, & Customer Support",
      label: "BPO, KPO, & Customer Support",
    },
    {
      value: "Civil Services / Law Enforcement/ Polition",
      label: "Civil Services / Law Enforcement/ Polition",
    },
    { value: "Defense", label: "Defense" },
    { value: "Education & Training", label: "Education & Training" },
    { value: "Engineering", label: "Engineering" },
    { value: "Hotel & Hospitality", label: "Hotel & Hospitality" },
    { value: "Medical & Healthcare", label: "Medical & Healthcare" },
    { value: "Sales & Marketing", label: "Sales & Marketing" },
    { value: "Science", label: "Science" },
    { value: "Corporate Professionals", label: "Corporate Professionals" },
    { value: "Business Man", label: "Business Man" },
    { value: "Others", label: "Others" },
    { value: "Non Working", label: "Non Working" },
  ];

  const Community = [
    { value: "Digambara", label: "Digambara" },
    { value: "Svetambara", label: "Svetambara" },
    /*   { value: "Agarwal", label: "Agarval" },
    { value: "Khandelwal", label: "Khandelwal" },
 */
  ];

  const [reference, SetReference] = useState("");
  const [whatsapp, SetWhatsapp] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [password2, SetPassword2] = useState("");
  const [gender, SetGender] = useState("");
  const [name, Setname] = useState("");
  // const [dob, SetDOB] = useState("");
  // const [age, SetAge] = useState("");
  const [birthplace, SetBirthplace] = useState("");
  const [birthTime, SetBirthTime] = useState("");
  const [height, SetHeight] = useState("");
  const [weight, SetWeight] = useState("");
  const [complexion, SetComplexion] = useState("");
  const [education, SetEducation] = useState("");
  const [profession, SetProfession] = useState("");
  const [occupation, SetOccupation] = useState("");

  const [religion, SetReligion] = useState("");
  const [community_type, SetCommunity_type] = useState("");

  const [physical, SetPhysical] = useState("");
  const [netincome, SetNetIncome] = useState("");
  const [address, SetAddress] = useState("");
  const [isNRI, SetIsNRI] = useState();
  const [visa, SetVisa] = useState("");
  const [nriAddress, SetNRIAddress] = useState("");
  const [fname, SetFname] = useState("");
  const [fatherOccupation, SetfatherOccupation] = useState("");
  const [mname, SetMname] = useState("");
  const [motherOccupation, SetMotherOccupation] = useState("");

  const [residence, SetResidence] = useState("");
  const [gotra, SetGotra] = useState("");
  const [family_community, SetFamily_Community] = useState("");
  const [subCommunity, SetsubCommunity] = useState("");

  const [familyAddress, SetfamilyAddress] = useState("");
  const [brother, SetBrother] = useState("");

  const [sister, SetSister] = useState("");
  const [otherFamilydetails, SetOtherFamilydetails] = useState("");

  const [ismanglik, SetIsManglik] = useState();
  const [phone, SetPhone] = useState("");

  const [photo, SetPhoto] = useState("");
  const [id, SetID] = useState("");

  const [partner_income, SetPartner_Income] = useState("");

  const [partner_education, SetPartner_education] = useState("");
  const [partner_occupation, Setpartner_occupation] = useState("");

  const [partner_profession, SetPartner_profession] = useState("");
  const [partner_mariatal, SetPartner_Mariatal] = useState("");

  const [partner_ismannglik, SetPartner_Ismanglik] = useState("");

  const [partner_astrologyMatching, SetPartner_AstrologyMatching] =
    useState("");
  const [partner_ExpectationDetailes, SetPartner_ExpectationDetailes] =
    useState("");

  const [maritalStatus, SetMaritalStatus] = useState("");

  const [bloodGroup, SetBloodGroup] = useState("");

  const [radio, SetRadio] = useState("");

  const [ageFrom, SetAgefrom] = useState("");
  const [ageTo, SetAgeTo] = useState("");

  
  const [children, SetChildren] = useState("");
  const [son, SetSon] = useState("");
  const [daughter, SetDaughter] = useState("");

  const handleReference = (e) => {
    const value = e.value;
    if (value !== null);
    SetReference(value);
  };

  const handleWhatsappNo = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetWhatsapp(value);
  };

  const handleEmail = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetEmail(value);
  };

  const handlePassword = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPassword(value);
  };

  const handlePassword2 = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPassword2(value);
  };

  const handleGender = (e) => {
    const value = e.value;
    if (value !== null);
    SetGender(value);
  };

  const handleName = (e) => {
    const value = e?.target.value;
    if (value !== null);
    Setname(value);
  };

  // const handleDOB = (e) => {
  //   const value = e?.target.value;
  //   if (value != null);
  //   SetDOB(value); //data format is yyyy-MM-dd
  // };

  // const handleAge = (e) => {
  //   const value = e?.target.value;
  //   if (value !== null);
  //   SetAge(value);
  // };

  const handleBirthplace = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBirthplace(value);
  };

  const handleBirthTime = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBirthTime(value);
  };

  const handleHeight = (e) => {
    const value = e.value;
    if (value !== null);
    SetHeight(value);
  };

  const handleWeight = (e) => {
    const value = e.value;
    if (value !== null);
    SetWeight(value);
  };

  const handleComplexion = (e) => {
    const value = e.value;
    if (value !== null);
    SetComplexion(value);
  };

  const handleEducation = (e) => {
    const value = e.value;
    if (value !== null);
    SetEducation(value);
  };

  const handleProfession = (e) => {
    const value = e.value;
    if (value !== null);
    SetProfession(value);
  };

  const handleOccupation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetOccupation(value);
  };

  const handleReligion = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetReligion(value);
  };

  const handleCommunity = (e) => {
    const value = e.value;
    if (value !== null);
    SetCommunity_type(value);
  };

  const handlePhysical = (e) => {
    const value = e.value;
    if (value !== null);
    SetPhysical(value);
  };

  const handleAddress = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetAddress(value);
  };

  const handleNRI = (e) => {
    const value = e.target.value;
    if (value !== null) SetIsNRI(value);
  };

  const handleVisa = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetVisa(value);
  };

  const handleNRIAddress = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetNRIAddress(value);
  };

  const handlefName = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetFname(value);
  };

  const handlefprofession = (e) => {
    const value = e.value;
    if (value !== null);
    SetfatherOccupation(value);
  };

  const handlemname = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetMname(value);
  };

  const handlemprofession = (e) => {
    const value = e.value;
    if (value !== null);
    SetMotherOccupation(value);
  };

  const handlegotra = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetGotra(value);
  };

  const handlefamily_community = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetFamily_Community(value);
  };


  const handlesub_community = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetsubCommunity(value);
  };

  const handlefamily_address = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetfamilyAddress(value);
  };

  const handleBrother = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetBrother(value);
  };

  const handleSister = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetSister(value);
  };

  const handlephone = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPhone(value);
  };

  const handleFamily_detailes = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetOtherFamilydetails(value);
  };

  const handleNetIncome = (e) => {
    const value = e.value;
    if (value !== null);
    SetNetIncome(value);
  };

  const handlePartner_Education = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_education(value);
  };

  const handlepartner_Occupation = (e) => {
    const value = e.value;
    if (value !== null);
    Setpartner_occupation(value);
  };

  const handlepartner_Profession = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_profession(value);
  };

  const handlepartner_expectation = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetPartner_ExpectationDetailes(value);
  };

  const handlePartner_manglik = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Ismanglik(value);
  };

  const handlemaritalStatus = (e) => {
    const value = e.value;
    if (value !== null);
    SetMaritalStatus(value);
  };


  const handleChildren = (e) => {
    const value = e.value;
    if (value !== null);
    SetChildren(value);
  };

  const handleSon = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetSon(value);
  };

  const handleDaughter = (e) => {
    const value = e?.target.value;
    if (value !== null);
    SetDaughter(value);
  };


  const handlePartner_maritalStatus = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Mariatal(value);
  };

  const handleBloodGroup = (e) => {
    const value = e.value;
    if (value !== null);
    SetBloodGroup(value);
  };

  const handlePartnerIncome = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_Income(value);
  };

  const handlePartnerAstrology = (e) => {
    const value = e.value;
    if (value !== null);
    SetPartner_AstrologyMatching(value);
  };

  const handlResidence = (e) => {
    const value = e.value;
    if (value !== null);
    SetResidence(value);
  };

  const handlemanglik = (e) => {
    const value = e.value;
    if (value !== null);
    SetIsManglik(value);
  };

  const handleRadio = (e) => {
    const value = e.target.value;
    if (value !== null);
    SetRadio(value);
  };

  const handleAgeFrom = (e) => {
    const value = e.value;
    if (value !== null);
    SetAgefrom(value);
  };

  const handleAgeTo = (e) => {
    const value = e.value;
    if (value !== null);
    SetAgeTo(value);
  };

  const buildFormData = (data) => {
    const formData = new FormData();
    data.forEach((item) => {
      formData.append(item.key, item.value);
    });
    return formData;
  };

  const validateForm = () => {
    console.log(photo, id);

    if (!reference.trim()) {
      toast.error("Reference is required");
    } else if (!whatsapp.trim()) {
      toast.error("WhatsApp number is required");
    } else if (!email.trim()) {
      toast.error("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email is invalid");
    } else if (!password.trim()) {
      toast.error("Password is required");
    } else if (password !== password2) {
      toast.error("Passwords do not match");
    } else if (!gender.trim()) {
      toast.error("Gender is required");
    } else if (!name.trim()) {
      toast.error("Name is required");
    } else if (typeof dob === "string" && !dob.trim()) {
      toast.error("Date of birth is required");
    } else if (!age.trim()) {
      toast.error("Age is required");
    } else if (!birthplace.trim()) {
      toast.error("Birthplace is required");
    } else if (!birthTime.trim()) {
      toast.error("Birth time is required");
    } else if (!height.trim()) {
      toast.error("Height is required");
    } else if (!weight.trim()) {
      toast.error("Weight is required");
    } else if (!complexion.trim()) {
      toast.error("Complexion is required");
    } else if (!education.trim()) {
      toast.error("Education is required");
    } else if (!profession.trim()) {
      toast.error("Profession is required");
    } else if (!occupation.trim()) {
      toast.error("Occupation is required");
    } else if (!community_type.trim()) {
      toast.error("Community is required");
    } else if (!physical.trim()) {
      toast.error("Physical status is required");
    } else if (!netincome.trim()) {
      toast.error("Your Income is required");
    } else if (!address.trim()) {
      toast.error("Address is required");
    } else if (isNRI === undefined) {
      toast.error("NRI status is required");
    } else if (!isNRI !== "Yes") {
      let error = false;
      if (!visa.trim()) {
        toast.error("Visa is required for NRI");
        error = true;
      }
      if (!nriAddress.trim()) {
        toast.error("NRI address is required");
        error = true;
      }
      if (error) {
        return false; 
      }
    } if (!fname.trim()) {
      toast.error("Father's name is required");
    } else if (!fatherOccupation.trim()) {
      toast.error("Father's occupation is required");
    } else if (!mname.trim()) {
      toast.error("Mother's name is required");
    } else if (!motherOccupation.trim()) {
      toast.error("Mother's occupation is required");
    } else if (!residence.trim()) {
      toast.error("Residence is required");
    } else if (!gotra.trim()) {
      toast.error("Gotra is required");
    } else if (!family_community.trim()) {
      toast.error("Family community is required");
    } else if (!subCommunity.trim()) {
      toast.error("Sub-community is required");
    } else if (!familyAddress.trim()) {
      toast.error("Family address is required");
    } else if (!brother.trim()) {
      toast.error("Brother's details are required");
    } else if (!sister.trim()) {
      toast.error("Sister's details are required");
    } else if (!otherFamilydetails.trim()) {
      toast.error("Other family details are required");
    } else if (ismanglik === undefined) {
      toast.error("Manglik status is required");
    } else if (!phone.trim()) {
      toast.error("Phone number is required");
    } else if (!photo) {
      toast.error("Photo is required");
    } else if (!id) {
      toast.error("ID is required");
    } else if (!partner_income.trim()) {
      toast.error("Partner's income is required");
    } else if (!selectedCountry.name.trim()) {
      toast.error("Partner's country is required");
    } else if (!selectedState.name.trim()) {
      toast.error("Partner's state is required");
    } else if (!selectedCity.name.trim()) {
      toast.error("Partner's city is required");
    } else if (!partner_education.trim()) {
      toast.error("Partner's education is required");
    } else if (!partner_occupation.trim()) {
      toast.error("Partner's occupation is required");
    } else if (!partner_profession.trim()) {
      toast.error("Partner's profession is required");
    } else if (!partner_mariatal.trim()) {
      toast.error("Partner's marital status is required");
    } else if (partner_ismannglik === undefined) {
      toast.error("Partner's Manglik status is required");
    } else if (!partner_astrologyMatching.trim()) {
      toast.error("Partner's astrology matching status is required");
    } else if (!partner_ExpectationDetailes.trim()) {
      toast.error("Partner's expectation details are required");
    } else if (!maritalStatus.trim()) {
      toast.error("Marital status is required");
    } else if (maritalStatus !== "Unmarried") {
      if (!children.trim()) {
        toast.error("Children declaration is required");
        return false;
      } else if (children === "Yes") {
        let error = false;
        if (!son.trim()) {
          toast.error("Son's details are required");
          error = true;
        }
        if (!daughter.trim()) {
          toast.error("Daughter's details are required");
          error = true;
        }
        if (error) return false;
      }
    } if (!bloodGroup.trim()) {
      toast.error("Blood group is required");
    } else if (!radio.trim()) {
      toast.error("Please select who is it for.");
    } else if (!ageFrom.trim()) {
      toast.error("From Age is required");
    } else if (!ageTo.trim()) {
      toast.error("To Age is required");
    } else {
      registerEvent();
    }
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesz, setSelectedFilesz] = useState([]);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropIndex, setCropIndex] = useState(null);
  const [isCropDialogOpen, setIsCropDialogOpen] = useState(false);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const currentSelectedFiles = selectedFiles.length;
    const newFilesCount = files.length;
    if (currentSelectedFiles + newFilesCount > 5) {
      alert('You can only upload a maximum of 5 images.');
      return;
    }
    const filePreviews = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setSelectedFiles([...selectedFiles, ...filePreviews]);
  };

  const handleFileChanges = (event) => {
    const filez = Array.from(event.target.files);
    console.log('handleFileChanges_________________2ndinput',filez);
    const currentSelectedFilesz = selectedFilesz.length;
    const newFilesCountz = filez.length;
    if (currentSelectedFilesz + newFilesCountz > 2) {
      alert('You can only upload a maximum of 2 images. Front Image And Back Image only');
      return;
    }
    const filePreviewsz = filez.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setSelectedFilesz([...selectedFilesz, ...filePreviewsz]);
  };
  const handleRemove = (index) => {
    const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newSelectedFiles);
  };
  const handleRemoved = (index) => {
    const newSelectedFilesz = selectedFilesz.filter((_, i) => i !== index);
    setSelectedFilesz(newSelectedFilesz);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Images Uploaded! (not really, but it would if this was on your website)');
  };

  const handleSubmits = (event) => {
    event.preventDefault();
    alert('ID Images Uploaded! (not really, but it would if this was on your website)');
  };
  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCropDialog = (index) => {
    setCropIndex(index);
    setIsCropDialogOpen(true);
  };

  const handleCropSave = async () => {
    const croppedImage = await getCroppedImg(selectedFiles[cropIndex].preview, croppedAreaPixels);
    const newSelectedFiles = selectedFiles.map((file, index) =>
      index === cropIndex ? { ...file, preview: croppedImage } : file
    );
    setSelectedFiles(newSelectedFiles);
    setIsCropDialogOpen(false);
  };
  const registerEvent = async () => {
    formdata.append("profile_created_by_type", "self");
    formdata.append("refrence_by", reference);
    formdata.append("whatsapp_no", whatsapp);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("password_confirmation", password2);
    formdata.append("gender", gender);
    formdata.append("name", name);
    formdata.append("dob", dob);
    formdata.append("age", age);
    formdata.append("birth_place", birthplace);
    formdata.append("birth_time", birthTime);
    formdata.append("height", height);
    formdata.append("weight", weight);
    formdata.append("complexion", complexion);
    formdata.append("education", education);
    formdata.append("profession", profession);
    formdata.append("occupation", occupation);
    formdata.append("religion", religion);
    formdata.append("candidate_community", community_type);
    formdata.append("marital_status", maritalStatus);
    formdata.append("physical_status", physical);
    formdata.append("blood_group", bloodGroup);
    for (let i = 0; i < 5; i++) {
      formdata.append(`partner_hobbies[${i}]`, i);
    }
    formdata.append("candidate_income", "12k");
    formdata.append("candidates_address", "Lorem Ipsum address");
    formdata.append("terms_and_conditions", "1");
    formdata.append("if_nri", "No");
    formdata.append("candidate_visa", "Lorem Ipsum text");
    formdata.append("address_nri_citizen", "Lorem Ipsum text");
    formdata.append("father_name", "Johan Sharma");
    formdata.append("father_profession", " S/W");
    formdata.append("mother_name", "Janki Sharma");
    formdata.append("mother_profession", "Teacher");
    formdata.append("residence_type", "rented");
    formdata.append("gotra", "Lorem Ipsum text");
    formdata.append("family_status", "rich");
    formdata.append("family_type", "modern");
    formdata.append("family_sub_community", "Lorem Ipsum text");
    formdata.append("family_address", "Lorem Ipsum text address");
    formdata.append("brother", "1");
    formdata.append("family_community", "1");
    formdata.append("sister", "1");
    formdata.append(
      "other_family_details",
      "Lorem Ipsum has been the industry's standard dummy text"
    );
    formdata.append("calling_no", "7865432123");
    formdata.append("are_you_manglik", "no");
    formdata.append("partner_age_group_from", "22");
    formdata.append("partner_age_group_to", "23");
    formdata.append("partner_income", "12k");
    formdata.append("partner_country", "India");
    formdata.append("partner_state", "MP");
    formdata.append("partner_city", "Indore");
    formdata.append("partner_education", "MCA");
    formdata.append("partner_occupation", "Bank");
    formdata.append("partner_profession", "Lorem Ipsum text");
    formdata.append("partner_manglik", "no");
    formdata.append("partner_hobbies[]", "2");
    formdata.append("partner_hobbies[]", "3");
    formdata.append("partner_marital_status", "Single");
    formdata.append("astrology_matching", "yes");
    formdata.append(
      "expectation_partner_details",
      "Lorem Ipsum textLorem Ipsum text"
    );
    formdata.append("photo[]", photo);
    formdata.append("id_proof", id);

    for (let [key, value] of formdata.entries()) {
      console.log(`${key}: ${value}`);
    }
        // apis calling
    let config = {
      method: "POST",
      responseType: "json",
      url: "https://api.shreevct.com/api/register",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    };

    axios
      .request(config)
      .then((response) => response.json())
      .then((result) => {
        if (result.data?.status === false) {
          console.log("registerEvent__________>", JSON.stringify(result));
        } else {
          console.log("registerError__________>", JSON.stringify(result));
        }
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message +
          " \n " +
          error?.response?.data?.error_message
        );
        console.log(
          "errorr___________>",
          JSON.stringify(error?.response?.data)
        );
      });
  };

  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const countries = await Country.getAllCountries();
      setCountryData(countries);
      setSelectedCountry(countries[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        const states = await State.getStatesOfCountry(selectedCountry?.isoCode);
        setStateData(states);
        setSelectedState(states[0]);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedCountry && selectedState) {
        const cities = await City.getCitiesOfState(
          selectedCountry?.isoCode,
          selectedState?.isoCode
        );
        setCityData(cities);
        setSelectedCity(cities[0]);
      }
    };
    fetchCities();
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (e) => {
    const selected = countryData.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountry(selected);
  };

  const handleStateChange = (e) => {
    const selected = stateData.find((state) => state.name === e.target.value);
    setSelectedState(selected);
  };

  const handleCityChange = (e) => {
    const selected = cityData.find((city) => city.name === e.target.value);
    setSelectedCity(selected);
  };

  return (
    <>
      <Header />
      <div className="main_container  mx-auto">
        <div className="pmd:mb-[315%] ps:mb-[270%]">
          <div className="first_container">
            <img src="/bannerx.png" alt="" className="w-[100vw]" />
          </div>
          {/* pink box */}

          <div className="justify-center flex align-center items-center">
            <div className="w-3/5 py-8 rounded shadow-xl bg-[#EB2188] -translate-y-[34px] ps:-translate-y-[20px]  ps:w-[90%] ps:py-2">
              <div className="flex justify-center align-center items-center flex-wrap">
                <>
                  <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio1"
                      type="radio"
                      name="radiocheck"
                      style={{ appearance: "none" }}
                      defaultChecked=""
                      value="Digambara"
                    />
                    <label
                      htmlFor="radio1"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm " />
                      Self
                    </label>
                  </div>
                  <div className="flex items-center mr-8  ps:mr-4">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio2"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Son"
                    />
                    <label
                      htmlFor="radio2"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Son
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio3"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Daughter"
                    />
                    <label
                      htmlFor="radio3"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Daughter
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio4"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Brother"
                    />
                    <label
                      htmlFor="radio4"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Brother
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio5"
                      type="radio"
                      name="radiocheck"
                      // className="hidden"
                      style={{ appearance: "none" }}
                      value="Sister"
                    />
                    <label
                      htmlFor="radio5"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Sister
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio6"
                      type="radio"
                      name="radiocheck"
                      style={{ appearance: "none" }}
                      value="Relative"
                    />
                    <label
                      htmlFor="radio6"
                      className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Relative
                    </label>
                  </div>
                  <div className="flex items-center mr-8 ps:mr-4 ">
                    <input
                      required
                      onChange={(e) => handleRadio(e)}
                      id="radio7"
                      type="radio"
                      name="radiocheck"
                      style={{ appearance: "none" }}
                      value="Other"
                    />
                    <label
                      htmlFor="radio7"
                      className="flex items-center text-xl leading-[20px]  text-white cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-sm" />
                      Other
                    </label>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="justify-between flex align-center flex-wrap w-[95%] ps:justify-center ps:w-[100%]">
            <div className="ps:hidden"></div>
            <div className="justify-center flex align-center items-center">
              <p className="text-lg ps:text-sm">
                Already have an account - &nbsp;{" "}
              </p>
              <button
                className="pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                onClick={handleLoginClick}
              >
                Log In
              </button>
            </div>
          </div>

          {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur bg-opacity-50 z-50">
              <div
                ref={popupRef}
                className="bg-white rounded-lg p-6  max-w-lg w-full mx-4"
              >
                <div className="flex pt-[5%] justify-center items-center">
                  <p className="text-2xl text-slate-800 font-bold ps:!text-[16px] pm:text-[20px] pm:font-[550] ">
                    LOG IN
                  </p>
                </div>
                <div className="flex pt-2 pm:!pt-0 pm:!-translate-y-2 justify-center">
                  <img src="/tb.png" className="w-36 ps:pt-2" alt="pic" />
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="px-6 pxs:px-0"
                >
                  <div className="mb-4">
                    <label className="block text-gray-700 mt-[5%] pb-2">
                      Mobile No. / User Id / Email Id
                    </label>
                    <input
                      required
                      onChange={(e) => handleUser(e)}
                      type="text"
                      className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 pb-2">Password</label>
                    <input
                      required
                      onChange={(e) => handlePass(e)}
                      type="text"
                      className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                    />
                    <div className="flex justify-between pt-6">
                      <div className="flex items-center">
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-4 ps:h-4 "
                        />
                        <label
                          htmlFor="link-checkbox"
                          className="ms-2 text-base ps:text-sm text-slate-800"
                        >
                          Remember Me{" "}
                        </label>
                      </div>
                      <a className="text-pink-600 text-base text-right ps:text-sm">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => validateForm2()}
                    type="submit"
                    className="w-full mb-[5%] py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mt-[5%]"
                  >
                    Login
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
                          primary: "pink",
                          secondary: "black",
                        },
                      },
                    }}
                  />
                  <div className="justify-center flex align-center items-center">
                    <p className="text-lg ps:text-sm text-slate-800">
                      Already have an account - &nbsp;{" "}
                    </p>
                    <button
                      className="   pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                      onClick={() => console.log("Register")}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="justify-between flex align-center items-center pt-4">
                    <div></div>
                    <div>
                      <svg
                        width="68"
                        height="45"
                        viewBox="0 0 68 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.212 40H1.064V30.564H2.394L5.418 35.338C6.118 36.444 6.664 37.438 7.112 38.404L7.14 38.39C7.028 37.13 7 35.982 7 34.512V30.564H8.148V40H6.916L3.92 35.212C3.262 34.162 2.632 33.084 2.156 32.062L2.114 32.076C2.184 33.266 2.212 34.4 2.212 35.968V40ZM15.6828 36.836H10.9228C10.9508 38.502 12.0148 39.188 13.2468 39.188C14.1288 39.188 14.6608 39.034 15.1228 38.838L15.3328 39.72C14.8988 39.916 14.1568 40.154 13.0788 40.154C10.9928 40.154 9.74684 38.768 9.74684 36.724C9.74684 34.68 10.9508 33.07 12.9248 33.07C15.1368 33.07 15.7248 35.016 15.7248 36.262C15.7248 36.514 15.6968 36.71 15.6828 36.836ZM10.9368 35.954H14.5348C14.5488 35.17 14.2128 33.952 12.8268 33.952C11.5808 33.952 11.0348 35.1 10.9368 35.954ZM22.6965 36.836H17.9365C17.9645 38.502 19.0285 39.188 20.2605 39.188C21.1425 39.188 21.6745 39.034 22.1365 38.838L22.3465 39.72C21.9125 39.916 21.1705 40.154 20.0925 40.154C18.0065 40.154 16.7605 38.768 16.7605 36.724C16.7605 34.68 17.9645 33.07 19.9385 33.07C22.1505 33.07 22.7385 35.016 22.7385 36.262C22.7385 36.514 22.7105 36.71 22.6965 36.836ZM17.9505 35.954H21.5485C21.5625 35.17 21.2265 33.952 19.8405 33.952C18.5945 33.952 18.0485 35.1 17.9505 35.954ZM28.8842 30.06H30.1162V38.25C30.1162 38.852 30.1302 39.538 30.1722 40H29.0662L29.0102 38.824H28.9822C28.6042 39.58 27.7782 40.154 26.6722 40.154C25.0342 40.154 23.7742 38.768 23.7742 36.71C23.7602 34.456 25.1602 33.07 26.8122 33.07C27.8482 33.07 28.5482 33.56 28.8562 34.106H28.8842V30.06ZM28.8842 37.158V35.982C28.8842 35.828 28.8702 35.618 28.8282 35.464C28.6462 34.68 27.9742 34.036 27.0502 34.036C25.7762 34.036 25.0202 35.156 25.0202 36.654C25.0202 38.026 25.6922 39.16 27.0222 39.16C27.8482 39.16 28.6042 38.614 28.8282 37.69C28.8702 37.522 28.8842 37.354 28.8842 37.158ZM35.1753 30.564H36.3933V34.512H40.9573V30.564H42.1893V40H40.9573V35.576H36.3933V40H35.1753V30.564ZM49.7121 36.836H44.9521C44.9801 38.502 46.0441 39.188 47.2761 39.188C48.1581 39.188 48.6901 39.034 49.1521 38.838L49.3621 39.72C48.9281 39.916 48.1861 40.154 47.1081 40.154C45.0221 40.154 43.7761 38.768 43.7761 36.724C43.7761 34.68 44.9801 33.07 46.9541 33.07C49.1661 33.07 49.7541 35.016 49.7541 36.262C49.7541 36.514 49.7261 36.71 49.7121 36.836ZM44.9661 35.954H48.5641C48.5781 35.17 48.2421 33.952 46.8561 33.952C45.6101 33.952 45.0641 35.1 44.9661 35.954ZM51.2798 40V30.06H52.5118V40H51.2798ZM54.5884 42.772V35.436C54.5884 34.568 54.5604 33.868 54.5324 33.224H55.6384L55.6944 34.386H55.7224C56.2264 33.56 57.0244 33.07 58.1304 33.07C59.7684 33.07 61.0004 34.456 61.0004 36.514C61.0004 38.95 59.5164 40.154 57.9204 40.154C57.0244 40.154 56.2404 39.762 55.8344 39.09H55.8064V42.772H54.5884ZM55.8064 36.08V37.242C55.8064 37.424 55.8344 37.592 55.8624 37.746C56.0864 38.6 56.8284 39.188 57.7104 39.188C59.0124 39.188 59.7684 38.124 59.7684 36.57C59.7684 35.212 59.0544 34.05 57.7524 34.05C56.9124 34.05 56.1284 34.652 55.8904 35.576C55.8484 35.73 55.8064 35.912 55.8064 36.08ZM64.6031 37.312H63.5111L63.4831 36.948C63.3991 36.206 63.6511 35.366 64.3511 34.54C64.9811 33.784 65.3311 33.238 65.3311 32.608C65.3311 31.894 64.8831 31.418 64.0011 31.404C63.4971 31.404 62.9371 31.572 62.5871 31.838L62.2511 30.956C62.7271 30.62 63.5111 30.396 64.2531 30.396C65.8631 30.396 66.5911 31.39 66.5911 32.454C66.5911 33.406 66.0591 34.106 65.3871 34.89C64.7711 35.618 64.5471 36.248 64.5891 36.962L64.6031 37.312ZM64.0291 40.154H64.0151C63.5391 40.154 63.2031 39.776 63.2031 39.286C63.2031 38.768 63.5531 38.404 64.0431 38.404C64.5331 38.404 64.8691 38.768 64.8691 39.286C64.8691 39.776 64.5471 40.154 64.0291 40.154Z"
                          fill="#363636"
                        />
                        <path
                          d="M44.5002 14.2567C44.5002 7.85167 39.5302 3.5 34.0002 3.5C28.5285 3.5 23.5002 7.75833 23.5002 14.3267C22.8002 14.7233 22.3335 15.47 22.3335 16.3333V18.6667C22.3335 19.95 23.3835 21 24.6668 21C25.3085 21 25.8335 20.475 25.8335 19.8333V14.2217C25.8335 9.75333 29.2752 5.845 33.7435 5.71667C34.8371 5.68341 35.9262 5.87001 36.9463 6.2654C37.9665 6.66079 38.8969 7.25694 39.6824 8.01851C40.4679 8.78009 41.0925 9.69159 41.5193 10.699C41.946 11.7064 42.1662 12.7893 42.1668 13.8833V22.1667H34.0002C33.3585 22.1667 32.8335 22.6917 32.8335 23.3333C32.8335 23.975 33.3585 24.5 34.0002 24.5H42.1668C43.4502 24.5 44.5002 23.45 44.5002 22.1667V20.7433C45.1885 20.3817 45.6668 19.67 45.6668 18.83V16.1467C45.6668 15.33 45.1885 14.6183 44.5002 14.2567Z"
                          fill="#EB2188"
                        />
                        <path
                          d="M30.5002 16.3333C31.1445 16.3333 31.6668 15.811 31.6668 15.1667C31.6668 14.5223 31.1445 14 30.5002 14C29.8558 14 29.3335 14.5223 29.3335 15.1667C29.3335 15.811 29.8558 16.3333 30.5002 16.3333Z"
                          fill="#EB2188"
                        />
                        <path
                          d="M37.5002 16.3333C38.1445 16.3333 38.6668 15.811 38.6668 15.1667C38.6668 14.5223 38.1445 14 37.5002 14C36.8558 14 36.3335 14.5223 36.3335 15.1667C36.3335 15.811 36.8558 16.3333 37.5002 16.3333Z"
                          fill="#EB2188"
                        />
                        <path
                          d="M41 12.8683C40.7219 11.2282 39.8724 9.73929 38.6019 8.66528C37.3314 7.59126 35.722 7.00137 34.0584 7C30.5234 7 26.72 9.92833 27.0234 14.525C28.462 13.9363 29.7327 13.0007 30.722 11.8017C31.7113 10.6028 32.3886 9.1776 32.6934 7.65333C34.2217 10.7217 37.36 12.8333 41 12.8683Z"
                          fill="#EB2188"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          <section className="w-5/6 mx-auto">
            <div className=" flex pt-[3%] ps:pt-[10%] justify-center items-center">
              <p className="text-4xl ps:!text-[16px] pm:text-[20px] pm:font-[550] font-semibold ">
                CREATE PROFILE on VCT
              </p>
            </div>
            <div className="flex pt-4 pm:!pt-0 pm:!-translate-y-2 justify-center">
              <img src="/tb.png" className="ps:w-28 " />
            </div>
            <div className=" flex pt-[1%]  justify-center items-center">
              <p className=" ps:!text-[14px] pm:text-[20px] pm:font-[550] font-semibold ">
                All Fields with <span className="text-pink-600">*</span> are
                mandatory
              </p>
            </div>

            <div className="flex justify-center align-center items-center mx-auto ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[90%] ps:w-[100%]"
              >
                <div className="bg-white  rounded pt-8  flex flex-col ">
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        User Basic Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Reference By<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        options={Reference}
                        required
                        className="text-gray-600 border border-gray-400 mt-2"
                        onChange={(e) => handleReference(e)}
                        placeholder=""
                        id="company"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Whatsapp No.<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleWhatsappNo(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Email Id<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleEmail(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlePassword(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Re-Type Password<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlePassword2(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        User Personal Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="gender"
                      >
                        Gender<span className="text-red-500">*</span>
                      </label>
                      <Select
                        onChange={(e) => handleGender(e)}
                        options={Gender}
                        placeholder=" "
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleName(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Date of birth<span className="text-red-500 ">*</span>
                      </label>
                      {/*  <div>
                        <DatePicker
                          id="dob"
                          selected={dob}
                          onChange={(date) => handleDOB(date)}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="dd-mm-yyyy"
                          className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        />
                      </div> */}

                      <div className="relative max-w-sm">
                        <input
                          placeholder="Select date"
                          type="date" 
                          value={formattedDob}
                          onChange={handleDOB}
                          className="border-[3px] ps:w-full w-[250px] border-gray-300 text-gray-700 text-sm rounded mt-2 focus:ring-pink-500 focus:border-pink-500 block ps-10 p-[6px]"
                        />
                      </div>

                      <div></div>
                    </div>

                    <div className="md:w-1/4 ps:px-0 ps:w-full px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Age<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        value={age}
                        disabled
                        onChange={handleAge}
                        className="w-full text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="age"
                        type="text"
                        readOnly
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Birth Place <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleBirthplace(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Birth Time<span className="text-red-500 ">*</span>
                      </label>

                      <input
                        id="appt-time"
                        required
                        onChange={(e) => handleBirthTime(e)}
                        className=" border-[3px] w-full border-gray-300 text-gray-700 text-sm rounded mt-2 focus:ring-pink-500 focus:border-pink-500 block py-[6px] ps-10  "
                        type="time"
                        name="appt-time"
                        step="2"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Height<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleHeight(e)}
                        options={Heights}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleHeight(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Weight<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleWeight(e)}
                        options={Weights}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleWeight(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Complexion<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleComplexion(e)}
                        options={complexation}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleComplexion(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Blood Group<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handleBloodGroup(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={optionstwo}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education <span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={_education}
                        required
                        className="text-gray-600 border border-gray-400 mt-2"
                        onChange={(e) => handleEducation(e)}
                        placeholder=""
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handleProfession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handleProfession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full  ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleOccupation(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6"></div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlemaritalStatus(e)}
                        options={Marital_status}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Physical Status<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        required
                        options={Income}
                        onChange={(e) => handlePhysical(e)}
                        className="text-gray-600 border border-gray-400 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>{" "}
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Candidate Income<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handleNetIncome(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={Income}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  </div>




                  {maritalStatus !== "Unmarried" && maritalStatus !== "" && (
                    <div className="ps:px-0 px-3 mb-6">
                      <label
                        className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Do you have any children?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Select
                        required
                        onChange={(e) => handleChildren(e)}
                        options={matching}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  )}
                    {maritalStatus !== "Unmarried" &&
                      maritalStatus !== "" &&
                    children === "Yes" && (
                      <div className=" md:flex mb-6">
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="company"
                          >
                            Son Details<span className="text-red-500 ">*</span>
                          </label>
                          <textarea
                            required
                            onChange={(e) => handleSon(e)}
                            className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                            id="message"
                            type="text"
                          />
                          <div></div>
                        </div>
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="company"
                          >
                            Daughter Details
                            <span className="text-red-500 ">*</span>
                          </label>
                          <textarea
                            required
                            onChange={(e) => handleDaughter(e)}
                            className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mt-2 mb-3"
                            id="message"
                            type="text"
                          />
                          <div></div>
                        </div>
                      </div>
                    )}

                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Candidate Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handleAddress(e)}
                      className="w-full  px-4  text-blue-900 border-2 border-[#bcbcbc] bg-transparent outline outline-0 transition-all placeholder-shown:border focus:border-[3px] focus:border-pink-500 focus:outline-0 rounded mt-2"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>

                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      If NRI <span className="text-red-500 ">*</span>
                    </label>

                    <div className=" flex align-center items-center">
                      <div className=" py-2 rounded shadow-xl bg-[#EB2188] px-4 ">
                        <div className="flex  align-center items-center ">
                          <div className="flex items-center mr-8 ps:mr-4 align-center justify-center">
                            <input
                              required
                              onChange={(e) => handleNRI(e)}
                              id="yes"
                              type="radio"
                              name="radio"
                              className="hidden"
                              defaultChecked=""
                              value="Yes"
                            />

                            <label
                              htmlFor="yes"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer  "
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ps:text-[12px] " />
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-8  ps:mr-4">
                            <input
                              required
                              onChange={(e) => handleNRI(e)}
                              id="no"
                              type="radio"
                              name="radio"
                              className="hidden"
                              value="No"
                            />
                            <label
                              htmlFor="no"
                              className="flex items-center text-xl leading-[20px] text-white cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey " />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isNRI === "Yes" ? (
                    <>
                      <div className="md:flex mb-6">
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="candidateVisa" // Unique ID for the label
                          >
                            Candidate Visa
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            onChange={(e) => handleVisa(e)}
                            className="w-full  px-4  text-blue-900 border-2 border-[#bcbcbc] bg-transparent outline outline-0 transition-all placeholder-shown:border focus:border-[3px] focus:border-pink-500 focus:outline-0 rounded mt-2"
                            id="candidateVisa" // Unique ID for the textarea
                            type="text"
                          />
                          <div></div>
                        </div>
                        <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                          <label
                            className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                            htmlFor="nriAddress" // Unique ID for the label
                          >
                            Address (NRI Citizen)
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            onChange={(e) => handleNRIAddress(e)}
                            className="w-full  px-4  text-blue-900 border-2 border-[#bcbcbc] bg-transparent outline outline-0 transition-all placeholder-shown:border focus:border-[3px] focus:border-pink-500 focus:outline-0 rounded mt-2"
                            id="nriAddress" // Unique ID for the textarea
                            rows="2"
                            type="text"
                          />
                          <div></div>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Family Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlefName(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Father Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlefprofession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handlefprofession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mother Name<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlemname(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Mother Profession
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        // defaultValue={selectedOption}
                        onChange={(e) => handlemprofession(e)}
                        options={Profession}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      {/* <input
                        required
                        onChange={(e) => handlemprofession(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 mt-2 mt-2"
                        id="company"
                        type="text"
                      /> */}
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Residence Type<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family_Type}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Gotra<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlegotra(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Family Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family_Status}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/4 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Family Type<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlResidence(e)}
                        options={Family}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Community<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        required
                        onChange={(e) => handleCommunity(e)}
                        options={Community}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sub Community<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlesub_community(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Family Address <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handlefamily_address(e)}
                      className="w-full  px-4  text-blue-900 border-2 border-[#bcbcbc] bg-transparent outline outline-0 transition-all placeholder-shown:border focus:border-[3px] focus:border-pink-500 focus:outline-0 rounded mt-2"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>
                  <div className=" md:flex mb-3">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Siblings Details -
                      </label>

                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:w-full  ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Brother<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleBrother(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full  ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2 mt-2"
                        htmlFor="company"
                      >
                        Sister<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleSister(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full  ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="message"
                      >
                        Other Family Details{" "}
                        <span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handleFamily_detailes(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="message"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlemanglik(e)}
                        // defaultValue={selectedOption}
                        // onChange={setSelectedOption}
                        options={manglik}
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Phone Number<span className="text-red-500 ">*</span>
                      </label>
                      <input
                        required
                        onChange={(e) => handlephone(e)}
                        className="w-full  text-gray-600 border border-gray-400 rounded py-[5.5px] px-4 mb-3 mt-2"
                        id="company"
                        type="text"
                      />
                      <div></div>
                    </div>
                  </div>

                  <label
                    className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                    htmlFor="company"
                  >
                    Photo<span className="text-red-500 ">*</span>{" "}
                    <span className="text-slate-400">
                      ( Face should be near )
                    </span>
                  </label>




                  <div className="container mx-auto my-5 p-5">
                    <div className="flex flex-wrap">
                      <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex flex-col justify-start w-full border-2 border-gray-300 mb-5">
                          <label htmlFor="upload-img" className="w-1/4 cursor-pointer">
                            <div className="bg-pink-600 text-white text-center py-2 px-4 rounded">
                              Choose Files
                            </div>
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            name="images[]"
                            multiple
                            id="upload-img"
                            onChange={handleFileChange}
                          />
                        </div>
                        {selectedFiles.length > 0 && (
                          <div className="bg-gray-100 border border-gray-300 rounded p-4">
                            <div className="font-bold mb-4">{selectedFiles.length} Total Images Selected</div>
                            <div className="flex flex-wrap -m-2">
                              {selectedFiles.map((file, index) => (
                                <div key={index} className="relative m-2 wrapper-thumb">
                                  <img
                                    src={file.preview}
                                    alt={`Preview ${index}`}
                                    className="img-preview-thumb"
                                  />
                                  <button
                                    type="button"
                                    className="absolute right-2 p-1 -top-1 remove-btn bg-red-600 text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                    onClick={() => handleRemove(index)}
                                  >
                                    &times;
                                  </button>
                                  <button
                                    type="button"
                                    className="mt-2 w-full px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300"
                                    onClick={() => showCropDialog(index)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <button
                          type="submit"
                          className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 hidden"
                        >
                          Upload
                        </button>
                      </form>
                    </div>

                    <Dialog open={isCropDialogOpen} onClose={() => setIsCropDialogOpen(false)}>
                      <DialogTitle className="text-white bold bg-pink-600">Crop Image</DialogTitle>
                      <DialogContent>
                        <div style={{height:300,width:450}} className="crop-container">
                          <Cropper
                            image={cropIndex !== null ? selectedFiles[cropIndex].preview : null}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={handleCropComplete}
                          />
                        </div>
                        <Slider
                          value={zoom}
                          min={1}
                          max={3}
                          step={0.1}
                          aria-labelledby="Zoom"
                          onChange={(e, zoom) => setZoom(zoom)}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setIsCropDialogOpen(false)} color="secondary">
                          Cancel
                        </Button>
                        <Button onClick={handleCropSave} color="primary">
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>


                  <label
                    className=" tracking-wide pt-8 text-gray-600 text-sm
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    Id Proof<span className="text-red-500 ">*</span>
                    <span className="text-slate-400">
                      {" "}
                      ( Adhar Card, PAN Card, Voter Id, Driving Licence, COVID,
                      Ayushman, Religion Id. ){" "}
                    </span>
                  </label>

                  <div className="container mx-auto my-5 p-5">
                    <div className="flex flex-wrap">
                      <form onSubmit={handleSubmits} className="w-full">
                        <div className="flex flex-col  justify-start w-full  border-2 border-gray-300 mb-5">
                          <label htmlFor="upload-imgs" className="w-1/4 cursor-pointer">
                            <div className="bg-pink-600 text-white text-center py-2 px-4 rounded">
                              Choose Files
                            </div>
                          </label>
                          <input
                            type="file"
                            className="hidden"
                            name="images[]"
                            multiple
                            id="upload-imgs"
                            onChange={handleFileChanges}
                          />
                        </div>
                        {selectedFilesz.length > 0 && (
                          <div className="bg-gray-100 border border-gray-300 rounded p-4">
                            <div className="font-bold mb-4">{selectedFilesz.length} Total Images Selected</div>
                            <div className="flex flex-wrap -m-2">
                              {selectedFilesz.map((filez, index) => (
                                <div key={index} className="relative m-2 wrapper-thumb">
                                <img
                                  src={filez.preview}
                                  alt={`Preview ${index}`}
                                  className="img-preview-thumb"
                                />
                                <button
                                  type="button"
                                  className="absolute right-2 p-1 -top-1 remove-btn bg-red-600 text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                                  onClick={() => handleRemove(index)}
                                >
                                  &times;
                                </button>
                                <button
                                  type="button"
                                  className="mt-2 w-full px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300"
                                  onClick={() => showCropDialog(index)}
                                >
                                  Edit
                                </button>
                              </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <button type="submit" className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 hidden">
                          Upload
                        </button>
                      </form>
                    </div>
                  </div>

                  <label
                    className=" tracking-wide pt-2 text-gray-600 text-xs
                     font-bold mb-2"
                    htmlFor="company"
                  >
                    <span className="text-red-500 ">
                      NOTE_ Without ID’s Proof Account can not be verified.
                    </span>
                  </label>
                  <div className=" md:flex mb-3 pt-8">
                    <div className="md:w-1/2 ps:px-0 px-3  md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-base font-bold "
                        htmlFor="company"
                      >
                        Partner Preference -
                      </label>

                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Age Group<span className="text-red-500 ">*</span>
                      </label>

                      <div className="flex flex-wrap pt-4">
                        <div className="flex w-1/2 justify-center align-center items-center text-center ps:w-full ps:pb-2 ">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            From:{" "}
                          </span>
                          <Select
                            onChange={(e) => handleAgeFrom(e)}
                            // defaultValue={selectedOption}
                            // onChange={setSelectedOption}
                            options={agefrom}
                            name="field_name"
                            className="text-gray-600 border border-gray-400 text-sm font-bold  w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>{" "}
                        <div className="flex  w-1/2 justify-center align-center text-center  items-center ps:w-full ps:pb-2">
                          <span className="text-sm  font-semibold  px-2 text-slate-700">
                            To:
                          </span>
                          <Select
                            onChange={(e) => handleAgeTo(e)}
                            options={ageto}
                            name="field_name"
                            className="text-gray-600 border border-gray-400 text-sm font-bold  w-full"
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="md:w-1/2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Income<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartnerIncome(e)}
                        options={Income}
                        placeholder=""
                        className="text-gray-600 border border-gray-400  mt-4"
                      />

                      <div></div>
                    </div>
                  </div>
                  <div className="md:flex mb-6">
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="country"
                      >
                        Country
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="country"
                        value={selectedCountry?.name}
                        onChange={handleCountryChange}
                        className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
                      >
                        {countryData.map((country) => (
                          <option key={country.isoCode} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="state"
                      >
                        State<span className="text-red-500">*</span>
                      </label>
                      <select
                        id="state"
                        value={selectedState?.name}
                        onChange={handleStateChange}
                        className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
                      >
                        {stateData.map((state) => (
                          <option key={state.isoCode} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className="tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="city"
                      >
                        City<span className="text-red-500">*</span>
                      </label>
                      <select
                        id="city"
                        value={selectedCity?.name}
                        onChange={handleCityChange}
                        className="w-full text-gray-600 border-[3px] border-gray-300 focus:border-pink-400  rounded py-3 px-4 mb-3 mt-2"
                      >
                        {cityData.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      <div></div>
                    </div>
                  </div>

                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Education<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={_education}
                        required
                        className="text-gray-600 border border-gray-400 mt-2"
                        onChange={(e) => handlePartner_Education(e)}
                        placeholder=""
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Occupation<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={_education}
                        required
                        className="text-gray-600 border border-gray-400 mt-2"
                        onChange={(e) => handlepartner_Occupation(e)}
                        placeholder=""
                      />

                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Profession<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        onChange={(e) => handlepartner_Profession(e)}
                        options={Profession}
                        required
                        className="text-gray-600 border border-gray-400 mt-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className=" md:flex mb-6">
                    <div className="md:w-1/3 ps:w-full mt-2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Manglik<span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartner_manglik(e)}
                        options={manglik}
                        placeholder=""
                        className="text-gray-600 border border-gray-400 mt-2"
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full mt-2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Astrology Matching
                        <span className="text-red-500 ">*</span>
                      </label>
                      <Select
                        onChange={(e) => handlePartnerAstrology(e)}
                        options={matching}
                        className="text-gray-600 border border-gray-400 mt-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                    <div className="md:w-1/3 ps:w-full mt-2 ps:px-0 px-3 mb-6 md:mb-0">
                      <label
                        className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Mariatal Status<span className="text-red-500 ">*</span>
                      </label>

                      <Select
                        onChange={(e) => handlePartner_maritalStatus(e)}
                        options={Marital_status}
                        className="text-gray-600 border border-gray-400 mt-2"
                        placeholder=""
                      />
                      <div></div>
                    </div>
                  </div>

                  <div className=" ps:px-0 px-3 mb-6">
                    <label
                      className=" tracking-wide text-gray-600 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Expectation Partner Details
                      <span className="text-red-500 ">*</span>
                    </label>
                    <textarea
                      onChange={(e) => handlepartner_expectation(e)}
                      className="w-full  px-4  text-blue-900 border-2 border-[#bcbcbc] bg-transparent outline outline-0 transition-all placeholder-shown:border focus:border-[3px] focus:border-pink-500 focus:outline-0 rounded mt-2"
                      id="message"
                      type="text"
                    />
                    <div></div>
                  </div>

                  <div></div>

                  <div className="flex items-center">
                    <input
                      required
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-7 ps:h-4"
                    />
                    <label htmlFor="link-checkbox" className="ms-2">
                      Terms and Conditions of services provided by VCT Powered
                      by Prem Rishtey Service Pvt Ltd.
                    </label>
                  </div>

                  <div className="flex justify-center py-4 mt-[5%]">
                    <button
                      className="w-48 ps:w-36   pm:py-1 pm:!text-[14px] text-lg font-bold ps:!text-[16px]  py-2 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                      onClick={registerEvent}
                    >
                      Register Now
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
                            primary: "pink",
                            secondary: "black",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
