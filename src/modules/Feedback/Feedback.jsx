'use client';
import Container from '@/shared/container/Container';
import s from './Feedback.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { sendFeedback } from '@/services/api';
import Button from '@/shared/components/button/Button';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(5, 'Message must be at least 5 characters long')
    .required('Message is required'),
  agree: Yup.boolean()
    .oneOf([true], 'You must agree to the privacy policy')
    .required('Agreement is required'),
});

export default function ContactSection() {
  return (
    <section id="contact" className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.stepsContainer}>
            <span className={s.spanInfo}>Форма</span>
          </div>

          <h2 className={s.title}>
            Залиште заявку — і я зв'яжусь з вами найближчим часом
          </h2>
          <div className={s.containerForm}>
            <Formik
              initialValues={{ name: '', email: '', message: '', agree: false }}
              validationSchema={FeedbackSchema}
              validateOnMount
              onSubmit={async (
                values,
                { setSubmitting, resetForm, setStatus }
              ) => {
                try {
                  const res = await sendFeedback(values);
                  setStatus({ success: res.message });
                  resetForm();
                } catch (error) {
                  setStatus({ error: error.message });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, status, isValid }) => (
                <Form className={s.form}>
                  <div className={s.containerItem}>
                    <label className={s.inputLabel}>
                      <span className={s.spanInfoInput}>Ім’я</span>
                      <div className={s.inputWrapper}>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Ваше ім’я"
                          className={s.input}
                        />
                      </div>
                      <div className={s.error}>
                        <ErrorMessage name="name" />
                      </div>
                    </label>

                    <label className={s.inputLabel}>
                      <span className={s.spanInfoInput}>Електронна адреса</span>
                      <div className={s.inputWrapper}>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Електронна адреса"
                          className={s.input}
                        />
                      </div>
                      <div className={s.error}>
                        <ErrorMessage name="email" />
                      </div>
                    </label>
                  </div>

                  <label className={s.inputLabelText}>
                    <span className={s.spanInfoInput}>Текст</span>
                    <div className={s.inputWrapperText}>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Текст"
                        className={s.textInput}
                      />
                    </div>
                    <div className={s.error}>
                      <ErrorMessage name="message" />
                    </div>
                  </label>

                  <label className={s.checkboxLabel}>
                    <div className={s.checkboxWrapper}>
                      <Field
                        type="checkbox"
                        name="agree"
                        className={s.checkbox}
                      />
                      <span className={s.customCheckbox} />
                      <span className={s.checkboxText}>
                        Я погоджуюся з умовами конфіденційності
                      </span>
                    </div>

                    <div className={s.error}>
                      <ErrorMessage name="agree" />
                    </div>
                  </label>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant={isValid ? 'variant9' : 'variant8'}
                  >
                    Надіслати
                  </Button>

                  {status?.success && (
                    <p className={s.success}>{status.success}</p>
                  )}
                  {status?.error && <p className={s.error}>{status.error}</p>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </section>
  );
}
