// src/hooks/useContactForm.js
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios, { AxiosResponse } from "axios";
import { SubmitData } from 'types/formTypes';

const schema = z.object({
  name: z.string().min(1, "お名前は必須です。").max(30, { message: 'お名前は30文字以内で入力してください。' }),
  email: z.string().min(1, "メールアドレスは必須です。").email({ message: 'メールアドレスの形式ではありません。' }),
  textarea: z.string().min(1, "本文は必須です。").max(500, { message: '本文は500文字以内で入力してください。' }),
});

const useContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SubmitData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit'
  });

  const onSubmit = async (data: SubmitData) => {
    try {
      const requestURL = "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts";
      const response: AxiosResponse = await axios.post(requestURL, {
        name: data.name,
        mail: data.email,
        message: data.textarea
      });
      console.log(response);
      if (response.status === 200) {
        window.alert("送信しました");
        reset();
      }  
  
    } catch (error) {
        console.error(error)
      }
    }

  return { 
    register,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    errors,
    isSubmitting
  };

}

export default useContactForm
