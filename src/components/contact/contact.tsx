"use client";
import React from 'react';
import FormContact from './contactform';
import "./contact.css";

const ContactPage: React.FC = () => {
    return (
        
            <div className="contactCase" >
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ">Contactez-nous</h2>
                <p className="text-gray-100 md:text-lg lg:text-xl p-10">
                    Vous avez un projet de construction ou de rénovation ? Remplissez le formulaire ci-dessous pour obtenir un devis gratuit.
                </p>
                <FormContact />
            </div>
      
    );
};

export default ContactPage;