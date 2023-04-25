import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import '../Css Files/ContactUs.css';

function ContactUs() {
  return (
  <div className="Page">
    <div className='About'>
    <div className='Aimg'></div>
        <div className='Abox'>
        <div className="Aheading">

            About Us

        </div>

        <div className="Adata">

          ElectronicsEngine.com is a place where’s consumers directly buy goods or services from a seller in real-time,
          without intermediary services and charges, over the internet. It is a form of electronic commerce.
          This Web Application is an attempt to provide the advantages of online shopping to customers of a real shop.
          It helps to buy the products in the shop anywhere through the internet by using android and another device.
          Thus, the customer will get the services of online shopping and home delivery from his favourite shop and without
          the hustle of visiting the offline/actual shop and hence ultimately saving a lot of time an energy.
            
        </div>
        </div></div>


<div className='Contact'>
<div className='Cbox'>
<div className="Cheading">

    Contact Us

</div>

<div className="Cdata">

<label><RoomIcon fontSize='medium' /> : CD-4, Power House Colony, Punjabi Bagh, Old Rohtak Road, Delhi-110035</label>
      <label><CallIcon fontSize='medium'/> : 9230293023, 9090920313</label>
      <label><AlternateEmailIcon fontSize='medium'/> : adityakakarot45@gmail.com</label>
    
</div>
</div>

<div className='Cimg'></div>

</div>
    
</div>)
}

export default ContactUs