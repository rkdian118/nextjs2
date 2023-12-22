/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// material-ui
import { Button, Grid, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import axiosServices from 'utils/axiosApi';

/**
 * 'Enter your user_email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  name: yup.string().min(5).max(50).required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  message: yup.string().min(10).max(250).required('Message is required')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const ContactForm = ({ blogId }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      user_phone: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Validate the form before making the API call
        await validationSchema.validate(values, { abortEarly: false });
        values.blog = blogId;
        // Make the API call
        const response = await axiosServices.post('api/contact-us/add', values);

        if (response.data.succeeded) {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Submit Success',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
          resetForm();
        }
      } catch (error) {
        console.log(error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
          error.errors.forEach((validationError) => {
            dispatch(
              openSnackbar({
                open: true,
                message: validationError,
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: false
              })
            );
          });
        } else {
          // Handle other errors
          dispatch(
            openSnackbar({
              open: true,
              message: 'An error occurred while submitting the form',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <MainCard>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="message"
              name="message"
              label="message"
              type="text"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <AnimateButton>
                <Button variant="contained" type="submit">
                  Verify & Submit
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default ContactForm;
