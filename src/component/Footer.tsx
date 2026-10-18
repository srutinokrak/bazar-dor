import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-20  w-full border-t border-[#e4ebe5] bg-[#f8faf8] '>
               <div className='mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs font-bold leading-5 text-[#34423a] sm:flex-row sm:items-center sm:justify-between sm:px-6'>
             <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
             <p>“সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”</p>
        </div>
           </footer>
    );
};

export default Footer;