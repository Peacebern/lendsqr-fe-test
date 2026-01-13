
# Lendsqr Frontend Dashboard (Assessment Submission)

# Overview

This project is a frontend implementation of an internal admin/dashboard interface, modeled after the Lendsqr Admin Console. It was built as a technical assessment to demonstrate frontend engineering fundamentals: structure, component design, data presentation, and decision-making.



## Author

- [@Peacebern](https://github.com/peacebern)


## Optimizations

Utilized cust hooks to Improve Perfomance e.g using the useMemo hook to handle the table pagination improved the performance by 100%.


## Demo
![Alt text](src/assets/screenshot/peace-oluchi-okeke-lendsqr-assessment.png)


# Tech Stack

* React – Component-driven UI development

* TypeScript – Type safety and clearer contracts

* Vite – Fast development and modern tooling

* SCSS / CSS Modules – Scoped, maintainable styling

* React Router – Client-side navigation

* Mock data – Used to simulate backend responses

# Reason for this stack
This mirrors a common production setup for internal dashboards: React for flexibility, TypeScript for safety, and scoped styles to avoid UI regressions as the app grows. 

## PROJECT STRUCTURE

src/
├── assets/        # Images and static assets
├── components/    # Reusable UI components
├── pages/         # Route-level views
├── routes/        # Route configuration
├── styles/        # Global and modular styles
├── types/         # Shared TypeScript types
├── utils/         # Helpers and mock data
├── App.tsx        # Root component & layout
└── main.tsx       # Application entry point

## Application Flow

* The app boots from main.tsx

* App.tsx defines global layout and routing

* Each page represents a major admin view (Dashboard, Users, User Details)

* Reusable components handle tables, cards, and layout primitives

* Data is currently mocked to reflect realistic API responses

## Running this Project
npm install
npm run dev

## User Data Generation and Upload

During development, I needed **500 users** for testing. MockyAPI only allowed **100 users per request**, so I created an **automated workflow** to generate and upload users efficiently.

![Data Generation and Upload Workflow](/src/assets/screenshot/mockapi.png)

Workflow steps:

1. Generate users (`node generate-users.js`) → produces `users-data.json`  
2. Upload users (`node upload-users.js`) → posts to MockyAPI  
3. Repeat as needed for more users  

This ensures consistent, realistic datasets while overcoming API limitations.

---

### Scripts

<details>
<summary><strong>generate-users.js</strong></summary>

```javascript
import fs from "fs";

const firstNames = ["Grace","Debby","Tosin","Tunde","Chinedu","Zainab"];
const lastNames = ["Effiom","Ogana","Olanrewaju","Adeyinka","Okonkwo","Mohammed"];
const companies = ["FinTech Solutions","Tech Innovations","Digital Ventures","Data Systems"];
const genders = ["Male","Female"];
const statuses = ["Active","Inactive","Pending","Blacklisted"];
const maritalStatuses = ["Single","Married","Divorced"];
const educationLevels = ["B.Sc","M.Sc","MBA"];
const employmentStatuses = ["Employed","Self Employed","Unemployed"];
const sectors = ["FinTech","Technology","Healthcare"];
const residenceTypes = ["Parent's Apartment","Self Owned","Rented Apartment"];

// Utility functions
function generatePhone() { return "080" + Math.floor(Math.random()*100000000); }
function generateBVN() { return Math.floor(Math.random()*10000000000).toString().padStart(11,"0"); }
function generateEmail(first,last){return `${first.toLowerCase()}.${last.toLowerCase()}@example.com`; }
function generateUsername(first,last){return `${first.toLowerCase()}${last.toLowerCase()}${Math.floor(Math.random()*100)}`; }
function generateLSQRID(){return "LSQR" + Math.floor(Math.random()*1000000).toString().padStart(6,"0"); }
function generateTier(){const stars=Math.floor(Math.random()*5)+1; return "★".repeat(stars) + "☆".repeat(5-stars);}

// Generate a single user
function generateUser(id){
  const first = firstNames[Math.floor(Math.random()*firstNames.length)];
  const last = lastNames[Math.floor(Math.random()*lastNames.length)];
  const phone = generatePhone();
  const email = generateEmail(first,last);

  return {
    id,
    lsqrId: generateLSQRID(),
    firstName: first,
    lastName: last,
    username: generateUsername(first,last),
    email,
    phoneNumber: phone,
    status: statuses[Math.floor(Math.random()*statuses.length)],
    tier: generateTier(),
    gender: genders[Math.floor(Math.random()*genders.length)],
    maritalStatus: maritalStatuses[Math.floor(Math.random()*maritalStatuses.length)],
    education: educationLevels[Math.floor(Math.random()*educationLevels.length)],
    employmentStatus: employmentStatuses[Math.floor(Math.random()*employmentStatuses.length)],
    sector: sectors[Math.floor(Math.random()*sectors.length)],
    residence: residenceTypes[Math.floor(Math.random()*residenceTypes.length)],
    organization: companies[Math.floor(Math.random()*companies.length)],
  };
}

// Generate 100 users
const users = [];
for(let i=1;i<=100;i++){users.push(generateUser(i));}
fs.writeFileSync("users-data.json",JSON.stringify(users,null,2));
console.log("✅ Generated 100 users and saved to users-data.json");

</details> <details> <summary><strong>upload-users.js</strong></summary>
const axios = require("axios");
const users = require("./users-data.json"); // Generated file

const API_URL = "https://69653c4ee8ce952ce1f498f3.mockapi.io/lendsqr/api/v1/users";

async function uploadUsers(){
  for(const user of users){
    try{
      await axios.post(API_URL,user);
      console.log(`Uploaded user: ${user.firstName} ${user.lastName}`);
    } catch(err){
      console.error("Error uploading user:", err.response?.data || err.message);
    }
  }
}

uploadUsers();

</details> ```

## Project Best Practices

- Keep a well-organized folder structure
- Maintain a consistent import order
- Follow clear naming conventions
- Enforce code quality with a linter
- Leverage snippet libraries for efficiency
- Style components using SCSS
- Avoid creating unnecessary components


## Features

- Live previews
- Fullscreen mode
- Cross platform
- user management


## How to Navigate the Codebase

* Start here: src/main.tsx

* Then: src/App.tsx for layout and routing

* Pages: src/pages/
* Reusable components: src/components/
