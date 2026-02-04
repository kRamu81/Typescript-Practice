import React from "react";

type StatusProps = {
  isLoggedIn: boolean;
};

const Status: React.FC<StatusProps> = ({ isLoggedIn }) => {
  return (
    <>
    <div>
      {isLoggedIn ? (
        <h2>Welcome Back!</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
    </>
    
  );
};

export default Status;
