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
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  user_name: yup.string().min(5).max(50).required('Name is required'),
  user_email: yup.string().email('Enter a valid email').required('Email is required'),
  user_phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
  comment: yup.string().min(10).max(250).required('Comment is required')
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK ||============================== //

const CommentSection = ({ blogId }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      comment: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Validate the form before making the API call
        await validationSchema.validate(values, { abortEarly: false });
        values.blog = blogId;
        // Make the API call
        const response = await axiosServices.post('api/comment/add', values);

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
        if (error.user_name === 'ValidationError') {
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
    <MainCard title="Leave a Comment:">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="user_name"
              name="user_name"
              label="name"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              error={formik.touched.user_name && Boolean(formik.errors.user_name)}
              helperText={formik.touched.user_name && formik.errors.user_name}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="user_email"
              name="user_email"
              label="email"
              type="text"
              value={formik.values.user_email}
              onChange={formik.handleChange}
              error={formik.touched.user_email && Boolean(formik.errors.user_email)}
              helperText={formik.touched.user_email && formik.errors.user_email}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="user_phone"
              name="user_phone"
              label="phone"
              type="text"
              value={formik.values.user_phone}
              onChange={formik.handleChange}
              error={formik.touched.user_phone && Boolean(formik.errors.user_phone)}
              helperText={formik.touched.user_phone && formik.errors.user_phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              id="comment"
              name="comment"
              label="comment"
              type="text"
              value={formik.values.comment}
              onChange={formik.handleChange}
              error={formik.touched.comment && Boolean(formik.errors.comment)}
              helperText={formik.touched.comment && formik.errors.comment}
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

export default CommentSection;
