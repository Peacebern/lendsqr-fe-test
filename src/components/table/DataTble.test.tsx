// /* eslint-disable testing-library/prefer-screen-queries */
// import React from "react";
// import { render } from "@testing-library/react";
// import DataTable from "./DataTable";
// import { USER } from 'components/types/user.tsx';
// import {BrowserRouter as Router} from "react-router-dom"

// const data: USER[] = [
//   {
//     id: "1",
//     orgName: "org1",
//     userName: "user1",
//     email: "user1@email.com",
//     profile: { phoneNumber: "111-111-1111" },
//     createdAt: new Date(),
//   },
//   {
//     id: "2",
//     orgName: "org2",
//     userName: "user2",
//     email: "user2@email.com",
//     phoneNumber: "222-222-2222" ,
//     createdAt: new Date(),
//   },
// ];

// describe("DataTable", () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//       });

//   it("renders the table correctly", () => {
//     const { getByText } = render(
//       <Router>
//         <DataTable data={data} />
//       </Router>
//     );
//     expect(getByText(data[0].orgName as string)).toBeInTheDocument();
//     expect(getByText(data[0].userName as string)).toBeInTheDocument();
//     expect(getByText(data[0].email as string)).toBeInTheDocument();
//     expect(getByText(data[0].profile.phoneNumber)).toBeInTheDocument();
//     expect(getByText(data[1].orgName as string)).toBeInTheDocument();
//     expect(getByText(data[1].userName as string)).toBeInTheDocument();
//     expect(getByText(data[1].email as string)).toBeInTheDocument();
//     expect(getByText(data[1].profile.phoneNumber)).toBeInTheDocument();
//   });
// });


/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./DataTable";
import { USER } from 'components/types/user.tsx';
import { BrowserRouter as Router } from "react-router-dom";

// Updated test data matching USER type
const data: USER[] = [
  {
    id: "1",
    lsqrId: "LSQR001",
    firstName: "Grace",
    lastName: "Mbeki",
    email: "grace.mbeki@lendsqr.com",
    phoneNumber: "03099663811",
    username: "gracembeki61",
    dateJoined: "08 Mar 2022 00:00:00 AM",
    status: "Active",
    tier: "★☆☆☆☆",
    accountBalance: "₦4,427,362.00",
    organization: "Real Estate Co",
    profile: {
      fullName: "Grace Mbeki",
      phoneNumber: "03099663811",
      emailAddress: "grace.mbeki@lendsqr.com",
      bvn: "61540750936",
      gender: "Female",
      maritalStatus: "Married",
      children: "3",
      typeOfResidence: "Self Owned"
    },
    education: {
      levelOfEducation: "HND",
      employmentStatus: "Employed",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "16 years",
      officeEmail: "grace@designstudio.com",
      monthlyIncome: ["308.27", "393.15"],
      loanRepayment: "₦35,168.00"
    },
    socials: {
      twitter: "@grace_609",
      facebook: "Grace Mbeki",
      instagram: "@gracembeki"
    },
    guarantor: {
      fullName: "Tiwa Olanrewaju",
      phoneNumber: "02018375039",
      emailAddress: "tiwa.olanrewaju@outlook.com",
      relationship: "Parent",
      address: "Lagos, Nigeria",
      gender: "Female"
    }
  }
];

describe("DataTable", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table correctly", () => {
    const { getByText } = render(
      <Router>
        <DataTable data={data} />
      </Router>
    );

    const user = data[0];

    expect(getByText(user.profile.fullName)).toBeInTheDocument();
    expect(getByText(user.profile.phoneNumber)).toBeInTheDocument();
    expect(getByText(user.profile.emailAddress)).toBeInTheDocument();
    expect(getByText(user.username)).toBeInTheDocument();
    expect(getByText(user.organization)).toBeInTheDocument();
    expect(getByText(user.accountBalance)).toBeInTheDocument();
  });
});
