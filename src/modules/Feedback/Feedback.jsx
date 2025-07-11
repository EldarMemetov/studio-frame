'use client';
import Container from '@/shared/container/Container';
import s from './Feedback.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { sendFeedback } from '@/services/api';

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
          <Formik
            initialValues={{ name: '', email: '', message: '', agree: false }}
            validationSchema={FeedbackSchema}
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
            {({ isSubmitting, status }) => (
              <Form className={s.form}>
                <label>
                  <span>Ім’я</span>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Електронна адреса"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label>
                  <span>Електронна адреса</span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label>
                  <span>Текст</span>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Текст"
                    rows={4}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={s.error}
                  />
                </label>

                <label className={s.checkboxLabel}>
                  <Field type="checkbox" name="agree" />
                  Я погоджуюся з умовами конфіденційності
                  <ErrorMessage
                    name="agree"
                    component="div"
                    className={s.error}
                  />
                </label>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </button>

                {status?.success && (
                  <p className={s.success}>{status.success}</p>
                )}
                {status?.error && <p className={s.error}>{status.error}</p>}
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </section>
  );
}
