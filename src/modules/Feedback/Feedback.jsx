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
    <section className={s.section}>
      <Container>
        <h2>Feedback</h2>
        <Formik
          initialValues={{ name: '', email: '', message: '', agree: false }}
          validationSchema={FeedbackSchema}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
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
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className={s.error} />
              </label>

              <label>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </label>

              <label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
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
                I agree to the privacy policy
                <ErrorMessage
                  name="agree"
                  component="div"
                  className={s.error}
                />
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>

              {status?.success && <p className={s.success}>{status.success}</p>}
              {status?.error && <p className={s.error}>{status.error}</p>}
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
}
