// src/routes/contact.jsx

import React from 'react'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from "axios";
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';

const schema = z.object({
  name: z.string().min(1, "お名前は必須です。").max(30, { message: 'お名前は30文字以内で入力してください。' }),
  email: z.string().min(1, "メールアドレスは必須です。").email({ message: 'メールアドレスの形式ではありません。' }),
  textarea: z.string().min(1, "本文は必須です。").max(500, { message: '本文は500文字以内で入力してください。' }),
});

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: 'onSubmit'
  });

  const onSubmit = async (data) => {
    try {
      const requestURL = "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts";
      const response = await axios.post(requestURL, {
        name: data.name,
        mail: data.email,
        message: data.textarea
      })

      console.log(response);
      if (response.status === 200) {
        window.alert("送信しました");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='max-w-[800px] mx-auto py-10'>
      <h1 className='text-xl font-bold mb-10'>問合わせフォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='flex justify-between items-center mb-6'>
          <label htmlFor="name" className='w-[240px]'>お名前</label>
          <div className='w-full'>
            <Input
              id="name"
              type="text"
              register={register}
              errors={errors.name}
              className="border border-gray-300 rounded-lg p-4 w-full"
            />
          </div>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <label htmlFor="name" className='w-[240px]'>メールアドレス</label>
          <div className='w-full'>
            <Input
              id="email"
              type="email"
              register={register}
              errors={errors.email}
              className="border border-gray-300 rounded-lg p-4 w-full"
            />
          </div>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <label htmlFor="textarea" className='w-[240px]'>本文</label>
          <div className='w-full'> {/* Textareaとエラーメッセージ用の新しいコンテナ */}
            <Textarea
              id="textarea"
              register={register}
              errors={errors.textarea}
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
    </div >
  )
}

export default Contact