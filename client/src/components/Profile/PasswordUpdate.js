import React from 'react';
import styles from './Profile.module.scss'
import {SlTrash} from "react-icons/sl"
import { useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../Profile/InputProfile';




function PasswordUpdate() {

  const customer = useSelector((state) => state.store.user).data

  
    return (
      <>
    <Formik
        initialValues={{
          password: '',
          newPassword: '',
          updatePassword: ''         
        }}
        // onSubmit={handleSubmit}
        validationSchema={Yup.object({          
          password: Yup.string()
            .matches(
              /^[a-zA-Z0-9]+$/,
              'Allowed characters for password are a-z, A-Z, 0-9.'
            )
            .required('Password is required')
            .max(30, 'Password must be between 7 and 30 characters')
            .min(7, 'Password must be between 7 and 30 characters'),
          newPassword: Yup.string()
            .matches(
              /^[a-zA-Z0-9]+$/,
              'Allowed characters for password are a-z, A-Z, 0-9.'
            )
            .required('Password is required')
            .max(30, 'Password must be between 7 and 30 characters')
            .min(7, 'Password must be between 7 and 30 characters'),
          updatePassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Password is required')
          
        })}
      >
        <Form className={styles.profile} noValidate>
          <div className={styles.profile__container}>                
            <div className={styles.profile__content}>
                <h3 className={styles.profile__title}>Изменение пароля</h3>
                <p className={styles.profile__title}>Тукущий пароль</p>
                <Field
                    className={styles.profile__input}
                    type="password"
                    placeholder="password"
                    name="password"
                    component={Input}           
                />
                <p className={styles.profile__title}>Новый пароль</p>
                <Field
                    defaultValue={customer.password} 
                    className={styles.profile__input}
                    type="password"
                    placeholder="password"
                    name="newPassword"
                    component={Input}           
                />
                <p className={styles.profile__title}>Подтвердите пароль</p>
                <Field
                    defaultValue={customer.password} 
                    className={styles.profile__input}
                    type="password"
                    placeholder="password"
                    name="updatePassword"
                    component={Input}           
                />
                <button className={styles.profile__btn2} type="submit">
              Send
            </button>
            <h3 className={styles.profile__title}>Удалить профиль</h3>
            <p className={styles.profile__remove}><span><SlTrash/></span>Удалить профиль</p>                                
            </div>
            </div>   
        </Form>        
      </Formik>
      </>
       
    );
}

export default PasswordUpdate;