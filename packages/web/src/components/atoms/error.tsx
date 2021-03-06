import { FormikContextType } from 'formik';

type ErrorProps = {
  name?: string;
  formik?: FormikContextType<any>;
  message?: string;
};

const Error: React.FC<ErrorProps> = ({ formik, name, message }) => {
  if ((name && formik?.errors[name] && formik?.touched[name]) || message)
    return (
      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p>{name ? formik?.errors[name] : message}</p>
      </div>
    );

  return null;
};

export default Error;
