import classes from './Loader.module.css';

const Loader = ({isEmpty, isLoading, label, children}) => {
  if (isLoading) {
    return <p className={classes['fallback-text']}>Loading...</p>
  }
  
  if (!isLoading && isEmpty) {
    return <p className={classes['fallback-text']}>{label} </p>
  }

  if (!isLoading && !isEmpty) {
    return <>{children}</>
  }

  // return (
  //   <>
  //     {isLoading && (
  //       <p className={classes['fallback-text']}>Loading...</p>
  //     )}
  //     {!isLoading && isEmpty && (
  //       <p className={classes['fallback-text']}>{label} </p>
  //     )}
  //     {!isLoading && !isEmpty && children}
  //   </>
  // );
};

export default Loader;
