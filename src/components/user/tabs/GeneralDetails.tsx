import { USER } from 'components/types/user';

const GeneralDetails = ({ user }: { user: USER }) => {
  return (
    <div className="general-details">
      <div className="slot">
        <h1>Personal Information</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"levelofeducation"}>full name</label>
            <p id="fullname">{user.profile?.fullName}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"phonenumber"}>phone number</label>
            <p id="phonenumber">{user.profile?.phoneNumber}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"emailaddress"}>email address</label>
            <p id="emailaddress">{user.email}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"bvn"}>bvn</label>
            <p id="bvn">{user.profile?.bvn}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"gender"}>gender</label>
            <p id="gender">{user.profile?.gender}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"maritalStatus"}>marital status</label>
            <p id="maritalStatus">{user.profile?.maritalStatus}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"children"}>children</label>
            <p id="children">{user.profile?.children}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"typeOfResidence"}>type of residence</label>
            <p id="typeOfResidence">{user.profile?.typeOfResidence}</p>
          </div>

        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>education and employment</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"levelofeducation"}>level of education</label>
            <p id="levelofeducation">
              {user.education?.levelOfEducation}
            </p>
          </div>
          <div className="infoslot">
            <label htmlFor={"employmentstatus"}>Employment Status</label>
            <p id="employmentstatus">
              {user.education?.employmentStatus}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"sectorofemployment"}>Sector of Employment</label>
            <p id="sectorofemployment">
              {user.education?.sectorOfEmployment}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"durationofemployment"}>
              Duration of Employment
            </label>
            <p id="durationofemployment">
              {user.education?.durationOfEmployment}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"officeemail"}>Office Email</label>
            <p id="officeemail">
              {user.education?.officeEmail}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"monthlyincome"}>monthly income</label>
            <p id="monthlyincome">
              ₦{user.education?.monthlyIncome && user.education?.monthlyIncome[0]}
              -
              ₦{user.education?.monthlyIncome && user.education?.monthlyIncome[1]}
            </p>
          </div>

          <div className="infoslot">
            <label htmlFor={"loanrepayment"}>loan repayment</label>
            <p id="loanrepayment">
              {user.education?.loanRepayment}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>socials</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"twitter"}>twitter</label>
            <p id="twitter">{user.socials?.twitter}</p>
          </div>

          <div className="infoslot">
            <label htmlFor={"facebook"}>facebook</label>
            <p id="facebook">{user.socials?.facebook}</p>
          </div>

          <div className="infoslot">
            <label htmlFor={"instagram"}>instagram</label>
            <p id="instagram">{user.socials?.instagram}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="slot">
        <h1>guarantor</h1>

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"guarantor_fullname"}> full name</label>
            <p id="guarantorfullName">
              {user.guarantor?.fullName}
            </p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_phonenumber"}>
              phone number
            </label>
            <p id="guarantor_phonenumber">{user.guarantor?.phoneNumber}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_emailaddress"}>
              email address
            </label>
            <p id="guarantor_address">{user.guarantor?.emailAddress}</p>
          </div>
          
           <div className="infoslot">
            <label htmlFor={"guarantor_relationship"}>
              relationship
            </label>
            <p id="guarantor_relationship">{user.guarantor?.relationship}</p>
          </div>
        </div>
      </div>
      <hr />
       <div className="slot">
        {/* <h1>guarantor</h1> */}

        <div className="informations">
          <div className="infoslot">
            <label htmlFor={"guarantor_fullname"}> full name</label>
            <p id="guarantorfullName">
              {user.guarantor?.fullName}
            </p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_phonenumber"}>
              phone number
            </label>
            <p id="guarantor_phonenumber">{user.guarantor?.phoneNumber}</p>
          </div>
          <div className="infoslot">
            <label htmlFor={"guarantor_emailaddress"}>
              email address
            </label>
            <p id="guarantor_address">{user.guarantor?.emailAddress}</p>
          </div>
          
           <div className="infoslot">
            <label htmlFor={"guarantor_relationship"}>
              relationship
            </label>
            <p id="guarantor_relationship">{user.guarantor?.relationship}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralDetails;
