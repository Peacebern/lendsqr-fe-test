// /* eslint-disable testing-library/prefer-screen-queries */
// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import UserCard from './UserCard';
// import { USER } from 'components/types/user.tsx';

// const user: USER = {
//     id: "1",
//   profile: {
//     firstName: 'John',
//     lastName: 'Doe',
//     avatar: 'avatar.jpg',
//     bvn: '12345678901'
//   },
//   accountNumber: '1234567890',
//   accountBalance: '1000000',
//   createdAt: new Date()
// };

// const onButtonClick = jest.fn();

// describe('UserCard component', () => {
//   afterEach(cleanup);

//   it('renders correctly', () => {
//     const { asFragment } = render(<UserCard user={user} active={1} onButtonClick={onButtonClick} />);
//     expect(asFragment()).toMatchSnapshot();
//   });

//   it('should render the user name and account number correctly', () => {
//     const { getByText } = render(
//       <UserCard
//         active={1}
//         user={user}
//         onButtonClick={onButtonClick}
//       />
//     );
//     const name = getByText(`${user.profile.firstName} ${user.profile.lastName}`);
//     const accountNumber = getByText(`${user.accountNumber}`);
//     expect(name).toBeInTheDocument();
//     expect(accountNumber).toBeInTheDocument();
//   });
// });

/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserCard from './UserCard';
import { USER } from 'components/types/user.tsx';

const user: USER = {
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
};

const onButtonClick = jest.fn();

describe('UserCard component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<UserCard user={user} active={1} onButtonClick={onButtonClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the user full name and phone number correctly', () => {
    const { getByText } = render(
      <UserCard
        active={1}
        user={user}
        onButtonClick={onButtonClick}
      />
    );

    const name = getByText(`${user.firstName} ${user.lastName}`);
    const phoneNumber = getByText(user.phoneNumber);

    expect(name).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
  });
});
