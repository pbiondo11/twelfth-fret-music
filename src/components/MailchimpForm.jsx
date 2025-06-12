import React from 'react';

const MailchimpForm = () => {
  return (
    <div className="mailchimp-form-container">
      <h2>Be the First to Know — Subscribe Now</h2>
      <form
        className="mailchimp-form"
        action="https://gmail.us5.list-manage.com/subscribe/post?u=1f156f9cfd6f853fbc97b6a71&id=03a4d24651&f_id=00f28ee9f0"
        method="POST"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Email address"
          required
          autoComplete="email"
        />
        <input
          type="text"
          name="FNAME"
          placeholder="First name"
          required
          autoComplete="given-name"
        />
        <input
          type="text"
          name="LNAME"
          placeholder="Last name (optional)"
          autoComplete="family-name"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default MailchimpForm;
