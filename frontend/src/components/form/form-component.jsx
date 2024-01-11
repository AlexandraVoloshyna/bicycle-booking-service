import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './form.module.css'
import { useAddOneMutation } from '../../redux/apiSlice';
import { toast } from 'react-toastify';

function Form () {
  const [create] = useAddOneMutation()
  const formik = useFormik({
    initialValues: {
      name: '',
      color: '',
      price: 0,
      type: '',
      slug: '',
      size: 0,
      description: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be at least 5 characters long')
        .required('Required'),
      color: Yup.string()
        .min(5, 'Must be at least 5 characters long ')
        .required('Required'),
      price: Yup.number('Enter a valid number').positive().required('Required'),
      type: Yup.string()
        .min(5, 'Must be at least 5 characters long ')
        .required('Required'),
      size: Yup.number('Enter a valid number').positive().required('Required'),
      slug: Yup.string()
        .min(5, 'Must be at least 5 characters long')
        .required('Required'),
      description: Yup.string()
        .min(5, 'Must be at least 5 characters long')
        .required('Required'),
    }),
    onSubmit: async (values, { resetForm } ) => {
      try {
        await create({...values}).unwrap();
        resetForm();

      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form} >
      <div className={styles['input-group']}>
        <input 
          className={styles['input-control']}
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <input 
          className={styles['input-control']}
          type="text"
          name="color"
          onChange={formik.handleChange}
          value={formik.values.color}
          placeholder="Color"
        />
        {formik.touched.color && formik.errors.color ? (
          <div className={styles.error}>{formik.errors.color}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <input
          className={styles['input-control']}   
          type="number"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
          placeholder="Price"
        />
        {formik.touched.price && formik.errors.price ? (
          <div className={styles.error}>{formik.errors.price}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <input 
          className={styles['input-control']}
          type="text" 
          name="type"
          onChange={formik.handleChange}
          value={formik.values.type}
          placeholder="Type"
        />
        {formik.touched.type && formik.errors.type ? (
          <div className={styles.error}>{formik.errors.type}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <input
          className={styles['input-control']}   
          type="number"
          name="size"
          onChange={formik.handleChange}
          value={formik.values.size}
          placeholder="Wheel size"
        />
        {formik.touched.size && formik.errors.size ? (
          <div className={styles.error}>{formik.errors.size}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <input
          className={styles['input-control']}
          type="text"
          name="slug"
          onChange={formik.handleChange}
          value={formik.values.slug}
          placeholder="ID (slug): ХХХХХХХХХХХХХ"
        />
        {formik.touched.slug && formik.errors.slug ? (
          <div className={styles.error}>{formik.errors.slug}</div>
        ) : null}
      </div>
      <div className={styles['input-group']}>
        <textarea 
          className={`${styles['input-control']} ${styles.textarea}`}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder="Description"
        />
        {formik.touched.description && formik.errors.description ? (
          <div className={styles.error}>{formik.errors.description}</div>
        ) : null}
      </div>
      <button type="submit" className={styles['form-btn']}>save</button>
      <button type="button" className={styles['form-btn']} onClick={()=>formik.resetForm()} >clear</button>
    </form>
  )
}

export default Form
