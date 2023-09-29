import React from 'react';


function SummaryPage({ summary }) {
  return (
    <div>
      <h2>Job Submitted Summary</h2>
      <p>First Name: {summary.firstName}</p>
      <p>Last Name: {summary.lastName}</p>
     
    </div>
  );
}

export default SummaryPage;