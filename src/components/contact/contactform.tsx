import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("xwkgdpyg");

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email" className='text-black'> Adresse Email</label>
      <input id="email" type="email" name="email" className='inputColor' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className='text-black'>Message</label>
      <textarea id="message" name="message" className='inputColor'/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>

      {state.succeeded && <p>Merci!</p>}
    </form>
  );
};

export default FormContact;