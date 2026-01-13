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
