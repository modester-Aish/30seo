'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
const ContactMain = () => {
  const form = useRef();

  const openWhatsApp = () => {
    try {
      const name = form?.current?.querySelector('#name')?.value || '';
      const email = form?.current?.querySelector('#email')?.value || '';
      const subject = form?.current?.querySelector('#subject')?.value || '';
      const message = form?.current?.querySelector('#massage')?.value || '';
      const composed = `New inquiry from website:%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
      const phone = '15205636362';
      const url = `https://wa.me/${phone}?text=${composed}`;
      window.open(url, '_blank');
    } catch (e) {
      window.open('https://wa.me/15205636362', '_blank');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        '**********', //YOUR_SERVICE_ID
        '**********', //YOUR_TEMPLATE_ID
        form.current,
        '**********', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Massage Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Massage Not Sent!');
          }
        },
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <>
        {/* contact area start */}
        <div className="contact-area pd-top-120 pd-bottom-120">
          <div className="container">
            <div className="contact-page-inner bg-gray">
              <div className="section-title mb-4 pb-2">
                <h2 className="title">Contact Us</h2>
                <p className="content mb-0">24/7 Support Available</p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter Your Name."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Enter Your Email."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Your Subject."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        name="message"
                        id="massage"
                        cols="1"
                        rows="5"
                        placeholder="Enter Your Massage ..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="btn btn-base border-radius-5"
                    >
                      Send to WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* contact area end */}
        {/* contact list start */}
        <div className="contact-page-list">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/13.svg" alt="Phone" />
                  </div>
                  <div className="media-body">
                    <h5>Phone</h5>
                    <h6>+1 (520) 563‑6362</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/14.svg" alt="Email" />
                  </div>
                  <div className="media-body">
                    <h5>Email</h5>
                    <h6>admin@groupbuyseotool.us</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="media single-contact-list">
                  <div className="media-left">
                    <img src="assets/img/icon/15.svg" alt="Support" />
                  </div>
                  <div className="media-body">
                    <h5>Support</h5>
                    <h6>seogroupbuy.support</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact list start */}
        
      </>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
