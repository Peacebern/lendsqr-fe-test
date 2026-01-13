// interface EDUCATION {
//   level?: string;
//   employmentStatus?: string;
//   sector?: string;
//   duration?: string;
//   officeEmail?: string;
//   monthlyIncome?: Array<string>;
//   loanRepayment?: string;
// }

// interface SOCIALS {
//   twitter?: string;
//   facebook?: string;
//   instagram?: string;
// }

// interface GUARANTOR {
//   firstName?: string;
//   lastName?: string;
//   phoneNumber?: string;
//   emailaddress?: string;
//   gender?: string;
//   address?: string;
// }

// export interface PROFILE {
//   firstName?: string;
//   lastName?: string;
//   phoneNumber?: string;
//   avatar?: string;
//   gender?: string;
//   bvn?: string;
//   address?: string;
//   currency?: string;
// }

// export interface USER {
//   createdAt: Date;
//   orgName?: string;
//   userName?: string;
//   email?: string;
//   lastActiveDate?: Date;
//   profile?: Profile;
//   guarantor?: GUARANTOR;
//   accountBalance?: string;
//   accountNumber?: string;
//   socials?: SOCIALS;
//   education?: EDUCATION;
//   id: string;
// }

export interface USER {
  id: string;
  lsqrId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  dateJoined: string;
  status: string;
  tier: string;
  accountBalance: string;
  organization: string;

  profile: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };

  education: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
    address: string;
    gender: string;
  };
}
