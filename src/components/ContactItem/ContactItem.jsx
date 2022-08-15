import { useForm } from 'react-hook-form';
import BorderGradient from '../BorderGradient/BorderGradient';
import MainButton from '../MainButton/MainButton';
import './ContactItem.scss';
export default function ContactItem() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleForm = (e) => {
        if (e) {
            alert('Gửi thành công!');
        }
    };
    return (
        <div className='contact-item'>
            <div className="contact-item__title">
                <p>
                    Để lại lời nhắn, góp ý để chúng tôi xây dựng ngày
                    <span>
                        càng hoàn thiện hơn
                    </span>
                </p>
            </div>
            <div className="contact-item__form">
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className='input'>
                        <input type="text" placeholder='Họ và tên' {...register('name', { required: 'Vui lòng nhập trường này!' })} />
                        {errors?.name && <p className='error'>{errors.name.message}</p>}
                        <BorderGradient />
                    </div>
                    <div className='input --wrap'>
                        <div className="left">
                            <input type="text" placeholder='Email'
                                {...register('email', { required: 'Vui lòng nhập trường này!', pattern: { value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email không hợp lệ!' } })}
                            />
                            {errors?.email && <p className='error'>{errors.email.message}</p>}
                            <BorderGradient />
                        </div>
                        <div className="right">
                            <input type="number" placeholder='Số điện thoại'   {...register('phone', {
                                required: 'Vui lòng nhập trường này!', minLength: {
                                    value: 10, message: 'Số điện thoại không hợp lệ'
                                },
                                maxLength: {
                                    value: 11, message: 'Số điện thoại không hợp lệ'
                                }
                            })} />
                            {errors?.phone && <p className='error'>{errors.phone.message}</p>}
                            <BorderGradient />
                        </div>
                    </div>
                    <div className='input --textarea'>
                        <textarea placeholder='Lời nhắn'    {...register('message', { required: 'Vui lòng nhập trường này!' })}></textarea>
                        {errors?.message && <p className='error'>{errors.message.message}</p>}
                        <BorderGradient />
                    </div>
                    <div className="button">
                        <button>  <MainButton>Gửi đi</MainButton></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
