import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css";
import * as Yup from "yup";



const UserSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Your name is too Short!')
        .max(50, 'Your name is too Long!')
        .required('This field is required'),
    number: Yup.string()
        .min(2, 'Your number is too Short!')
        .max(25, 'Your number is too Long!')
        .required('This field is required'),
});

const ContactFrom = () => {

  

    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    number: "",
                }}
                onSubmit={0}
                validationSchema={UserSchema}
            >
                <Form>
                    <div className={css.form}>
                        <div className={css.formList}>
                            <div className={css.formItem}>
                                <label className={css.label}>Name</label>
                                <Field type="text" name="username" className={css.input} />
                            </div>
                            <div className={css.formItem}>
                                <label className={css.label}>Number</label>
                                <Field type="text" name="number" className={css.input} />
                            </div>
                        </div>
                        <button className={css.submitBtn} type="submit">Add contact</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default ContactFrom