// src/routes/contact.jsx

import React from 'react'
import useContactForm from 'hooks/useContactForm';

import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Label from 'components/common/Label';

const Contact = () => {

  // onSubmit関数をuseContactFormから受け取る
  const { register, handleSubmit, reset, errors } = useContactForm();

  return (
    <div className='max-w-[800px] mx-auto py-10'>
      <h1 className='text-xl font-bold mb-10'>問合わせフォーム</h1>
      <form onSubmit={handleSubmit}>

        <div className='flex justify-between items-center mb-6'>
          <Label htmlFor="name" className='w-[240px]' text="お名前" />
          <div className='w-full'>
            <Input
              id="name"
              type="text"
              {...register("name")}
              error={errors.name}
              className="border border-gray-300 rounded-lg p-4 w-full"
            />
          </div>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <Label htmlFor="email" className='w-[240px]' text="メールアドレス" />
          <div className='w-full'>
            <Input
              id="email"
              type="email"
              {...register("email")}
              error={errors.email}
              className="border border-gray-300 rounded-lg p-4 w-full"
            />
          </div>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <Label htmlFor="textarea" className='w-[240px]' text="本文" />
          <div className='w-full'>
            <Textarea
              id="textarea"
              {...register("textarea")}
              error={errors.textarea}
              className="w-full border border-gray-300 rounded-lg p-4"
            />
          </div>
        </div>

        <div className='flex justify-center mt-10'>
          <Button
            label="送信"
            type="submit"
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
          />
          <Button
            label="クリア"
            type="button"
            className="bg-gray-200 font-bold py-2 px-4 rounded-lg"
            onClick={() => reset()}
          />
        </div>

      </form>
    </div>
  )
}

export default Contact
